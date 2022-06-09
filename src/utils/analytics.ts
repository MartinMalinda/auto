let createdGA = false
let createdFB = false
// const FB_PIXEL_DEVEL = '1929889830539226'
const FB_PIXEL_PRODUCTION = '603747997369094'
const GA_ID = 'UA-190119161-1'

function addScriptViaTag(src: string) {
  if (document.querySelector(`script[src='${src}']`))
    return Promise.resolve()

  const scriptEl = document.createElement('script')
  scriptEl.setAttribute('src', src)
  document.body.appendChild(scriptEl)
  return new Promise((resolve, reject) => { scriptEl.onload = resolve; scriptEl.onerror = reject })
}

export const timeout = (time: number) => new Promise(resolve => setTimeout(resolve, time))

export const raf = () =>
  new Promise(resolve => window.requestAnimationFrame(resolve))

export function onIdle(cb: () => void) {
  if ((window as any).requestIdleCallback) {
    (window as any).requestIdleCallback(cb)
    return
  }

  window.setTimeout(cb, 1000)
}

export function waitForIdle() {
  return new Promise(resolve => onIdle(() => resolve(true)))
}

async function setupGA() {
  await waitForIdle()
  await addScriptViaTag('https://www.google-analytics.com/analytics.js')
  if (!createdGA && (window as any).ga) {
    await timeout(4000);
    (window as any).ga('create', GA_ID, 'auto')
    createdGA = true
  }
}

async function setupFB() {
  await waitForIdle()
  /* eslint-disable */
  if (!(window as any).fbq) {
    function setupFbq(f) {
      const n: any = f.fbq = function () {
        n.callMethod ?
          n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = '2.0';
      n.queue = [];
    }
    /* eslint-enable */
    setupFbq(window)
  }
  if (!createdFB && (window as any).fbq) {
    await timeout(4000)
    await addScriptViaTag('https://connect.facebook.net/en_US/fbevents.js');
    (window as any).fbq('init', FB_PIXEL_PRODUCTION)
    createdFB = true
  }
}

export async function sendPageView() {
  await Promise.all([setupGA(), setupFB()])
  const fullPath
    = window.location.pathname + window.location.search + window.location.hash

  if ((window as any).ga) {
    // perhaps adblock didn't allow to load GA
    (window as any).ga('set', 'page', fullPath);
    (window as any).ga('send', 'pageview')
  }
}

interface AnalyticsEvents {
  media:
  | 'media_player_play'
  | 'media_player_pause'
  | 'media_player_move_left'
  | 'media_player_fullscreen_toggle'
  | 'media_player_volume_change'
  | 'media_player_playbackrate_change'
  | 'image_viewer_opened'
  | 'media_player_volume_toggle'
  subscriptions:
  | 'subscription_init'
  | 'subscription_init_login'
  | 'subscription_success'
  | 'unsubscribe_init'
  | 'unsubscribe_success'
  | 'resubscribe_init'
  | 'resubscribe_success'
  | 'subscription_success_invite'
  search: 'search_result'
  ui: any // infinite_scroll_page_loaded_X,
  create:
  | 'file_selected'
  | 'post_created'
  | 'file_uploaded'
  | 'file_removed'
  | 'file_upload_recovery'
  | 'unfinished_upload_info'
  | 'upload_abort_modal_alert'
  | 'upload_abort_success'
  | 'upload_abort_window_close_info'
  users: 'signup'
  comments: 'comment_created'
  posts: 'post_delete_success' | 'post_edit_success'
  stripe: 'stripe_connect_fail' | 'stripe_connect_success'
  messaging:
  | 'message_created'
  | 'message_fail'
  | 'message_retry'
  | 'new_message_thread'
}

export async function sendEvent<T extends keyof AnalyticsEvents>(data: {
  category: T
  action: AnalyticsEvents[T]
  label: string
  value?: number
}) {
  await Promise.all([setupGA(), setupFB()])

  if ((window as any).ga) {
    // perhaps adblock didn't allow to load GA
    (window as any).ga('send', {
      hitType: 'event',
      eventCategory: data.category,
      eventAction: data.action,
      eventLabel: data.label,
      eventValue: data.value,
    })
  }

  if ((window as any).fbq)
    (window as any).fbq('trackCustom', data.action, data.label)
}

interface FacebookEvents {
  Subscribe: {
    subscription_id: string
    value: number
    currency: string
  }
  Purchase: {
    currency: string
    value: number
    content_ids?: string
  }
  InitiateCheckout: {
    content_category?: string
    content_ids?: string[]
    currency?: string
    value?: number
  }
  Search: {
    content_category?: string
    content_ids?: string[]
    search_string: string
  }
  ViewContent: {
    content_ids?: string[]
    content_name?: string
    content_type: string
    currency?: string
    value?: number
  }
}
export async function sendFacebookEvent<T extends keyof FacebookEvents>(eventName: T, data: FacebookEvents[T], user?: User) {
  await setupFB()
  if ((window as any).fbq)
    (window as any).fbq('track', eventName, data)
}

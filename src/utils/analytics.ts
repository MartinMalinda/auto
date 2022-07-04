let createdGA = false;
const GA_ID = 'UA-58342270-3';

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

  setTimeout(cb, 1000)
}

export function waitForIdle() {
  return new Promise(resolve => onIdle(() => resolve(true)))
}

async function setupGA() {
  await waitForIdle()
  await addScriptViaTag('https://www.google-analytics.com/analytics.js')
  if (!createdGA && (window as any).ga) {
    await timeout(4000);
    (window as any).ga('create', GA_ID, {
      storage: 'none'
    });
    createdGA = true
  }
}

export async function sendPageView() {
  await Promise.all([setupGA()])
  const fullPath
    = window.location.pathname + window.location.search + window.location.hash;

  if ((window as any).ga) {
    // perhaps adblock didn't allow to load GA
    (window as any).ga('set', 'page', fullPath);
    (window as any).ga('send', 'pageview');
  }
}

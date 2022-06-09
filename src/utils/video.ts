
export function isSafari() {
  return navigator.userAgent.includes('Safari') && !navigator.userAgent.includes('Chrome');
}

export function isIOS() {
  return navigator.userAgent.includes('iPhone') || 
  navigator.userAgent.includes('iPad');
}


export function waitUntil(cb, checkInterval = 100) {
  return new Promise(resolve => {
    const checkAndResolve = () => {
      if (cb()) {
        resolve(true);
      } else {
        setTimeout(checkAndResolve, checkInterval);
      }
    };
    checkAndResolve();
  });
}

export function waitUntilCanPlay(videoEl: HTMLMediaElement) {
  return new Promise((resolve) => {
    // on iOS theres no canPlay or canPlayThrough so wait until theres at least two seconds of content
    if (isIOS()) {
      waitUntil(() => {
        if (!videoEl.buffered.length) {
          return false;
        }

        return videoEl.buffered.end(0) - videoEl.buffered.start(0) > 2;
      }).then(resolve);

      return;
    }
    
    // otherwise use a specialized event
    let eventName = isSafari() ? "canplaythrough" : "canplay";
    videoEl.addEventListener(eventName, resolve, {
      once: true,
      passive: true,
    });
  });
}

import { onMounted, Ref, ref, watchEffect } from 'vue';

interface Params {
  elRef: Ref<HTMLElement | undefined>,
  onEnter?: () => void,
  onLeave?: () => void,
  threshold?: number,
  rootMargin?: string,
};
export const useIntersectionObserver = ({ onEnter, onLeave, elRef, threshold, rootMargin }: Params) => {
  let options = {
    root: null,
    rootMargin: rootMargin || '0px',
    threshold: threshold || 0.4
  }

  const isVisible = ref(false);
  onMounted(() => {
    let observer = new IntersectionObserver(([entry]) => {
      isVisible.value = entry.isIntersecting;
      if (entry.isIntersecting) {
        onEnter && onEnter();
        isVisible.value = true;
      } else {
        isVisible.value = false;
        onLeave && onLeave();
      }
    }, options);
    observer.observe(elRef.value as HTMLElement);
  });

  return { isVisible };
};

export function waitUntilTruthy(val: Ref<any>) {
  return new Promise(resolve => {
    if (val.value) {
      resolve(true);
    } else {
      watchEffect(() => {
        if (val.value) {
          resolve(true);
        }
      });
    }
  });
}

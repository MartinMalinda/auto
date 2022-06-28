<script setup lang="ts">
import { defineAsyncComponent, onMounted, ref } from '@vue/runtime-dom';
import { useI18n } from 'vue-i18n';
import { addDotToCurve, createDot } from '~/utils/schema';

let isAnimating = false;

const { t } = useI18n();
const timeout = (time: number) => new Promise((resolve) => setTimeout(resolve, time));
const waitForAnimation = (el: Element) => new Promise(resolve => {
  el.addEventListener('animationend', resolve);
  el.addEventListener('transitionend', resolve)
});


const FlowSVGMobile = defineAsyncComponent(() => import('~/components/FlowSVGMobile.vue'))
const FlowSVG = defineAsyncComponent(() => import('~/components/FlowSVG.vue'))
const isMobile = ref(false);
const setIsMobile = () => {
  isMobile.value = window.innerWidth < 700;
};
onMounted(() => {
  setIsMobile();
  let animateTimer: any;
  window.addEventListener('resize', () => {
    const prev = isMobile.value;
    setIsMobile();
    if (isMobile.value !== prev) {
      isAnimating = false;
      clearTimeout(animateTimer);
      animateTimer = setTimeout(animate, 500);
    }
  });
});

let options = {
  root: null,
  rootMargin: '-300px 0px -200px 0px',
  threshold: 0.1
}

const isVisible = ref(false);
const elRef = ref<HTMLElement>();

const steps = [{
  animation: 'appear', // first circle + header
  duration: 'quick',
  delay: 0,
}, {
  animation: 'slide-down', // extra text
  duration: 'quick',
  delay: 300,
}, {
  animation: 'appear', // first arrow
  duration: 'long',
  delay: 200,
}, {
  animation: 'appear', // second circle + header
  duration: 'quick',
  delay: 0,
}, {
  animation: 'slide-down', // extra text
  duration: 'quick',
  delay: 300,
}, {
  animation: 'appear', // second arrow
  duration: 'long',
  delay: 200,
}, {
  animation: 'appear', // third circle + header
  duration: 'quick',
  delay: 0,
}, {
  animation: 'slide-down', // nothing?
  duration: 'quick',
  delay: 300,
}, {
  animation: 'slide-down', // extra test
  duration: 'long',
  delay: 0,
},
{
  animation: 'appear', // repeat arrow
  duration: 'long',
  delay: 200,
}];

const animate = async () => {
  if (isAnimating) {
    return;
  }

  let index = 0;
  const svgEl = document.querySelector('.process svg') as HTMLElement;
  const h2 = document.querySelector('.process h2') as HTMLElement;
  const pointsMap = new Map();

  if (window.innerWidth > 700) {
    await waitForAnimation(h2);
  }
  await timeout(500);
  isAnimating = true;

  for (let stepEl of Array.from(document.querySelectorAll('.step'))) {
    if (stepEl.tagName === 'circle') {
      requestAnimationFrame(() => {
        addDotToCurve(stepEl as SVGGeometryElement, {
          pointsMap,
          svgEl,
          speed: 12,
          once: true,
          onMove(point) {
            const dot = createDot({ r: 3, color: '#ccc', svgEl });
            dot.setAttribute("transform", `translate(${point.x}, ${point.y})`);
          },
          onFinish: (dot) => {
            dot.remove();
          }
        });
      });

      await timeout(150);
    }
  }

  await timeout(1000);

  while (steps[index]) {
    const step = steps[index];
    const elements = Array.from(document.querySelectorAll(`.step-${index + 1}`));
    const [firstEl] = elements;
    const [lastEl] = elements.reverse();
    if (firstEl) {
      const finalAnimPromise = waitForAnimation(lastEl);
      await timeout(step.delay);
      for (let [index, el] of elements.entries()) {
        requestAnimationFrame(() => el.classList.add(step.animation));
        if (index < elements.length) {
          await timeout(50);
        }
      }
      await finalAnimPromise;
    }

    index++;
  }
};

onMounted(() => {
  let observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      isVisible.value = true;
      animate();
    }
  }, options);
  observer.observe(elRef.value as HTMLElement);
});

</script>
<template>
  <div ref="elRef" class="process" :class="{ visible: isVisible }">
    <h2>{{ t('process.howCanIHelp') }}</h2>
    <component :is="isMobile ? FlowSVGMobile : FlowSVG" />
  </div>
</template>

<style lang="scss">
@keyframes appear-blur {
  0% {
    opacity: 0;
    filter: blur(8px);
  }

  100% {
    opacity: 1;
    filter: blur(0);
  }
}

@keyframes slide-from-up {
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}


.process {
  position: relative;
  width: 800px;
  max-width: 100%;
  flex-shrink: 0;


  svg {
    padding-top: 100px;
    width: 100%;
    transition: opacity 1s;
    transition-delay: 2s;


    .appear {
      animation: 0.3s appear-blur forwards;
    }

    .slide-down {
      animation: 0.6s slide-from-up forwards;
    }


    .step {
      opacity: 0;
    }
  }


  h2 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: top 1s, left 1s;
    transition-delay: 0.3s;
    opacity: 0;

    @media (max-width: 600px) {
      top: 0;
      left: 0;
      transform: none;
    }
  }

  &.visible {
    h2 {
      top: 0;
      left: 0;
      transform: translate(0, 0);
      opacity: 1;
    }
  }
}
</style>

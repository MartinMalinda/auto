<script setup lang="ts">
import { onMounted, ref } from '@vue/runtime-dom';
import FlowSVG from '~/components/FlowSVG.vue';
import { addDotToCurve, createDot } from '~/utils/schema';

const timeout = (time: number) => new Promise((resolve) => setTimeout(resolve, time));
const waitForAnimation = (el: Element) => new Promise(resolve =>
  el.addEventListener('animationend', resolve)
);

let options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.4
}

const isVisible = ref(false);
const elRef = ref<HTMLElement>();

const steps = [{
  animation: 'appear', // first circle + header
  duration: 'quick',
  delay: 0,
}, {
  animation: 'appear', // extra text
  duration: 'quick',
  delay: 400,
}, {
  animation: 'appear', // first arrow
  duration: 'long',
  delay: 600,
}, {
  animation: 'appear', // second circle + header
  duration: 'quick',
  delay: 0,
}, {
  animation: 'appear', // extra text
  duration: 'quick',
  delay: 400,
}, {
  animation: 'appear', // second arrow
  duration: 'long',
  delay: 600,
}, {
  animation: 'appear', // third circle + header
  duration: 'quick',
  delay: 0,
}, {
  animation: 'appear', // extra text
  duration: 'quick',
  delay: 400,
}, {
  animation: 'appear', // repeat arrow
  duration: 'long',
  delay: 0,
},
{
  animation: 'appear', // repeat arrow
  duration: 'long',
  delay: 600,
}]

const animate = async () => {
  let index = 0;
  const svgEl = document.querySelector('.process svg') as HTMLElement;
  const pointsMap = new Map();
  addDotToCurve(document.querySelector('.process circle') as SVGGeometryElement, {
    pointsMap,
    svgEl,
    speed: 1,
    onMove(point) {
      const dot = createDot({ r: 5, color: '#000', svgEl });
      dot.setAttribute("transform", `translate(${point.x}, ${point.y})`);
    },
    onFinish: (dot) => {
      dot.remove();
    }
  });
  document.querySelectorAll('.step').forEach(stepEl => {
    stepEl.classList.remove('appear');
    stepEl.classList.remove('slide-left');
    stepEl.classList.remove('slide-left');
    stepEl.classList.remove('quick');
    stepEl.classList.remove('long');
    waitForAnimation(stepEl).then(() => {
      console.log('finished', (stepEl.className as any).baseVal ? (stepEl.className as any).baseVal : stepEl.className);
    });
  });

  await timeout(1000);

  while (steps[index]) {
    const step = steps[index];
    const elements = Array.from(document.querySelectorAll(`.step-${index + 1}`));
    const [firstEl] = elements;
    if (firstEl) {
      await timeout(step.delay);
      elements.forEach((el) => el.classList.add(step.animation));
      await waitForAnimation(firstEl);
    }

    index++;
  }
};

onMounted(() => {
  let observer = new IntersectionObserver(([entry]) => {
    isVisible.value = entry.isIntersecting;
    if (entry.isIntersecting) {
      // animate();
    }
  }, options);
  observer.observe(elRef.value as HTMLElement);
});

</script>
<template>
  <div ref="elRef" class="process" :class="{ visible: isVisible }">
    <h2>How can I help?</h2>
    <FlowSVG />
  </div>
</template>

<style lang="scss">
@keyframes appear-blur {
  0% {
    opacity: 0;
    filter: blur(10px);
  }

  100% {
    opacity: 1;
    filter: blur(0);
  }
}

@keyframes slide-left {
  0% {
    opacity: 0;
    transform: translateX(0px) scale(0.7, 1)
  }

  100% {
    opacity: 1;
    transform: translateX(0) scale(1, 1)
  }
}

.appear {
  animation: 0.6s appear-blur forwards;
}

.slide-left {
  animation: 0.8s slide-left forwards;
}

.step {
  opacity: 0;
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
  }

  h2 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: top 1s, left 1s;
    transition-delay: 0.3s;
    opacity: 0;
  }

  &.visible {
    h2 {
      top: 0;
      left: 0;
      transform: translate(0, 0);
      opacity: 1;
    }

    svg {}
  }
}
</style>

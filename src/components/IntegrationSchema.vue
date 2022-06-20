<script setup lang="ts">
import { onMounted } from "vue";
import IntegrationSchemaSVG from "~/components/IntegrationSchemaSVG3.vue";
import { getCurves, addDotToCurve } from '~/utils/schema';

const MAX_DOTS = 15;

onMounted(() => {
  const curves = getCurves();
  const pointsMap = new Map();
  const svgEl = document.querySelector('.schema-svg') as HTMLElement;

  let interval = 600;
  curves.forEach(curve => {
    const add = () => {
      addDotToCurve(curve, { pointsMap, svgEl });
      setTimeout(add, interval);
    };
    const remove = () => {
      const circle = document.querySelector('.schema-svg circle:not(.hidden)');
      if (circle) {
        circle.classList.add('hidden');
        setTimeout(() => circle.remove(), 1000);
      }
    };
    setTimeout(add, interval);
    interval = interval + Math.random() * 1000;
    curve.addEventListener('click', () => addDotToCurve(curve, { pointsMap, svgEl }));

    // prevent too many dots
    setInterval(() => {
      const extra = document.querySelectorAll('.schema-svg circle:not(.hidden)').length - MAX_DOTS;
      if (extra > 0) {
        Array(extra).fill(0).forEach(remove);
      }

      if (Math.random() < 0.01) {
        remove();
      }
    }, 400);
  });
});
</script>
<template>
  <div class="schema">
    <IntegrationSchemaSVG />
  </div>
</template>
<style lang="scss">
.schema {
  margin-top: 50px;
  position: relative;

  svg {
    display: block;
    margin: 0 auto;
    max-height: calc(100vh - 300px);
    max-width: 100%;

    circle,
    .curve:hover {
      transition: 1s opacity;
      opacity: 1;
      -webkit-filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, .2));
      filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, .2));

      &.animated {
        opacity: 0;
        animation: 1s appear forwards;
      }

      &.hidden {
        opacity: 0 !important;
      }
    }
  }

  .photo-rect {
    fill: url(#profile);
  }

  .zapier {
    transition: 3s transform;

    &:hover {
      transform: scale(0.5) translate(50%, 50%);
      transform-origin: 0 60px;
    }
  }
}
</style>

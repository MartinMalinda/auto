<script setup lang="ts">
import { onMounted } from "vue";
import IntegrationSchemaSVG from "~/components/IntegrationSchemaSVG3.vue";
import { getCurves, getSortedDOMPoints, createDot } from '~/utils/schema';

onMounted(() => {
  const curves = getCurves();
  const addDotToCurve = (curve: SVGGeometryElement) => {
    const dot = createDot({ r: 5, color: '#2EB57C' });
    const points = getSortedDOMPoints(curve);

    let index = 0;
    let direction = 1;
    const run = () => {
      requestAnimationFrame(() => {
        const point = points[index];
        if (point) {

          dot.setAttribute("transform", `translate(${point.x}, ${point.y})`);
          index = index + direction;
          run();
        } else {
          direction = direction * -1;
          index = index + direction;
          setTimeout(run, Math.random() * 500);
        }
      });
    };

    run();
  };

  let interval = 600;
  curves.forEach(curve => {
    const add = () => {
      addDotToCurve(curve);
      setTimeout(add, interval);
    };
    const remove = () => {
      const circle = document.querySelector('circle:not(.hidden)');
      if (circle) {
        circle.classList.add('hidden');
        setTimeout(() => circle.remove(), 1000);
      }
    };
    setTimeout(add, interval);
    interval = interval + Math.random() * 1000;
    curve.addEventListener('click', () => addDotToCurve(curve));

    // prevent too many dots
    setInterval(() => {
      const extra = document.querySelectorAll('circle:not(.hidden)').length - 20;
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

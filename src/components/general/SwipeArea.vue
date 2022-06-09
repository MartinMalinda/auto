<script setup lang="ts">
import { defineProps, onMounted, ref } from "@vue/runtime-core";
import AlloyFinger from "alloyfinger";

const props = defineProps({
  onSwipeLeft: {
    type: Function,
    required: true,
  },
  onSwipeRight: {
    type: Function,
    required: true,
  },
});

const swipeAreaEl = ref<HTMLElement>();
const isDragging = ref(false);
onMounted(() => {
  new AlloyFinger(swipeAreaEl.value, {
    touchMove: (e) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY) || Math.abs(e.deltaX) > 5) {
        isDragging.value = true;
      }
    },
    touchEnd: (e) => {
      isDragging.value = false;
    },
    swipe: (event) => {
      if (event.direction === "Left") {
        props.onSwipeLeft();
      }

      if (event.direction === "Right") {
        props.onSwipeRight();
      }
    },
  });
});
</script>

<template>
  <div ref="swipeAreaEl" class="swipe-area" :class="{ dragging: isDragging }">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.swipe-area {
  touch-action: pan-y;
  transition: 1s opacity;

  &.dragging {
    touch-action: none;
    opacity: 0.2;
  }
}
</style>

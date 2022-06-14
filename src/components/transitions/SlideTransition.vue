<script lang="ts">
import { defineComponent } from "vue";

export enum TransitionDuration {
  Instant = "instant",
  Quick = "quick",
  Medium = "medium",
  Long = "long",
}

enum TransitionDirection {
  Up = "up",
  Down = "down",
  Left = "left",
  Right = "right",
}

export default defineComponent({
  props: {
    duration: {
      type: String as () => TransitionDuration,
      default: TransitionDuration.Quick,
    },

    direction: {
      type: String as () => TransitionDirection,
      default: TransitionDirection.Down,
    },
  },
});
</script>
<template>
  <transition
    :class="[duration, `direction-${direction}`]"
    name="slide"
    mode="out-in"
    appear
  >
    <slot />
  </transition>
</template>

<style lang="scss" scoped>
.slide-enter-active,
.slide-leave-active {
  animation-timing-function: linear !important;

  &.instant {
    animation-duration: 0;
  }

  &.quick {
    animation-duration: 0.1s;
  }

  &.medium {
    animation-duration: 2s;
  }

  &.long {
    animation-duration: 1s;
  }
}

.slide-enter-active {
  opacity: 0;
  &.direction-down {
    animation: slide-from-up 0.3s forwards;
  }

  &.direction-up {
    animation: slide-from-down 0.2s forwards;
  }

  &.direction-left {
    animation: slide-from-left-appear 0.2s forwards;
  }

  &.direction-right {
    animation: slide-from-right-appear 0.2s forwards;
  }

  animation-delay: 0.1s !important;
}

.slide-leave-active {
  // z-index: 100;
  &.direction-down {
    // animation: appear-in 0.2s reverse;
    animation: slide-down 0.4s forwards;
  }

  &.direction-up {
    animation: slide-up 0.4s forwards;
  }

  &.direction-right {
    animation: slide-to-left-disappear 0.2s forwards;
  }

  &.direction-left {
    animation: slide-to-right-disappear 0.2s forwards;
  }
}
</style>

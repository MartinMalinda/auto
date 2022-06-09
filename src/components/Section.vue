<script setup lang="ts">
import { defineProps } from "@vue/runtime-core";

defineProps({
  mobileReverse: Boolean,
});
</script>

<template>
  <section class="grid">
    <slot />
  </section>
</template>

<style lang="scss" scoped>
.grid {
  max-width: 1680px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  ::v-deep {
    & > * {
      width: 50%;
      display: flex;
      justify-content: center;
      align-content: center;

      @media (max-width: 950px) {
        width: 100%;
      }
    }
  }
}
</style>

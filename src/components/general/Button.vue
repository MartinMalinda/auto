<script lang="ts">
import { defineComponent, computed } from "vue";

export default defineComponent({
  props: {
    href: String,
  },

  setup(props, context) {
    const componentType = computed(() => {
      const { href } = props;
      if (href) {
        return "a";
      }

      return "button";
    });

    return { componentType };
  },
});
</script>

<template>
  <component :is="componentType" v-bind="$attrs" class="button" :href="href">
    <span class="text"><slot /></span>
  </component>
</template>

<style scoped lang="scss">
.button {
  transition: 0.2s all;
  padding: calc(var(--space) * 3) calc(var(--space) * 6);
  border-radius: calc(var(--space) * 1.5);
  border: 0;
  font-weight: 700;
  position: relative;
  overflow: hidden;
  outline: 0;
  user-select: none;
  display: inline-block;
  background: var(--dark);
  color: var(--white);
}
</style>

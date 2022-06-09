<script lang="ts">
import { defineComponent, TransitionGroup } from "vue";

export default defineComponent({
  components: { TransitionGroup },
  props: {
    isActive: {
      type: Boolean,
      default: true,
    },
    items: {
      type: Array,
      required: true,
    },
  },
});
</script>
<template>
  <div class="appear-group" :class="{ active: isActive }">
    <TransitionGroup :appear="true" name="list">
      <div
        v-for="(item, index) in items"
        :key="item.id || index"
        class="list-item"
      >
        <slot :item="item" :index="index" />
      </div>
    </TransitionGroup>
  </div>
</template>
<style lang="scss" scoped>
.active {
  .list-enter-active,
  .list-leave-active {
    transition: all 1s ease, opacity 0.3s ease;
    max-height: 200px;
  }
  .list-enter-from,
  .list-leave-to {
    max-height: 0 !important;
    margin: 0 !important;
    opacity: 0 !important;
  }

  .list-item {
    transition: all 1s ease, opacity 0.3s ease;
    transition-delay: 100ms;
  }
}
</style>

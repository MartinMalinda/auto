<script setup lang="ts">
import { defineProps, ref } from "@vue/runtime-core";

const isExpanded = ref(false);

const props = defineProps({
  header: String,
  text: String,
});
</script>

<template>
  <div class="faq-item">
    <h3
      @click="() => (isExpanded = !isExpanded)"
      role="button"
      aria-label="Expand"
    >
      <span>{{ props.header }}</span
      ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
        <defs />
        <path
          :class="{ hidden: isExpanded }"
          stroke="#999"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          stroke-width="3"
          d="M8 2v12"
        />
        <path
          :class="{ black: isExpanded }"
          stroke="#999"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          stroke-width="3"
          d="M2 8h12"
        />
      </svg>
    </h3>
    <p :class="{ expanded: isExpanded }" :aria-expanded="isExpanded">
      {{ props.text }}
    </p>
  </div>
</template>

<style lang="scss" scoped>
.faq-item {
  h3 {
    display: flex;
    font-size: 18px;
    font-weight: 500;
    justify-content: space-between;
    border-bottom: 1px solid #f3f3f3;
    padding-bottom: calc(var(--space) * 4);
    cursor: pointer;
    align-items: center;
    -webkit-tap-highlight-color: transparent;
    @media (max-width: 950px) {
      font-size: 16px;
    }
  }

  svg {
    width: 12px;
    height: 12px;
    flex-shrink: 0;
  }

  path {
    transition: 0.5s opacity;

    &.hidden {
      opacity: 0;
    }

    &.black {
      stroke: #2f2f2f;
    }
  }

  p {
    visibility: hidden;
    max-height: 0;
    margin: 0;
    padding: 0;
    opacity: 0;
    transition: 0.2s all;
    display: block;

    &.expanded {
      max-height: 400px;
      margin-top: calc(var(--space) * 4);
      margin-bottom: calc(var(--space) * 8);
      visibility: visible;
      opacity: 0.56;
      @media (max-width: 950px) {
        margin-top: calc(var(--space) * 3);
        margin-bottom: calc(var(--space) * 8);
      }
    }
  }
}
</style>

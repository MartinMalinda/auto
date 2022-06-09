<script setup lang="ts">
</script>

<template>
  <div class="container">
    <slot />
  </div>
</template>

<style scoped>
.container {
  padding: 0 calc(var(--space) * 2);
  max-width: 1300px;
}
</style>

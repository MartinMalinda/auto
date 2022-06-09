<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <Image
    alt="Invites"
    src="/invites.png"
    :width="300"
    :srcset="['1x', '2x']"
    class="image"
  />
</template>
<style lang="scss" scoped>
.image {
  border-radius: var(--border-radius-sm);
  width: 300px;
  position: relative;
  height: 650px;
}
</style>

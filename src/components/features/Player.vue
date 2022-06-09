<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <Image
    src="/videoplayer2.png"
    alt="media player"
    :width="300"
    :srcset="['1x', '2x']"
    class="image"
  />
</template>
<style lang="scss" scoped>
.image {
  // border-radius: var(--border-radius-sm);
  width: 300px;
  height: 650px;

  @media (max-width: 950px) {
    box-shadow: 0px 40px 100px rgb(221 124 131 / 20%);
  }
}
</style>

<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>


<template>
  <Image
    alt="Photographers"
    src="/photographers.png"
    :srcset="['1x', '2x']"
    :width="250"
    style="height: 439px; object-fit: cover; object-position: center top"
  />
</template>

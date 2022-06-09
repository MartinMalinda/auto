<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>
<template>
  <Button href="https://herohero.co/?login" class="start-link">
    {{ t("header.startNow") }}
  </Button>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <Video :width="250" src="musicians-small.mp4" />
</template>

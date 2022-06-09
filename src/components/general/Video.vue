<script lang="ts">
import { defineComponent, onMounted, ref } from "@vue/runtime-core";
import { waitUntilCanPlay } from "~/utils/video";

export default defineComponent({
  props: {
    src: String,
    width: Number,
  },
  setup() {
    const isLoading = ref(true);
    const el = ref<HTMLMediaElement>();
    onMounted(async () => {
      if (el.value) {
        await waitUntilCanPlay(el.value);
        isLoading.value = false;
      }
    });
    return { isLoading, el };
  },
});
</script>
<template>
  <div
    :style="`width: ${width}px`"
    class="video"
    :class="{ loading: isLoading }"
  >
    <video
      ref="el"
      :src="`https://storage.googleapis.com/heroheroco-assets-static/about/videos/${src}`"
      autoplay
      playsinline
      muted
      loop
    />
  </div>
</template>
<style lang="scss" scoped>
.video {
  position: relative;
  display: flex;
  justify-content: center;

  &.loading {
    &::after {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background: #efefef;
      animation: 3s pulse infinite;
      border-radius: var(--border-radius);
    }
  }

  video {
    max-width: 100%;
    border-radius: var(--border-radius);
  }
}
</style>

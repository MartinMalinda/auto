<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<template>
  <Section class="welcome">
    <div class="left">
      <Video
        src="network-2.mp4"
        class="left-video"
        :width="330"
        style="height: 530px"
      />
      <Image
        alt="writer"
        class="mobile-black"
        src="/final/blue-top.png"
        :srcset="['1x', '2x']"
        :width="330"
      />
    </div>
    <h1 class="center">
      {{ t("home.mainHeader") }}
    </h1>
    <div class="right">
      <Image
        alt="writer"
        src="/final/blue-top.png"
        :srcset="['1x', '2x']"
        :width="330"
      />
      <!-- <Video src="makeup.mp4" :width="330" /> -->
    </div>
  </Section>
</template>

<style scoped lang="scss">
h1 {
  white-space: pre-line;
}

.welcome {
  display: flex;
  align-items: flex-start !important;
  justify-content: space-between;
  margin: 0 auto;
  overflow: hidden;
}

.welcome {
  align-items: flex-start;

  .left-video {
    max-width: 330px;
  }

  img,
  .video {
    border-radius: var(--border-radius);
    width: 100%;
  }

  h1 {
    max-width: 525px;
    padding-top: calc(var(--space) * 10);

    @media (max-width: 1250px) {
      font-size: 40px;
    }
    @media (max-width: 950px) {
      font-size: 28px;
      padding: 0 32px 96px 32px;
      order: 1;
      margin: 0 auto;
    }
  }
  @media (max-width: 950px) {
    flex-direction: column-reverse;
  }
}

.left {
  @media (max-width: 950px) {
    position: relative;
    width: 100%;
    max-width: 600px;
  }
  @media (min-width: 950px) {
    img,
    .video {
      margin-top: calc(var(--space) * 7);
      position: relative;
      left: calc(var(--space) * -3);
    }
    .mobile-black {
      display: none;
    }
  }
  @media (min-width: 1441px) {
    img,
    .video {
      left: unset;
    }
  }

  @media (max-width: 950px) {
    img:first-child,
    .video {
      width: 85%;
      position: relative;
      left: calc(var(--space) * -8);
    }
    .mobile-black {
      position: absolute;
      top: 0;
      right: 0;
      width: 100%;
      transform: translateX(80%);
    }
  }
}

.right {
  align-self: flex-start;

  @media (max-width: 950px) {
    display: none;
  }
  img,
  .video {
    position: relative;
    right: calc(var(--space) * -3);

    @media (min-width: 1441px) {
      right: unset;
    }
  }
}
</style>

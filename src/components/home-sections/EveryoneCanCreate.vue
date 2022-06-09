<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>
<template>
  <Section class="everyone">
    <div>
      <div class="left">
        <!-- TODO: use larger image -->
        <Image
          class="finger"
          :width="24"
          alt="finger emoji"
          src="/finger.png"
          :srcset="['1x', '2x']"
          style="transform: rotate(90deg)"
        />
        <h2>{{ t("home.secondSection.header") }}</h2>
        <p>{{ t("home.secondSection.description") }}</p>
      </div>
    </div>
    <div>
      <div class="right">
        <Image
          class="visual art"
          :width="302"
          alt="finger emoji"
          src="/final/art.png"
          :srcset="['1x', '2x']"
        />
      </div>
    </div>
  </Section>
</template>

<style scoped lang="scss">
.everyone {
  @media (min-width: 951px) {
    margin-top: -170px;
  }

  @media (max-width: 950px) {
    flex-direction: column;
    padding-right: 32px;
    padding-left: 32px;
  }
}

.finger {
  margin-bottom: 40px;
  @media (max-width: 950px) {
    display: none;
  }
}

.left {
  max-width: 368px;
  @media (max-width: 950px) {
    padding-bottom: 64px;
    padding-right: 0;
  }
}

.left p {
  margin: 0;
  margin-top: 32px;
  @media (max-width: 950px) {
    margin-top: 24px;
  }
}

.right {
  @media (max-width: 950px) {
    text-align: center;
  }
}

.right img,
.right .video {
  border-radius: var(--border-radius);
  max-width: 302px;
  @media (max-width: 950px) {
    max-width: 200px;
  }
}
</style>

<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>
<template>
  <Section>
    <div>
      <div class="left">
        <Image
          alt="photographer"
          :srcset="[600, 800, 1200, 1600]"
          src="/creator.png"
        />
      </div>
    </div>
    <div>
      <div class="right">
        <div class="inner">
          <span>✌️</span>
          <h2>{{ t("home.fifthSection.header") }}</h2>
          <p>{{ t("home.fifthSection.description") }}</p>
        </div>
      </div>
    </div>
  </Section>
</template>

<style scoped lang="scss">
section {
  content-visibility: auto;
  contain-intrinsic-size: 1200px;

  @media (max-width: 950px) {
    flex-direction: column-reverse;
  }
}

span {
  font-size: 24px;
  display: block;
  margin-bottom: 40px;
  @media (max-width: 950px) {
    margin-bottom: 24px;
  }
}

p {
  white-space: pre-line;
  margin: 0;
  padding-top: 32px;
  @media (max-width: 950px) {
    padding-top: 24px;
  }
}

.right {
  display: flex;
  justify-content: center;
  @media (max-width: 950px) {
    width: auto;
    padding: 0 32px 64px 32px;
  }

  .inner {
    width: 368px;
    @media (max-width: 950px) {
      width: 100%;
    }
  }
}

.left {
  width: 100%;
  @media (max-width: 950px) {
    width: 100%;
  }

  img {
    max-width: 100%;
    width: 100%;
  }
}
</style>

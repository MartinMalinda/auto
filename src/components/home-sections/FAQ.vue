<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>
<template>
  <Section>
    <div>
      <div class="left">
        <Red />
        <Blue class="second" />
        <h2 title="Frequently Asked Questions">
          {{ t("home.eightSection.header") }}
        </h2>
      </div>
    </div>
    <div>
      <div class="right">
        <FaqItem
          :header="t('home.eightSection.howDoIstart')"
          :text="t('home.eightSection.howDoIStartAnswer')"
        />
        <FaqItem
          :header="t('home.eightSection.howGetPaid')"
          :text="t('home.eightSection.howGetPaidAnswer')"
        />
        <FaqItem
          :header="t('home.eightSection.whatAreTheFees')"
          :text="t('home.eightSection.whatAreTheFeesAnswer')"
        />
        <FaqItem
          :header="t('home.eightSection.areThereRestrictions')"
          :text="t('home.eightSection.areThereRestrictionsAnswer')"
        />
      </div>
    </div>
  </Section>
</template>

<style lang="scss" scoped>
section {
  justify-content: space-between !important;
  align-items: baseline !important;
  padding-right: 32px;
  padding-left: 32px;

  @media (max-width: 950px) {
    flex-direction: column;
  }

  > div:last-child {
    display: flex;
    justify-content: center;
    width: 50%;

    @media (max-width: 950px) {
      width: 100%;
    }
  }

  > div:first-child {
    // width: 30%;
    width: 50%;
    display: flex;
  }
}

.left {
  width: 368px;
  position: relative;
  @media (max-width: 950px) {
    width: 100%;
    margin: 0;
    padding-bottom: 72px;
  }

  @media (min-width: 950px + 32px) {
    margin-left: -32px;
  }

  .gradient {
    position: absolute;
    top: -20%;
    left: 0;
    transform: translateX(-70%);
    @media (max-width: 950px) {
      display: none;
    }

    &.second {
      top: unset;
      left: unset;
      bottom: 0;
      right: 0;
      transform: translateY(25%);
    }
  }
}

.right {
  max-width: 600px;
  @media (max-width: 950px) {
    width: 100%;
    max-width: 100%;
  }
}
</style>

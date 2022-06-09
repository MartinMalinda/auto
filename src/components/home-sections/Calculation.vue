<script setup lang="ts">
import { ref } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const subscriberCount = ref(100);
const subscriptionPrice = ref(3);
const monthlyEarning = computed(() =>
  Math.round(subscriberCount.value * subscriptionPrice.value * 0.9)
);
const yearlyEarning = computed(() => monthlyEarning.value * 12);

const formatCurrency = (value) => {
  if (typeof navigator === "undefined") {
    return value;
  }

  const currencyFormatter = new Intl.NumberFormat(
    navigator.language || "en-US",
    {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 0,
    }
  );

  return currencyFormatter.format(value);
};
</script>
<template>
  <Section>
    <div>
      <div class="left">
        <h2>{{ t("home.seventhSection.header") }}</h2>
        <p>{{ t("home.seventhSection.description") }}</p>
      </div>
    </div>
    <div>
      <div class="right">
        <div class="sliders">
          <h4>{{ t("home.subscribers") }}</h4>
          <Slider
            :step="50"
            :value="subscriberCount"
            :max="1000"
            :onChange="(value) => (subscriberCount = value)"
          />
          <div class="row">
            <h4>{{ t("home.subscriptionPrice") }}</h4>
            <div class="note">
              {{ t("home.ourFee") }}
            </div>
          </div>
          <Slider
            :value="subscriptionPrice"
            :min="2"
            :max="25"
            :onChange="(value) => (subscriptionPrice = value)"
            :getTooltip="(value) => formatCurrency(value)"
          />
        </div>
        <div class="incomes">
          <div class="yearly">
            <label>{{ t("home.seventhSection.yearlyEarning") }}</label>
            <div class="currency" id="yearly">
              {{ formatCurrency(yearlyEarning) }}
            </div>
          </div>
          <div class="monthly">
            <label>{{ t("home.seventhSection.monthlyEarning") }}</label>
            <div class="currency" id="monthly">
              {{ formatCurrency(monthlyEarning) }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </Section>
</template>

<style lang="scss" scoped>
section {
  padding: 260px 0 0 0;

  @media (max-width: 1024px) {
    padding-right: 32px;
    padding-left: 32px;
  }

  @media (max-width: 950px) {
    flex-direction: column;
    padding-top: 96px;
  }
}

.left {
  max-width: 368px;
  @media (max-width: 950px) {
    padding-bottom: 64px;
  }
}
p {
  margin: 32px 0 56px 0;
  @media (max-width: 950px) {
    margin: 24px 0 32px 0;
  }
}

.right {
  position: relative;
  @media (max-width: 950px) {
    width: 100%;
    max-width: 400px;
  }
}

.sliders {
  box-shadow: 0px -177px 137px 157px rgba(241, 146, 141, 0.08),
    0px 199px 189px 32px rgba(108, 93, 210, 0.12);
  position: relative;
  background: rgba(255, 255, 255, 0.56);
  border-radius: 32px;
  padding: calc(var(--space) * 8);
  width: 485px;
  max-width: 100%;
  @media (max-width: 950px) {
    width: 100%;
    padding: calc(var(--space) * 4);
  }
  > h4:first-child {
    margin-bottom: 48px;
  }
}

h4 {
  font-weight: 500;
  margin: 0;
  font-size: 16px;
  color: #2f2f2f;
}

.note {
  color: var(--dark-grey);
}

.row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 48px 0;
}

.incomes {
  display: flex;
  margin-bottom: 100px;
  @media (max-width: 950px) {
    margin-bottom: 0;
  }

  > div {
    background: var(--white);
    padding: calc(var(--space) * 6) 0;
    border-radius: var(--border-radius);
    margin-top: calc(var(--space) * 3);
    position: relative;
    text-align: center;
    width: 50%;
    color: #2f2f2f;

    &:first-child {
      margin-right: calc(var(--space) * 3);
    }

    .currency {
      font-weight: bold;
      font-size: 24px;
      margin-top: var(--space);
      @media (max-width: 950px) {
        font-size: 16px;
      }
    }

    @media (max-width: 950px) {
      label {
        font-size: 12px;
      }
    }
  }
}
</style>

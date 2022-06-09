<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";

const { t } = useI18n();
const scrollPosition = ref(0);
onMounted(() => {
  window.addEventListener(
    "scroll",
    () => (scrollPosition.value = document.scrollingElement?.scrollTop || 0)
  );
});
</script>

<template>
  <div class="space-for-nav"></div>
  <nav :class="{ scrolling: scrollPosition > 0 }">
    <Container class="header-row">
      <a href="https://herohero.co">
        <Logo class="logo" />
      </a>
      <StartNowButton />
    </Container>
  </nav>
</template>

<style scoped lang="scss">
.space-for-nav {
  padding-top: calc(var(--space) * 6);
  padding-bottom: calc(var(--space) * 16);
}

nav {
  padding: calc(var(--space) * 8);
  transition: all 0.3s;
  position: fixed;
  width: 100%;
  background: var(--white);
  z-index: 100;
  top: 0;

  @media (max-width: 950px) {
    padding: calc(var(--space) * 4);
  }

  &.scrolling {
    box-shadow: inset 0px -1px 0px rgba(153, 153, 153, 0.16);
    padding-top: 20px;
    padding-bottom: 20px;

    @media (max-width: 950px) {
      padding-right: calc(var(--space) * 4);
      padding-left: calc(var(--space) * 4);
    }
  }
}

.logo {
  max-width: 44px;
  height: 46px;
  @media (max-width: 950px) {
    max-width: 38px;
    height: 40px;
  }
}

.header-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: unset;
  padding: 0;
}

.start-link {
  flex-grow: 0;
  padding: calc(var(--space) * 1.44) calc(var(--space) * 2);
  font-weight: 600;
  font-size: 14px;
}
</style>

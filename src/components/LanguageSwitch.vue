<script setup lang="ts">
import { ref } from '@vue/reactivity';
import { useI18n } from 'vue-i18n';
import AppearGroupTransition from '~/components/transitions/AppearGroupTransition.vue';

const { availableLocales, locale: currentLocale } = useI18n();

const isActive = ref(false);

const scrollTop = ref(0);

document.body.addEventListener('click', () => {
  isActive.value = false;
});

const scrollingEl = document.scrollingElement as HTMLElement;
let allowSet = true;
window.addEventListener('scroll', () => {
  if (allowSet) {
    scrollTop.value = scrollingEl.scrollTop;
    allowSet = false;
    setTimeout(() => allowSet = true, 50);
  }
});

const labels = {
  cs: 'Česky 🇨🇿',
  en: 'English 🇺🇸'
};

</script>
<template>
  <div class="language-switch" :class="{ active: isActive, hidden: scrollTop > 200 }">
    <button @click.stop="() => isActive = !isActive" class="selected locale">
      {{ labels[currentLocale] }}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -256 1792 1792">
        <path
          d="M1426.4 407.9q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45q19-19 45-19h896q26 0 45 19t19 45z" />
      </svg>
    </button>
    <div v-if="isActive" class="other-locales">
      <AppearGroupTransition :items="availableLocales.filter(locale => locale !== currentLocale)"
        v-slot="{ item: locale }">
        <a class="locale" :href="`/${locale}/`">
          {{ labels[locale] }}
        </a>
      </AppearGroupTransition>

    </div>
  </div>
</template>

<style scoped lang="scss">
.language-switch {
  position: fixed;
  top: 0;
  right: 0;
  padding: 1rem;
  border-radius: 1rem;
  overflow: hidden;
  z-index: 666;
  transition: 0.3s opacity, 0.4s visibility;

  svg {
    width: 1rem;
    transform-origin: 50% 50%;
    transition: 0.3s transform;
  }

  &.hidden {
    opacity: 0;
    visibility: hidden;
  }

  &.active {
    svg {
      transform: rotate(180deg);
    }
  }

  @media (max-width: 600px) {
    top: auto;
    bottom: 0;
  }
}

.locale {
  border: 0;
  box-shadow: inset 0 0 20px 0px rgba(0, 0, 0, 0.08);
  background: white;
  width: 150px;
  display: block;
  color: rgb(255, 100, 100);
  text-align: center;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  text-decoration: none;
  font-weight: 400;
}
</style>

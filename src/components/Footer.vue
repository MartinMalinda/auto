<script setup lang="ts">
import { ref, computed } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

const router = useRouter()
const { t, availableLocales, locale } = useI18n()
const showOptions = ref(false)

const helpCenterUrl = computed(() => `https://help.herohero.co/${locale.value === 'en' ? '' : 'cs/'}`)

const selectLocale = (newLocale: string) => {
  router.push(`/${newLocale}/`)
}

const localeNames = {
  cs: 'Česky',
  en: 'English',
}

onMounted(() => {
  document.addEventListener('click', (event) => {
    if (showOptions.value)
      showOptions.value = false
  })
})
</script>

<template>
  <footer>
    <nav>
      <a :href="helpCenterUrl">{{ t("footer.helpCenter") }}</a>
      <a
        rel="noopener"
        target="_blank"
        href="https://www.instagram.com/herohero.co/"
      >Instagram</a>
      <a
        rel="noopener"
        target="_blank"
        href="https://twitter.com/heroherocompany"
      >Twitter</a>
      <a href="mailto:info@herohero.co">{{ t("footer.joinUs") }}</a>
    </nav>
    <div class="locale-switcher">
      <Button
        class="secondary-button"
        aria-label="Change language"
        @click.prevent="
          (e) => {
            showOptions = !showOptions;
            e.stopPropagation();
          }
        "
      >
        {{ localeNames[locale] }}
      </Button>
      <div
        class="locale-options"
        :class="{ visible: showOptions }"
        aria-expanded="showOptions"
      >
        <button
          v-for="(locale, index) in availableLocales"
          :key="index"
          @click="() => selectLocale(locale)"
        >
          {{ localeNames[locale] }}
        </button>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  content-visibility: auto;

  max-width: 1680px;
  display: flex;
  justify-content: space-between;
  margin-top: -100px;
  padding: 100px calc(var(--space) * 8) 96px calc(var(--space) * 8);
  @media (max-width: 950px) {
    flex-direction: column;
    padding: 0 calc(var(--space) * 4) 96px calc(var(--space) * 4);
  }
}

nav {
  display: flex;
  align-items: center;
  @media (max-width: 950px) {
    flex-direction: column;
    align-items: baseline;
  }

  a {
    color: var(--dark-grey);
    margin-left: 72px;
    font-size: 14px;
    font-weight: 400;
  }
  a:first-child {
    margin-left: 0;
  }
  @media (max-width: 950px) {
    a {
      margin-top: 32px;
      margin-left: 0;
    }
    a:first-child {
      margin-top: 0;
    }
  }
}

.secondary-button {
  background: var(--light-grey);
  color: var(--dark-grey);
}

.locale-switcher {
  position: relative;
  @media (max-width: 950px) {
    margin-top: 32px;
  }
  button {
    padding: 12px 13px;
    font-family: "Silka", sans-serif;
    font-weight: 600;
    font-size: 14px;
  }
}

.locale-options {
  position: absolute;
  top: -10px;
  right: 0;
  transform: translateY(-100%);
  visibility: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  border-radius: 12px;
  width: 102px;
  background: #ffffff;

  @media (max-width: 950px) {
    right: unset;
    left: 0;
  }

  button {
    width: 100%;
    text-align: left;
    border: none;
    background: transparent;
    color: #2f2f2f;
    font-size: 12px;
    cursor: pointer;
    font-weight: 500;
    padding: calc(var(--space) * 2);

    &:first-child {
      padding-bottom: 0;
    }

    &:focus {
      outline: none;
    }
  }

  &.visible {
    visibility: visible;
  }
}
</style>

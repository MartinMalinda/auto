<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { computed, watch } from '@vue/runtime-core'
import { useHead } from '@vueuse/head'
import { WebsiteSchema } from '~/components/schema'
import { sendPageView } from '~/utils/analytics'

sendPageView()

type HeadObject = Parameters<typeof useHead>[0]
const host = 'https://about.herohero.co'; // TODO
const route = useRoute()
const { t, locale, availableLocales } = useI18n()

const head = computed<HeadObject>(() => {
  const currentLocale = route.params.locale
  return {
    htmlAttrs: {
      lang: currentLocale,
    },
    link: [
      ...availableLocales.map((locale) => {
        return {
          rel: 'alternate',
          href: `${host}/${locale}/`,
          hreflang: locale,
        }
      }),
      {
        rel: 'alternate',
        hreflagn: 'x-default',
        href: `${host}/en/`,
      },
    ],
    title: t('meta.title').replace('#', '|'),
    meta: [
      {
        property: 'og:locale',
        content: currentLocale,
      },
      {
        name: 'description',
        content: t('meta.description'),
      },
    ],
  }
})
useHead(head as any)

watch(
  () => route.params.locale,
  (routeLocale) => {
    locale.value = routeLocale as string
  },
  { immediate: true },
)
</script>
<template>
  <div>
    <WebsiteSchema :t="t" :locale="route.params.locale" />
    <div>Hello!</div>
  </div>
</template>

<style lang="scss">
</style>

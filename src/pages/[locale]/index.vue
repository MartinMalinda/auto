<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { computed, watch } from '@vue/runtime-core'
import { useHead } from '@vueuse/head'
import { WebsiteSchema } from '~/components/schema'
import { sendPageView } from '~/utils/analytics'
import SlideTransition from '~/components/transitions/SlideTransition.vue'
import { ref } from '@vue/reactivity'
import { nextTick, watchEffect } from 'vue';
import IntegrationSchema from '~/components/IntegrationSchema.vue'
import Reviews from '~/components/Reviews.vue';
import Process from '~/components/Process.vue'
import Notion from '~/components/logos/Notion.vue'
import Email from '~/components/logos/Email.vue'

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

const index = ref(0);
const automationOptions = ['hiring', 'project management', 'analytics', 'feedback collection', 'documentation', 'social media', 'communication', 'onboarding'];
const selectedOption = ref(automationOptions[0]);

watchEffect(() => {
  selectedOption.value = automationOptions[index.value];
});


setInterval(() => {
  if (index.value === automationOptions.length - 1) {
    index.value = 0;
  } else {
    index.value++;
  }

  setTimeout(() => {
    nextTick(() => {
      const width = document.querySelector('.highlight')?.clientWidth;
      document.querySelector('.highlight-wrap')?.setAttribute('style', `width: ${width}px`);
    });
  }, 550);
}, 3000);

</script>
<template>
  <div>
    <WebsiteSchema :t="t" :locale="route.params.locale" />
    <div class="playground">
      <div class="schema-wrap">
        <IntegrationSchema />
        <h1>Hi, I'm Martin 👋</h1>
        <h2>Let me automate
          <div class="highlight-wrap">
            <SlideTransition appear>
              <span :key="selectedOption" class="highlight">
                {{ selectedOption }}
              </span>
            </SlideTransition>
          </div>
          in your company
        </h2>
      </div>
    </div>
    <div class="process-wrap">
      <Process />
    </div>
    <div class="reviews-wrap">
      <Reviews />
      <div class="more-reviews">
        <a href="https://www.linkedin.com/in/martin-malinda-58b03253/">Read more reviews on LinkedIn</a>
      </div>
    </div>
  </div>
  <div class="info-wrap">
    <div class="info">
      <h2>Are you interested?</h2>
      <div class="row">
        <a>
          <Email />
          <h3>Let's talk</h3>
        </a>
        <a target="_blank" href="https://dynamic-fontina-af6.notion.site/Automation-55e70f45ddfd4e50a22892f7b189b220">
          <Notion />
          <h3>Read more</h3>
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.schema-wrap {
  margin: 0 auto;
  max-width: 800px;
}

.process-wrap {
  box-shadow: inset 0 0 40px 0px rgba(0, 0, 0, 0.07);
  min-height: 110vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 0 2rem;
}

.playground {
  min-height: 100vh;
  padding: 0 2rem;

  @media (max-width: 600px) {
    min-height: auto;
  }
}

.bubble {
  width: 100px;
  display: inline-block;
  padding: 10px;
}

h1 {
  font-size: 2.8rem;
  margin-top: 5rem;

  @media (max-width: 600px) {
    font-size: 2.6rem;
    text-align: center;
  }
}

h2 {
  font-size: 1.8rem;

  @media (max-width: 600px) {
    font-size: 1.4em;
    text-align: center;
    padding-bottom: 2rem;
  }
}

.highlight-wrap {
  border-bottom: 1px dashed red;
  padding-bottom: 2px;
  display: inline-block;
  transition: 0.4s width;

  @media (max-width: 600px) {
    display: block;
    margin: 0.7rem auto;
    text-align: center;
    width: 100% !important;
    border-bottom: 0;
  }
}

.highlight {
  color: red;
  display: inline-block;
  text-align: center;
  white-space: nowrap;
}

.more-reviews a {
  text-decoration: none;
  display: block;
  text-align: center;
  padding: 2rem;
  margin-top: -4rem;
  color: blue;
}

.info-wrap {
  box-shadow: inset 0 0 40px 0px rgba(0, 0, 0, 0.07);
}

.info {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h2 {
    margin-bottom: 5rem;
  }

  h3 {
    margin-bottom: 0;
  }

  .row {
    display: flex;

    svg {
      height: 70px;
    }

    a {
      width: 200px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 2rem;
      box-shadow: inset 0 0 40px 0px rgba(0, 0, 0, 0.1);
      border-radius: 2rem;
      margin: 1rem;
      text-decoration: none;
      color: black;
      transition: 0.3s transform;

      &:hover {
        transform: scale(1.1, 1.1);
      }
    }

    @media (max-width: 600px) {
      a {
        width: 160px;
        margin: 0.5rem;
        text-align: center;
      }

      svg {
        height: 40px;
      }
    }
  }
}
</style>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { computed, watch } from '@vue/runtime-core'
import { useHead } from '@vueuse/head'
import { WebsiteSchema } from '~/components/schema'
import { sendPageView } from '~/utils/analytics'
import SlideTransition from '~/components/transitions/SlideTransition.vue'
import { ref } from '@vue/reactivity'
import { watchEffect } from 'vue';
import IntegrationSchema from '~/components/IntegrationSchema.vue'

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
         in your company</h2>
      </div>
    </div>
    <div class="reviews-wrap">
      <div class="reviews">
      <div class="review-card">
        <div class="column">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Joe_Biden_presidential_portrait.jpg/640px-Joe_Biden_presidential_portrait.jpg" />
          <h3>Joe Biden</h3>
          <h4>USA s. r. o</h4>
        </div>
        <p>It was a great experience working with Martin. I can reccomend him to all of the future presidents of the United States of America.</p>
      </div>
      <div class="review-card">
        <div class="column">
          <img src="https://cdn.blrankings.com/best-lawyers/lawyer-images/camille-m-vasquez-287637?t=2022050313505443" />
          <h3>Camille Vasquez</h3>
          <h4>Depp Industries</h4>
        </div>
        <p>I was very happy with Martin's automations. Everything went smooth. Amber Heard is a liar.</p>
      </div>
      <div class="review-card small">
        <div class="column">
          <img src="https://www.ostravan.cz/files/2021/04/Untitled-330-e1619730799906.jpg" />
          <h3>Tomáš Klus</h3>
          <h4>Music things</h4>
        </div>
        <p>Bylo to cool</p>
      </div>
       <div class="review-card small">
        <div class="column">
          <img src="https://www.fandimefilmu.cz/files/images/2017/05/10/article_main_jeff-goldblum_7.jpg" />
          <h3>Jeff Goldblum</h3>
          <h4>Jurassic Parks</h4>
        </div>
        <p>Did He Just Throw My Cat Out Of The Window?</p>
      </div>
         <div class="review-card small">
        <div class="column">
          <img src="https://niennacalwen.estranky.cz/img/mid/34/gandalf-bily.jpg" />
          <h3>Gandalf the White</h3>
          <h4>The Istari</h4>
        </div>
        <p>I have found that it is the small everyday deed of ordinary folks like Martin that keep the darkness at bay</p>
      </div>
    </div>
    <div class="more-reviews">
      <a href="https://www.linkedin.com/in/martin-malinda-58b03253/">Read more reviews on LinkedIn</a>
    </div>
    </div>
  </div>
  <div class="info">
    <h2>Are you interested?</h2>
    <div class="row">
      <a>
        <svg width="81" height="61" viewBox="0 0 81 61" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M70.6924 0.799988H10.6924C5.16988 0.799988 0.692383 5.27749 0.692383 10.8V50.8C0.692383 56.3225 5.16988 60.8 10.6924 60.8H70.6924C76.2149 60.8 80.6924 56.3225 80.6924 50.8V10.8C80.6924 5.27749 76.2149 0.799988 70.6924 0.799988ZM54.2324 27.4845L75.3994 9.34483C75.546 9.81358 75.6924 10.2823 75.6924 10.8V50.8C75.6924 51.1467 75.5605 51.4544 75.4922 51.7814L54.2324 27.4845ZM70.6924 5.79999C71.0244 5.79999 71.3174 5.92702 71.6299 5.99046L40.6924 32.509L9.75488 5.99046C10.0674 5.92702 10.3604 5.79999 10.6924 5.79999H70.6924ZM5.8902 51.7766C5.82176 51.4494 5.69238 51.1467 5.69238 50.8V10.8C5.69238 10.2823 5.84129 9.81358 5.98785 9.34483L27.1475 27.4797L5.8902 51.7766ZM10.6924 55.8C10.1871 55.8 9.72801 55.6534 9.2666 55.5119L30.9463 30.7364L39.0664 37.6944C39.5327 38.0998 40.1138 38.3 40.6924 38.3C41.271 38.3 41.8521 38.0998 42.3183 37.6945L50.4385 30.7365L72.1182 55.512C71.6593 55.6536 71.2002 55.8 70.6924 55.8H10.6924Z" fill="black"/>
</svg>

        <h3>Let's talk</h3>
      </a>
      <a>
       <svg width="93" height="97" viewBox="0 0 93 97" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_13_62)">
<path d="M33.5069 2.84381C24.0759 3.49978 14.6512 4.24416 5.23408 5.07688C4.3987 5.2294 3.61011 5.5737 2.93037 6.08269C2.25062 6.59168 1.69826 7.25147 1.31676 8.01014L0.692261 9.33484L0.749034 40.7113L0.843655 72.1256L1.78987 74.0558C2.33867 75.1345 5.99106 80.1684 9.96515 85.3347C17.8376 95.5538 18.4054 96.1215 21.3954 96.4054C22.2659 96.5 28.7759 96.2161 35.8535 95.7809C42.9501 95.3267 54.3047 94.6454 61.1364 94.2669C90.2797 92.4881 88.7847 92.6395 90.469 91.2012C92.5506 89.4602 92.3993 92.2988 92.4939 54.1475C92.5506 21.8059 92.5317 19.6864 92.0397 18.7023C91.472 17.5858 90.4501 16.8099 77.1652 7.48026C68.2708 1.23525 67.6652 0.913539 63.6722 0.856766C53.606 1.33693 43.5492 1.99939 33.5069 2.84381V2.84381ZM67.1543 6.93145C68.4033 7.49918 77.6005 13.9145 78.9441 15.1257C79.3037 15.5041 79.4172 15.788 79.2469 15.9773C78.8116 16.3368 21.9631 19.7053 20.3167 19.4782C19.5598 19.3458 18.4621 18.9105 17.8376 18.4753C15.2261 16.7153 8.754 11.4165 8.754 11.038C8.754 10.0161 8.56476 10.0161 33.9043 8.19938C38.749 7.85874 46.7161 7.25317 51.5607 6.87468C62.0637 6.04201 65.2051 6.06094 67.1543 6.93145V6.93145ZM85.227 23.3009C85.6433 23.7173 85.9839 24.531 86.1164 25.3069C86.211 26.026 86.2678 39.4244 86.211 55.0559C86.1164 81.8715 86.0975 83.5369 85.5865 84.3128C85.2609 84.8159 84.7933 85.2111 84.2429 85.4482C82.975 85.9592 23.4014 89.3466 22.1713 88.9871C21.6036 88.8357 20.8277 88.3626 20.4113 87.9462L19.6922 87.1703L19.5976 58.2541C19.5408 37.9672 19.5976 28.9972 19.8436 28.1645C20.0329 27.5968 20.4681 26.8587 20.8655 26.6316C21.3954 26.2531 24.9342 25.9693 37.0836 25.2501C45.5995 24.777 58.8087 23.9633 66.3784 23.5091C84.3943 22.4115 84.3186 22.4115 85.227 23.3199V23.3009Z" fill="black"/>
<path d="M69.217 33.1984C65.981 33.4254 63.1045 33.7093 62.7828 33.8986C62.3301 34.1126 61.9376 34.4355 61.6404 34.8384C61.3432 35.2413 61.1505 35.7117 61.0796 36.2073C60.985 37.1914 61.2688 37.3049 64.5238 37.7023L65.9242 37.8916V50.6465C65.9242 58.2541 65.8107 63.2879 65.6593 63.1365C65.5079 62.9473 61.2499 56.4941 56.1971 48.7541C51.1444 41.0141 46.9432 34.6366 46.8864 34.5798C46.8296 34.5231 43.5368 34.7123 39.5816 34.9772C34.737 35.2989 32.0687 35.6017 31.5388 35.9045C31.0267 36.254 30.5971 36.7112 30.2801 37.244C29.963 37.7768 29.7661 38.3724 29.7032 38.9892C29.7032 39.6137 30.8386 39.9354 33.242 39.9354H34.491V76.6863L32.4661 77.3108C30.8765 77.8028 30.3466 78.1056 30.0627 78.6923C29.5896 79.7142 29.6275 80.6415 30.1006 80.6415L37.5567 80.1873C45.24 79.752 46.1105 79.525 46.9243 77.9542C47.1513 77.4622 47.3595 76.9513 47.3595 76.8188C47.3595 76.6863 46.3187 76.3268 45.0697 76.024L42.231 75.3805C41.7012 75.2291 41.6633 74.3019 41.6633 61.4334V47.6186L50.7848 61.9065C60.3226 76.8566 61.5149 78.5598 62.991 79.3168C64.8077 80.2819 69.4441 79.6196 71.7907 78.1056L72.5099 77.6515L72.5666 57.2322L72.6613 36.794L74.232 36.5101C76.1244 36.1316 76.9949 35.28 76.9949 33.785C76.9949 32.8388 76.9381 32.7631 76.0487 32.8009C75.481 32.8009 72.4152 32.9902 69.217 33.1984V33.1984Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_13_62">
<rect width="91.8584" height="95.7" fill="white" transform="translate(0.692261 0.800003)"/>
</clipPath>
</defs>
</svg>


        <h3>Read more</h3>
      </a>
    </div>
  </div>
</template>

<style lang="scss">
  .schema-wrap {
    margin: 0 auto;
    max-width: 750px;
  }

  .playground {
    min-height: 100vh;
  }

  .bubble {
    width: 100px;
    display: inline-block;
    padding: 10px;
  }

  h1 {
    font-size: 2.8rem;
    margin-top: 5rem;
  }

  h2 {
    font-size: 1.8rem;
  }

  .highlight-wrap {
    border-bottom: 1px dashed red;
    padding-bottom: 2px;
    display: inline-block;
  }

  .highlight {
    color: red;
    display: inline-block;
    text-align: center;
    min-width: 240px;
  }

  .reviews-wrap {
    box-shadow: inset 0 0 40px 0px rgba(0, 0, 0, 0.1);
  }

  .reviews {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    padding: 5rem 0;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 5rem;
    
  }

  .review-card {
    background: white;
    display: flex;
    align-items: center;
    box-shadow: 0 0 50px 0px rgba(0, 0, 0, 0.2);
    border-radius: 1rem;
    padding: 1.5rem;
    margin: 1rem 1rem;
    max-width: 550px;

    &.small {
      width: 400px;
      flex-direction: column;

      p {
        padding: 0;
        margin: 0;
        text-align: center;
      }
    }

    img {
      flex-shrink: 0;
      width: 150px;
      height: 150px;
      object-fit: cover;
      object-position: 0% 0%;
      border-radius: 50%;
    }

    h3, h4 {
      text-align: center;
    }

    h4 {
      margin-top: -0.5rem;
      font-weight: 300;
    }

    p {
      padding: 2rem;
      line-height: 1.5em;
      font-size: 1.2rem;
    }
  }

  .more-reviews a {
    text-decoration: none;
    display: block;
    text-align: center;
    padding: 2rem;
    margin-top: -4rem;
    color: blue;
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
      }
    }
  }
</style>

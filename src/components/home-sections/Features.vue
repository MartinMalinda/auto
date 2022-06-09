<script setup lang="ts">
import { ref } from '@vue/reactivity'
import { computed, h, nextTick } from '@vue/runtime-core'
import { useI18n } from 'vue-i18n'
import Comments from '../features/Comments.vue'
import Player from '../features/Player.vue'
import NoLimit from '../features/NoLimit.vue'
import Payouts from '../features/Payouts.vue'
import DMs from '../features/DMs.vue'
import Invites from '../features/Invites.vue'
import Streams from '../features/Streams.vue'

const { t } = useI18n()

const features = ref([
  {
    label: () => t('home.sixthSection.features.1'),
    isActive: true,
    comp: () => Comments,
    isReady: true,
  },
  {
    label: () => t('home.sixthSection.features.2'),
    isActive: false,
    comp: () => Player,
    isReady: true,
  },
  {
    label: () => t('home.sixthSection.features.3'),
    isActive: false,
    comp: () => NoLimit,
    isReady: true,
  },
  {
    label: () => t('home.sixthSection.features.4'),
    isActive: false,
    comp: () => Invites,
    isReady: true,
  },
  {
    label: () => t('home.sixthSection.features.5'),
    isActive: false,
    comp: () => Payouts,
    isReady: true,
  },
  {
    label: () => t('home.sixthSection.features.6'),
    isActive: false,
    comp: () => DMs,
    isReady: true,
  },
  {
    label: () => t('home.sixthSection.features.7'),
    isActive: false,
    comp: () => Streams,
    isReady: false,
  },
])
type Feature = typeof features.value[0]

const activeFeature = computed(() => features.value.find(f => f.isActive))
const transitionDirection = ref('down' as 'down' | 'up' | 'right' | 'left')
const activeIndex = computed(() =>
  features.value.indexOf(activeFeature.value as any),
)
const setActiveFeature = (feature: Feature) => {
  const isSmallScreen = window.innerWidth < 900
  if (features.value.indexOf(feature) > activeIndex.value)
    transitionDirection.value = isSmallScreen ? 'right' : 'up'

  else
    transitionDirection.value = isSmallScreen ? 'left' : 'down'

  nextTick(() => {
    features.value.forEach(f => (f.isActive = false))
    feature.isActive = true
  })
}
const nextFeature = computed(() => {
  const index = features.value.indexOf(activeFeature.value as any)
  const nextIndex = index + 1 < features.value.length ? index + 1 : 0
  return features.value[nextIndex]
})
const previousFeature = computed(() => {
  const index = features.value.indexOf(activeFeature.value as any)
  const nextIndex = index === 0 ? features.value.length - 1 : index - 1
  return features.value[nextIndex]
})
const setNextActive = () => {
  transitionDirection.value = 'right'
  nextTick(() => setActiveFeature(nextFeature.value))
}
const setPreviousActive = () => {
  transitionDirection.value = 'left'
  nextTick(() => setActiveFeature(previousFeature.value))
}
</script>
<template>
  <Section>
    <div>
      <div class="left">
        <SwipeArea
          :on-swipe-left="setNextActive"
          :on-swipe-right="setPreviousActive"
        >
          <div class="feature-preview">
            <SlideTransition :direction="transitionDirection">
              <component :is="activeFeature.comp()" />
            </SlideTransition>
          </div>
        </SwipeArea>
        <div class="feature active mobile-only">
          {{ activeFeature.label() }}
        </div>
        <div class="dots">
          <button
            v-for="(feature, index) in features"
            :key="feature.label()"
            class="dot"
            :aria-label="`select ${feature.label()}`"
            :class="{ active: feature.isActive }"
            @click="() => setActiveFeature(feature, index)"
          />
        </div>
      </div>
    </div>
    <div>
      <div class="right">
        <div class="inner">
          <button
            v-for="(feature, index) in features"
            :key="feature.label()"
            :aria-label="`select ${feature.label()}`"
            class="feature"
            :class="{ active: feature.isActive }"
            @click="() => setActiveFeature(feature, index)"
          >
            {{ feature.label() }}
            <span v-if="!feature.isReady" class="soon">
              ({{ t("home.sixthSection.soon") }})
            </span>
          </button>
        </div>
      </div>
    </div>
  </Section>
  <!-- Preload images for next features -->
  <client-only>
    <div
      style="
        position: absolute;
        visibility: hidden;
        height: 0;
        overflow: hidden;
      "
    >
      <component
        :is="feature.comp()"
        v-for="feature in features"
        :key="feature.label"
      />
    </div>
  </client-only>
</template>

<style lang="scss" scoped>
$mobile-breakpoint: 950px;

section {
  padding-top: 260px;

  @media (max-width: $mobile-breakpoint) {
    flex-direction: column-reverse;
    padding-top: 96px;
    padding-right: 32px;
    padding-left: 32px;
  }
}

p {
  white-space: pre-line;
}

.right {
  display: flex;
  justify-content: center;

  .inner {
    max-width: 368px;
  }
}

.left {
  position: relative;
  @media (max-width: $mobile-breakpoint) {
    margin-right: 0;
    flex-direction: column;
  }

  .dots {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 24px;
    @media (min-width: $mobile-breakpoint) {
      display: none;
    }

    .dot {
      opacity: 0.24;
      transition: 0.4s opacity;
      cursor: pointer;
      display: block;
      width: calc(var(--space) * 3);
      height: calc(var(--space) * 3);
      background: transparent;
      position: relative;
      border: 0;
      outline: 0 !important;

      &::before {
        content: "";
        display: block;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        padding: 0;
        background: var(--dark);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }

      &.active {
        opacity: 1;
      }
    }
  }
}

.feature-preview {
  ::v-deep {
    > img {
      border-radius: 40px;
      max-height: 100%;
      max-width: 100%;
      object-fit: contain;
      width: auto;
      box-shadow: 0px -177px 137px 157px rgba(241, 146, 141, 0.08),
        0px 199px 189px 32px rgba(108, 93, 210, 0.12);
    }
  }

  @media (max-height: 750px) {
    height: 550px;
    width: 253px;
  }

  @media (max-height: 670px) {
    height: 530px;
    width: 244px;
  }

  @media (max-height: 600px) {
    height: 470px;
    width: 216px;
  }
}

.gradient {
  position: absolute;
  border-radius: 50%;
  left: 50%;
  bottom: -50px;
  width: 600px;
  transform: translateX(-50%);
}

.gradient.second {
  top: 0;
  border-radius: 50%;
}

.feature {
  font-size: 32px;
  padding-bottom: calc(var(--space) * 3);
  opacity: 0.56;
  transition: 0.3s opacity;
  cursor: pointer;
  background: none;
  display: block;
  border: 0;
  font-family: Silka, sans-serif;
  color: #2f2f2f;
  @media (max-width: $mobile-breakpoint) {
    font-size: 24px;
    margin: 0 auto;
    display: none;
    padding-bottom: calc(var(--space) * 5);
  }

  &:hover,
  &:focus {
    opacity: 1;
    outline: 0;
  }

  &.active {
    opacity: 1;
  }
}

.feature.active.mobile-only {
  display: block;
  font-size: 16px;
  padding-bottom: 0;
  padding-top: calc(var(--space) * 4);
  text-align: center;

  @media (min-width: $mobile-breakpoint + 1) {
    display: none;
  }
}

.soon {
  font-size: 12px;
}
</style>

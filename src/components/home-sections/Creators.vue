<script setup lang="ts">
import { ref } from "@vue/reactivity";
import { useI18n } from "vue-i18n";
import Teachers from "../creator-groups/Teachers.vue";
import VisualArtists from "../creator-groups/VisualArtists.vue";
import Musicians from "../creator-groups/Musicians.vue";
import VideoCreators from "../creator-groups/VideoCreators.vue";
import Podcasters from "../creator-groups/Podcasters.vue";
import Photographers from "../creator-groups/Photographers.vue";
import { computed, nextTick } from "@vue/runtime-core";

const { t } = useI18n();

const creatorGroups = ref([
  {
    label: () => t("home.fourthSection.creatorGroups.teachers"),
    isActive: false,
    comp: () => Teachers,
    icon: "/icons/creators/teacher.png",
  },
  {
    label: () => t("home.fourthSection.creatorGroups.musicians"),
    isActive: false,
    comp: () => Musicians,
    icon: "/icons/creators/note.png",
  },
  {
    label: () => t("home.fourthSection.creatorGroups.videoCreators"),
    isActive: false,
    comp: () => VideoCreators,
    icon: "/icons/creators/camera.png",
  },
  {
    label: () => t("home.fourthSection.creatorGroups.visualArtists"),
    isActive: false,
    comp: () => VisualArtists,
    icon: "/icons/creators/pallete.png",
  },
  {
    label: () => t("home.fourthSection.creatorGroups.podcasters"),
    isActive: true,
    comp: () => Podcasters,
    icon: "/icons/creators/camera.png",
  },
  {
    label: () => t("home.fourthSection.creatorGroups.photographers"),
    isActive: false,
    comp: () => Photographers,
    icon: "/icons/creators/photo.png",
  },
]);

const activeCreatorGroup = computed(() =>
  creatorGroups.value.find((group) => group.isActive)
);
const direction = ref("left" as "left" | "right");
const setActiveGroup = (group) => {
  creatorGroups.value.forEach((group) => (group.isActive = false));
  group.isActive = true;
};
const nextGroup = computed(() => {
  const index = creatorGroups.value.indexOf(activeCreatorGroup.value as any);
  const nextIndex = index + 1 < creatorGroups.value.length ? index + 1 : 0;
  return creatorGroups.value[nextIndex];
});
const previousGroup = computed(() => {
  const index = creatorGroups.value.indexOf(activeCreatorGroup.value as any);
  const nextIndex = index === 0 ? creatorGroups.value.length - 1 : index - 1;
  return creatorGroups.value[nextIndex];
});
const setNextActive = () => {
  direction.value = "right";
  nextTick(() => setActiveGroup(nextGroup.value));
};
const setPreviousActive = () => {
  direction.value = "left";
  nextTick(() => setActiveGroup(previousGroup.value));
};
</script>
<template>
  <Section>
    <div>
      <div class="left">
        <div class="inner">
          <h2>{{ t("home.fourthSection.header") }}</h2>
          <p>{{ t("home.fourthSection.description") }}</p>
        </div>
      </div>
    </div>
    <div>
      <div class="right">
        <button
          :aria-label="previousGroup.label()"
          data-balloon-pos="up"
          @click="setPreviousActive"
        >
          <img :src="previousGroup.icon" alt="" />
        </button>
        <SwipeArea
          :onSwipeLeft="setNextActive"
          :onSwipeRight="setPreviousActive"
        >
          <div class="group-wrapper">
            <SlideTransition :direction="direction">
              <component :is="activeCreatorGroup.comp()" />
            </SlideTransition>
            <span class="description">{{ activeCreatorGroup.label() }}</span>
          </div>
        </SwipeArea>
        <div class="dots">
          <button
            v-for="group in creatorGroups"
            class="dot"
            :aria-label="`select ${group.label()}`"
            :key="group.label()"
            @click="() => setActiveGroup(group)"
            :class="{ active: group.label() === activeCreatorGroup.label() }"
          />
        </div>
        <button
          :aria-label="nextGroup.label()"
          data-balloon-pos="up"
          @click="setNextActive"
        >
          <img :src="nextGroup.icon" alt="" />
        </button>
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
        v-for="group in creatorGroups"
        :key="group.label()"
        :is="group.comp()"
      />
    </div>
  </client-only>
</template>

<style scoped lang="scss">
section {
  content-visibility: auto;
  contain-intrinsic-size: 1200px;

  padding-top: 168px;

  @media (max-width: 950px) {
    flex-direction: column;
    padding-top: 96px;
  }
}

.left {
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 950px) {
    width: 100%;
    padding: 0 32px 64px 32px;
    justify-content: center;
  }

  .inner {
    width: 368px;
    @media (max-width: 950px) {
      width: auto;
    }

    p {
      margin-top: 32px;
      margin-bottom: 56px;
      @media (max-width: 950px) {
        margin-top: 24px;
        margin-bottom: 32px;
      }
    }
  }
}

.right {
  background: #ab84aa;
  width: 100%;
  height: 800px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: inset 0 0 100px 22px rgba(255, 255, 255, 0.2);
  @media (max-width: 950px) {
    width: 100%;
    padding: 48px 32px;
    flex-direction: column;
    justify-content: center;
    height: unset;
  }

  .dots {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 24px;
    @media (min-width: 950px) {
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
        background: var(--white);
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

  button {
    width: 56px;
    height: 56px;
    background: #ffffff;
    border-radius: 18px;
    border: none;
    position: relative;
    z-index: 1;
    cursor: pointer;
    @media (max-width: 950px) {
      display: none;
    }

    img {
      width: 24px;
      height: 24px;
    }

    &:focus {
      outline: none;
    }
  }

  .group-wrapper {
    @media (max-width: 950px) {
      width: auto;
      max-width: 300px;
      position: relative;
    }

    ::v-deep {
      img,
      video {
        box-shadow: 0 50px 200px 80px rgb(0 0 0 / 50%);
        border-radius: 26px;
        height: 442px;

        @media (max-width: 950px) {
          width: 100%;
        }

        @media (max-height: 750px) {
          height: 550px !important;
          width: 253px !important;
        }

        @media (max-height: 670px) {
          height: 433px !important;
          width: 244px !important;
        }

        @media (max-height: 600px) {
          height: 384px !important;
          width: 216px !important;
        }
      }
    }

    .description {
      display: block;
      font-size: 16px;
      color: #ffffff;
      opacity: 72%;
      margin-top: 40px;
      text-align: center;
      transition: 250ms ease;
      @media (max-width: 950px) {
        margin-top: 24px;
      }
    }
  }
}
</style>

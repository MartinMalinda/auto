<script setup lang="ts">
import { ref } from "@vue/reactivity";
import { useI18n } from "vue-i18n";
import Intersect from "vue-intersect";

const { t } = useI18n();
const inViewport = ref(false);
</script>
<template>
  <Intersect
    @enter="() => (inViewport = true)"
    @leave="() => (inViewport = false)"
  >
    <Section
      class="build-community section-spacing"
      :class="{ animate: inViewport }"
    >
      <div>
        <div class="left">
          <div class="collage">
            <div class="emoji-girl">
              <Image
                alt="girl emoji"
                src="/emoji-girl-2.png"
                :width="66"
                :srcset="['1x', '2x']"
              />
            </div>
            <div class="cyan">
              <Video
                src="singer-crop.mp4"
                :width="230"
                style="height: 291px"
                class="singer-video"
              />
            </div>
            <div class="grey">
              <Image
                alt="yellow"
                src="/final/disk.png"
                :width="270"
                :srcset="['1x', '2x']"
              />
            </div>
            <div class="lock-area">
              <svg
                viewBox="0 0 23 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.24">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.58585 10.4553H19.8473C21.3441 10.4553 22.5575 11.6687 22.5575 13.1656V24.0065C22.5575 25.5033 21.3441 26.7168 19.8473 26.7168H3.58585C2.08902 26.7168 0.87561 25.5033 0.87561 24.0065V13.1656C0.87561 11.6687 2.08903 10.4553 3.58585 10.4553ZM14.4269 18.5861C14.4269 20.0829 13.2135 21.2964 11.7167 21.2964C10.2199 21.2964 9.00644 20.0829 9.00644 18.5861C9.00644 17.0893 10.2199 15.8759 11.7167 15.8759C13.2135 15.8759 14.4269 17.0893 14.4269 18.5861Z"
                    fill="#999999"
                  />
                  <path
                    d="M16.4592 7.06763V7.2936C16.4716 5.98907 15.9889 4.73279 15.1173 3.80103C14.2457 2.86927 13.0565 2.33832 11.8113 2.32495H11.7164C10.4712 2.31197 9.27203 2.81764 8.38262 3.73077C7.49321 4.64389 6.9864 5.8897 6.97363 7.19423V7.06763"
                    stroke="#999999"
                    stroke-width="2.71024"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
              <Button class="subscribe-button">{{
                t("home.thirdSection.subscribe")
              }}</Button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="right">
          <h2>{{ t("home.thirdSection.header") }}</h2>
          <p>{{ t("home.thirdSection.description") }}</p>
        </div>
      </div>
    </Section>
  </Intersect>
</template>

<style scoped lang="scss">
.build-community {
  @media (max-width: 950px) {
    flex-direction: column-reverse;
    padding-right: 32px;
    padding-left: 32px;
  }

  &.animate {
    // display: none;

    .emoji-girl {
      animation: 2s appear-in forwards;
      animation-delay: 0.5s;
    }

    .grey {
      animation: 2s appear-in forwards;
      animation-delay: 0.8s;
    }

    .cyan {
      animation: 2s appear-in forwards;
      animation-delay: 1.2s;
    }

    .lock-area {
      transform-origin: 50% 50%;
      animation: 0.7s pulse-once;
      animation-delay: 1.5s;
    }
  }
}

.singer-video {
  @media (max-width: 950px) {
    transform: scale(0.8, 0.8);
  }
}

.left {
  @media (max-width: 950px) {
    width: 100%;
  }
}

.collage {
  position: relative;
  width: 470px;
  @media (max-width: 950px) {
    margin-right: 0;
    width: 100%;
  }

  img {
    border-radius: var(--border-radius);
  }

  .cyan {
    opacity: 0;

    position: relative;
    top: -70px;
    left: -40px;
    @media (max-width: 950px) {
      top: unset;
      left: unset;
    }

    ::v-deep {
    }
    .video {
      width: 55%;
    }
  }
}

.collage .emoji-girl {
  opacity: 0;

  background: var(--light-grey);
  width: 66px;
  border-radius: var(--border-radius);
  position: absolute;
  right: 100px;
  @media (max-width: 950px) {
    display: none;
  }
}

.collage .grey {
  opacity: 0;

  display: flex;
  justify-content: center;
  position: relative;
  top: 35px;
  @media (max-width: 950px) {
    top: unset;
    justify-content: flex-end;
    right: -12%;
    top: -20px;
    transform: scale(0.65, 0.65);
  }
  img {
    @media (max-width: 950px) {
      width: 60%;
    }
  }
}

.lock-area {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: var(--white);
  height: 260px;
  width: 360px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 32px 64px rgba(0, 0, 0, 0.12);
  z-index: 3;
  border-radius: var(--border-radius);
  @media (max-width: 950px) {
    left: 65%;
    width: 75%;
    height: 40%;
  }

  svg {
    margin-bottom: 16px;
    width: 32px;
    @media (max-width: 950px) {
      width: 24px;
    }
  }
}

.subscribe-button {
  width: 230px;
  padding: calc(var(--space) * 3) calc(var(--space) * 2);
  @media (max-width: 950px) {
    font-size: 9px;
    width: 70%;
    padding: calc(var(--space) * 2) calc(var(--space) * 2);
    border-radius: 9.48584px;
  }
}

.right {
  max-width: 368px;
  @media (max-width: 950px) {
    padding-bottom: 64px;
  }
}

.right p {
  margin: 0;
  padding-top: 32px;
  @media (max-width: 950px) {
    padding-top: 24px;
  }
}
</style>

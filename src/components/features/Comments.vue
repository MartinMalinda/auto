<script setup lang="ts">
import { ref } from "@vue/reactivity";
import { onMounted, onUnmounted } from "@vue/runtime-core";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const commentsQueue = [
  {
    id: 1,
    image: "/people/amy.png",
    time: "4h",
    authorName: t("home.sixthSection.comments.1.name"),
    text: t("home.sixthSection.comments.1.text"),
  },
  {
    id: 2,
    image: "/people/natalia.png",
    time: "4h",
    authorName: t("home.sixthSection.comments.2.name"),
    text: t("home.sixthSection.comments.2.text"),
  },
  {
    id: 3,
    image: "/people/carl.png",
    time: "4h",
    authorName: t("home.sixthSection.comments.3.name"),
    text: t("home.sixthSection.comments.3.text"),
  },
];
const comments = ref([] as typeof commentsQueue);

let interval: any;
onMounted(() => {
  interval = setInterval(() => {
    if (comments.value.length > 2) {
      comments.value = [];
    } else {
      comments.value.unshift({
        ...commentsQueue[comments.value.length],
        id: Math.random(),
      });
    }
  }, 1400);
});
onUnmounted(() => clearInterval(interval));
</script>

<template>
  <div>
    <div class="phone">
      <div class="fake-btn">
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.9791 5.94531H1.9126"
            stroke="#999999"
            stroke-width="2.41995"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M5.94585 9.97861L1.9126 5.94536L5.94585 1.91211"
            stroke="#999999"
            stroke-width="2.41995"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <Image
        class="main-img"
        alt="landscape photo"
        :width="252"
        :srcset="['1x', '2x']"
        src="/earth.png"
      />
      <h3>
        {{ t("home.sixthSection.post.header") }}
      </h3>
      <div class="time">{{ t("home.sixthSection.post.sunday") }} 1:20</div>
      <AppearGroupTransition :items="comments" v-slot="{ item: comment }">
        <Comment
          :imageSrc="comment.image"
          :time="comment.time"
          :authorName="comment.authorName"
          :text="comment.text"
        />
      </AppearGroupTransition>
      <div class="add-comment-button">
        <span>Add comment</span>
        <strong>Add</strong>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.phone {
  background: var(--white);
  width: 302px;
  height: 650px;
  position: relative;
  padding: calc(var(--space) * 3);
  border-radius: 40px;
  overflow: hidden;
  box-shadow: 0px -177px 137px 157px rgba(241, 146, 141, 0.08),
    0px 199px 189px 32px rgba(108, 93, 210, 0.12);

  @media (max-height: 750px) {
    // height: 550px;
    // width: 253px;

    transform: scale(0.85, 0.85) translate(-50%, 0%);
    transform-origin: 0% 0%;
    position: absolute;
    top: 0%;
    left: 50%;

    .main-img {
      height: 250px;
      object-fit: cover;
    }
  }

  @media (max-height: 670px) {
    transform: scale(0.82, 0.82) translate(-50%, 0%);
  }

  @media (max-height: 600px) {
    transform: scale(0.73, 0.73) translate(-50%, 0%);
  }
}

.fake-btn {
  width: 32px;
  height: 32px;
  background: #f3f3f3;
  border-radius: 9.6798px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
}

.phone img {
  max-width: 100%;
  height: 275px;
  border-radius: var(--border-radius);
}

.phone h3 {
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  padding-bottom: 0;
  margin-bottom: var(--space);
}

.phone .time {
  font-size: 12px;
  opacity: 0.56;
}

.add-comment-button {
  display: flex;
  justify-content: space-between;
  align-items: center;

  background: var(--light-grey);
  color: var(--dark-grey);
  font-size: 12px;

  height: 52px;
  padding: 0 calc(var(--space) * 2.5);
  border-radius: var(--border-radius-sm);
  z-index: 4;

  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  bottom: 24px;
  width: calc(100% - 32px);
}
</style>

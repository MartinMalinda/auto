<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

const Comment = defineComponent({
  props: {
    imageSrc: String,
    text: String,
    time: String,
    authorName: String,
  },
  setup(props) {},
});
export default Comment;
</script>

<template>
  <div class="comment">
    <div class="row">
      <Image
        :src="imageSrc"
        alt="author image"
        :width="26"
        :srcset="['1x', '2x']"
      />
      <div class="right">
        <div class="content">
          <div class="author-link">{{ authorName }}</div>
          &nbsp;
          <span class="text">
            {{ text }}
          </span>
        </div>
        <div class="options">
          {{ time }}&nbsp;
          <div class="reply-button">Reply</div>
          &nbsp;
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.comment {
  margin: calc(var(--space) * 2) 0;
}

.text {
  white-space: pre-line;
  word-break: break-word;
}

.row {
  display: flex;

  img {
    width: 26px;
    height: 26px;
    border-radius: var(--space);
  }
}

.right {
  margin-left: calc(var(--space) * 2);
  line-height: 1.5;

  .author-link {
    color: var(--dark);
    font-weight: bold;
    display: inline-block;
  }

  .content {
    font-size: 10px;
  }

  .options {
    margin-top: calc(var(--space) - 5px);
    font-size: 10px;
    display: flex;
    opacity: 0.56;
  }

  .reply-button,
  .toggle-replies-button {
    color: var(--dark-grey);
    font-size: 10px;
    font-weight: 500;
    margin-left: var(--space);
  }
}

.replies {
  margin-top: calc(var(--space) * 2);
  padding-left: 50px;
}

::v-deep {
  a {
    color: var(--dark-grey);
  }
}
</style>

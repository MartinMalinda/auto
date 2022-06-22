<script setup lang="ts">
import Notion from '~/components/logos/Notion.vue';
import Email from '~/components/logos/Email.vue';
import { ref } from '@vue/reactivity';

const isModalOpen = ref(false);

</script>
<template>
  <div class="info">
    <h2>Are you interested?</h2>
    {{ isModalOpen }}
    <div class="row">
      <a role="button" @click="() => isModalOpen = !isModalOpen">
        <Email />
        <h3>Let's talk</h3>
      </a>
      <a target="_blank" href="https://dynamic-fontina-af6.notion.site/Automation-55e70f45ddfd4e50a22892f7b189b220">
        <Notion />
        <h3>Read more</h3>
      </a>
    </div>
  </div>
</template>
<style lang="scss">
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
  
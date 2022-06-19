<script setup lang="ts">
import { onMounted, ref } from "@vue/runtime-dom";

let options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.2
}

const isVisible = ref(false);
const elRef = ref<HTMLElement>();

onMounted(() => {
  let observer = new IntersectionObserver(([entry]) => {
    isVisible.value = entry.isIntersecting;
  }, options);
  observer.observe(elRef.value as HTMLElement);
});
</script>
<template>
  <div ref="elRef" class="reviews" :class="{ visible: isVisible }">
    <div class="review-card">
      <div class="column">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Joe_Biden_presidential_portrait.jpg/640px-Joe_Biden_presidential_portrait.jpg" />
        <h3>Joe Biden</h3>
        <h4>USA s. r. o</h4>
      </div>
      <p>It was a great experience working with Martin. I can reccomend him to all of the future presidents of the
        United States of America.</p>
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
      <p>I have found that it is the small everyday deed of ordinary folks like Martin that keep the darkness at bay
      </p>
    </div>
  </div>
</template>

<style lang="scss">
$card-delay: 0.1s;

@keyframes zoom-in {
  0% {
    opacity: 0;
    transform: scale(0.8, 0.8);
    transform-origin: 50% 50%;
  }

  100% {
    opacity: 1;
    transform: scale(1, 1);
    transform-origin: 50% 50%;
  }
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

  &.visible {
    .review-card {
      animation: 1s zoom-in forwards;
      animation-delay: $card-delay;

      &:nth-child(2) {
        animation-delay: $card-delay * 2;
      }

      &:nth-child(3) {
        animation-delay: $card-delay * 3;
      }

      &:nth-child(4) {
        animation-delay: $card-delay * 4;
      }

      &:nth-child(5) {
        animation-delay: $card-delay * 5;
      }
    }
  }

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
  opacity: 0;

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

  h3,
  h4 {
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
</style>

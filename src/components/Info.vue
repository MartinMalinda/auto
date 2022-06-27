<script setup lang="ts">
import Notion from '~/components/logos/Notion.vue';
import Email from '~/components/logos/Email.vue';
import { ref } from '@vue/reactivity';
import { onMounted, Teleport } from '@vue/runtime-core';
import SlideTransition from '~/components/transitions/SlideTransition.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const isModalOpen = ref(false);
const infoElRef = ref<HTMLElement>();
const showCopyTooltip = ref(false);

const copy = () => {
  navigator.clipboard.writeText('malindacz@gmail.com');
  showCopyTooltip.value = true;
  setTimeout(() => showCopyTooltip.value = false, 1500);
};

onMounted(() => {
  infoElRef.value?.addEventListener('click', event => {
    isModalOpen.value = false;
  });
});

</script>
<template>
  <div ref="infoElRef" class="info">
    <Teleport to="body">
      <SlideTransition duration="quick">
        <div v-if="isModalOpen" class="contact-modal">
          <button @click="() => isModalOpen = false" class="close">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="m18.7 6.7-1.4-1.4-5.3 5.3-5.3-5.3-1.4 1.4 5.3 5.3-5.3 5.3 1.4 1.4 5.3-5.3 5.3 5.3 1.4-1.4-5.3-5.3z" />
            </svg>
          </button>
          <h3>{{ t('info.letsTalk') }}</h3>
          <div class="input-row">
            <input readonly type="email" id="email" value="malindacz@gmail.com" />
            <div class="copy-wrap">
              <button @click="copy" title="copy email">
                <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 457 457">
                  <path
                    d="m421.5 207-85.8 85.8a121.3 121.3 0 0 1-171.5 0 121.2 121.2 0 0 1-18.4-24.4l39.8-39.9c2-1.9 4.3-3 6.5-4.3a59.7 59.7 0 0 0 15 25.8 60.7 60.7 0 0 0 85.7 0l85.8-85.8a60.7 60.7 0 0 0-85.8-85.8L262.3 109a152.2 152.2 0 0 0-77.3-8.4l65-65a121.3 121.3 0 0 1 171.5 171.6zM194.7 348.2l-30.5 30.5a60.8 60.8 0 0 1-85.8-85.8l85.8-85.7A60 60 0 0 1 265 232.8c2.2-1.3 4.5-2.4 6.4-4.3l39.9-39.8c-5.1-8.7-11-17-18.5-24.5a121.3 121.3 0 0 0-171.5 0L35.5 250a121.3 121.3 0 0 0 171.6 171.5l65-65a152 152 0 0 1-77.4-8.4z" />
                </svg>
              </button>
              <SlideTransition>
                <div style="position: absolute;" v-if="showCopyTooltip">
                  <small>{{ t('copied') }}</small>
                </div>
              </SlideTransition>
            </div>
          </div>
          <div class="icons ui container"><a target="_blank" href="https://medium.com/@martinmalinda"><svg role="img"
                aria-label="Medium icon" viewBox="0 0 256 208" version="1.1" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid">
                <g>
                  <path
                    d="M177.735242,1.67620228 C173.837865,-0.18165739 170.650604,1.69271659 170.650604,5.85432226 L170.650604,171.360719 L241.794244,205.322394 C249.622026,209.120685 255.971777,206.478396 255.971777,199.542386 L255.971777,40.1793119 C255.971777,39.5187396 255.55892,38.9407388 254.94789,38.6104526 L177.743499,1.78354529 L177.743499,1.70097375 L177.735242,1.67620228 L177.735242,1.67620228 Z"
                    fill="#32FC8D"></path>
                  <path
                    d="M85.3211734,130.636435 L166.488998,4.73960646 C168.784487,1.18903019 173.837865,-0.214686007 177.718728,1.6018879 L255.038719,38.5113668 C255.534148,38.7590814 255.715806,39.3370822 255.426805,39.7499399 L170.642347,171.377233 L85.3211734,130.652949 L85.3211734,130.636435 L85.3211734,130.636435 Z"
                    fill="#0BE370"></path>
                  <path
                    d="M11.8077304,3.9221482 C5.31760724,0.825715411 3.1129471,3.12946141 6.91949514,9.04158375 L85.3211734,130.636435 L170.642347,171.360719 L85.5110879,39.3040535 C85.3872306,39.114139 85.2138304,38.9572531 85.0156587,38.8581672 L11.8077304,3.93040535 L11.8077304,3.9221482 L11.8077304,3.9221482 Z"
                    fill="#14C767"></path>
                  <path
                    d="M85.3211734,199.476329 C85.3211734,206.412338 80.0118233,209.550057 73.513443,206.445367 L7.08463822,174.737895 C3.18726149,172.888293 0,167.967029 0,163.797166 L0,8.38101142 C0,2.83220386 4.25243436,0.32202901 9.45444145,2.8074324 L84.8670299,38.8086243 C85.1477731,38.9324816 85.3211734,39.2049677 85.3211734,39.5022252 L85.3211734,199.4433 L85.3211734,199.476329 L85.3211734,199.476329 Z"
                    fill="#00AB6C"></path>
                </g>
              </svg> </a><a target="_blank" href="https://twitter.com/martinmalindacz"><svg role="img"
                aria-label="Twitter icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px" y="0px" width="430.117px" height="430.117px" viewBox="0 0 430.117 430.117"
                style="enable-background:new 0 0 430.117 430.117;" xml:space="preserve">
                <g>
                  <path id="Twitter__x28_alt_x29_" d="M381.384,198.639c24.157-1.993,40.543-12.975,46.849-27.876
            		c-8.714,5.353-35.764,11.189-50.703,5.631c-0.732-3.51-1.55-6.844-2.353-9.854c-11.383-41.798-50.357-75.472-91.194-71.404
            		c3.304-1.334,6.655-2.576,9.996-3.691c4.495-1.61,30.868-5.901,26.715-15.21c-3.5-8.188-35.722,6.188-41.789,8.067
            		c8.009-3.012,21.254-8.193,22.673-17.396c-12.27,1.683-24.315,7.484-33.622,15.919c3.36-3.617,5.909-8.025,6.45-12.769
            		C241.68,90.963,222.563,133.113,207.092,174c-12.148-11.773-22.915-21.044-32.574-26.192
            		c-27.097-14.531-59.496-29.692-110.355-48.572c-1.561,16.827,8.322,39.201,36.8,54.08c-6.17-0.826-17.453,1.017-26.477,3.178
            		c3.675,19.277,15.677,35.159,48.169,42.839c-14.849,0.98-22.523,4.359-29.478,11.642c6.763,13.407,23.266,29.186,52.953,25.947
            		c-33.006,14.226-13.458,40.571,13.399,36.642C113.713,320.887,41.479,317.409,0,277.828
            		c108.299,147.572,343.716,87.274,378.799-54.866c26.285,0.224,41.737-9.105,51.318-19.39
            		C414.973,206.142,393.023,203.486,381.384,198.639z"></path>
                </g>
              </svg> </a><a target="_blank" href="https://github.com/martinmalinda"><svg role="img"
                aria-label="Github icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M512 0C229.25 0 0 229.25 0 512c0 226.25 146.688 418.125 350.156 485.812 25.594 4.688 34.938-11.125 34.938-24.625 0-12.188-0.469-52.562-0.719-95.312C242 908.812 211.906 817.5 211.906 817.5c-23.312-59.125-56.844-74.875-56.844-74.875-46.531-31.75 3.53-31.125 3.53-31.125 51.406 3.562 78.47 52.75 78.47 52.75 45.688 78.25 119.875 55.625 149 42.5 4.654-33 17.904-55.625 32.5-68.375C304.906 725.438 185.344 681.5 185.344 485.312c0-55.938 19.969-101.562 52.656-137.406-5.219-13-22.844-65.094 5.062-135.562 0 0 42.938-13.75 140.812 52.5 40.812-11.406 84.594-17.031 128.125-17.219 43.5 0.188 87.312 5.875 128.188 17.281 97.688-66.312 140.688-52.5 140.688-52.5 28 70.531 10.375 122.562 5.125 135.5 32.812 35.844 52.625 81.469 52.625 137.406 0 196.688-119.75 240-233.812 252.688 18.438 15.875 34.75 47 34.75 94.75 0 68.438-0.688 123.625-0.688 140.5 0 13.625 9.312 29.562 35.25 24.562C877.438 930 1024 738.125 1024 512 1024 229.25 794.75 0 512 0z">
                </path>
              </svg> </a><a target="_blank" href="https://www.linkedin.com/in/martin-malinda-58b03253/"><svg role="img"
                aria-label="LinkedIn icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px" y="0px" width="430.117px" height="430.117px" viewBox="0 0 430.117 430.117"
                style="enable-background:new 0 0 430.117 430.117;" xml:space="preserve">
                <g>
                  <path id="LinkedIn" d="M430.117,261.543V420.56h-92.188V272.193c0-37.271-13.334-62.707-46.703-62.707
            		c-25.473,0-40.632,17.142-47.301,33.724c-2.432,5.928-3.058,14.179-3.058,22.477V420.56h-92.219c0,0,1.242-251.285,0-277.32h92.21
            		v39.309c-0.187,0.294-0.43,0.611-0.606,0.896h0.606v-0.896c12.251-18.869,34.13-45.824,83.102-45.824
            		C384.633,136.724,430.117,176.361,430.117,261.543z M52.183,9.558C20.635,9.558,0,30.251,0,57.463
            		c0,26.619,20.038,47.94,50.959,47.94h0.616c32.159,0,52.159-21.317,52.159-47.94C103.128,30.251,83.734,9.558,52.183,9.558z
            		 M5.477,420.56h92.184v-277.32H5.477V420.56z"></path>
                </g>
              </svg> </a></div>
        </div>
      </SlideTransition>
    </Teleport>
    <h2>{{ t('info.areYouInterested') }}</h2>
    <div class="row">
      <a role="button" @click.stop="() => isModalOpen = !isModalOpen">
        <Email />
        <h3>{{ t('info.letsTalk') }}</h3>
      </a>
      <a target="_blank" href="https://dynamic-fontina-af6.notion.site/Automation-55e70f45ddfd4e50a22892f7b189b220">
        <Notion />
        <h3>{{ t('info.readMore') }}</h3>
      </a>
    </div>
  </div>
</template>
<style lang="scss">
.contact-modal {
  position: fixed;
  z-index: 100;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 500px;
  height: 400px;
  max-width: calc(100vw - 2rem);
  border-radius: 2rem;
  padding: 3rem;
  background: white;
  box-shadow: inset 0 0 40px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .icons {
    display: flex;
    align-items: center;
    margin-top: 1rem;

    svg {
      max-width: 100%;
      max-height: 40px;
    }

    a {
      width: 30px;

      &:not(:last-child) {
        margin-right: 1rem;
      }
    }
  }

  .close {
    background: transparent;
    border: 0;
    position: absolute;
    right: 1rem;
    top: 1rem;
    cursor: pointer;

    svg {
      width: 30px;
      height: 30px;
    }
  }

  .input-row {
    display: flex;

    button {
      height: 100%;
      padding: 0 0.5rem;
      border: 1px solid rgba(0, 0, 0, 0.09);
      border-left: 0;
      background: #0000000c;
      margin: 0;
    }

    small {
      font-weight: 300;
    }

    svg {
      width: 2rem;
      height: 1.5rem;
    }

    input {
      display: block;
      margin: 0;
      padding: 0.5rem 1rem;
      border: 1px solid rgba(0, 0, 0, 0.09);
      display: block;
      font-size: 1.1rem;
      border-radius: 0;
    }
  }

}

.info {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  z-index: 500;

  h2 {
    margin-bottom: 5rem;
  }

  h3 {
    margin-bottom: 0;
  }

  .row {
    display: flex;
    position: relative;
    z-index: 500;

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
      background-color: white;
      ;
      border-radius: 2rem;
      margin: 1rem;
      text-decoration: none;
      color: black;
      transition: 0.3s transform;
      position: relative;
      z-index: 100;

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

    @media (max-width: 380px) {
      a {
        width: 140px;
        padding: 2rem 1rem;
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
  
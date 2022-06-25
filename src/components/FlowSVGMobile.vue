<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>
<template>
  <svg class="process-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none"
    viewBox="0 0 510 872">
    <defs>
      <path id="reuse-0" fill="#fff" d="M0 0h80v80H0z" />
    </defs>
    <circle class="step-1 step" cx="237" cy="122" r="88" fill="#fff" stroke="#000" stroke-opacity=".2"
      stroke-width="4" />
    <text text-anchor="middle" class="step step-1" x="320" y="240" fill="black" style="font: 500 26px Ubuntu">
      {{ t('process.consult') }}
    </text>
    <text text-anchor="middle" class="step step-2" x="320" y="260" fill="black" style="font: 400 16px Ubuntu;">
      {{ t('process.processes') }}
    </text>
    <text text-anchor="middle" class="step step-2" x="320" y="280" fill="black" style="font: 400 16px Ubuntu;">
      {{ t('process.yourBusinessModel') }}
    </text>
    <text text-anchor="middle" class="step step-2" x="320" y="300" fill="black" style="font: 400 16px Ubuntu;">
      {{ t('process.conversionFlow') }}
    </text>
    <text text-anchor="middle" class="step step-2" x="320" y="320" fill="black" style="font: 400 16px Ubuntu;">
      {{ t('process.yourTools') }}
    </text>
    <circle class="step-4 step" cx="237" cy="479" r="88" fill="#fff" stroke="#000" stroke-opacity=".2"
      stroke-width="4" />
    <text text-anchor="middle" class="step step-4" x="70" y="430" fill="black" style="font: 500 26px Ubuntu">{{
        t('process.integrate')
    }}</text>
    <text text-anchor="middle" class="step step-5" x="70" y="455" fill="black" style="font: 400 16px Ubuntu;">{{
        t('process.setUpTools')
    }}</text>
    <text text-anchor="middle" class="step step-5" x="70" y="477" fill="black" style="font: 400 16px Ubuntu;">{{
        t('process.wireItUp')
    }}</text>
    <text text-anchor="middle" class="step step-5" x="70" y="498" fill="black" style="font: 400 16px Ubuntu;">{{
        t('process.createDashboard')
    }}</text>
    <text text-anchor="middle" class="step step-5" x="70" y="519" fill="black" style="font: 400 16px Ubuntu;">{{
        t('process.writeCodeIfNeeded')
    }}</text>
    <path class="step step-2" fill="#B3B3B3"
      d="M238.5 214a1.5 1.5 0 1 0-3 0h3Zm-2.6 174c.6.6 1.5.6 2.1 0l9.6-9.5a1.5 1.5 0 0 0-2.2-2.1l-8.4 8.5-8.5-8.5a1.5 1.5 0 0 0-2.2 2.1l9.6 9.6Zm-.4-174v173h3V214h-3Z" />
    <circle class="step step-5" cx="237" cy="733.8" r="88" fill="#fff" stroke="#000" stroke-opacity=".2"
      stroke-width="4" />
    <text text-anchor="middle" class="step step-7" x="350" y="580" fill="black" style="font: 500 26px Ubuntu;">{{
        t('process.empower')
    }}</text>
    <text text-anchor="middle" class="step step-9" x="350" y="600" fill="black" style="font: 400 16px Ubuntu;">{{
        t('process.explainIntegrations')
    }}</text>
    <text text-anchor="middle" class="step step-9" x="350" y="620" fill="black" style="font: 400 16px Ubuntu;">{{
        t('process.makeItEasy')
    }}</text>
    <text text-anchor="middle" class="step step-9" x="350" y="640" fill="black" style="font: 400 16px Ubuntu;">{{
        t('process.preventVendorLock')
    }}</text>
    <path class="step step-4" fill="#B3B3B3"
      d="M238.5 571a1.5 1.5 0 1 0-3 0h3Zm-2.6 71.9c.6.6 1.5.6 2.1 0l9.6-9.6a1.5 1.5 0 0 0-2.2-2l-8.4 8.4-8.5-8.5a1.5 1.5 0 0 0-2.2 2.1l9.6 9.6Zm-.4-71.9v70.8h3V571h-3Z" />
    <path class="step step-3" fill="#FFBF00"
      d="m248.4 429.4-18 7.4a1.2 1.2 0 0 0-.6 1 1.2 1.2 0 0 0 .7 1.2l18 7c1.5.7 3.3.7 4.9 0l18-7a1.2 1.2 0 0 0 .7-1.1 1.2 1.2 0 0 0-.7-1.1l-18-7.4a6.7 6.7 0 0 0-5 0" />
    <path class="step step-3" fill="#26B5F8"
      d="M252.5 450v17.8c0 .8.9 1.4 1.7 1l20-7.7c.4-.2.7-.6.7-1v-17.9c0-.8-.8-1.4-1.6-1.1l-20 7.8c-.5.2-.8.6-.8 1" />
    <path class="step step-3" fill="#ED3049"
      d="m247.8 451-6 2.8-.5.3-12.5 6c-.8.3-1.8-.2-1.8-1.1v-16.7a1.1 1.1 0 0 1 .3-.8l.3-.2c.3-.2.8-.3 1.1-.1l19 7.5c1 .4 1 1.7.1 2.2Z" />
    <path class="step step-3" fill="#000" fill-opacity=".3"
      d="m247.8 451-6 2.8-14.5-12.3.3-.2c.3-.2.8-.3 1.1-.1l19 7.5c1 .4 1 1.7.1 2.2Z" />
    <path class="step step-3" fill="#E01E5A"
      d="M259.3 506.6a4 4 0 1 1-4-4h4v4Zm2 0a4 4 0 1 1 8.1 0v10.1a4 4 0 1 1-8 0v-10.1Z" />
    <path class="step step-3" fill="#36C5F0"
      d="M265.4 490.3a4 4 0 1 1 4-4v4h-4Zm0 2a4 4 0 1 1 0 8.2h-10.2a4 4 0 0 1 0-8.2h10.2Z" />
    <path class="step step-3" fill="#FF4A00"
      d="M231 537c0 1.2-.3 2.3-.7 3.4a9.6 9.6 0 0 1-6.7 0 9.6 9.6 0 0 1 0-6.8 9.6 9.6 0 0 1 6.7 0c.4 1.1.6 2.2.7 3.4Zm11.7-2.7h-9.3l6.6-6.6a16.1 16.1 0 0 0-3.8-3.7l-6.6 6.6v-9.4l-2.6-.2c-1 0-1.8 0-2.7.2v9.4l-6.6-6.6a15.9 15.9 0 0 0-3.8 3.7l6.6 6.6h-9.3l-.2 2.7c0 1 0 1.8.2 2.7h9.3l-6.6 6.6c1 1.4 2.3 2.7 3.8 3.7l6.6-6.6v9.4l2.6.2c1 0 1.8 0 2.7-.2v-9.4l6.6 6.6a16.1 16.1 0 0 0 3.8-3.7l-6.6-6.6h9.3l.3-2.7c0-1-.1-1.8-.3-2.7Z" />
    <path class="step step-3" fill="#2EB67D"
      d="M282.2 497.4a4 4 0 1 1 4 4.1h-4v-4Zm-2 0a4 4 0 1 1-8.1 0v-10.1a4 4 0 1 1 8 0v10.1Z" />
    <path class="step step-3" fill="#ECB22E"
      d="M276.1 513.7a4 4 0 1 1-4 4v-4h4Zm0-2a4 4 0 0 1 0-8.1h10.2a4 4 0 0 1 0 8h-10.2Z" />
    <g class="step step-3" fill="#000" clip-path="url(#a)">
      <path
        d="M193 425.6a459.4 459.4 0 0 0-9.4 1l-.5.6-.1.4v19.1l.3.6 2.5 3.5c2.4 3 2.5 3.3 3.5 3.3l4.4-.1 7.7-.5c8.9-.6 8.4-.5 9-1 .6-.5.5.4.5-11.2l-.1-10.8c-.2-.4-.5-.6-4.5-3.5-2.8-1.9-3-2-4.2-2l-9.1.6Zm10.2 1.3a44 44 0 0 1 3.7 2.7c-.1.1-17.5 1.2-18 1-.2 0-.5 0-.7-.2-.8-.5-2.8-2.2-2.8-2.3 0-.3 0-.3 7.7-.8l5.4-.4c3.2-.3 4.1-.3 4.7 0Zm5.5 5 .3.6v9c0 8.2 0 8.7-.2 9a1 1 0 0 1-.4.3c-.4.2-18.5 1.2-18.9 1l-.5-.2-.3-.3v-18l.4-.4c.2-.1 1.2-.2 5-.4l8.9-.6c5.5-.3 5.4-.3 5.7 0Z" />
      <path
        d="m203.8 434.9-2 .2a1 1 0 0 0-.4.7c0 .3 0 .3 1 .4l.4.1V444a442.2 442.2 0 0 1-5.8-8.7 40.5 40.5 0 0 0-4.6.4 1.3 1.3 0 0 0-.6 1c0 .1.3.2 1 .2h.5v11.2l-.7.2-.7.4v.6l2.3-.1c2.3-.1 2.6-.2 2.8-.7l.2-.3-.7-.3-.9-.2c-.1 0-.2-.3-.2-4.2v-4.2l2.8 4.3c3 4.6 3.3 5.1 3.7 5.3.6.3 2 .1 2.7-.3l.2-.2V436l.6-.1c.5-.1.8-.4.8-.8 0-.3 0-.4-.3-.3h-2Z" />
    </g>
    <g class="step step-3" clip-path="url(#b)">
      <path fill="#000"
        d="m202.1 510.2-4.2-1.3a.8.8 0 0 1-.5-.3.8.8 0 0 1 0-.7l9.4-32.3a.8.8 0 0 1 1-.6l4.2 1.3a.8.8 0 0 1 .5 1l-9.3 32.3a.8.8 0 0 1-.4.5.8.8 0 0 1-.7 0Zm-7.8-7.7 3-3.2a.8.8 0 0 0 0-1.2l-6.3-5.5 6.2-5.5a.8.8 0 0 0 .3-.9l-.2-.3-3-3.2a.8.8 0 0 0-.6-.2.8.8 0 0 0-.6.2l-9.9 9.3a.8.8 0 0 0 0 1.2l10 9.3a.8.8 0 0 0 1 0Zm22.5 0 9.9-9.3a.8.8 0 0 0 .3-.6.8.8 0 0 0-.3-.6l-10-9.3a.8.8 0 0 0-1 0l-3 3.2a.8.8 0 0 0 0 1.2l6.2 5.5-6.2 5.5a.8.8 0 0 0-.3.6.8.8 0 0 0 .2.6l3 3.2a.8.8 0 0 0 1 .2l.2-.2Z" />
    </g>
    <path class="step step-8" fill="#B3B3B3"
      d="M329 732.3a1.5 1.5 0 0 0 0 3v-3ZM235.9 31.1c.6.5 1.5.5 2.1 0l9.6-9.6a1.5 1.5 0 0 0-2.2-2.1l-8.4 8.5-8.5-8.5a1.5 1.5 0 1 0-2.2 2.1l9.6 9.6Zm93 704.2h8.8v-3H329v3Zm15.3 0h17.5v-3h-17.5v3Zm24 0h17.5v-3h-17.5v3Zm24 0h17.5v-3h-17.5v3Zm24 0h17.5v-3h-17.5v3Zm24 0h8.8v-3h-8.8v3Zm8.8 0c2.4 0 4.9-.3 7.1-1l-.8-2.9c-2 .6-4.1 1-6.3 1v3Zm12.2-3c4.3-2.4 7.8-6 10.1-10.2l-2.6-1.5c-2 3.8-5.2 7-9 9l1.5 2.6Zm12.2-15.3c.7-2.3 1-4.7 1-7.2h-3c0 2.2-.3 4.4-.9 6.4l3 .8Zm1-7.2v-7.7h-3v7.7h3Zm0-13.5v-15.5h-3v15.5h3Zm0-21.4v-15.5h-3V675h3Zm0-21.3v-15.5h-3v15.5h3Zm0-21.3v-15.5h-3v15.5h3Zm0-21.3v-15.6h-3V611h3Zm0-21.4v-15.5h-3v15.5h3Zm0-21.3v-15.5h-3v15.5h3Zm0-21.3v-15.5h-3V547h3Zm0-21.4v-15.5h-3v15.5h3Zm0-21.3v-15.5h-3v15.5h3Zm0-21.3v-15.5h-3V483h3Zm0-21.3V446h-3v15.6h3Zm0-21.4v-15.5h-3v15.5h3Zm0-21.3v-15.5h-3V419h3Zm0-21.3v-7.8h-3v7.8h3ZM238.5 30v-1.5h-3V30h3Zm0-2.5V26h-3v1.5h3Zm0-1.5c0-2.2.4-4.3 1-6.3l-3-.9c-.6 2.3-1 4.7-1 7.2h3Zm2.8-10.8c2-3.8 5.2-6.9 9-9l-1.5-2.6a25.6 25.6 0 0 0-10.1 10.2l2.6 1.4Zm13.4-10.8c2-.6 4.1-.9 6.4-.9v-3c-2.5 0-5 .4-7.2 1l.8 3Zm6.4-.9h7.5v-3H261v3Zm13.2 0h15.2v-3h-15.2v3Zm21 0h15.1v-3h-15.2v3Zm20.8 0h15.2v-3H316v3Zm21 0H352v-3h-15.2v3Zm20.8 0H373v-3h-15.2v3Zm20.9 0h15.2v-3h-15.2v3Zm20.9 0h15.2v-3h-15.2v3Zm20.9 0h15.2v-3h-15.2v3Zm20.9 0h7.6v-3h-7.6v3Zm7.6 0c2.2 0 4.3.3 6.3 1l.8-3c-2.2-.6-4.7-1-7.1-1v3Zm10.7 2.7c3.8 2.1 7 5.2 9 9l2.6-1.4a25.6 25.6 0 0 0-10.1-10.2l-1.5 2.6Zm10.8 13.5c.6 2 1 4.1 1 6.3h3c0-2.5-.4-5-1-7.2l-3 .9Zm1 6.3v7.8h3V26h-3Zm0 13.6V55h3V39.6h-3Zm0 21.3v15.5h3V61h-3Zm0 21.3v15.5h3V82.2h-3Zm0 21.4V119h3v-15.5h-3Zm0 21.3v15.5h3v-15.5h-3Zm0 21.3v15.5h3v-15.5h-3Zm0 21.3v15.6h3v-15.6h-3Zm0 21.4v15.5h3v-15.5h-3Zm0 21.3v15.5h3v-15.5h-3Zm0 21.3V247h3v-15.5h-3Zm0 21.3v15.6h3v-15.5h-3Zm0 21.4v15.5h3v-15.5h-3Zm0 21.3V311h3v-15.5h-3Zm0 21.3v15.5h3v-15.5h-3Zm0 21.4v7.7h3v-7.7h-3Z" />
    <text text-anchor="middle" class="step step-10" x="472" y="372" fill="black" style="font: 400 16px Ubuntu;">{{
        t('process.repeat')
    }}</text>
    <g filter="url(#c)">
      <g class="step step-1" clip-path="url(#d)">
        <path fill="#55ACEE"
          d="m259.8 132.6.8-4.3c2.6-1.8 7.6-5 9.7-10 .2.2 0 .3.4.3 1.6.4 3.1-1.6 3.6-4.2s-.5-5-2-5.4c.4-1 .9-2.5 1.3-4.5 1.2-6.4-2.8-15.2-15.3-17.7-11-2.1-19.5 4.3-20.7 10.7-.4 2-.6 3.5-.6 4.7-1.6 0-3.2 1.7-3.7 4.2-.5 2.7.5 5 2.1 5.4.4 0-.1-.1.2-.3 0 5.4 3.6 10.3 5.4 13l-.8 4c-9-.6-16.4 2.8-17.3 7.5l-.3 1.7c-.4 1.8 1.4 2.2 3.2 2.5l40.8 8c1.8.3 3.6.6 4-1.1l.3-1.8c.9-4.4-4.8-10-11.1-12.7Z" />
        <path fill="#269"
          d="m230.2 145 .9-4.3c2.6-1.8 7.5-5 9.6-10 .3.2 0 .2.4.3 1.6.3 3.2-1.6 3.7-4.3.5-2.6-.5-5-2.2-5.3.6-1 1-2.6 1.4-4.5 1.2-6.4-2.8-15.3-15.3-17.7-11-2.1-19.4 4.3-20.7 10.7-.4 1.9-.5 3.4-.6 4.7-1.5-.1-3.1 1.7-3.6 4.2-.5 2.6.4 5 2 5.4.4 0 0-.2.3-.3 0 5.4 3.6 10.3 5.3 13l-.8 4c-8.9-.6-16.3 2.8-17.3 7.4l-.3 1.8c-.3 1.8 1.5 2.1 3.2 2.5l40.9 8c1.8.3 3.6.6 3.9-1.2l.3-1.7c.9-4.4-4.8-10-11-12.7Z" />
      </g>
    </g>
    <g filter="url(#e)">
      <g class="step step-5" clip-path="url(#f)">
        <path fill="#FFAC33"
          d="m272.7 740.9-17.2-12.2-.9-25.3a2.2 2.2 0 0 0-4.1-1.1l-13.4 21.4-21 2a2.2 2.2 0 0 0-1 4l17.1 12.2.7 26a2.2 2.2 0 0 0 4.1 1.1l13.6-22.2 21-2a2.2 2.2 0 0 0 1-4Z" />
        <path fill="#FFCC4D"
          d="m223.4 753-4.5-3.2v-7.6a2.2 2.2 0 0 0-4.1-1.1l-3.9 6.6-5.4.5a2.2 2.2 0 0 0-1 4l4.4 3.1-.2 8.3a2.2 2.2 0 0 0 4.2 1.2l4-7.3 5.4-.5a2.2 2.2 0 0 0 1.1-4Zm3.2-49-4.6-3.3-.5-5.5a2.2 2.2 0 0 0-4-1.1l-3.3 4.6-5.6.5a2.2 2.2 0 0 0-1 4l4.5 3.2.5 5.6a2.2 2.2 0 0 0 4 1l3.3-4.5 5.6-.5a2.2 2.2 0 0 0 1-4Z" />
      </g>
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h28v29.2H0z" transform="translate(183 425)" />
      </clipPath>
      <clipPath id="b">
        <path fill="#fff" d="M0 0h44v35.2H0z" transform="translate(183 475)" />
      </clipPath>
      <clipPath id="d">
        <use xlink:href="#reuse-0" transform="rotate(11 -287.3 1103.7)" />
      </clipPath>
      <clipPath id="f">
        <use xlink:href="#reuse-0" transform="rotate(15 -2496.6 1135)" />
      </clipPath>
      <filter id="c" width="105.8" height="105.8" x="184.1" y="71.1" color-interpolation-filters="sRGB"
        filterUnits="userSpaceOnUse">
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
        <feOffset dy="2" />
        <feGaussianBlur stdDeviation="3" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.34902 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_0_1" />
        <feBlend in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape" />
      </filter>
      <filter id="e" width="110" height="110" x="182" y="680.8" color-interpolation-filters="sRGB"
        filterUnits="userSpaceOnUse">
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
        <feOffset dy="2" />
        <feGaussianBlur stdDeviation="3" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.34902 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_0_1" />
        <feBlend in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape" />
      </filter>
    </defs>
  </svg>
</template>

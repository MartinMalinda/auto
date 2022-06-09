<template>
  <div class="gradient"></div>
  <!-- <Image src="/new/redGradient.png" :srcset="['1x', '2x']" class="gradient" /> -->
</template>
<style lang="scss" scoped>
.gradient {
  outline: 1px solid transparent;
  width: 1px;
  height: 1px;
  box-shadow: 0px 0px 200px 350px rgba(241, 146, 141, 0.08);
  transform: scale(0.5, 0.7);
}
</style>

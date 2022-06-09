<script setup lang="ts">
</script>
<template>
  <main>
    <Header />
    <div class="content">
      <router-view />
    </div>
    <Footer />
  </main>
</template>
<style lang="scss" scoped>
.content {
  padding-bottom: 250px;
  @media (max-width: 950px) {
    padding-bottom: 126px;
  }
}
</style>

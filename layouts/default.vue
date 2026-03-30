<template>
  <div class="layout">
    <AppHeader />
    <main>
      <slot />
    </main>
    <AppFooter />
  </div>
  <ScrollToTop />
</template>

<script setup lang="ts">
import AppHeader from '~/components/layout/Header.vue'
import AppFooter from '~/components/layout/Footer.vue'
import ScrollToTop from '~/components/ui/ScrollToTop.vue';
</script>

<style scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}
</style>

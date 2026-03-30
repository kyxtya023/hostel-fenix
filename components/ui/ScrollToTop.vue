<template>
  <button
    class="scroll-top"
    :class="{ visible: isVisible }"
    @click="scrollToTop"
    aria-label="Наверх"
  >
    <Icon name="ph:arrow-up-bold" size="24" />
  </button>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isVisible = ref(false)

const handleScroll = () => {
  isVisible.value = window.scrollY > 500
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.scroll-top {
  position: fixed;
  right: 1.5rem;
  bottom: 2rem;
  width: 4.8rem;
  height: 4.8rem;
  border-radius: 50%;
  background: var(--glass-bg);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text);
  cursor: pointer;
  opacity: 0;
  visibility: hidden;
  transform: translateY(10px);
  transition: all 0.3s ease;
  z-index: 1000;
}

.scroll-top svg {
  transition: transform var(--transition);
}

.scroll-top:hover {
  border-color: var(--accent);
  color: var(--accent);
  transform: translateY(-2px);
}

.scroll-top:hover svg {
  transform: translateY(-2px);
}

.scroll-top.visible {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}
</style>
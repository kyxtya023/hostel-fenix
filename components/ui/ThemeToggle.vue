<template>
  <button
    class="theme-toggle"
    :class="{ 'is-light': !isDark }"
    :aria-label="isDark ? 'Включить светлую тему' : 'Включить тёмную тему'"
    @click="toggleTheme"
  >
    <span class="toggle-track">
      <span class="toggle-thumb">
        <Icon v-if="isDark" name="ph:moon-stars-fill" size="14" />
        <Icon v-else name="ph:sun-fill" size="14" />
      </span>
    </span>
  </button>
</template>

<script setup lang="ts">
import { useTheme } from '~/composables/useTheme'

const { isDark, toggleTheme } = useTheme()
</script>

<style scoped>
.theme-toggle {
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0.2rem;
  border-radius: 9999px;
  transition: outline var(--transition);
  outline: none;
}

.theme-toggle:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}

.toggle-track {
  width: 4.4rem;
  height: 2.4rem;
  background: var(--surface);
  border: 1px solid var(--border-strong);
  border-radius: 9999px;
  display: flex;
  align-items: center;
  padding: 0.2rem;
  transition: background var(--transition), border-color var(--transition);
  position: relative;
}

.theme-toggle:not(.is-light) .toggle-track {
  background: var(--accent-dim);
  border-color: var(--accent-glow);
}

.toggle-thumb {
  width: 1.8rem;
  height: 1.8rem;
  background: var(--accent);
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  transform: translateX(0);
  transition: transform var(--transition), background var(--transition);
  flex-shrink: 0;
}

.theme-toggle.is-light .toggle-thumb {
  transform: translateX(2rem);
  background: var(--accent);
}
</style>

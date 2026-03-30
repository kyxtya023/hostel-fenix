<template>
  <div class="error-page">
    <div class="error-content">
      <Icon name="ph:fire-fill" size="56" class="error-icon" />
      <h1 class="error-code">{{ error?.statusCode ?? 404 }}</h1>
      <p class="error-message">{{ error?.statusCode === 404 ? 'Страница не найдена' : 'Что-то пошло не так' }}</p>
      <a href="/" class="error-btn">Вернуться на главную</a>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ error: { statusCode: number; statusMessage?: string } | null }>()
</script>

<style scoped>
.error-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg);
  text-align: center;
  padding: 2rem;
}

.error-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
}

.error-icon { color: var(--accent); }

.error-code {
  font-family: 'Manrope', sans-serif;
  font-size: 10rem;
  font-weight: 800;
  color: var(--text);
  line-height: 1;
}

.error-message {
  font-size: 2rem;
  color: var(--text-muted);
}

.error-btn {
  margin-top: 1.6rem;
  padding: 1.4rem 3rem;
  background: var(--accent);
  color: #fff;
  border-radius: var(--radius-md);
  font-size: 1.6rem;
  font-weight: 700;
  transition: background 0.3s, transform 0.3s;
}

.error-btn:hover {
  background: var(--accent-light);
  transform: translateY(-2px);
}
</style>

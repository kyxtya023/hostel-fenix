<template>
  <section id="hero" class="hero">
    <div class="hero-bg" aria-hidden="true">
      <div class="blob blob-1" />
      <div class="blob blob-2" />
      <div class="blob blob-3" />
    </div>

    <div class="hero-img-overlay">
      <img
        src="/images/hero-bg.jpg"
        alt=""
        class="hero-bg-img"
        aria-hidden="true"
      />
    </div>

    <div class="container hero-inner">
      <div class="hero-content reveal">
        <div class="hero-badge">
          <Icon name="ph:map-pin-fill" size="14" />
          500 метров от МКАД
        </div>

        <h1 class="hero-title">
          Хостел Феникс<br />
          <span class="hero-title-accent"
            >10 минут<br />
            от метро Физтех</span
          >
        </h1>

        <p class="hero-subtitle">
          Недорогое проживание для гостей Москвы.<br />
          Комфортно, безопасно, чисто 24/7 — с первого дня.
        </p>

        <!-- <div class="hero-stats">
          <div class="hero-stat" v-for="stat in stats" :key="stat.label">
            <span class="hero-stat-value">{{ stat.value }}</span>
            <span class="hero-stat-label">{{ stat.label }}</span>
          </div>
        </div> -->

        <div class="hero-actions">
          <a href="tel:+79804107614" class="btn-primary">
            <Icon name="ph:phone-fill" size="18" />
            Позвонить сейчас
          </a>
          <a
            href="#rooms"
            class="btn-secondary"
            @click.prevent="scrollTo('#rooms')"
          >
            Посмотреть номера
            <Icon name="ph:arrow-right" size="18" />
          </a>
        </div>
      </div>

      <div class="hero-card glass-card reveal reveal-delay-3">
        <div class="hero-card-row">
          <Icon name="ph:clock-fill" size="20" class="hero-card-icon" />
          <div>
            <p class="hero-card-label">Заезд / Выезд</p>
            <p class="hero-card-value">Круглосуточный сервис</p>
          </div>
        </div>
        <div class="hero-card-divider" />
        <div class="hero-card-row">
          <Icon name="ph:currency-rub-fill" size="20" class="hero-card-icon" />
          <div>
            <p class="hero-card-label">Цена от</p>
            <p class="hero-card-value">450 ₽ / сутки</p>
          </div>
        </div>
        <div class="hero-card-divider" />
        <div class="hero-card-row">
          <Icon name="ph:broom-fill" size="20" class="hero-card-icon" />
          <div>
            <p class="hero-card-label">Включено</p>
            <p class="hero-card-value">Ежедневная уборка</p>
          </div>
        </div>
        <div class="hero-card-divider" />
        <div class="hero-card-row">
          <Icon name="ph:car-fill" size="20" class="hero-card-icon" />
          <div>
            <p class="hero-card-label">Включено</p>
            <p class="hero-card-value">Собственная парковка на 50 машин</p>
          </div>
        </div>
        <a href="tel:+79804107614" class="hero-card-cta">
          Забронировать место
        </a>
      </div>
    </div>

    <div class="scroll-hint" aria-hidden="true">
      <div class="scroll-line" />
      <span>Прокрутите</span>
    </div>
  </section>
</template>

<script setup lang="ts">
const stats = [
  { value: "24/7", label: "Работаем" },
  { value: "700₽", label: "Цена от" },
  { value: "5 мин", label: "До МКАД" },
  { value: "100+", label: "Гостей" },
];

const scrollTo = (href: string) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 100svh;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding-top: 7rem;
}

.hero-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  animation: float 12s ease-in-out infinite;
}

.blob-1 {
  width: 60rem;
  height: 60rem;
  background: var(--blur-shape-1);
  top: -20%;
  right: -10%;
  animation-delay: 0s;
}

.blob-2 {
  width: 40rem;
  height: 40rem;
  background: var(--blur-shape-2);
  bottom: 10%;
  left: -5%;
  animation-delay: -4s;
  animation-duration: 16s;
}

.blob-3 {
  width: 30rem;
  height: 30rem;
  background: var(--blur-shape-3);
  top: 30%;
  left: 30%;
  animation-delay: -8s;
  animation-duration: 20s;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0) scale(1);
  }
  33% {
    transform: translateY(-3rem) scale(1.05);
  }
  66% {
    transform: translateY(2rem) scale(0.97);
  }
}

.hero-img-overlay {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero-bg-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.08;
}

.dark .hero-bg-img {
  opacity: 0.08;
}
.light .hero-bg-img {
  opacity: 0.04;
}

.hero-inner {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  align-items: center;
  padding-top: 6rem;
  padding-bottom: 15rem;
}

@media (min-width: 1024px) {
  .hero-inner {
    grid-template-columns: 1fr 36rem;
    gap: 6rem;
  }
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.7rem 1.4rem;
  background: var(--accent-dim);
  border: 1px solid var(--accent-glow);
  border-radius: 9999px;
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--accent);
  margin-bottom: 2.4rem;
}

.hero-title {
  font-size: clamp(3.6rem, 7vw, 6.8rem);
  font-weight: 800;
  line-height: 1.1;
  color: var(--text);
  margin-bottom: 2rem;
}

.hero-title-accent {
  color: var(--accent);
  position: relative;
}

.hero-subtitle {
  font-size: clamp(1.6rem, 2vw, 1.9rem);
  color: var(--text-muted);
  line-height: 1.7;
  margin-bottom: 3.6rem;
}

.hero-stats {
  display: flex;
  gap: 2.4rem;
  flex-wrap: wrap;
  margin-bottom: 3.6rem;
}

.hero-stat {
  display: flex;
  flex-direction: column;
}

.hero-stat-value {
  font-family: "Manrope", sans-serif;
  font-size: 2.8rem;
  font-weight: 800;
  color: var(--accent);
  line-height: 1;
}

.hero-stat-label {
  font-size: 1.3rem;
  color: var(--text-muted);
  margin-top: 0.4rem;
}

.hero-actions {
  display: flex;
  align-items: center;
  gap: 1.6rem;
  flex-wrap: wrap;
}

.btn-primary {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1.4rem 2.8rem;
  background: var(--accent);
  color: #fff;
  border-radius: var(--radius-md);
  font-size: 1.6rem;
  font-weight: 700;
  transition:
    background var(--transition),
    transform var(--transition),
    box-shadow var(--transition);
}

.btn-primary:hover {
  background: var(--accent-light);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px var(--accent-glow);
}

.btn-secondary {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1.4rem 2.4rem;
  background: var(--surface);
  border: 1px solid var(--border-strong);
  color: var(--text);
  border-radius: var(--radius-md);
  font-size: 1.6rem;
  font-weight: 600;
  transition:
    background var(--transition),
    border-color var(--transition),
    transform var(--transition);
}

.btn-secondary:hover {
  background: var(--surface-hover);
  border-color: var(--accent);
  transform: translateY(-2px);
}

.hero-card {
  padding: 2.8rem;
  display: flex;
  flex-direction: column;
  gap: 0;
}

.hero-card-row {
  display: flex;
  align-items: center;
  gap: 1.4rem;
  padding: 1.6rem 0;
}

.hero-card-icon {
  color: var(--accent);
  flex-shrink: 0;
}

.hero-card-label {
  font-size: 1.2rem;
  color: var(--text-subtle);
  margin-bottom: 0.3rem;
}

.hero-card-value {
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--text);
}

.hero-card-divider {
  height: 1px;
  background: var(--border);
}

.hero-card-cta {
  display: block;
  margin-top: 2rem;
  padding: 1.4rem 2rem;
  background: var(--accent);
  color: #fff;
  border-radius: var(--radius-md);
  text-align: center;
  font-size: 1.5rem;
  font-weight: 700;
  transition:
    background var(--transition),
    box-shadow var(--transition);
}

.hero-card-cta:hover {
  background: var(--accent-light);
  box-shadow: 0 4px 16px var(--accent-glow);
}

.scroll-hint {
  position: absolute;
  bottom: 3rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  z-index: 1;
}

.scroll-line {
  width: 1px;
  height: 4rem;
  background: linear-gradient(to bottom, var(--accent), transparent);
  animation: scroll-pulse 2s ease-in-out infinite;
}

.scroll-hint span {
  font-size: 1.1rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--text-subtle);
}

@keyframes scroll-pulse {
  0%,
  100% {
    opacity: 1;
    transform: scaleY(1);
  }
  50% {
    opacity: 0.4;
    transform: scaleY(0.7);
  }
}
</style>

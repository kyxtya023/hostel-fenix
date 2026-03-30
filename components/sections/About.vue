<template>
  <section id="about" class="about section">
    <div class="container about-inner">
      <div class="about-image-wrap reveal">
        <div class="about-img-frame">
          <img
            src="/images/hero-bg.jpg"
            alt="Уютная зона отдыха хостела Феникс"
            class="about-img"
          />
          <div class="about-img-overlay" aria-hidden="true" />
        </div>
        <div class="about-badge glass-card">
          <Icon name="ph:shield-check-fill" size="22" class="badge-icon" />
          <div>
            <p class="badge-value">Безопасно</p>
            <p class="badge-label">Круглосуточная охрана</p>
          </div>
        </div>
      </div>

      <div class="about-content">
        <p class="section-label reveal">О хостеле</p>
        <h2 class="section-title reveal reveal-delay-1">
          Место, где рабочий<br />день начинается спокойно
        </h2>
        <p class="about-text reveal reveal-delay-2">
          Хостел «Феникс» — это не просто ночлег, это комфортная база для тех,
          кто приехал работать или путешествовать в Москве и области. Мы знаем,
          что важно людям, которые проводят в поездках дни и недели: чистота,
          тишина, надёжность и доступная цена.
        </p>
        <p class="about-text reveal reveal-delay-3">
          Наш хостел расположен всего в 10 минутах от метро Физтех. Здесь есть
          все необходимое: Новые удобные кровати и постельные принадлежности.
          Горячий душ и санузел в каждом комнате. Охраняемая парковка на 50
          машин.
        </p>

        <div class="about-highlights reveal reveal-delay-4">
          <div class="about-highlight" v-for="h in highlights" :key="h.text">
            <Icon
              name="ph:check-circle-fill"
              size="18"
              class="highlight-icon"
            />
            <span>{{ h.text }}</span>
          </div>
        </div>

        <a href="tel:+79804107614" class="btn-primary reveal reveal-delay-5">
          <Icon name="ph:phone-fill" size="16" />
          Узнать подробнее
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const highlights = [
  { text: "Чистые комфортные номера и уютные общие зоны." },
  { text: "Ежедневная уборка включена" },
  { text: "Охраняемая территория" },
  { text: "Рядом магазины и кафе" },
  { text: "Без лишних переплат" },
];
</script>

<style scoped>
.about-inner {
  display: grid;
  grid-template-columns: 1fr;
  gap: 6rem;
  align-items: center;
}

@media (min-width: 1024px) {
  .about-inner {
    grid-template-columns: 1fr 1fr;
  }
}

.about-image-wrap {
  position: relative;
}

.about-img-frame {
  border-radius: var(--radius-xl);
  overflow: hidden;
  position: relative;
}

@media (max-width: 1023.98px) {
  .about-img-frame {
    aspect-ratio: 4 / 3;
  }
}

@media (max-width: 420px) {
  .about-img-frame {
    aspect-ratio: 2 / 3;
  }
}

.about-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.about-img-frame:hover .about-img {
  transform: scale(1.04);
}

.about-img-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, var(--accent-dim), transparent 60%);
}

.about-badge {
  position: absolute;
  bottom: -2rem;
  right: -1rem;
  display: flex;
  align-items: center;
  gap: 1.2rem;
  padding: 1.6rem 2rem;
}

@media (min-width: 640px) {
  .about-badge {
    right: -3rem;
  }
}

.badge-icon {
  color: var(--accent);
}

.badge-value {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text);
}

.badge-label {
  font-size: 1.2rem;
  color: var(--text-muted);
}

.about-content {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.about-text {
  font-size: 1.65rem;
  color: var(--text-muted);
  line-height: 1.75;
  margin-bottom: 1.8rem;
}

.about-highlights {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 3.2rem;
}

.about-highlight {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.5rem;
  color: var(--text);
}

.highlight-icon {
  color: var(--accent);
  flex-shrink: 0;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1.4rem 2.8rem;
  background: var(--accent);
  color: #fff;
  border-radius: var(--radius-md);
  font-size: 1.6rem;
  font-weight: 700;
  width: fit-content;
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
</style>

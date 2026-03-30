<template>
  <section id="prices" class="prices section">
    <div class="container">
      <div class="prices-header reveal">
        <p class="section-label">Тарифы</p>
        <h2 class="section-title">Прозрачные цены<br /><span class="text-accent">без скрытых доплат</span></h2>
        <p class="section-desc">Выбирайте удобный формат проживания. Чем дольше — тем выгоднее.</p>
      </div>

      <div class="prices-grid">
        <div
          v-for="(plan, i) in plans"
          :key="plan.name"
          class="price-card glass-card reveal"
          :class="[`reveal-delay-${i + 1}`, { popular: plan.popular }]"
        >
          <div v-if="plan.popular" class="popular-ribbon">Выгоднее всего</div>
          <div class="price-card-header">
            <p class="plan-name">{{ plan.name }}</p>
            <div class="plan-price">
              <span class="plan-amount">{{ plan.price }}</span>
              <span class="plan-unit">₽ / {{ plan.period }}</span>
            </div>
            <p class="plan-subtitle">{{ plan.subtitle }}</p>
          </div>

          <ul class="plan-features">
            <li v-for="feat in plan.features" :key="feat">
              <Icon name="ph:check-circle-fill" size="16" class="check-icon" />
              {{ feat }}
            </li>
          </ul>

          <a href="tel:+79804107614" class="plan-cta" :class="{ 'cta-popular': plan.popular }">
            Забронировать
          </a>
        </div>
      </div>

      <p class="prices-note reveal">* Цены указаны ориентировочно. Итоговая стоимость уточняется при бронировании. Возможны скидки при долгосрочном проживании.</p>
    </div>
  </section>
</template>

<script setup lang="ts">
const plans = [
  {
    name: 'Койко-место',
    price: '700',
    period: 'сутки',
    subtitle: 'Место в общем номере',
    popular: false,
    features: [
      'Место в 6–8-местном номере',
      'Постельное бельё',
      'Wi-Fi',
      'Общая кухня',
      'Душ и туалет',
    ],
  },
  {
    name: 'Приватная комната',
    price: '1 400',
    period: 'сутки',
    subtitle: 'Отдельная комната',
    popular: true,
    features: [
      'Отдельная комната',
      'Замок на двери',
      'Постельное бельё',
      'Wi-Fi',
      'Рабочий стол',
      'Тихий этаж',
    ],
  },
  {
    name: 'Длительное',
    price: '550',
    period: 'сутки',
    subtitle: 'От 14 ночей',
    popular: false,
    features: [
      'Фиксированное место',
      'Скидка при заезде',
      'Wi-Fi',
      'Общая кухня',
      'Смена белья раз в неделю',
    ],
  },
]
</script>

<style scoped>
.text-accent { color: var(--accent); }

.prices-header {
  margin-bottom: 6rem;
}

.prices-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.4rem;
  align-items: start;
}

@media (min-width: 768px) {
  .prices-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 1200px) {
  .prices-grid { grid-template-columns: repeat(3, 1fr); align-items: stretch; }
}

.price-card {
  padding: 3.2rem;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.price-card.popular {
  border-color: var(--accent);
  box-shadow: 0 0 0 1px var(--accent-glow), 0 16px 48px rgba(255,106,0,0.2);
  background: linear-gradient(135deg, var(--glass-bg), var(--accent-dim));
}

.popular-ribbon {
  position: absolute;
  top: 1.6rem;
  right: -2rem;
  background: var(--accent);
  color: #fff;
  font-size: 1.2rem;
  font-weight: 700;
  padding: 0.5rem 3.5rem 0.5rem 1.5rem;
  transform: rotate(0deg);
  clip-path: polygon(0 0, 100% 0, 85% 100%, 0 100%);
}

.price-card-header {
  margin-bottom: 2.4rem;
}

.plan-name {
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 1.2rem;
}

.plan-price {
  display: flex;
  align-items: baseline;
  gap: 0.4rem;
  margin-bottom: 0.8rem;
}

.plan-amount {
  font-family: 'Manrope', sans-serif;
  font-size: 5rem;
  font-weight: 800;
  color: var(--text);
  line-height: 1;
}

.plan-unit {
  font-size: 1.6rem;
  color: var(--text-muted);
}

.plan-subtitle {
  font-size: 1.4rem;
  color: var(--text-muted);
}

.plan-features {
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  margin-bottom: 3rem;
  flex: 1;
}

.plan-features li {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.5rem;
  color: var(--text-muted);
}

.check-icon { color: var(--accent); flex-shrink: 0; }

.plan-cta {
  display: block;
  padding: 1.4rem 2rem;
  text-align: center;
  border: 1px solid var(--border-strong);
  border-radius: var(--radius-md);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text);
  transition: background var(--transition), border-color var(--transition), color var(--transition), box-shadow var(--transition);
}

.plan-cta:hover {
  background: var(--surface-hover);
  border-color: var(--accent);
}

.plan-cta.cta-popular {
  background: var(--accent);
  border-color: var(--accent);
  color: #fff;
}

.plan-cta.cta-popular:hover {
  background: var(--accent-light);
  box-shadow: 0 6px 20px var(--accent-glow);
}

.prices-note {
  margin-top: 3rem;
  font-size: 1.3rem;
  color: var(--text-subtle);
  text-align: center;
}
</style>

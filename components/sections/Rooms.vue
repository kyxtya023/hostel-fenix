<template>
  <section id="rooms" class="rooms section">
    <div class="container">
      <div class="rooms-header reveal">
        <div>
          <p class="section-label">Размещение</p>
          <h2 class="section-title">
            Размещение по<br /><span class="text-accent">числу мест</span>
          </h2>
        </div>
        <p class="section-desc">
          Современные номера на любой вкус. Выбирайте подходящий вариант — от
          уютного места в общем номере до комфортного размещения с друзьями.
        </p>
      </div>

      <div class="rooms-grid">
        <div
          v-for="(room, i) in rooms"
          :key="i"
          class="room-card glass-card reveal"
          :class="[`reveal-delay-${i + 1}`, { featured: room.featured }]"
        >
          <div class="room-header-block">
            <div class="bed-badge">{{ room.places }}</div>
            <span v-if="room.featured" class="room-badge">{{
              room.badge
            }}</span>
          </div>

          <div class="room-title-block">
            <h3 class="room-title">{{ room.title }}</h3>
            <p class="room-desc">{{ room.desc }}</p>
          </div>

          <ul class="room-features">
            <li v-for="feature in room.features" :key="feature">
              <Icon
                name="ph:check-circle-bold"
                size="16"
                class="feature-icon"
              />
              {{ feature }}
            </li>
          </ul>

          <div class="prices-container">
            <div class="price-block">
              <div class="price-label">До 7 дней</div>
              <div class="price-value">{{ room.prices.shortTerm }}</div>
              <div class="price-unit">/ ночь</div>
            </div>
            <div class="price-divider"></div>
            <div class="price-block">
              <div class="price-label">От 7 дней</div>
              <div class="price-value">{{ room.prices.mediumTerm }}</div>
              <div class="price-unit">/ ночь</div>
            </div>
            <div class="price-divider"></div>
            <div class="price-block">
              <div class="price-label">Месяц</div>
              <div class="price-value">{{ room.prices.longTerm }}</div>
              <div class="price-unit">/ месяц</div>
            </div>
          </div>

          <a
            href="tel:+79804107614"
            class="room-cta"
            :class="{ 'cta-featured': room.featured }"
          >
            Забронировать
            <Icon name="ph:arrow-right" size="16" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const rooms = [
  {
    places: "2 места",
    title: "2-местное размещение",
    desc: "Комфортный номер для двоих. Удобная кровать, отдельная ванная, всё для спокойного отдыха.",
    featured: false,
    badge: "Уютное",
    features: [
      "Отдельный номер",
      "Отдельный душ",
      "Рабочее место",
      "Свой холодильник"
    ],
    prices: {
      shortTerm: "800 ₽",
      mediumTerm: "600 ₽",
      longTerm: "17 500 ₽",
    },
  },
  {
    places: "4 места",
    title: "4-местное размещение",
    desc: "Идеально для компании друзей. Несколько зон отдыха, общая кухня, возможность готовить.",
    featured: false,
    badge: "Популярно",
    features: [
      "Просторный номер",
      "Общая кухня",
      "Душевая кабина",
      "Большой холодильник",
    ],
    prices: {
      shortTerm: "800 ₽",
      mediumTerm: "600 ₽",
      longTerm: "16 500 ₽",
    },
  },
  {
    places: "6–8 мест",
    title: "6–8 местное размещение",
    desc: "Многоместный номер для больших компаний. Отдельные кровати с занавесками, личные полки.",
    featured: true,
    badge: "Выгодно",
    features: [
      "Просторный номер",
      "Общая кухня",
      "Душевая кабина",
      "Большой холодильник",
    ],
    prices: {
      shortTerm: "800 ₽",
      mediumTerm: "500 ₽",
      longTerm: "13 500 ₽",
    },
  },
];
</script>

<style scoped>
.rooms-header {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 6rem;
}

@media (min-width: 1024px) {
  .rooms-header {
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
  }
}

.text-accent {
  color: var(--accent);
}

.rooms-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.4rem;
}

@media (min-width: 768px) {
  .rooms-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1200px) {
  .rooms-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.room-card {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: all var(--transition-slow);
  position: relative;
}

.room-card:hover {
  transform: translateY(-8px);
}

.room-card.featured {
  border-color: var(--accent-glow);
  box-shadow:
    0 0 20px rgba(255, 106, 0, 0.2),
    var(--shadow-lg);
}

.room-card.featured:hover {
  box-shadow:
    0 0 30px rgba(255, 106, 0, 0.4),
    var(--shadow-lg);
}

/* Header Block */
.room-header-block {
  position: relative;
  padding: 2rem 2.4rem 1.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--border);
}

.bed-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--accent), var(--accent-light));
  color: #fff;
  padding: 0.6rem 1.4rem;
  border-radius: 9999px;
  font-size: 1.3rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  box-shadow: 0 4px 15px rgba(255, 106, 0, 0.2);
}

.room-badge {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--accent);
  background: rgba(255, 106, 0, 0.1);
  padding: 0.5rem 1rem;
  border-radius: 6px;
  border: 1px solid rgba(255, 106, 0, 0.3);
}

.room-title-block {
  padding: 1.6rem 2.4rem;
}

.room-title {
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 0.8rem;
  line-height: 1.3;
}

.room-desc {
  font-size: 1.35rem;
  color: var(--text-muted);
  line-height: 1.6;
}

.room-features {
  padding: 0 2.4rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.room-features li {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 1.3rem;
  color: var(--text-muted);
}

.feature-icon {
  color: var(--accent);
  flex-shrink: 0;
}

.prices-container {
  margin: 2rem 2.4rem;
  display: grid;
  grid-template-columns: 1fr auto 1fr auto 1fr;
  gap: 0;
  align-items: center;
  background: rgba(255, 106, 0, 0.05);
  padding: 1.6rem;
  border-radius: var(--radius-md);
  border: 1px solid var(--border);
}

.price-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
}

.price-label {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-muted);
  text-align: center;
  letter-spacing: 0.03em;
}

.price-value {
  font-size: 1.7rem;
  font-weight: 800;
  color: var(--accent);
  font-family: "Manrope", sans-serif;
  letter-spacing: -0.02em;
}

.price-unit {
  font-size: 1rem;
  color: var(--text-muted);
}

.price-divider {
  width: 1px;
  height: 3.5rem;
  background: var(--border);
}

.room-cta {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  margin: 0 2.4rem 2.4rem;
  padding: 1.3rem 2rem;
  border: 1px solid var(--border-strong);
  border-radius: var(--radius-md);
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text);
  background: transparent;
  transition: all var(--transition);
  cursor: pointer;
}

.room-cta:hover {
  background: var(--surface-hover);
  border-color: var(--accent);
  color: var(--accent);
  transform: translateY(-2px);
}

.room-cta.cta-featured {
  background: var(--accent);
  border-color: var(--accent);
  color: #fff;
  box-shadow: 0 4px 15px rgba(255, 106, 0, 0.3);
}

.room-cta.cta-featured:hover {
  background: var(--accent-light);
  box-shadow: 0 6px 20px rgba(255, 106, 0, 0.4);
}

@media (max-width: 768px) {
  .prices-container {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .price-divider {
    display: none;
  }

  .price-block {
    padding: 0.8rem 0;
    border-bottom: 1px solid var(--border);
  }

  .price-block:last-child {
    border-bottom: none;
  }
}
</style>

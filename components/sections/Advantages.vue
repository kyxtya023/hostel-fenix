<template>
  <section class="advantages section">
    <div class="container">
      <div class="adv-header reveal">
        <p class="section-label">Почему мы</p>
        <h2 class="section-title">
          7 причин выбрать<br /><span class="text-accent">Хостел «Феникс»</span>
        </h2>
      </div>

      <div class="adv-grid">
        <div
          v-for="(item, i) in advantages"
          :key="item.title"
          class="adv-card glass-card reveal"
          :class="`reveal-delay-${i + 1}`"
        >
          <div class="adv-card-top">
            <div class="adv-icon-wrap">
              <Icon :name="item.icon" size="28" class="adv-icon" />
            </div>
            <span class="adv-num">0{{ i + 1 }}</span>
          </div>
          <h3 class="adv-title">{{ item.title }}</h3>
          <p class="adv-desc">{{ item.desc }}</p>
          <div class="adv-shine" aria-hidden="true" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const advantages = [
  {
    icon: "ph:map-pin-area-fill",
    title: "Рядом с Москвой",
    desc: "Всего 5 минут езды до МКАД. Удобно добраться до любой точки Москвы и Подмосковья.",
  },
  {
    icon: "ph:currency-rub-fill",
    title: "Доступные цены",
    desc: "Минимальная стоимость от 450 ₽ в сутки. Гибкие тарифы для долгосрочного проживания.",
  },
  {
    icon: "ph:clock-countdown-fill",
    title: "Работаем 24/7",
    desc: "Заезд и выезд в любое время суток. Администратор всегда на месте — без ограничений.",
  },
  {
    icon: "ph:car-fill",
    title: "Бесплатная парковка",
    desc: "Охраняемая парковка на территории объекта. Удобно для тех, кто приезжает на личном авто.",
  },
  {
    icon: "ph:wifi-high-fill",
    title: "Быстрый Wi-Fi",
    desc: "Высокоскоростной интернет по всей территории. Работайте и отдыхайте без ограничений.",
  },
  {
    icon: "ph:file-text-fill",
    title: "Официальное оформление",
    desc: "Чёткое и своевременное оформление в соответствии с законодательством РФ в сфере миграционного учёта.",
  },
  {
    icon: "ph:shield-check-fill",
    title: "Круглосуточная охрана",
    desc: "Профессиональная охрана 24/7 для вашего спокойного отдыха и безопасного проживания в хостеле «Феникс».",
  },
];
</script>

<style scoped>
.adv-header {
  max-width: 56rem;
  margin-bottom: 6rem;
}

.text-accent {
  color: var(--accent);
}

.adv-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 640px) and (max-width: 899px) {
  .adv-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .adv-card:nth-child(7) {
    grid-column: 1 / -1;
  }
}

@media (min-width: 900px) and (max-width: 1199px) {
  .adv-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  /* 4 растягиваем */
  .adv-card:nth-child(4) {
    grid-column: span 2;
  }

  /* 6 смещаем вниз */
  .adv-card:nth-child(6) {
    grid-column: 1 / 2;
  }

  /* 7  растягиваем */
  .adv-card:nth-child(7) {
    grid-column: span 2;
  }
}

@media (min-width: 1200px) {
  .adv-grid {
    grid-template-columns: repeat(4, 1fr);
  }

  .adv-card:nth-child(7) {
    grid-column: span 2;
  }
}

.adv-card {
  padding: 3rem 2.4rem;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  cursor: default;
}

.adv-card-top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 0.4rem;
}

.adv-icon-wrap {
  width: 5.6rem;
  height: 5.6rem;
  background: var(--accent-dim);
  border: 1px solid var(--accent-glow);
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  transition:
    background var(--transition),
    box-shadow var(--transition);
}

.adv-card:hover .adv-icon-wrap {
  background: var(--accent);
  box-shadow: 0 0 20px var(--accent-glow);
}

.adv-icon {
  color: var(--accent);
  transition: color var(--transition);
}
.adv-card:hover .adv-icon {
  color: #fff;
}

.adv-num {
  font-family: "Manrope", sans-serif;
  font-size: 4rem;
  font-weight: 800;
  color: var(--border);
  line-height: 1;
  transition: color var(--transition);
}

.adv-card:hover .adv-num {
  color: var(--accent-glow);
}

.adv-title {
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--text);
}

.adv-desc {
  font-size: 1.45rem;
  color: var(--text-muted);
  line-height: 1.65;
}

.adv-shine {
  position: absolute;
  top: -50%;
  left: -100%;
  width: 60%;
  height: 200%;
  background: linear-gradient(
    105deg,
    transparent 40%,
    rgba(255, 255, 255, 0.06) 50%,
    transparent 60%
  );
  transform: skewX(-20deg);
  transition: left 0.6s ease;
  pointer-events: none;
}

.adv-card:hover .adv-shine {
  left: 150%;
}
</style>
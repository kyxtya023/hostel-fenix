<template>
  <section class="audience section">
    <div class="container">
      <div class="audience-header reveal">
        <p class="section-label">Для кого</p>
        <h2 class="section-title">Кто останавливается<br /><span class="text-accent">в «Фениксе»</span></h2>
      </div>

      <div class="audience-grid">
        <div
          v-for="(group, i) in groups"
          :key="group.title"
          class="audience-card glass-card reveal"
          :class="`reveal-delay-${i + 1}`"
        >
          <div class="audience-icon">
            <Icon :name="group.icon" size="36" />
          </div>
          <h3 class="audience-title">{{ group.title }}</h3>
          <p class="audience-desc">{{ group.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const groups = [
  {
    icon: 'ph:hard-hat-fill',
    title: 'Рабочие бригады',
    desc: 'Строители, монтажники и специалисты на вахте. Удобное расположение рядом с промзонами и объектами Москвы.',
  },
  {
    icon: 'ph:briefcase-fill',
    title: 'Командировочные',
    desc: 'Деловые путешественники, которым нужен чистый ночлег без переплат за лишние звёзды.',
  },
  {
    icon: 'ph:backpack-fill',
    title: 'Путешественники',
    desc: 'Туристы, которые хотят исследовать Москву, не тратя всё бюджет на гостиницу.',
  },
  {
    icon: 'ph:student-fill',
    title: 'Студенты',
    desc: 'Абитуриенты, стажёры и учащиеся — для которых важна цена и удобная транспортная доступность.',
  },
  {
    icon: 'ph:users-three-fill',
    title: 'Коллективы',
    desc: 'Творческие и спортивные команды, приезжающие в Москву на конкурсы и соревнования.',
  },
]
</script>

<style scoped>
.text-accent {
  color: var(--accent);
}

.audience-header {
  margin-bottom: 5rem;
}

.audience-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (max-width: 639px) {
  .audience-grid {
    grid-template-columns: 1fr;
  }
}

@media (min-width: 640px) and (max-width: 1099px) {
  .audience-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .audience-card:nth-child(5) {
    grid-column: span 2;
  }
}

@media (min-width: 1100px) {
  .audience-grid {
    grid-template-columns: repeat(6, 1fr);
  }

  /* первый ряд */
  .audience-card:nth-child(1) {
    grid-column: span 3;
  }

  .audience-card:nth-child(2) {
    grid-column: span 3;
  }

  /* второй ряд */
  .audience-card:nth-child(3) {
    grid-column: span 2;
  }

  .audience-card:nth-child(4) {
    grid-column: span 2;
  }

  .audience-card:nth-child(5) {
    grid-column: span 2;
  }
}

.audience-card {
  padding: 3.2rem 2.8rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  text-align: center;
  align-items: center;
  position: relative;
}

.audience-icon {
  width: 7.2rem;
  height: 7.2rem;
  background: var(--accent-dim);
  border: 1px solid var(--accent-glow);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent);
  transition: background var(--transition), box-shadow var(--transition),
    transform var(--transition);
}

.audience-card:hover .audience-icon {
  background: var(--accent);
  color: #fff;
  box-shadow: 0 0 24px var(--accent-glow);
  transform: scale(1.08);
}

.audience-title {
  font-size: 1.9rem;
  font-weight: 700;
  color: var(--text);
}

.audience-desc {
  font-size: 1.45rem;
  color: var(--text-muted);
  line-height: 1.7;
}
</style>

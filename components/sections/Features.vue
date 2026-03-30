<template>
  <section class="features section">
    <div class="container">
      <div class="features-header reveal">
        <p class="section-label">Удобства</p>
        <h2 class="section-title">Всё, что нужно<br /><span class="text-accent">для жизни</span></h2>
      </div>

      <div class="features-grid">
        <div
          v-for="(feat, i) in features"
          :key="feat.title"
          class="feat-item reveal"
          :class="`reveal-delay-${(i % 4) + 1}`"
        >
          <div class="feat-icon-wrap">
            <Icon :name="feat.icon" size="26" class="feat-icon" />
          </div>
          <div class="feat-body">
            <h3 class="feat-title">{{ feat.title }}</h3>
            <p class="feat-desc">{{ feat.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const features = [
  { icon: 'ph:shower-fill', title: 'Горячий душ', desc: 'Раздельные душевые с горячей водой 24/7' },
  { icon: 'ph:broom-fill', title: 'Ежедневная уборка', desc: 'Регулярная уборка помещений для поддержания чистоты' },
  { icon: 'ph:car-fill', title: 'Парковка', desc: 'Охраняемая парковка для личного транспорта' },
  { icon: 'ph:cooking-pot-fill', title: 'Кухня', desc: 'Общая кухня с плитой, микроволновкой и холодильником' },
  { icon: 'ph:washing-machine-fill', title: 'Стирка', desc: 'Стиральная машина за небольшую доплату' },
  { icon: 'ph:lock-fill', title: 'Личный шкафчик', desc: 'Индивидуальный замок для хранения вещей' },
  { icon: 'ph:first-aid-kit-fill', title: 'Безопасность', desc: 'Видеонаблюдение и охрана круглосуточно' },
  { icon: 'ph:bed-fill', title: 'Чистое бельё', desc: 'Постельные принадлежности меняются регулярно' },
]
</script>

<style scoped>
.features-header {
  margin-bottom: 5rem;
  max-width: 48rem;
}

.text-accent { color: var(--accent); }

.features-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.6rem;
}

@media (min-width: 640px) {
  .features-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 1024px) {
  .features-grid { grid-template-columns: repeat(4, 1fr); }
}

.feat-item {
  display: flex;
  align-items: flex-start;
  gap: 1.6rem;
  padding: 2.4rem;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  transition: background var(--transition), border-color var(--transition), transform var(--transition);
}

.feat-item:hover {
  background: var(--surface-hover);
  border-color: var(--accent-glow);
  transform: translateY(-0.3rem);
}

.feat-icon-wrap {
  width: 5rem;
  height: 5rem;
  min-width: 5rem;
  background: var(--accent-dim);
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background var(--transition);
}

.feat-item:hover .feat-icon-wrap { background: var(--accent); }

.feat-icon { color: var(--accent); transition: color var(--transition); }
.feat-item:hover .feat-icon { color: #fff; }

.feat-title {
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 0.5rem;
}

.feat-desc {
  font-size: 1.4rem;
  color: var(--text-muted);
  line-height: 1.6;
}
</style>

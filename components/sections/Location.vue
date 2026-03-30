<template>
  <section id="location" class="location section">
    <div class="container">
      <div class="location-header reveal">
        <p class="section-label">Локация</p>
        <h2 class="section-title">
          Распахни ворота<br /><span class="text-accent">в Москву</span>
        </h2>
      </div>

      <div class="logistics-section reveal">
        <div class="logistics-header">
          <div class="logistics-icon-wrap">
            <Icon name="ph:warehouse-fill" size="28" class="logistics-icon" />
          </div>
          <div>
            <h3 class="logistics-title">
              Мы в центре логистической инфраструктуры
            </h3>
            <p class="logistics-desc">
              Хостел расположен в центре логистического хаба, рядом с
              крупнейшими складскими и распределительными центрами.
            </p>
          </div>
        </div>

        <div class="companies-grid">
          <div
            v-for="(company, i) in companies"
            :key="company.name"
            class="company-card glass-card reveal"
            :class="`reveal-delay-${i + 1}`"
          >
            <div class="company-icon-wrap">
              <Icon :name="company.icon" size="24" class="company-icon" />
            </div>
            <span class="company-name">{{ company.name }}</span>
          </div>
        </div>
      </div>
      
    </div>
  </section>
</template>

<script setup lang="ts">
const points = [
  { icon: "ph:map-pin-fill", label: "Адрес", value: "Мытищи, Московская обл." },
  { icon: "ph:path-fill", label: "До МКАД", value: "5 минут на автомобиле" },
  {
    icon: "ph:train-fill",
    label: "Транспорт",
    value: "Рядом автобусные маршруты",
  },
  {
    icon: "ph:storefront-fill",
    label: "Инфраструктура",
    value: "Магазины, кафе рядом",
  },
];

const companies = [
  { name: "Wildberries", icon: "ph:package-fill" },
  { name: "Ozon", icon: "ph:cube-fill" },
  { name: "Яндекс", icon: "ph:magnifying-glass-fill" },
  { name: "СберМаркет", icon: "ph:shopping-cart-fill" },
  { name: "Лемана ПРО", icon: "ph:wrench-fill" },
  { name: "ВкусВилл", icon: "ph:leaf-fill" },
];
</script>

<style scoped>
.text-accent {
  color: var(--accent);
}

.location-header {
  margin-bottom: 5rem;
}

.location-inner {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: start;
}

@media (min-width: 1024px) {
  .location-inner {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }
}

.location-img-wrap {
  border-radius: var(--radius-lg);
  overflow: hidden;
  position: relative;
  aspect-ratio: 16 / 9;
  margin-bottom: 2.4rem;
}

.location-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.location-img-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, var(--accent-dim), transparent 70%);
}

.location-points {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.6rem;
}

@media (max-width: 440px) {
  .location-points {
    grid-template-columns: 1fr;
  }
}

.location-point {
  display: flex;
  align-items: center;
  gap: 1.2rem;
  padding: 1.6rem;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  transition:
    border-color var(--transition),
    background var(--transition);
}

.location-point:hover {
  border-color: var(--accent-glow);
  background: var(--surface-hover);
}

.point-icon-wrap {
  width: 4rem;
  height: 4rem;
  min-width: 4rem;
  background: var(--accent-dim);
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
}

.point-icon {
  color: var(--accent);
}

.point-label {
  font-size: 1.2rem;
  color: var(--text-subtle);
  margin-bottom: 0.2rem;
}

.point-value {
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--text);
}

.location-map-wrap {
  overflow: hidden;
  aspect-ratio: 4 / 3;
  padding: 0;
}

.map-iframe {
  width: 100%;
  height: 100%;
  border: none;
  display: block;
  filter: grayscale(30%);
  transition: filter var(--transition);
}

.location-map-wrap:hover .map-iframe {
  filter: grayscale(0%);
}


.logistics-header {
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  margin-bottom: 4rem;
}

@media (max-width: 640px) {
  .logistics-header {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
}

.logistics-icon-wrap {
  width: 6rem;
  height: 6rem;
  min-width: 6rem;
  background: var(--accent-dim);
  border: 1px solid var(--accent-glow);
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
}

.logistics-icon {
  color: var(--accent);
}

.logistics-title {
  font-size: 2.2rem;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 0.8rem;
}

.logistics-desc {
  font-size: 1.5rem;
  color: var(--text-muted);
  line-height: 1.6;
  max-width: 60rem;
}

.companies-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.6rem;
}

@media (min-width: 640px) {
  .companies-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1024px) {
  .companies-grid {
    grid-template-columns: repeat(6, 1fr);
  }
}

.company-card {
  padding: 2rem 1.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
  text-align: center;
  transition: all var(--transition);
}

.company-card:hover {
  transform: translateY(-4px);
  border-color: var(--accent-glow);
}

.company-icon-wrap {
  width: 5rem;
  height: 5rem;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition);
}

.company-card:hover .company-icon-wrap {
  background: var(--accent);
  border-color: var(--accent);
}

.company-icon {
  color: var(--accent);
  transition: color var(--transition);
}

.company-card:hover .company-icon {
  color: #fff;
}

.company-name {
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--text);
}
</style>

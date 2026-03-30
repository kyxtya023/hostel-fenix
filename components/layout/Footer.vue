<template>
  <footer class="footer">
    <div class="container footer-inner">
      <div class="footer-brand">
        <div class="footer-logo">
          <Icon name="ph:fire-fill" size="24" class="footer-logo-icon" />
          <span>Феникс</span>
        </div>
        <p class="footer-tagline">Доступное жильё рядом с Москвой — для тех, кто ценит комфорт и экономию.</p>
      </div>

      <div class="footer-links">
        <div class="footer-col">
          <p class="footer-col-title">Навигация</p>
          <ul>
            <li v-for="item in navItems" :key="item.href">
              <a :href="item.href" @click.prevent="scrollTo(item.href)">{{ item.label }}</a>
            </li>
          </ul>
        </div>
        <div class="footer-col">
          <p class="footer-col-title">Контакты</p>
          <ul>
            <li><a href="tel:+79804107614">+7 (980) 410-76-14</a></li>
            <li><span class="footer-text">Московская область, Мытищи, Липкинское шоссе, 2-й километр, посёлок Вешки, вл1с2</span></li>
            <li><span class="footer-text">Работаем 24/7</span></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="container footer-bottom-inner">
        <p class="footer-copy">&copy; {{ new Date().getFullYear() }} Хостел «Феникс». Все права защищены.</p>
        
        <div class="developer-credit">
          <span class="developer-trigger">
            Разработка сайта
            <Icon name="ph:code-bold" size="14" class="dev-icon" />
          </span>
          <div class="developer-tooltip">
            <p class="tooltip-title">Связаться с разработчиком</p>
            <div class="tooltip-links">
              <a href="https://vk.com/amberlock" target="_blank" rel="noopener noreferrer" class="tooltip-link">
                <Icon name="akar-icons:vk-fill" size="18" />
                <span>ВКонтакте</span>
              </a>
              <a href="https://t.me/Uonu9l" target="_blank" rel="noopener noreferrer" class="tooltip-link">
                <Icon name="ph:telegram-logo-fill" size="18" />
                <span>Telegram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const navItems = [
  { href: '#about', label: 'О хостеле' },
  { href: '#rooms', label: 'Номера' },
  { href: '#prices', label: 'Цены' },
  { href: '#location', label: 'Локация' },
  { href: '#reviews', label: 'Отзывы' },
  { href: '#faq', label: 'FAQ' },
]

const scrollTo = (href: string) => {
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
.footer {
  background: var(--glass-bg);
  border-top: 1px solid var(--border);
  margin-top: auto;
}

.footer-inner {
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  padding-top: 6rem;
  padding-bottom: 4rem;
}

@media (min-width: 768px) {
  .footer-inner {
    grid-template-columns: 1.5fr 1fr;
  }
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-family: 'Manrope', sans-serif;
  font-weight: 800;
  font-size: 2.2rem;
  color: var(--text);
  margin-bottom: 1.6rem;
}

.footer-logo-icon { color: var(--accent); }

.footer-tagline {
  font-size: 1.5rem;
  color: var(--text-muted);
  line-height: 1.7;
  max-width: 32rem;
}

.footer-links {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
}

@media (max-width: 360px) {
  .footer-links {
  grid-template-columns: 1fr;
  }
}

.footer-col-title {
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 1.6rem;
}

.footer-col ul {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.footer-col a,
.footer-text {
  font-size: 1.5rem;
  color: var(--text-muted);
  transition: color var(--transition);
}

.footer-col a:hover { color: var(--accent); }

.footer-bottom {
  border-top: 1px solid var(--border);
  padding: 2rem 0;
}

.footer-bottom-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
}

@media (max-width: 575.98px) {
  .footer-bottom-inner {
    flex-direction: column;
  }
}

.footer-copy {
  font-size: 1.4rem;
  color: var(--text-subtle);
}

@media (max-width: 575.98px) {
  .footer-copy {
    text-align: center;
  }
}

.developer-credit {
  position: relative;
}

.developer-trigger {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.4rem;
  color: var(--text-subtle);
  cursor: pointer;
  transition: color var(--transition);
  padding: 0.4rem 0;
}

.developer-trigger:hover {
  color: var(--accent);
}

.dev-icon {
  transition: transform var(--transition);
}

.developer-trigger:hover .dev-icon {
  transform: rotate(10deg);
}

.developer-tooltip {
  position: absolute;
  bottom: calc(100% + 1.2rem);
  right: 0;
  min-width: 22rem;
  background: var(--glass-bg);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 1.6rem;
  box-shadow: var(--shadow-lg), 0 0 30px rgba(255, 106, 0, 0.1);
  opacity: 0;
  visibility: hidden;
  transform: translateY(10px);
  transition: all 0.25s ease;
  z-index: 100;
}

.developer-tooltip::after {
  content: '';
  position: absolute;
  bottom: -8px;
  right: 2rem;
  width: 14px;
  height: 14px;
  background: var(--glass-bg);
  border-right: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  transform: rotate(45deg);
}

.developer-credit:hover .developer-tooltip {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.tooltip-title {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--text-muted);
  margin-bottom: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.tooltip-links {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.tooltip-link {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.4rem;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  font-size: 1.4rem;
  font-weight: 500;
  color: var(--text);
  transition: all var(--transition);
}

.tooltip-link:hover {
  background: var(--surface-hover);
  border-color: var(--accent);
  color: var(--accent);
  transform: translateX(4px);
}

.tooltip-link:hover svg {
  color: var(--accent);
}

@media (max-width: 640px) {
  .developer-tooltip {
    right: -1rem;
    min-width: 20rem;
  }
  
  .developer-tooltip::after {
    right: 1.5rem;
  }
}
</style>

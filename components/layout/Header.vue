<template>
  <header class="header" :class="{ scrolled: isScrolled, 'menu-open': menuOpen }">
    <div class="container header-inner">

      <a href="#hero" class="logo" @click.prevent="scrollTo('#hero')">
        <span class="logo-icon">
          <Icon name="ph:fire-fill" size="22" />
        </span>
        <span class="logo-text">Феникс</span>
      </a>

      <nav class="nav" aria-label="Основная навигация">
        <a
          v-for="item in navItems"
          :key="item.href"
          :href="item.href"
          class="nav-link"
          @click.prevent="scrollTo(item.href)"
        >
          {{ item.label }}
        </a>
      </nav>

      <div class="header-actions">
        <ThemeToggle />
        <a href="tel:+79804107614" class="btn-call">
          <Icon name="ph:phone-fill" size="16" />
          <span>Позвонить</span>
        </a>

        <button
          class="burger"
          :class="{ active: menuOpen }"
          :aria-expanded="menuOpen"
          aria-label="Открыть меню"
          @click="menuOpen = !menuOpen"
        >
          <span /><span /><span />
        </button>
      </div>
    </div>

    <div class="mobile-menu" :class="{ open: menuOpen }">
      <nav class="mobile-nav">
        <a
          v-for="item in navItems"
          :key="item.href"
          :href="item.href"
          class="mobile-nav-link"
          @click.prevent="mobileNavigate(item.href)"
        >
          {{ item.label }}
        </a>
      </nav>
      <a href="tel:+79804107614" class="mobile-call">
        <Icon name="ph:phone-fill" size="18" />
        +7 (980) 410-76-14
      </a>
    </div>
  </header>
</template>

<script setup lang="ts">
import ThemeToggle from '~/components/ui/ThemeToggle.vue'

const isScrolled = ref(false)
const menuOpen = ref(false)

const navItems = [
  { href: '#about', label: 'О нас' },
  { href: '#rooms', label: 'Номера' },
  { href: '#location', label: 'Локация' },
  { href: '#reviews', label: 'Отзывы' },
  { href: '#contacts', label: 'Контакты' },
]

const scrollTo = (href: string) => {
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

const mobileNavigate = (href: string) => {
  menuOpen.value = false
  setTimeout(() => scrollTo(href), 300)
}

onMounted(() => {
  const onScroll = () => { isScrolled.value = window.scrollY > 40 }
  window.addEventListener('scroll', onScroll, { passive: true })
  onUnmounted(() => window.removeEventListener('scroll', onScroll))
})
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  transition: background var(--transition), backdrop-filter var(--transition), box-shadow var(--transition), border-color var(--transition);
  border-bottom: 1px solid transparent;
}

.header.scrolled,
.header.menu-open {
  background: var(--glass-bg);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border-color: var(--glass-border);
  box-shadow: var(--shadow);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 7rem;
  gap: 2rem;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-family: 'Manrope', sans-serif;
  font-weight: 800;
  font-size: 2rem;
  color: var(--text);
  transition: color var(--transition);
  flex-shrink: 0;
}

.logo:hover { color: var(--accent); }

.logo-icon {
  color: var(--accent);
  display: flex;
  align-items: center;
  filter: drop-shadow(0 0 6px var(--accent-glow));
}

.nav {
  display: none;
  align-items: center;
  gap: 0.4rem;
}

@media (min-width: 1024px) {
  .nav { display: flex; }
}

.nav-link {
  padding: 0.8rem 1.4rem;
  font-size: 1.45rem;
  font-weight: 500;
  color: var(--text-muted);
  border-radius: var(--radius-sm);
  transition: color var(--transition), background var(--transition);
}

.nav-link:hover {
  color: var(--text);
  background: var(--surface-hover);
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 1.2rem;
}

.btn-call {
  display: none;
  align-items: center;
  gap: 0.6rem;
  padding: 0.9rem 1.8rem;
  background: var(--accent);
  color: #fff;
  border-radius: var(--radius-sm);
  font-size: 1.4rem;
  font-weight: 600;
  transition: background var(--transition), transform var(--transition), box-shadow var(--transition);
}

.btn-call:hover {
  background: var(--accent-light);
  transform: translateY(-1px);
  box-shadow: 0 4px 16px var(--accent-glow);
}

@media (min-width: 640px) {
  .btn-call { display: flex; }
}

.burger {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 3.2rem;
  padding: 0.4rem;
  cursor: pointer;
}

.burger span {
  display: block;
  height: 0.2rem;
  background: var(--text);
  border-radius: 2px;
  transition: transform var(--transition), opacity var(--transition), width var(--transition);
  transform-origin: center;
}

.burger span:nth-child(1) { width: 100%; }
.burger span:nth-child(2) { width: 70%; }
.burger span:nth-child(3) { width: 100%; }

.burger.active span:nth-child(1) { transform: translateY(0.7rem) rotate(45deg); width: 100%; }
.burger.active span:nth-child(2) { opacity: 0; }
.burger.active span:nth-child(3) { transform: translateY(-0.7rem) rotate(-45deg); }

@media (min-width: 1024px) {
  .burger { display: none; }
}

.mobile-menu {
  max-height: 0;
  overflow: hidden;
  transition: max-height var(--transition-slow);
  background: var(--glass-bg);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
}

.mobile-menu.open {
  max-height: 50rem;
}

.mobile-nav {
  display: flex;
  flex-direction: column;
  padding: 1.6rem 2rem;
  gap: 0.4rem;
}

.mobile-nav-link {
  font-size: 1.7rem;
  font-weight: 500;
  color: var(--text-muted);
  padding: 1.2rem 1.6rem;
  border-radius: var(--radius-sm);
  transition: color var(--transition), background var(--transition);
}

.mobile-nav-link:hover {
  color: var(--text);
  background: var(--surface-hover);
}

.mobile-call {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin: 0 2rem 2rem;
  padding: 1.4rem 2rem;
  background: var(--accent);
  color: #fff;
  border-radius: var(--radius-md);
  font-size: 1.6rem;
  font-weight: 600;
}

@media (min-width: 1024px) {
  .mobile-menu { display: none; }
}
</style>

<template>
  <section id="contacts" class="contacts section">
    <div class="container">
      <div class="contacts-header reveal">
        <p class="section-label">Контакты</p>
        <h2 class="section-title">
          Свяжитесь с нами<br /><span class="text-accent">прямо сейчас</span>
        </h2>
      </div>

      <div class="contacts-inner">
        <div class="contacts-info reveal">
          <div class="contact-card glass-card">
            <a href="tel:+79804107614" class="contact-row">
              <div class="contact-icon-wrap">
                <Icon name="ph:phone-fill" size="22" class="contact-icon" />
              </div>
              <div>
                <p class="contact-label">Телефон</p>
                <p class="contact-value">+7 (980) 410-76-14</p>
              </div>
              <Icon name="ph:arrow-up-right" size="18" class="contact-arrow" />
            </a>

            <div class="contact-divider" />

            <div class="contact-row non-link">
              <div class="contact-icon-wrap">
                <Icon name="ph:clock-fill" size="22" class="contact-icon" />
              </div>
              <div>
                <p class="contact-label">Режим работы</p>
                <p class="contact-value">Круглосуточно, 24/7</p>
              </div>
            </div>

            <div class="contact-divider" />

            <div class="contact-row non-link">
              <div class="contact-icon-wrap">
                <Icon name="ph:map-pin-fill" size="22" class="contact-icon" />
              </div>
              <div>
                <p class="contact-label">Адрес</p>
                <p class="contact-value">
                  Московская область, Мытищи, Липкинское шоссе, 2-й километр,
                  посёлок Вешки, вл1с2
                </p>
              </div>
            </div>

            <div class="contact-divider" />

            <div class="contact-row non-link">
              <div class="contact-icon-wrap">
                <Icon name="ph:car-fill" size="22" class="contact-icon" />
              </div>
              <div>
                <p class="contact-label">Парковка</p>
                <p class="contact-value">Охраняемая парковка на 50 машин</p>
              </div>
            </div>
          </div>

          <a href="tel:+79804107614" class="big-call-btn">
            <Icon name="ph:phone-call-fill" size="24" />
            <span>Позвонить и забронировать</span>
          </a>
        </div>

        <div class="contacts-map glass-card reveal reveal-delay-2">
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A40df10e896e50836669db844b80b1d3b7f21eff9c131ace3b0ed76b78056ffd4&amp;source=constructor"
            class="contact-map-iframe"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            width="100%"
            height="473"
            frameborder="0"
          ></iframe>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.text-accent {
  color: var(--accent);
}

.contacts-header {
  margin-bottom: 5rem;
}

.contacts-inner {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: start;
}

@media (min-width: 1024px) {
  .contacts-inner {
    grid-template-columns: 1fr 1.3fr;
    gap: 4rem;
  }
}

.contact-card {
  padding: 0;
  margin-bottom: 2rem;
  overflow: hidden;
}

.contact-row {
  display: flex;
  align-items: center;
  gap: 1.6rem;
  padding: 2rem 2.4rem;
  text-decoration: none;
  transition: background var(--transition);
}

.contact-row:not(.non-link):hover {
  background: var(--surface-hover);
  cursor: pointer;
}

.contact-row:not(.non-link):hover .contact-arrow {
  color: var(--accent);
}

.contact-icon-wrap {
  width: 4.8rem;
  height: 4.8rem;
  min-width: 4.8rem;
  background: var(--accent-dim);
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
}

.contact-icon {
  color: var(--accent);
}

.contact-label {
  font-size: 1.2rem;
  color: var(--text-subtle);
  margin-bottom: 0.3rem;
}

.contact-value {
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--text);
}

.contact-arrow {
  margin-left: auto;
  color: var(--text-subtle);
  transition: color var(--transition);
}

.contact-divider {
  height: 1px;
  background: var(--border);
  margin: 0;
}

.big-call-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1.8rem 2.4rem;
  background: var(--accent);
  color: #fff;
  border-radius: var(--radius-lg);
  font-size: 1.7rem;
  font-weight: 700;
  width: 100%;
  transition:
    background var(--transition),
    transform var(--transition),
    box-shadow var(--transition);
}

.big-call-btn:hover {
  background: var(--accent-light);
  transform: translateY(-2px);
  box-shadow: 0 8px 30px var(--accent-glow);
}

.contacts-map {
  overflow: hidden;
  padding: 0;
  min-height: 45rem;
}

.contact-map-iframe {
  width: 100%;
  height: 100%;
  min-height: 45rem;
  border: none;
  display: block;
}
</style>

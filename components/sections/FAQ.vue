<template>
  <section id="faq" class="faq section">
    <div class="container faq-inner">
      <div class="faq-header reveal">
        <p class="section-label">FAQ</p>
        <h2 class="section-title">
          Часто задаваемые<br /><span class="text-accent">вопросы</span>
        </h2>
      </div>

      <div class="faq-list">
        <div
          v-for="(item, i) in faqs"
          :key="item.question"
          class="faq-reveal-wrapper reveal"
          :class="`reveal-delay-${i + 1}`"
        >
          <div class="faq-item" :class="{ open: openIdx === i }">
            <button
              class="faq-question"
              :aria-expanded="openIdx === i"
              @click="toggle(i)"
            >
              <span>{{ item.question }}</span>
              <span class="faq-icon">
                <Icon
                  :name="openIdx === i ? 'ph:minus' : 'ph:plus'"
                  size="20"
                />
              </span>
            </button>
            <div
              class="faq-answer-wrap"
              :style="{
                maxHeight: openIdx === i ? answerHeights[i] + 'px' : '0',
              }"
            >
              <p class="faq-answer" :ref="(el) => setRef(el, i)">
                {{ item.answer }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const openIdx = ref<number | null>(0);
const answerEls = ref<(HTMLElement | null)[]>([]);
const answerHeights = ref<number[]>([]);

const faqs = [
  {
    question: "В какое время можно заехать и выехать?",
    answer:
      "Мы работаем круглосуточно — заехать и выехать можно в любое время суток. Администратор всегда на месте. Ранний заезд или поздний выезд возможен при наличии свободного места.",
  },
  {
    question: "Есть ли парковка рядом с хостелом?",
    answer:
      "Да, на территории хостела есть охраняемая парковка. Это особенно удобно для тех, кто приезжает на личном или рабочем автотранспорте.",
  },
  {
    question: "Что входит в стоимость проживания?",
    answer:
      "В стоимость включены: место в номере, постельное бельё, доступ к общей кухне, душ и туалет. Собственная парковка на 50 машин. Стирка оплачивается отдельно по небольшому тарифу.",
  },
  {
    question: "Можно ли остановиться на несколько месяцев?",
    answer:
      "Да, мы рады гостям на длительный срок. При проживании от 2 недель предусмотрена скидка. Для длительных сроков рекомендуем уточнять условия по телефону — мы подберём наиболее выгодный вариант.",
  },
  {
    question: "Как добраться до хостела из Москвы?",
    answer:
      "Хостел находится в Мытищах, в 10 минутах ходьбы от метро Физтех. На автомобиле: по Ярославскому шоссе в сторону Мытищ. На общественном транспорте: автобусы из Москвы или электричка с Ярославского вокзала до станции Мытищи.",
  },
];

const toggle = (i: number) => {
  openIdx.value = openIdx.value === i ? null : i;
};

const setRef = (el: any, i: number) => {
  if (el) {
    answerEls.value[i] = el;
    answerHeights.value[i] = el.scrollHeight;
  }
};

onMounted(() => {
  setTimeout(() => {
    answerEls.value.forEach((el, i) => {
      if (el) answerHeights.value[i] = el.scrollHeight;
    });
  }, 100);
});
</script>

<style scoped>
.faq-inner {
  max-width: 900px;
  margin: 0 auto;
}

.text-accent {
  color: var(--accent);
}

.faq-header {
  text-align: center;
  margin-bottom: 5rem;
}

.faq-list {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.faq-item {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition:
    border-color var(--transition),
    background var(--transition);
}

.faq-item.open {
  border-color: var(--accent-glow);
  background: var(--surface-hover);
}

.faq-question {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  padding: 2.2rem 2.4rem;
  font-size: 1.7rem;
  font-weight: 600;
  color: var(--text);
  text-align: left;
  cursor: pointer;
  transition: color var(--transition);
}

.faq-item.open .faq-question {
  color: var(--accent);
}

.faq-icon {
  flex-shrink: 0;
  color: var(--accent);
  transition: transform var(--transition);
}

.faq-item.open .faq-icon {
  transform: rotate(180deg);
}

.faq-answer-wrap {
  overflow: hidden;
  transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.faq-answer {
  padding: 0 2.4rem 2.4rem;
  font-size: 1.55rem;
  color: var(--text-muted);
  line-height: 1.75;
}
</style>

<template>
  <section id="reviews" class="reviews section">
    <div class="container">
      <div class="reviews-header reveal">
        <p class="section-label">Отзывы</p>
        <h2 class="section-title">
          Что говорят<br /><span class="text-accent">наши гости</span>
        </h2>
      </div>

      <div class="reviews-slider">
        <div
          class="reviews-track"
          :style="{
            transform: `translateX(-${activeIdx * (100 / slidesPerView)}%)`,
          }"
        >
          <div
            v-for="review in reviews"
            :key="review.name"
            class="review-slide"
          >
            <div class="review-card glass-card">
              <div
                class="review-stars"
                :aria-label="`${review.rating} звезды из 5`"
              >
                <template
                  v-for="(star, index) in getStars(review.rating)"
                  :key="index"
                >
                  <Icon
                    v-if="star === 'full'"
                    name="ph:star-fill"
                    size="18"
                    class="star-icon"
                  />
                  <Icon
                    v-else-if="star === 'half'"
                    name="ph:star-half-fill"
                    size="18"
                    class="star-icon"
                  />
                  <Icon
                    v-else
                    name="ph:star"
                    size="18"
                    class="star-icon empty"
                  />
                </template>
              </div>
              <blockquote class="review-text">"{{ review.text }}"</blockquote>
              <div class="review-author">
                <div
                  class="author-avatar"
                  :style="{ background: review.color }"
                >
                  {{ review.name[0] }}
                </div>
                <div>
                  <p class="author-name">{{ review.name }}</p>
                  <p class="author-meta">{{ review.meta }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="reviews-controls">
        <button
          v-for="(_, i) in pages"
          :key="i"
          class="dot"
          :class="{ active: i === activeIdx }"
          :aria-label="`Отзыв ${i + 1}`"
          @click="activeIdx = i"
        />
      </div>

      <div class="reviews-arrows">
        <button
          class="arrow-btn"
          :disabled="activeIdx === 0"
          aria-label="Предыдущий"
          @click="prev"
        >
          <Icon name="ph:arrow-left" size="20" />
        </button>
        <button
          class="arrow-btn"
          :disabled="activeIdx === maxIndex"
          aria-label="Следующий"
          @click="next"
        >
          <Icon name="ph:arrow-right" size="20" />
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const activeIdx = ref(0);
const windowWidth = ref(0);

const reviews = [
  {
    name: "Олеся Асколепова",
    meta: "13 января 2025",
    color: "#ff6a00",
    rating: 5,
    text: "Очень хороших хостел. Приняли как родную. Здания новые , красивые. Внутри сделан современный ремонт. Работает охрана и пропускная система. Внутри помещения есть обслуживающий персонал. Коридоры, комнаты , лестничные площадки моют убирают, везде чистота. Мусор выносят из комнат каждое утро. Жильцы приветливые и доброжелательные.",
  },
  {
    name: "Максим Сергеенко",
    meta: "6 ноября 2024",
    color: "#e05000",
    rating: 5,
    text: "Отличный хостел. Холодильники в каждой комнате отдельные души с туалетом на комнату полноценные не как обычно перегородки каждый день проводят уборку в комнатах и в туалете что удивительно для хостела. В целом все очень чисто и опрятно вернусь сюда еще раз 100%",
  },
  {
    name: "Динара У.",
    meta: "19 января 2025",
    color: "#c04000",
    rating: 5,
    text: "Отличный хостел. Слышала много слухов, что грязно. И есть живность. Из за этого не решалась заехать сюда, хотя до работы 3 шага. Так вот все это миф. Чисто, уютно. Очень жалею что раньше не переехала, тратила на дорогу 4 часа. Проживаю в даном хостеле, все нравится! Жалко только что лифтом пользоваться нельзя, после ночи, уставшая на 6 этаж😒А так все супер👍",
  },
  {
    name: "Хасан Мирзамутдинов",
    meta: "14 января 2025",
    color: "#ff8c00",
    rating: 5,
    text: "Чисто, все условия предоставлены. Администрация доброжелательная. Обслуживание вовремя. Постельное бельё чистое и меняют вовремя. 5/5.",
  },
  {
    name: "Вячеслав Бадмацыренов",
    meta: "18 июля 2023",
    color: "#d06000",
    rating: 4.2,
    text: "В некоторых местах есть неисправности, например, сверху в ванной капала вода, но в целом очень неплохо, просторно, светло, чисто, много комнат. Туалет и душ на две комнаты, неплохо было бы ещё в коридоре резервные туалеты и душ сделать. Розетки у каждой кровати. Кровати удобные, двухъярусные, деревянные. Внимательный персонал.",
  },
];

const getStars = (rating: number) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (rating >= i) stars.push("full");
    else if (rating >= i - 0.5) stars.push("half");
    else stars.push("empty");
  }

  return stars;
};

const slidesPerView = computed(() => {
  if (windowWidth.value >= 1024) return 3;
  if (windowWidth.value >= 640) return 2;
  return 1;
});

const maxIndex = computed(() => {
  return Math.max(0, reviews.length - slidesPerView.value);
});

const pages = computed(() => maxIndex.value + 1);

const prev = () => {
  if (activeIdx.value > 0) activeIdx.value--;
};

const next = () => {
  if (activeIdx.value < maxIndex.value) activeIdx.value++;
};

watch(slidesPerView, () => {
  if (activeIdx.value > maxIndex.value) {
    activeIdx.value = maxIndex.value;
  }
});

onMounted(() => {
  windowWidth.value = window.innerWidth;
  const handleResize = () => (windowWidth.value = window.innerWidth);
  window.addEventListener("resize", handleResize);

  onUnmounted(() => window.removeEventListener("resize", handleResize));
});
</script>

<style scoped>
.text-accent {
  color: var(--accent);
}

.reviews-header {
  margin-bottom: 5rem;
}

.reviews-slider {
  overflow: hidden;
  margin-bottom: 2.4rem;
}

.reviews-track {
  display: flex;
  width: 100%;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.review-slide {
  flex: 0 0 100%;
  padding: 1rem;
  box-sizing: border-box;
}

@media (min-width: 640px) {
  .review-slide {
    flex: 0 0 50%;
  }
}

@media (min-width: 1024px) {
  .review-slide {
    flex: 0 0 calc(100% / 3);
  }
}

.review-card {
  padding: 3.2rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.review-stars {
  display: flex;
  gap: 0.4rem;
}

.star-icon {
  color: var(--accent);
}

.review-text {
  font-size: 1.6rem;
  color: var(--text-muted);
  line-height: 1.75;
  font-style: normal;
  flex: 1;
}

.review-author {
  display: flex;
  align-items: center;
  gap: 1.4rem;
}

.author-avatar {
  width: 4.8rem;
  height: 4.8rem;
  min-width: 4.8rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
  font-family: "Manrope", sans-serif;
}

.author-name {
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--text);
}

.author-meta {
  font-size: 1.3rem;
  color: var(--text-muted);
}

.reviews-controls {
  display: flex;
  justify-content: center;
  gap: 0.8rem;
  margin-bottom: 2rem;
}

.dot {
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  background: var(--border-strong);
  transition:
    background var(--transition),
    width var(--transition);
  cursor: pointer;
}

.dot.active {
  background: var(--accent);
  width: 2.4rem;
  border-radius: 4px;
}

.reviews-arrows {
  display: flex;
  justify-content: center;
  gap: 1.2rem;
}

.arrow-btn {
  width: 4.8rem;
  height: 4.8rem;
  border: 1px solid var(--border-strong);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text);
  cursor: pointer;
  transition:
    background var(--transition),
    border-color var(--transition),
    color var(--transition);
}

.arrow-btn:hover:not(:disabled) {
  background: var(--accent);
  border-color: var(--accent);
  color: #fff;
}

.arrow-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.star-icon.empty {
  opacity: 0.3;
}
</style>

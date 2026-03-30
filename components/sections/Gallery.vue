<template>
  <section id="gallery" class="gallery section">
    <div class="container">
      <div class="gallery-header reveal">
        <div>
          <p class="section-label">Фотогалерея</p>
          <h2 class="section-title">
            Как у нас<br /><span class="text-accent">выглядит</span>
          </h2>
        </div>
        <p class="section-desc">
          Смотрите сами — чистые номера, уютные общие зоны и всё необходимое для
          комфортного проживания.
        </p>
      </div>

      <div ref="gridRef" class="masonry-grid">
        <div
          v-for="(item, i) in items"
          :key="item.src"
          ref="itemRefs"
          class="masonry-item reveal"
          :class="`reveal-delay-${(i % 5) + 1}`"
          :style="item.style"
          @click="openLightbox(i)"
          :aria-label="`Открыть фото: ${item.alt}`"
          role="button"
          tabindex="0"
          @keydown.enter="openLightbox(i)"
        >
          <div class="masonry-img-wrap">
            <img
              :src="item.src"
              :alt="item.alt"
              class="masonry-img"
              @load="onImageLoad"
            />
            <div class="masonry-overlay" aria-hidden="true">
              <div class="overlay-icon">
                <Icon name="ph:magnifying-glass-plus-bold" size="28" />
              </div>
              <span class="overlay-label">{{ item.alt }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Transition name="lightbox">
      <div
        v-if="lightboxIndex !== null"
        class="lightbox"
        @click.self="closeLightbox"
        role="dialog"
        aria-modal="true"
        :aria-label="items[lightboxIndex!].alt"
      >
        <div class="lightbox-inner">
          <button
            class="lightbox-close"
            @click="closeLightbox"
            aria-label="Закрыть"
          >
            <Icon name="ph:x-bold" size="22" />
          </button>

          <button
            class="lightbox-nav lightbox-prev"
            @click="lightboxPrev"
            aria-label="Предыдущее фото"
            :disabled="lightboxIndex === 0"
          >
            <Icon name="ph:arrow-left-bold" size="22" />
          </button>

          <Transition :name="transitionDir" mode="out-in">
            <img
              :key="lightboxIndex"
              :src="items[lightboxIndex!].src"
              :alt="items[lightboxIndex!].alt"
              class="lightbox-img"
            />
          </Transition>

          <button
            class="lightbox-nav lightbox-next"
            @click="lightboxNext"
            aria-label="Следующее фото"
            :disabled="lightboxIndex === items.length - 1"
          >
            <Icon name="ph:arrow-right-bold" size="22" />
          </button>

          <div class="lightbox-counter">
            {{ lightboxIndex! + 1 }} / {{ items.length }}
          </div>
          <div class="lightbox-caption">{{ items[lightboxIndex!].alt }}</div>
        </div>
      </div>
    </Transition>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick, reactive } from "vue";

interface GalleryItem {
  src: string;
  alt: string;
  style: Record<string, string>;
}

const rawItems = [
  { src: "/images/gallery-1.jpg", alt: "Двухъярусные кровати" },
  { src: "/images/gallery-2.jpg", alt: "Предкомнатный коридор" },
  { src: "/images/gallery-3.jpg", alt: "Коридор" },
  { src: "/images/gallery-4.jpg", alt: "Лифт" },
  { src: "/images/gallery-5.jpg", alt: "Ванная комната" },
  { src: "/images/gallery-6.jpg", alt: "Ванная комната" },
  { src: "/images/gallery-7.jpg", alt: "Кухня и столовая" },
  { src: "/images/gallery-8.jpg", alt: "Предкомнатный коридор" },
  { src: "/images/gallery-9.jpg", alt: "Номер 4-х местный" },
  { src: "/images/gallery-10.jpg", alt: "Коридор" },
];

const items = reactive<GalleryItem[]>(
  rawItems.map((item) => ({ ...item, style: {} })),
);

const gridRef = ref<HTMLElement | null>(null);
const itemRefs = ref<HTMLElement[]>([]);
const GAP = 16;

function getColumnCount(): number {
  const w = window.innerWidth;
  if (w < 640) return 1;
  if (w < 1024) return 2;
  return 3;
}

let loadedCount = 0;

function onImageLoad() {
  loadedCount++;
  if (loadedCount >= items.length) {
    buildMasonry();
  }
}

function buildMasonry() {
  const grid = gridRef.value;
  if (!grid) return;

  const cols = getColumnCount();
  const totalWidth = grid.clientWidth;
  const colWidth = (totalWidth - GAP * (cols - 1)) / cols;

  const colHeights = new Array(cols).fill(0);

  itemRefs.value.forEach((el, i) => {
    if (!el) return;

    el.style.width = `${colWidth}px`;
    el.style.position = "absolute";

    const shortestCol = colHeights.indexOf(Math.min(...colHeights));

    const x = shortestCol * (colWidth + GAP);
    const y = colHeights[shortestCol];

    el.style.left = `${x}px`;
    el.style.top = `${y}px`;

    colHeights[shortestCol] += el.offsetHeight + GAP;
  });

  grid.style.height = `${Math.max(...colHeights) - GAP}px`;
}

let ro: ResizeObserver | null = null;

onMounted(async () => {
  await nextTick();

  ro = new ResizeObserver(() => {
    buildMasonry();
  });

  if (gridRef.value) ro.observe(gridRef.value);

  setTimeout(() => {
    buildMasonry();
  }, 300);
});

onUnmounted(() => {
  ro?.disconnect();
});

function handleKeydown(e: KeyboardEvent) {
  if (lightboxIndex.value === null) return;
  if (e.key === "ArrowRight") lightboxNext();
  if (e.key === "ArrowLeft") lightboxPrev();
  if (e.key === "Escape") closeLightbox();
}

const lightboxIndex = ref<number | null>(null);
const transitionDir = ref("slide-right");

function openLightbox(i: number) {
  lightboxIndex.value = i;
  document.body.style.overflow = "hidden";
  window.addEventListener("keydown", handleKeydown);
}

function closeLightbox() {
  lightboxIndex.value = null;
  document.body.style.overflow = "";
  window.removeEventListener("keydown", handleKeydown);
}

function lightboxNext() {
  if (lightboxIndex.value === null) return;
  transitionDir.value = "slide-left";
  if (lightboxIndex.value < items.length - 1) lightboxIndex.value++;
}

function lightboxPrev() {
  if (lightboxIndex.value === null) return;
  transitionDir.value = "slide-right";
  if (lightboxIndex.value > 0) lightboxIndex.value--;
}
</script>

<style scoped>
.gallery-header {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 6rem;
}

@media (min-width: 1024px) {
  .gallery-header {
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
  }
}

.text-accent {
  color: var(--accent);
}

.masonry-grid {
  position: relative;
  width: 100%;
}

.masonry-item {
  position: absolute;
  cursor: pointer;
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: 1px solid var(--glass-border);
  background: var(--surface);
  transition:
    transform 0.4s cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.4s cubic-bezier(0.4, 0, 0.2, 1),
    border-color 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.masonry-item:hover {
  transform: translateY(-6px) scale(1.01);
  box-shadow:
    0 20px 50px rgba(0, 0, 0, 0.5),
    0 0 0 1px var(--accent-glow);
  border-color: var(--accent-glow);
  z-index: 2;
}

.masonry-item:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 4px;
}

.masonry-img-wrap {
  position: relative;
  width: 100%;
  line-height: 0;
}

.masonry-img {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.masonry-item:hover .masonry-img {
  transform: scale(1.05);
}

.masonry-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.75) 0%,
    rgba(0, 0, 0, 0.15) 50%,
    transparent 100%
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  opacity: 0;
  transition: opacity 0.35s ease;
}

.masonry-item:hover .masonry-overlay {
  opacity: 1;
}

.overlay-icon {
  width: 5.6rem;
  height: 5.6rem;
  border-radius: 50%;
  background: rgba(255, 106, 0, 0.2);
  border: 1px solid rgba(255, 106, 0, 0.5);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  transform: scale(0.7);
  transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.masonry-item:hover .overlay-icon {
  transform: scale(1);
}

.overlay-label {
  font-size: 1.3rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);
  transform: translateY(8px);
  opacity: 0;
  transition:
    transform 0.35s 0.05s ease,
    opacity 0.35s 0.05s ease;
}

.masonry-item:hover .overlay-label {
  transform: translateY(0);
  opacity: 1;
}

.lightbox {
  position: fixed;
  inset: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.92);
  backdrop-filter: blur(12px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.lightbox-inner {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 90vw;
  max-height: 90vh;
}

.lightbox-img {
  max-width: 90vw;
  max-height: 82vh;
  object-fit: contain;
  border-radius: var(--radius-lg);
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.8);
  display: block;
}

.lightbox-close {
  position: fixed;
  top: 2.4rem;
  right: 2.4rem;
  width: 4.8rem;
  height: 4.8rem;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(8px);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  transition:
    background var(--transition),
    transform var(--transition);
  cursor: pointer;
}

.lightbox-close:hover {
  background: var(--accent);
  transform: rotate(90deg);
}

.lightbox-nav {
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  width: 5.2rem;
  height: 5.2rem;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(8px);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background var(--transition);
  cursor: pointer;
}

.lightbox-nav:disabled {
  opacity: 0.25;
  pointer-events: none;
}

.lightbox-nav:hover:not(:disabled) {
  background: var(--accent);
}

.lightbox-prev {
  left: 2.4rem;
}
.lightbox-next {
  right: 2.4rem;
}

.lightbox-counter {
  position: fixed;
  top: 2.8rem;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1.3rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.5);
  background: rgba(0, 0, 0, 0.4);
  padding: 0.5rem 1.4rem;
  border-radius: 9999px;
}

.lightbox-caption {
  position: fixed;
  bottom: 3rem;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1.5rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.8);
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(8px);
  padding: 0.8rem 2rem;
  border-radius: 9999px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  white-space: nowrap;
}

.lightbox-enter-active,
.lightbox-leave-active {
  transition: opacity 0.3s ease;
}
.lightbox-enter-from,
.lightbox-leave-to {
  opacity: 0;
}

.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.25s ease;
}
.slide-left-enter-from {
  opacity: 0;
  transform: translateX(40px);
}
.slide-left-leave-to {
  opacity: 0;
  transform: translateX(-40px);
}

.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.25s ease;
}
.slide-right-enter-from {
  opacity: 0;
  transform: translateX(-40px);
}
.slide-right-leave-to {
  opacity: 0;
  transform: translateX(40px);
}
</style>

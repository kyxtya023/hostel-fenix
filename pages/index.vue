<template>
  <div class="page-wrapper">
    <HeroSection />
    <AdvantagesSection />
    <AboutSection />
    <RoomsSection />
    <FeaturesSection />
    <GallerySection />
    <LocationSection />
    <AudienceSection />
    <!-- <PricesSection /> -->
    <ReviewsSection />
    <FaqSection />
    <ContactsSection />
  </div>
</template>

<script setup lang="ts">
import HeroSection from '~/components/sections/Hero.vue'
import AdvantagesSection from '~/components/sections/Advantages.vue'
import AboutSection from '~/components/sections/About.vue'
import RoomsSection from '~/components/sections/Rooms.vue'
import FeaturesSection from '~/components/sections/Features.vue'
import GallerySection from '~/components/sections/Gallery.vue'
import LocationSection from '~/components/sections/Location.vue'
import AudienceSection from '~/components/sections/Audience.vue'
import PricesSection from '~/components/sections/Prices.vue'
import ReviewsSection from '~/components/sections/Reviews.vue'
import FaqSection from '~/components/sections/FAQ.vue'
import ContactsSection from '~/components/sections/Contacts.vue'

import { useScrollReveal } from '~/composables/useScrollReveal'

const { initReveal } = useScrollReveal()

useHead({
  title: 'Хостел «Феникс» — доступное проживание в Мытищах рядом с МКАД',
  meta: [
    { name: 'description', content: 'Хостел Феникс в Мытищах. Комфортное и недорогое размещение для рабочих и гостей Москвы. Wi-Fi, парковка, 24/7. Цены от 700 ₽/сутки.' },
  ],
})

onMounted(async () => {
  await nextTick() // ждем DOM
  const cleanup = initReveal()
  onUnmounted(() => cleanup?.())
})
</script>

<style scoped>
.page-wrapper {
  position: relative;
}
</style>

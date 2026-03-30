// nuxt.config.ts
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  devtools: { enabled: false },

  ssr: true,

  modules: ["@nuxt/icon", "@nuxtjs/color-mode"],

  colorMode: {
    preference: "dark",
    fallback: "dark",
    classSuffix: "",
    storageKey: "fenix-theme",
  },

  css: ["~/assets/css/main.css"],

  nitro: {
    preset: "github_pages",
    prerender: {
      routes: ["/"],
      crawlLinks: true,
    },
  },

  vite: {
    build: {
      assetsInlineLimit: 4096,
    },
  },

  typescript: {
    strict: true,
  },

  app: {
    head: {
      htmlAttrs: { lang: "ru" },

      title: "Хостел «Феникс» — недорогое проживание в Мытищах рядом с МКАД",

      link: [
        // Canonical (поставь свой домен, когда будет)
        { rel: "canonical", href: "https://fenix-hostel.ru" },

        // ---- ФАВИКОНЫ ----
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "96x96",
          href: "/favicon-96x96.png",
        },

        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        { rel: "shortcut icon", href: "/favicon.ico" },

        // iOS
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },

        // Android / PWA
        { rel: "manifest", href: "/site.webmanifest" },

        // Fonts
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Manrope:wght@400;500;600;700;800&display=swap",
        },
      ],

      meta: [
        { name: "charset", content: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },

        { name: "robots", content: "index, follow" },
        { name: "author", content: "Хостел Феникс" },

        {
          name: "description",
          content:
            "Хостел Феникс в Мытищах — комфортное и доступное размещение для рабочих и гостей Москвы. Рядом с МКАД, Wi-Fi, парковка, круглосуточное заселение.",
        },

        {
          name: "keywords",
          content:
            "хостел Мытищи, жильё Мытищи, хостел рядом с Москвой, дешёвый хостел, проживание рабочим, ночлег Мытищи",
        },

        { name: "theme-color", content: "#0d0d0d" },

        // ---- Open Graph ----
        { property: "og:type", content: "website" },
        { property: "og:locale", content: "ru_RU" },
        { property: "og:url", content: "https://fenix-hostel.ru" },
        { property: "og:title", content: "Хостел «Феникс» — Мытищи" },
        {
          property: "og:description",
          content:
            "Комфортное и доступное жильё рядом с МКАД. Подходит для рабочих и гостей Москвы.",
        },
        {
          property: "og:image",
          content: "https://fenix-hostel.ru/preview.jpg", // ⚠️ поставь свою картинку
        },

        // ---- Twitter ----
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Хостел «Феникс» — Мытищи" },
        {
          name: "twitter:description",
          content:
            "Доступное проживание рядом с Москвой. Wi-Fi, парковка, круглосуточно.",
        },
        {
          name: "twitter:image",
          content: "https://fenix-hostel.ru/preview.jpg",
        },
      ],

      script: [
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LodgingBusiness",

            name: "Хостел «Феникс»",

            description:
              "Хостел в Мытищах рядом с метро Физтех. Недорогое проживание для рабочих и гостей Москвы. Комнаты от 2 до 8 мест, уборка, парковка, 24/7.",

            telephone: "+7-980-410-76-14",

            address: {
              "@type": "PostalAddress",
              addressLocality: "Мытищи",
              addressRegion: "Московская область",
              addressCountry: "RU",
            },

            priceRange: "₽",

            image: [
              "https://ВАШ-ДОМЕН.ru/og-image.jpg", // ← заменить
            ],

            amenityFeature: [
              {
                "@type": "LocationFeatureSpecification",
                name: "Парковка",
                value: true,
              },
              {
                "@type": "LocationFeatureSpecification",
                name: "Ежедневная уборка",
                value: true,
              },
              {
                "@type": "LocationFeatureSpecification",
                name: "Круглосуточный заезд",
                value: true,
              },
            ],
          }),
        },
      ],
    },
  },

  compatibilityDate: "2024-11-01",
});

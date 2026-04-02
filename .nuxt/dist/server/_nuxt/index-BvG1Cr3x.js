import { defineComponent, mergeProps, useSSRContext, reactive, ref, computed, watch, unref } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderStyle, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { _ as __nuxt_component_0, a as _export_sfc, u as useHead } from "../server.mjs";
import { publicAssetsURL } from "#internal/nuxt/paths";
import "C:/Users/Илья/Desktop/b_1zotQsZ7Tum-1774406895089/node_modules/ofetch/dist/node.mjs";
import "C:/Users/Илья/Desktop/b_1zotQsZ7Tum-1774406895089/node_modules/hookable/dist/index.mjs";
import "C:/Users/Илья/Desktop/b_1zotQsZ7Tum-1774406895089/node_modules/unctx/dist/index.mjs";
import "C:/Users/Илья/Desktop/b_1zotQsZ7Tum-1774406895089/node_modules/h3/dist/index.mjs";
import "vue-router";
import "C:/Users/Илья/Desktop/b_1zotQsZ7Tum-1774406895089/node_modules/defu/dist/defu.mjs";
import "C:/Users/Илья/Desktop/b_1zotQsZ7Tum-1774406895089/node_modules/ufo/dist/index.mjs";
import "C:/Users/Илья/Desktop/b_1zotQsZ7Tum-1774406895089/node_modules/@unhead/vue/dist/index.mjs";
import "@iconify/vue";
import "C:/Users/Илья/Desktop/b_1zotQsZ7Tum-1774406895089/node_modules/klona/dist/index.mjs";
import "@iconify/utils/lib/css/icon";
import "C:/Users/Илья/Desktop/b_1zotQsZ7Tum-1774406895089/node_modules/perfect-debounce/dist/index.mjs";
const _imports_0 = publicAssetsURL("/images/hero-bg.jpg");
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "Hero",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "hero",
        class: "hero"
      }, _attrs))} data-v-366e3f6c><div class="hero-bg" aria-hidden="true" data-v-366e3f6c><div class="blob blob-1" data-v-366e3f6c></div><div class="blob blob-2" data-v-366e3f6c></div><div class="blob blob-3" data-v-366e3f6c></div></div><div class="hero-img-overlay" data-v-366e3f6c><img${ssrRenderAttr("src", _imports_0)} alt="" class="hero-bg-img" aria-hidden="true" data-v-366e3f6c></div><div class="container hero-inner" data-v-366e3f6c><div class="hero-content reveal" data-v-366e3f6c><div class="hero-badge" data-v-366e3f6c>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ph:map-pin-fill",
        size: "14"
      }, null, _parent));
      _push(` 500 метров от МКАД </div><h1 class="hero-title" data-v-366e3f6c> Хостел Феникс<br data-v-366e3f6c><span class="hero-title-accent" data-v-366e3f6c>10 минут<br data-v-366e3f6c> от метро Физтех</span></h1><p class="hero-subtitle" data-v-366e3f6c> Недорогое проживание для гостей Москвы.<br data-v-366e3f6c> Комфортно, безопасно, чисто 24/7 — с первого дня. </p><div class="hero-actions" data-v-366e3f6c><a href="tel:+79804107614" class="btn-primary" data-v-366e3f6c>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ph:phone-fill",
        size: "18"
      }, null, _parent));
      _push(` Позвонить сейчас </a><a href="#rooms" class="btn-secondary" data-v-366e3f6c> Посмотреть номера `);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ph:arrow-right",
        size: "18"
      }, null, _parent));
      _push(`</a></div></div><div class="hero-card glass-card reveal reveal-delay-3" data-v-366e3f6c><div class="hero-card-row" data-v-366e3f6c>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ph:clock-fill",
        size: "20",
        class: "hero-card-icon"
      }, null, _parent));
      _push(`<div data-v-366e3f6c><p class="hero-card-label" data-v-366e3f6c>Заезд / Выезд</p><p class="hero-card-value" data-v-366e3f6c>Круглосуточный сервис</p></div></div><div class="hero-card-divider" data-v-366e3f6c></div><div class="hero-card-row" data-v-366e3f6c>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ph:currency-rub-fill",
        size: "20",
        class: "hero-card-icon"
      }, null, _parent));
      _push(`<div data-v-366e3f6c><p class="hero-card-label" data-v-366e3f6c>Цена от</p><p class="hero-card-value" data-v-366e3f6c>450 ₽ / сутки</p></div></div><div class="hero-card-divider" data-v-366e3f6c></div><div class="hero-card-row" data-v-366e3f6c>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ph:broom-fill",
        size: "20",
        class: "hero-card-icon"
      }, null, _parent));
      _push(`<div data-v-366e3f6c><p class="hero-card-label" data-v-366e3f6c>Включено</p><p class="hero-card-value" data-v-366e3f6c>Ежедневная уборка</p></div></div><div class="hero-card-divider" data-v-366e3f6c></div><div class="hero-card-row" data-v-366e3f6c>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ph:car-fill",
        size: "20",
        class: "hero-card-icon"
      }, null, _parent));
      _push(`<div data-v-366e3f6c><p class="hero-card-label" data-v-366e3f6c>Включено</p><p class="hero-card-value" data-v-366e3f6c>Собственная парковка на 50 машин</p></div></div><a href="tel:+79804107614" class="hero-card-cta" data-v-366e3f6c> Забронировать место </a></div></div><div class="scroll-hint" aria-hidden="true" data-v-366e3f6c><div class="scroll-line" data-v-366e3f6c></div><span data-v-366e3f6c>Прокрутите</span></div></section>`);
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Hero.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const HeroSection = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-366e3f6c"]]);
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "Advantages",
  __ssrInlineRender: true,
  setup(__props) {
    const advantages = [
      {
        icon: "ph:map-pin-area-fill",
        title: "Рядом с Москвой",
        desc: "Всего 5 минут езды до МКАД. Удобно добраться до любой точки Москвы и Подмосковья."
      },
      {
        icon: "ph:currency-rub-fill",
        title: "Доступные цены",
        desc: "Минимальная стоимость от 450 ₽ в сутки. Гибкие тарифы для долгосрочного проживания."
      },
      {
        icon: "ph:clock-countdown-fill",
        title: "Работаем 24/7",
        desc: "Заезд и выезд в любое время суток. Администратор всегда на месте — без ограничений."
      },
      {
        icon: "ph:car-fill",
        title: "Бесплатная парковка",
        desc: "Охраняемая парковка на территории объекта. Удобно для тех, кто приезжает на личном авто."
      },
      {
        icon: "ph:wifi-high-fill",
        title: "Быстрый Wi-Fi",
        desc: "Высокоскоростной интернет по всей территории. Работайте и отдыхайте без ограничений."
      },
      {
        icon: "ph:file-text-fill",
        title: "Официальное оформление",
        desc: "Чёткое и своевременное оформление в соответствии с законодательством РФ в сфере миграционного учёта."
      },
      {
        icon: "ph:shield-check-fill",
        title: "Круглосуточная охрана",
        desc: "Профессиональная охрана 24/7 для вашего спокойного отдыха и безопасного проживания в хостеле «Феникс»."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "advantages section" }, _attrs))} data-v-e26c4a9e><div class="container" data-v-e26c4a9e><div class="adv-header reveal" data-v-e26c4a9e><p class="section-label" data-v-e26c4a9e>Почему мы</p><h2 class="section-title" data-v-e26c4a9e> 7 причин выбрать<br data-v-e26c4a9e><span class="text-accent" data-v-e26c4a9e>Хостел «Феникс»</span></h2></div><div class="adv-grid" data-v-e26c4a9e><!--[-->`);
      ssrRenderList(advantages, (item, i) => {
        _push(`<div class="${ssrRenderClass([`reveal-delay-${i + 1}`, "adv-card glass-card reveal"])}" data-v-e26c4a9e><div class="adv-card-top" data-v-e26c4a9e><div class="adv-icon-wrap" data-v-e26c4a9e>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: item.icon,
          size: "28",
          class: "adv-icon"
        }, null, _parent));
        _push(`</div><span class="adv-num" data-v-e26c4a9e>0${ssrInterpolate(i + 1)}</span></div><h3 class="adv-title" data-v-e26c4a9e>${ssrInterpolate(item.title)}</h3><p class="adv-desc" data-v-e26c4a9e>${ssrInterpolate(item.desc)}</p><div class="adv-shine" aria-hidden="true" data-v-e26c4a9e></div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Advantages.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const AdvantagesSection = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-e26c4a9e"]]);
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "About",
  __ssrInlineRender: true,
  setup(__props) {
    const highlights = [
      { text: "Чистые комфортные номера и уютные общие зоны." },
      { text: "Ежедневная уборка включена" },
      { text: "Охраняемая территория" },
      { text: "Рядом магазины и кафе" },
      { text: "Без лишних переплат" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "about",
        class: "about section"
      }, _attrs))} data-v-7a64bff7><div class="container about-inner" data-v-7a64bff7><div class="about-image-wrap reveal" data-v-7a64bff7><div class="about-img-frame" data-v-7a64bff7><img${ssrRenderAttr("src", _imports_0)} alt="Уютная зона отдыха хостела Феникс" class="about-img" data-v-7a64bff7><div class="about-img-overlay" aria-hidden="true" data-v-7a64bff7></div></div><div class="about-badge glass-card" data-v-7a64bff7>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ph:shield-check-fill",
        size: "22",
        class: "badge-icon"
      }, null, _parent));
      _push(`<div data-v-7a64bff7><p class="badge-value" data-v-7a64bff7>Безопасно</p><p class="badge-label" data-v-7a64bff7>Круглосуточная охрана</p></div></div></div><div class="about-content" data-v-7a64bff7><p class="section-label reveal" data-v-7a64bff7>О хостеле</p><h2 class="section-title reveal reveal-delay-1" data-v-7a64bff7> Место, где рабочий<br data-v-7a64bff7>день начинается спокойно </h2><p class="about-text reveal reveal-delay-2" data-v-7a64bff7> Хостел «Феникс» — это не просто ночлег, это комфортная база для тех, кто приехал работать или путешествовать в Москве и области. Мы знаем, что важно людям, которые проводят в поездках дни и недели: чистота, тишина, надёжность и доступная цена. </p><p class="about-text reveal reveal-delay-3" data-v-7a64bff7> Наш хостел расположен всего в 10 минутах от метро Физтех. Здесь есть все необходимое: Новые удобные кровати и постельные принадлежности. Горячий душ и санузел в каждом комнате. Охраняемая парковка на 50 машин. </p><div class="about-highlights reveal reveal-delay-4" data-v-7a64bff7><!--[-->`);
      ssrRenderList(highlights, (h) => {
        _push(`<div class="about-highlight" data-v-7a64bff7>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "ph:check-circle-fill",
          size: "18",
          class: "highlight-icon"
        }, null, _parent));
        _push(`<span data-v-7a64bff7>${ssrInterpolate(h.text)}</span></div>`);
      });
      _push(`<!--]--></div><a href="tel:+79804107614" class="btn-primary reveal reveal-delay-5" data-v-7a64bff7>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ph:phone-fill",
        size: "16"
      }, null, _parent));
      _push(` Узнать подробнее </a></div></div></section>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/About.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const AboutSection = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-7a64bff7"]]);
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "Rooms",
  __ssrInlineRender: true,
  setup(__props) {
    const rooms = [
      {
        places: "2 места",
        title: "2-местное размещение",
        desc: "Комфортный номер для двоих. Удобная кровать, отдельная ванная, всё для спокойного отдыха.",
        featured: false,
        badge: "Уютное",
        features: [
          "Отдельный номер",
          "Отдельный душ",
          "Рабочее место",
          "Свой холодильник"
        ],
        prices: {
          shortTerm: "800 ₽",
          mediumTerm: "600 ₽",
          longTerm: "17 500 ₽"
        }
      },
      {
        places: "4 места",
        title: "4-местное размещение",
        desc: "Идеально для компании друзей. Несколько зон отдыха, общая кухня, возможность готовить.",
        featured: false,
        badge: "Популярно",
        features: [
          "Просторный номер",
          "Общая кухня",
          "Душевая кабина",
          "Большой холодильник"
        ],
        prices: {
          shortTerm: "800 ₽",
          mediumTerm: "600 ₽",
          longTerm: "16 500 ₽"
        }
      },
      {
        places: "6–8 мест",
        title: "6–8 местное размещение",
        desc: "Многоместный номер для больших компаний. Отдельные кровати с занавесками, личные полки.",
        featured: true,
        badge: "Выгодно",
        features: [
          "Просторный номер",
          "Общая кухня",
          "Душевая кабина",
          "Большой холодильник"
        ],
        prices: {
          shortTerm: "800 ₽",
          mediumTerm: "500 ₽",
          longTerm: "13 500 ₽"
        }
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "rooms",
        class: "rooms section"
      }, _attrs))} data-v-cec63e38><div class="container" data-v-cec63e38><div class="rooms-header reveal" data-v-cec63e38><div data-v-cec63e38><p class="section-label" data-v-cec63e38>Размещение</p><h2 class="section-title" data-v-cec63e38> Размещение по<br data-v-cec63e38><span class="text-accent" data-v-cec63e38>числу мест</span></h2></div><p class="section-desc" data-v-cec63e38> Современные номера на любой вкус. Выбирайте подходящий вариант — от уютного места в общем номере до комфортного размещения с друзьями. </p></div><div class="rooms-grid" data-v-cec63e38><!--[-->`);
      ssrRenderList(rooms, (room, i) => {
        _push(`<div class="${ssrRenderClass([[`reveal-delay-${i + 1}`, { featured: room.featured }], "room-card glass-card reveal"])}" data-v-cec63e38><div class="room-header-block" data-v-cec63e38><div class="bed-badge" data-v-cec63e38>${ssrInterpolate(room.places)}</div>`);
        if (room.featured) {
          _push(`<span class="room-badge" data-v-cec63e38>${ssrInterpolate(room.badge)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="room-title-block" data-v-cec63e38><h3 class="room-title" data-v-cec63e38>${ssrInterpolate(room.title)}</h3><p class="room-desc" data-v-cec63e38>${ssrInterpolate(room.desc)}</p></div><ul class="room-features" data-v-cec63e38><!--[-->`);
        ssrRenderList(room.features, (feature) => {
          _push(`<li data-v-cec63e38>`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "ph:check-circle-bold",
            size: "16",
            class: "feature-icon"
          }, null, _parent));
          _push(` ${ssrInterpolate(feature)}</li>`);
        });
        _push(`<!--]--></ul><div class="prices-container" data-v-cec63e38><div class="price-block" data-v-cec63e38><div class="price-label" data-v-cec63e38>До 7 дней</div><div class="price-value" data-v-cec63e38>${ssrInterpolate(room.prices.shortTerm)}</div><div class="price-unit" data-v-cec63e38>/ ночь</div></div><div class="price-divider" data-v-cec63e38></div><div class="price-block" data-v-cec63e38><div class="price-label" data-v-cec63e38>От 7 дней</div><div class="price-value" data-v-cec63e38>${ssrInterpolate(room.prices.mediumTerm)}</div><div class="price-unit" data-v-cec63e38>/ ночь</div></div><div class="price-divider" data-v-cec63e38></div><div class="price-block" data-v-cec63e38><div class="price-label" data-v-cec63e38>Месяц</div><div class="price-value" data-v-cec63e38>${ssrInterpolate(room.prices.longTerm)}</div><div class="price-unit" data-v-cec63e38>/ месяц</div></div></div><a href="tel:+79804107614" class="${ssrRenderClass([{ "cta-featured": room.featured }, "room-cta"])}" data-v-cec63e38> Забронировать `);
        _push(ssrRenderComponent(_component_Icon, {
          name: "ph:arrow-right",
          size: "16"
        }, null, _parent));
        _push(`</a></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Rooms.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const RoomsSection = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-cec63e38"]]);
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "Features",
  __ssrInlineRender: true,
  setup(__props) {
    const features = [
      { icon: "ph:shower-fill", title: "Горячий душ", desc: "Раздельные душевые с горячей водой 24/7" },
      { icon: "ph:broom-fill", title: "Ежедневная уборка", desc: "Регулярная уборка помещений для поддержания чистоты" },
      { icon: "ph:car-fill", title: "Парковка", desc: "Охраняемая парковка для личного транспорта" },
      { icon: "ph:cooking-pot-fill", title: "Кухня", desc: "Общая кухня с плитой, микроволновкой и холодильником" },
      { icon: "ph:washing-machine-fill", title: "Стирка", desc: "Стиральная машина за небольшую доплату" },
      { icon: "ph:lock-fill", title: "Личный шкафчик", desc: "Индивидуальный замок для хранения вещей" },
      { icon: "ph:first-aid-kit-fill", title: "Безопасность", desc: "Видеонаблюдение и охрана круглосуточно" },
      { icon: "ph:bed-fill", title: "Чистое бельё", desc: "Постельные принадлежности меняются регулярно" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "features section" }, _attrs))} data-v-cf929927><div class="container" data-v-cf929927><div class="features-header reveal" data-v-cf929927><p class="section-label" data-v-cf929927>Удобства</p><h2 class="section-title" data-v-cf929927>Всё, что нужно<br data-v-cf929927><span class="text-accent" data-v-cf929927>для жизни</span></h2></div><div class="features-grid" data-v-cf929927><!--[-->`);
      ssrRenderList(features, (feat, i) => {
        _push(`<div class="${ssrRenderClass([`reveal-delay-${i % 4 + 1}`, "feat-item reveal"])}" data-v-cf929927><div class="feat-icon-wrap" data-v-cf929927>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: feat.icon,
          size: "26",
          class: "feat-icon"
        }, null, _parent));
        _push(`</div><div class="feat-body" data-v-cf929927><h3 class="feat-title" data-v-cf929927>${ssrInterpolate(feat.title)}</h3><p class="feat-desc" data-v-cf929927>${ssrInterpolate(feat.desc)}</p></div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Features.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const FeaturesSection = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-cf929927"]]);
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "Gallery",
  __ssrInlineRender: true,
  setup(__props) {
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
      { src: "/images/gallery-11.jpg", alt: "Кухня и столовая" }
    ];
    const items = reactive(
      rawItems.map((item) => ({ ...item, style: {} }))
    );
    ref(null);
    ref([]);
    const lightboxIndex = ref(null);
    ref("slide-right");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "gallery",
        class: "gallery section"
      }, _attrs))} data-v-05eefa13><div class="container" data-v-05eefa13><div class="gallery-header reveal" data-v-05eefa13><div data-v-05eefa13><p class="section-label" data-v-05eefa13>Фотогалерея</p><h2 class="section-title" data-v-05eefa13> Как у нас<br data-v-05eefa13><span class="text-accent" data-v-05eefa13>выглядит</span></h2></div><p class="section-desc" data-v-05eefa13> Смотрите сами — чистые номера, уютные общие зоны и всё необходимое для комфортного проживания. </p></div><div class="masonry-grid" data-v-05eefa13><!--[-->`);
      ssrRenderList(items, (item, i) => {
        _push(`<div class="${ssrRenderClass([`reveal-delay-${i % 5 + 1}`, "masonry-item reveal"])}" style="${ssrRenderStyle(item.style)}"${ssrRenderAttr("aria-label", `Открыть фото: ${item.alt}`)} role="button" tabindex="0" data-v-05eefa13><div class="masonry-img-wrap" data-v-05eefa13><img${ssrRenderAttr("src", item.src)}${ssrRenderAttr("alt", item.alt)} class="masonry-img" data-v-05eefa13><div class="masonry-overlay" aria-hidden="true" data-v-05eefa13><div class="overlay-icon" data-v-05eefa13>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "ph:magnifying-glass-plus-bold",
          size: "28"
        }, null, _parent));
        _push(`</div><span class="overlay-label" data-v-05eefa13>${ssrInterpolate(item.alt)}</span></div></div></div>`);
      });
      _push(`<!--]--></div></div>`);
      if (lightboxIndex.value !== null) {
        _push(`<div class="lightbox" role="dialog" aria-modal="true"${ssrRenderAttr("aria-label", items[lightboxIndex.value].alt)} data-v-05eefa13><div class="lightbox-inner" data-v-05eefa13><button class="lightbox-close" aria-label="Закрыть" data-v-05eefa13><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="22" height="22" data-v-05eefa13><path fill="#ffffff" d="M208.49 191.51a12 12 0 0 1-17 17L128 145l-63.51 63.49a12 12 0 0 1-17-17L111 128L47.51 64.49a12 12 0 0 1 17-17L128 111l63.51-63.52a12 12 0 0 1 17 17L145 128Z" data-v-05eefa13></path></svg></button><button class="lightbox-nav lightbox-prev" aria-label="Предыдущее фото"${ssrIncludeBooleanAttr(lightboxIndex.value === 0) ? " disabled" : ""} data-v-05eefa13><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="22" height="22" data-v-05eefa13><path fill="#fff" d="M228 128a12 12 0 0 1-12 12H69l51.52 51.51a12 12 0 0 1-17 17l-72-72a12 12 0 0 1 0-17l72-72a12 12 0 0 1 17 17L69 116h147a12 12 0 0 1 12 12" data-v-05eefa13></path></svg></button><img${ssrRenderAttr("src", items[lightboxIndex.value].src)}${ssrRenderAttr("alt", items[lightboxIndex.value].alt)} class="lightbox-img" data-v-05eefa13><button class="lightbox-nav lightbox-next" aria-label="Следующее фото"${ssrIncludeBooleanAttr(lightboxIndex.value === items.length - 1) ? " disabled" : ""} data-v-05eefa13><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="22" height="22" data-v-05eefa13><path fill="#fff" d="m224.49 136.49l-72 72a12 12 0 0 1-17-17L187 140H40a12 12 0 0 1 0-24h147l-51.49-51.52a12 12 0 0 1 17-17l72 72a12 12 0 0 1-.02 17.01" data-v-05eefa13></path></svg></button><div class="lightbox-counter" data-v-05eefa13>${ssrInterpolate(lightboxIndex.value + 1)} / ${ssrInterpolate(items.length)}</div><div class="lightbox-caption" data-v-05eefa13>${ssrInterpolate(items[lightboxIndex.value].alt)}</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</section>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Gallery.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const GallerySection = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-05eefa13"]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "Location",
  __ssrInlineRender: true,
  setup(__props) {
    const companies = [
      { name: "Wildberries", icon: "ph:package-fill" },
      { name: "Ozon", icon: "ph:cube-fill" },
      { name: "Яндекс", icon: "ph:magnifying-glass-fill" },
      { name: "СберМаркет", icon: "ph:shopping-cart-fill" },
      { name: "Лемана ПРО", icon: "ph:wrench-fill" },
      { name: "ВкусВилл", icon: "ph:leaf-fill" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "location",
        class: "location section"
      }, _attrs))} data-v-6fca5bbc><div class="container" data-v-6fca5bbc><div class="location-header reveal" data-v-6fca5bbc><p class="section-label" data-v-6fca5bbc>Локация</p><h2 class="section-title" data-v-6fca5bbc> Распахни ворота<br data-v-6fca5bbc><span class="text-accent" data-v-6fca5bbc>в Москву</span></h2></div><div class="logistics-section reveal" data-v-6fca5bbc><div class="logistics-header" data-v-6fca5bbc><div class="logistics-icon-wrap" data-v-6fca5bbc>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ph:warehouse-fill",
        size: "28",
        class: "logistics-icon"
      }, null, _parent));
      _push(`</div><div data-v-6fca5bbc><h3 class="logistics-title" data-v-6fca5bbc> Мы в центре логистической инфраструктуры </h3><p class="logistics-desc" data-v-6fca5bbc> Хостел расположен в центре логистического хаба, рядом с крупнейшими складскими и распределительными центрами. </p></div></div><div class="companies-grid" data-v-6fca5bbc><!--[-->`);
      ssrRenderList(companies, (company, i) => {
        _push(`<div class="${ssrRenderClass([`reveal-delay-${i + 1}`, "company-card glass-card reveal"])}" data-v-6fca5bbc><div class="company-icon-wrap" data-v-6fca5bbc>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: company.icon,
          size: "24",
          class: "company-icon"
        }, null, _parent));
        _push(`</div><span class="company-name" data-v-6fca5bbc>${ssrInterpolate(company.name)}</span></div>`);
      });
      _push(`<!--]--></div></div></div></section>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Location.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const LocationSection = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-6fca5bbc"]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Audience",
  __ssrInlineRender: true,
  setup(__props) {
    const groups = [
      {
        icon: "ph:hard-hat-fill",
        title: "Рабочие бригады",
        desc: "Строители, монтажники и специалисты на вахте. Удобное расположение рядом с промзонами и объектами Москвы."
      },
      {
        icon: "ph:briefcase-fill",
        title: "Командировочные",
        desc: "Деловые путешественники, которым нужен чистый ночлег без переплат за лишние звёзды."
      },
      {
        icon: "ph:backpack-fill",
        title: "Путешественники",
        desc: "Туристы, которые хотят исследовать Москву, не тратя всё бюджет на гостиницу."
      },
      {
        icon: "ph:student-fill",
        title: "Студенты",
        desc: "Абитуриенты, стажёры и учащиеся — для которых важна цена и удобная транспортная доступность."
      },
      {
        icon: "ph:users-three-fill",
        title: "Коллективы",
        desc: "Творческие и спортивные команды, приезжающие в Москву на конкурсы и соревнования."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "audience section" }, _attrs))} data-v-339d6dab><div class="container" data-v-339d6dab><div class="audience-header reveal" data-v-339d6dab><p class="section-label" data-v-339d6dab>Для кого</p><h2 class="section-title" data-v-339d6dab>Кто останавливается<br data-v-339d6dab><span class="text-accent" data-v-339d6dab>в «Фениксе»</span></h2></div><div class="audience-grid" data-v-339d6dab><!--[-->`);
      ssrRenderList(groups, (group, i) => {
        _push(`<div class="${ssrRenderClass([`reveal-delay-${i + 1}`, "audience-card glass-card reveal"])}" data-v-339d6dab><div class="audience-icon" data-v-339d6dab>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: group.icon,
          size: "36"
        }, null, _parent));
        _push(`</div><h3 class="audience-title" data-v-339d6dab>${ssrInterpolate(group.title)}</h3><p class="audience-desc" data-v-339d6dab>${ssrInterpolate(group.desc)}</p></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Audience.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const AudienceSection = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-339d6dab"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Reviews",
  __ssrInlineRender: true,
  setup(__props) {
    const activeIdx = ref(0);
    const windowWidth = ref(0);
    const reviews = [
      {
        name: "Олеся Асколепова",
        meta: "13 января 2025",
        color: "#ff6a00",
        rating: 5,
        text: "Очень хороших хостел. Приняли как родную. Здания новые , красивые. Внутри сделан современный ремонт. Работает охрана и пропускная система. Внутри помещения есть обслуживающий персонал. Коридоры, комнаты , лестничные площадки моют убирают, везде чистота. Мусор выносят из комнат каждое утро. Жильцы приветливые и доброжелательные."
      },
      {
        name: "Максим Сергеенко",
        meta: "6 ноября 2024",
        color: "#e05000",
        rating: 5,
        text: "Отличный хостел. Холодильники в каждой комнате отдельные души с туалетом на комнату полноценные не как обычно перегородки каждый день проводят уборку в комнатах и в туалете что удивительно для хостела. В целом все очень чисто и опрятно вернусь сюда еще раз 100%"
      },
      {
        name: "Динара У.",
        meta: "19 января 2025",
        color: "#c04000",
        rating: 5,
        text: "Отличный хостел. Слышала много слухов, что грязно. И есть живность. Из за этого не решалась заехать сюда, хотя до работы 3 шага. Так вот все это миф. Чисто, уютно. Очень жалею что раньше не переехала, тратила на дорогу 4 часа. Проживаю в даном хостеле, все нравится! Жалко только что лифтом пользоваться нельзя, после ночи, уставшая на 6 этаж😒А так все супер👍"
      },
      {
        name: "Хасан Мирзамутдинов",
        meta: "14 января 2025",
        color: "#ff8c00",
        rating: 5,
        text: "Чисто, все условия предоставлены. Администрация доброжелательная. Обслуживание вовремя. Постельное бельё чистое и меняют вовремя. 5/5."
      },
      {
        name: "Вячеслав Бадмацыренов",
        meta: "18 июля 2023",
        color: "#d06000",
        rating: 4.2,
        text: "В некоторых местах есть неисправности, например, сверху в ванной капала вода, но в целом очень неплохо, просторно, светло, чисто, много комнат. Туалет и душ на две комнаты, неплохо было бы ещё в коридоре резервные туалеты и душ сделать. Розетки у каждой кровати. Кровати удобные, двухъярусные, деревянные. Внимательный персонал."
      }
    ];
    const getStars = (rating) => {
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
    watch(slidesPerView, () => {
      if (activeIdx.value > maxIndex.value) {
        activeIdx.value = maxIndex.value;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "reviews",
        class: "reviews section"
      }, _attrs))} data-v-360de63b><div class="container" data-v-360de63b><div class="reviews-header reveal" data-v-360de63b><p class="section-label" data-v-360de63b>Отзывы</p><h2 class="section-title" data-v-360de63b> Что говорят<br data-v-360de63b><span class="text-accent" data-v-360de63b>наши гости</span></h2></div><div class="reviews-slider" data-v-360de63b><div class="reviews-track" style="${ssrRenderStyle({
        transform: `translateX(-${unref(activeIdx) * (100 / unref(slidesPerView))}%)`
      })}" data-v-360de63b><!--[-->`);
      ssrRenderList(reviews, (review) => {
        _push(`<div class="review-slide" data-v-360de63b><div class="review-card glass-card" data-v-360de63b><div class="review-stars"${ssrRenderAttr("aria-label", `${review.rating} звезды из 5`)} data-v-360de63b><!--[-->`);
        ssrRenderList(getStars(review.rating), (star, index2) => {
          _push(`<!--[-->`);
          if (star === "full") {
            _push(ssrRenderComponent(_component_Icon, {
              name: "ph:star-fill",
              size: "18",
              class: "star-icon"
            }, null, _parent));
          } else if (star === "half") {
            _push(ssrRenderComponent(_component_Icon, {
              name: "ph:star-half-fill",
              size: "18",
              class: "star-icon"
            }, null, _parent));
          } else {
            _push(ssrRenderComponent(_component_Icon, {
              name: "ph:star",
              size: "18",
              class: "star-icon empty"
            }, null, _parent));
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></div><blockquote class="review-text" data-v-360de63b>&quot;${ssrInterpolate(review.text)}&quot;</blockquote><div class="review-author" data-v-360de63b><div class="author-avatar" style="${ssrRenderStyle({ background: review.color })}" data-v-360de63b>${ssrInterpolate(review.name[0])}</div><div data-v-360de63b><p class="author-name" data-v-360de63b>${ssrInterpolate(review.name)}</p><p class="author-meta" data-v-360de63b>${ssrInterpolate(review.meta)}</p></div></div></div></div>`);
      });
      _push(`<!--]--></div></div><div class="reviews-controls" data-v-360de63b><!--[-->`);
      ssrRenderList(unref(pages), (_, i) => {
        _push(`<button class="${ssrRenderClass([{ active: i === unref(activeIdx) }, "dot"])}"${ssrRenderAttr("aria-label", `Отзыв ${i + 1}`)} data-v-360de63b></button>`);
      });
      _push(`<!--]--></div><div class="reviews-arrows" data-v-360de63b><button class="arrow-btn"${ssrIncludeBooleanAttr(unref(activeIdx) === 0) ? " disabled" : ""} aria-label="Предыдущий" data-v-360de63b>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ph:arrow-left",
        size: "20"
      }, null, _parent));
      _push(`</button><button class="arrow-btn"${ssrIncludeBooleanAttr(unref(activeIdx) === unref(maxIndex)) ? " disabled" : ""} aria-label="Следующий" data-v-360de63b>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ph:arrow-right",
        size: "20"
      }, null, _parent));
      _push(`</button></div></div></section>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Reviews.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const ReviewsSection = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-360de63b"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "FAQ",
  __ssrInlineRender: true,
  setup(__props) {
    const openIdx = ref(0);
    ref([]);
    const answerHeights = ref([]);
    const faqs = [
      {
        question: "В какое время можно заехать и выехать?",
        answer: "Мы работаем круглосуточно — заехать и выехать можно в любое время суток. Администратор всегда на месте. Ранний заезд или поздний выезд возможен при наличии свободного места."
      },
      {
        question: "Есть ли парковка рядом с хостелом?",
        answer: "Да, на территории хостела есть охраняемая парковка. Это особенно удобно для тех, кто приезжает на личном или рабочем автотранспорте."
      },
      {
        question: "Что входит в стоимость проживания?",
        answer: "В стоимость включены: место в номере, постельное бельё, доступ к общей кухне, душ и туалет. Собственная парковка на 50 машин. Стирка оплачивается отдельно по небольшому тарифу."
      },
      {
        question: "Можно ли остановиться на несколько месяцев?",
        answer: "Да, мы рады гостям на длительный срок. При проживании от 2 недель предусмотрена скидка. Для длительных сроков рекомендуем уточнять условия по телефону — мы подберём наиболее выгодный вариант."
      },
      {
        question: "Как добраться до хостела из Москвы?",
        answer: "Хостел находится в Мытищах, в 10 минутах ходьбы от метро Физтех. На автомобиле: по Ярославскому шоссе в сторону Мытищ. На общественном транспорте: автобусы из Москвы или электричка с Ярославского вокзала до станции Мытищи."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "faq",
        class: "faq section"
      }, _attrs))} data-v-e6ed3dc2><div class="container faq-inner" data-v-e6ed3dc2><div class="faq-header reveal" data-v-e6ed3dc2><p class="section-label" data-v-e6ed3dc2>FAQ</p><h2 class="section-title" data-v-e6ed3dc2> Часто задаваемые<br data-v-e6ed3dc2><span class="text-accent" data-v-e6ed3dc2>вопросы</span></h2></div><div class="faq-list" data-v-e6ed3dc2><!--[-->`);
      ssrRenderList(faqs, (item, i) => {
        _push(`<div class="${ssrRenderClass([`reveal-delay-${i + 1}`, "faq-reveal-wrapper reveal"])}" data-v-e6ed3dc2><div class="${ssrRenderClass([{ open: unref(openIdx) === i }, "faq-item"])}" data-v-e6ed3dc2><button class="faq-question"${ssrRenderAttr("aria-expanded", unref(openIdx) === i)} data-v-e6ed3dc2><span data-v-e6ed3dc2>${ssrInterpolate(item.question)}</span><span class="faq-icon" data-v-e6ed3dc2>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: unref(openIdx) === i ? "ph:minus" : "ph:plus",
          size: "20"
        }, null, _parent));
        _push(`</span></button><div class="faq-answer-wrap" style="${ssrRenderStyle({
          maxHeight: unref(openIdx) === i ? unref(answerHeights)[i] + "px" : "0"
        })}" data-v-e6ed3dc2><p class="faq-answer" data-v-e6ed3dc2>${ssrInterpolate(item.answer)}</p></div></div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/FAQ.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const FaqSection = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-e6ed3dc2"]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Icon = __nuxt_component_0;
  _push(`<section${ssrRenderAttrs(mergeProps({
    id: "contacts",
    class: "contacts section"
  }, _attrs))} data-v-fc4d533b><div class="container" data-v-fc4d533b><div class="contacts-header reveal" data-v-fc4d533b><p class="section-label" data-v-fc4d533b>Контакты</p><h2 class="section-title" data-v-fc4d533b> Свяжитесь с нами<br data-v-fc4d533b><span class="text-accent" data-v-fc4d533b>прямо сейчас</span></h2></div><div class="contacts-inner" data-v-fc4d533b><div class="contacts-info reveal" data-v-fc4d533b><div class="contact-card glass-card" data-v-fc4d533b><a href="tel:+79804107614" class="contact-row" data-v-fc4d533b><div class="contact-icon-wrap" data-v-fc4d533b>`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "ph:phone-fill",
    size: "22",
    class: "contact-icon"
  }, null, _parent));
  _push(`</div><div data-v-fc4d533b><p class="contact-label" data-v-fc4d533b>Телефон</p><p class="contact-value" data-v-fc4d533b>+7 (980) 410-76-14</p></div>`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "ph:arrow-up-right",
    size: "18",
    class: "contact-arrow"
  }, null, _parent));
  _push(`</a><div class="contact-divider" data-v-fc4d533b></div><div class="contact-row non-link" data-v-fc4d533b><div class="contact-icon-wrap" data-v-fc4d533b>`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "ph:clock-fill",
    size: "22",
    class: "contact-icon"
  }, null, _parent));
  _push(`</div><div data-v-fc4d533b><p class="contact-label" data-v-fc4d533b>Режим работы</p><p class="contact-value" data-v-fc4d533b>Круглосуточно, 24/7</p></div></div><div class="contact-divider" data-v-fc4d533b></div><div class="contact-row non-link" data-v-fc4d533b><div class="contact-icon-wrap" data-v-fc4d533b>`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "ph:map-pin-fill",
    size: "22",
    class: "contact-icon"
  }, null, _parent));
  _push(`</div><div data-v-fc4d533b><p class="contact-label" data-v-fc4d533b>Адрес</p><p class="contact-value" data-v-fc4d533b> Московская область, Мытищи, Липкинское шоссе, 2-й километр, посёлок Вешки, вл1с2 </p></div></div><div class="contact-divider" data-v-fc4d533b></div><div class="contact-row non-link" data-v-fc4d533b><div class="contact-icon-wrap" data-v-fc4d533b>`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "ph:car-fill",
    size: "22",
    class: "contact-icon"
  }, null, _parent));
  _push(`</div><div data-v-fc4d533b><p class="contact-label" data-v-fc4d533b>Парковка</p><p class="contact-value" data-v-fc4d533b>Охраняемая парковка на 50 машин</p></div></div></div><a href="tel:+79804107614" class="big-call-btn" data-v-fc4d533b>`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "ph:phone-call-fill",
    size: "24"
  }, null, _parent));
  _push(`<span data-v-fc4d533b>Позвонить и забронировать</span></a></div><div class="contacts-map glass-card reveal reveal-delay-2" data-v-fc4d533b><iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A40df10e896e50836669db844b80b1d3b7f21eff9c131ace3b0ed76b78056ffd4&amp;source=constructor" class="contact-map-iframe" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade" width="100%" height="473" frameborder="0" data-v-fc4d533b></iframe></div></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Contacts.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ContactsSection = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-fc4d533b"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Хостел «Феникс» — доступное проживание в Мытищах рядом с МКАД",
      meta: [
        { name: "description", content: "Хостел Феникс в Мытищах. Комфортное и недорогое размещение для рабочих и гостей Москвы. Wi-Fi, парковка, 24/7. Цены от 700 ₽/сутки." }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-wrapper" }, _attrs))} data-v-7d86060a>`);
      _push(ssrRenderComponent(HeroSection, null, null, _parent));
      _push(ssrRenderComponent(AdvantagesSection, null, null, _parent));
      _push(ssrRenderComponent(AboutSection, null, null, _parent));
      _push(ssrRenderComponent(RoomsSection, null, null, _parent));
      _push(ssrRenderComponent(FeaturesSection, null, null, _parent));
      _push(ssrRenderComponent(GallerySection, null, null, _parent));
      _push(ssrRenderComponent(LocationSection, null, null, _parent));
      _push(ssrRenderComponent(AudienceSection, null, null, _parent));
      _push(ssrRenderComponent(ReviewsSection, null, null, _parent));
      _push(ssrRenderComponent(FaqSection, null, null, _parent));
      _push(ssrRenderComponent(ContactsSection, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7d86060a"]]);
export {
  index as default
};
//# sourceMappingURL=index-BvG1Cr3x.js.map

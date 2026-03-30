import { computed, defineComponent, mergeProps, unref, useSSRContext, ref } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderClass, ssrRenderSlot } from "vue/server-renderer";
import { b as useState, _ as __nuxt_component_0, a as _export_sfc } from "../server.mjs";
import "C:/Users/Илья/Desktop/b_1zotQsZ7Tum-1774406895089/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
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
const useColorMode = () => {
  return useState("color-mode").value;
};
function useTheme() {
  const colorMode = useColorMode();
  const isDark = computed(() => colorMode.value === "dark");
  const toggleTheme = () => {
    colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
  };
  return { isDark, toggleTheme, colorMode };
}
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "ThemeToggle",
  __ssrInlineRender: true,
  setup(__props) {
    const { isDark } = useTheme();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<button${ssrRenderAttrs(mergeProps({
        class: ["theme-toggle", { "is-light": !unref(isDark) }],
        "aria-label": unref(isDark) ? "Включить светлую тему" : "Включить тёмную тему"
      }, _attrs))} data-v-351cb952><span class="toggle-track" data-v-351cb952><span class="toggle-thumb" data-v-351cb952>`);
      if (unref(isDark)) {
        _push(ssrRenderComponent(_component_Icon, {
          name: "ph:moon-stars-fill",
          size: "14"
        }, null, _parent));
      } else {
        _push(ssrRenderComponent(_component_Icon, {
          name: "ph:sun-fill",
          size: "14"
        }, null, _parent));
      }
      _push(`</span></span></button>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/ThemeToggle.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const ThemeToggle = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-351cb952"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    const isScrolled = ref(false);
    const menuOpen = ref(false);
    const navItems = [
      { href: "#about", label: "О нас" },
      { href: "#rooms", label: "Номера" },
      { href: "#prices", label: "Цены" },
      { href: "#location", label: "Локация" },
      { href: "#reviews", label: "Отзывы" },
      { href: "#contacts", label: "Контакты" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: ["header", { scrolled: unref(isScrolled), "menu-open": unref(menuOpen) }]
      }, _attrs))} data-v-0375ea8a><div class="container header-inner" data-v-0375ea8a><a href="#hero" class="logo" data-v-0375ea8a><span class="logo-icon" data-v-0375ea8a>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ph:fire-fill",
        size: "22"
      }, null, _parent));
      _push(`</span><span class="logo-text" data-v-0375ea8a>Феникс</span></a><nav class="nav" aria-label="Основная навигация" data-v-0375ea8a><!--[-->`);
      ssrRenderList(navItems, (item) => {
        _push(`<a${ssrRenderAttr("href", item.href)} class="nav-link" data-v-0375ea8a>${ssrInterpolate(item.label)}</a>`);
      });
      _push(`<!--]--></nav><div class="header-actions" data-v-0375ea8a>`);
      _push(ssrRenderComponent(ThemeToggle, null, null, _parent));
      _push(`<a href="tel:+79804107614" class="btn-call" data-v-0375ea8a>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ph:phone-fill",
        size: "16"
      }, null, _parent));
      _push(`<span data-v-0375ea8a>Позвонить</span></a><button class="${ssrRenderClass([{ active: unref(menuOpen) }, "burger"])}"${ssrRenderAttr("aria-expanded", unref(menuOpen))} aria-label="Открыть меню" data-v-0375ea8a><span data-v-0375ea8a></span><span data-v-0375ea8a></span><span data-v-0375ea8a></span></button></div></div><div class="${ssrRenderClass([{ open: unref(menuOpen) }, "mobile-menu"])}" data-v-0375ea8a><nav class="mobile-nav" data-v-0375ea8a><!--[-->`);
      ssrRenderList(navItems, (item) => {
        _push(`<a${ssrRenderAttr("href", item.href)} class="mobile-nav-link" data-v-0375ea8a>${ssrInterpolate(item.label)}</a>`);
      });
      _push(`<!--]--></nav><a href="tel:+79804107614" class="mobile-call" data-v-0375ea8a>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ph:phone-fill",
        size: "18"
      }, null, _parent));
      _push(` +7 (980) 410-76-14 </a></div></header>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/Header.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const AppHeader = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-0375ea8a"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    const navItems = [
      { href: "#about", label: "О хостеле" },
      { href: "#rooms", label: "Номера" },
      { href: "#prices", label: "Цены" },
      { href: "#location", label: "Локация" },
      { href: "#reviews", label: "Отзывы" },
      { href: "#faq", label: "FAQ" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "footer" }, _attrs))} data-v-e0d17704><div class="container footer-inner" data-v-e0d17704><div class="footer-brand" data-v-e0d17704><div class="footer-logo" data-v-e0d17704>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ph:fire-fill",
        size: "24",
        class: "footer-logo-icon"
      }, null, _parent));
      _push(`<span data-v-e0d17704>Феникс</span></div><p class="footer-tagline" data-v-e0d17704>Доступное жильё рядом с Москвой — для тех, кто ценит комфорт и экономию.</p></div><div class="footer-links" data-v-e0d17704><div class="footer-col" data-v-e0d17704><p class="footer-col-title" data-v-e0d17704>Навигация</p><ul data-v-e0d17704><!--[-->`);
      ssrRenderList(navItems, (item) => {
        _push(`<li data-v-e0d17704><a${ssrRenderAttr("href", item.href)} data-v-e0d17704>${ssrInterpolate(item.label)}</a></li>`);
      });
      _push(`<!--]--></ul></div><div class="footer-col" data-v-e0d17704><p class="footer-col-title" data-v-e0d17704>Контакты</p><ul data-v-e0d17704><li data-v-e0d17704><a href="tel:+79804107614" data-v-e0d17704>+7 (980) 410-76-14</a></li><li data-v-e0d17704><span class="footer-text" data-v-e0d17704>Московская область, Мытищи, Липкинское шоссе, 2-й километр, посёлок Вешки, вл1с2</span></li><li data-v-e0d17704><span class="footer-text" data-v-e0d17704>Работаем 24/7</span></li></ul></div></div></div><div class="footer-bottom" data-v-e0d17704><div class="container footer-bottom-inner" data-v-e0d17704><p class="footer-copy" data-v-e0d17704>© ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} Хостел «Феникс». Все права защищены.</p><div class="developer-credit" data-v-e0d17704><span class="developer-trigger" data-v-e0d17704> Разработка сайта `);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ph:code-bold",
        size: "14",
        class: "dev-icon"
      }, null, _parent));
      _push(`</span><div class="developer-tooltip" data-v-e0d17704><p class="tooltip-title" data-v-e0d17704>Связаться с разработчиком</p><div class="tooltip-links" data-v-e0d17704><a href="https://vk.com/amberlock" target="_blank" rel="noopener noreferrer" class="tooltip-link" data-v-e0d17704>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "akar-icons:vk-fill",
        size: "18"
      }, null, _parent));
      _push(`<span data-v-e0d17704>ВКонтакте</span></a><a href="https://t.me/Uonu9l" target="_blank" rel="noopener noreferrer" class="tooltip-link" data-v-e0d17704>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ph:telegram-logo-fill",
        size: "18"
      }, null, _parent));
      _push(`<span data-v-e0d17704>Telegram</span></a></div></div></div></div></div></footer>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/Footer.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const AppFooter = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-e0d17704"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ScrollToTop",
  __ssrInlineRender: true,
  setup(__props) {
    const isVisible = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<button${ssrRenderAttrs(mergeProps({
        class: ["scroll-top", { visible: isVisible.value }],
        "aria-label": "Наверх"
      }, _attrs))} data-v-1f6166f6>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ph:arrow-up-bold",
        size: "24"
      }, null, _parent));
      _push(`</button>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/ScrollToTop.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ScrollToTop = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-1f6166f6"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="layout" data-v-4771a872>`);
      _push(ssrRenderComponent(AppHeader, null, null, _parent));
      _push(`<main data-v-4771a872>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main>`);
      _push(ssrRenderComponent(AppFooter, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(ScrollToTop, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4771a872"]]);
export {
  _default as default
};
//# sourceMappingURL=default-C2GAF0Oi.js.map

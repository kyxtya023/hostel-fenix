import { defineComponent, ref, mergeProps, unref, computed, useSSRContext } from 'file://D:/%D0%A5%D0%BE%D1%81%D1%82%D0%B5%D0%BB%20%D0%A4%D0%B5%D0%BD%D0%B8%D0%BA%D1%81/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderClass, ssrRenderStyle } from 'file://D:/%D0%A5%D0%BE%D1%81%D1%82%D0%B5%D0%BB%20%D0%A4%D0%B5%D0%BD%D0%B8%D0%BA%D1%81/node_modules/vue/server-renderer/index.mjs';
import { a as _export_sfc, _ as __nuxt_component_0, b as useState } from './server.mjs';
import 'file://D:/%D0%A5%D0%BE%D1%81%D1%82%D0%B5%D0%BB%20%D0%A4%D0%B5%D0%BD%D0%B8%D0%BA%D1%81/node_modules/ofetch/dist/node.mjs';
import '../_/nitro.mjs';
import 'file://D:/%D0%A5%D0%BE%D1%81%D1%82%D0%B5%D0%BB%20%D0%A4%D0%B5%D0%BD%D0%B8%D0%BA%D1%81/node_modules/h3/dist/index.mjs';
import 'file://D:/%D0%A5%D0%BE%D1%81%D1%82%D0%B5%D0%BB%20%D0%A4%D0%B5%D0%BD%D0%B8%D0%BA%D1%81/node_modules/ufo/dist/index.mjs';
import 'file://D:/%D0%A5%D0%BE%D1%81%D1%82%D0%B5%D0%BB%20%D0%A4%D0%B5%D0%BD%D0%B8%D0%BA%D1%81/node_modules/destr/dist/index.mjs';
import 'file://D:/%D0%A5%D0%BE%D1%81%D1%82%D0%B5%D0%BB%20%D0%A4%D0%B5%D0%BD%D0%B8%D0%BA%D1%81/node_modules/hookable/dist/index.mjs';
import 'file://D:/%D0%A5%D0%BE%D1%81%D1%82%D0%B5%D0%BB%20%D0%A4%D0%B5%D0%BD%D0%B8%D0%BA%D1%81/node_modules/node-mock-http/dist/index.mjs';
import 'file://D:/%D0%A5%D0%BE%D1%81%D1%82%D0%B5%D0%BB%20%D0%A4%D0%B5%D0%BD%D0%B8%D0%BA%D1%81/node_modules/klona/dist/index.mjs';
import 'file://D:/%D0%A5%D0%BE%D1%81%D1%82%D0%B5%D0%BB%20%D0%A4%D0%B5%D0%BD%D0%B8%D0%BA%D1%81/node_modules/defu/dist/defu.mjs';
import 'file://D:/%D0%A5%D0%BE%D1%81%D1%82%D0%B5%D0%BB%20%D0%A4%D0%B5%D0%BD%D0%B8%D0%BA%D1%81/node_modules/scule/dist/index.mjs';
import 'file://D:/%D0%A5%D0%BE%D1%81%D1%82%D0%B5%D0%BB%20%D0%A4%D0%B5%D0%BD%D0%B8%D0%BA%D1%81/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://D:/%D0%A5%D0%BE%D1%81%D1%82%D0%B5%D0%BB%20%D0%A4%D0%B5%D0%BD%D0%B8%D0%BA%D1%81/node_modules/pathe/dist/index.mjs';
import 'file://D:/%D0%A5%D0%BE%D1%81%D1%82%D0%B5%D0%BB%20%D0%A4%D0%B5%D0%BD%D0%B8%D0%BA%D1%81/node_modules/@iconify/utils/lib/index.mjs';
import 'file://D:/%D0%A5%D0%BE%D1%81%D1%82%D0%B5%D0%BB%20%D0%A4%D0%B5%D0%BD%D0%B8%D0%BA%D1%81/node_modules/ohash/dist/index.mjs';
import 'file://D:/%D0%A5%D0%BE%D1%81%D1%82%D0%B5%D0%BB%20%D0%A4%D0%B5%D0%BD%D0%B8%D0%BA%D1%81/node_modules/consola/dist/index.mjs';
import 'file://D:/%D0%A5%D0%BE%D1%81%D1%82%D0%B5%D0%BB%20%D0%A4%D0%B5%D0%BD%D0%B8%D0%BA%D1%81/node_modules/unstorage/dist/index.mjs';
import 'file://D:/%D0%A5%D0%BE%D1%81%D1%82%D0%B5%D0%BB%20%D0%A4%D0%B5%D0%BD%D0%B8%D0%BA%D1%81/node_modules/unstorage/drivers/fs.mjs';
import 'file:///D:/%D0%A5%D0%BE%D1%81%D1%82%D0%B5%D0%BB%20%D0%A4%D0%B5%D0%BD%D0%B8%D0%BA%D1%81/node_modules/@nuxt/nitro-server/dist/runtime/utils/cache-driver.js';
import 'file://D:/%D0%A5%D0%BE%D1%81%D1%82%D0%B5%D0%BB%20%D0%A4%D0%B5%D0%BD%D0%B8%D0%BA%D1%81/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://D:/%D0%A5%D0%BE%D1%81%D1%82%D0%B5%D0%BB%20%D0%A4%D0%B5%D0%BD%D0%B8%D0%BA%D1%81/node_modules/unctx/dist/index.mjs';
import 'file://D:/%D0%A5%D0%BE%D1%81%D1%82%D0%B5%D0%BB%20%D0%A4%D0%B5%D0%BD%D0%B8%D0%BA%D1%81/node_modules/vue-router/vue-router.node.mjs';
import 'file://D:/%D0%A5%D0%BE%D1%81%D1%82%D0%B5%D0%BB%20%D0%A4%D0%B5%D0%BD%D0%B8%D0%BA%D1%81/node_modules/@iconify/vue/dist/iconify.mjs';
import 'file://D:/%D0%A5%D0%BE%D1%81%D1%82%D0%B5%D0%BB%20%D0%A4%D0%B5%D0%BD%D0%B8%D0%BA%D1%81/node_modules/@iconify/utils/lib/css/icon.mjs';
import 'file://D:/%D0%A5%D0%BE%D1%81%D1%82%D0%B5%D0%BB%20%D0%A4%D0%B5%D0%BD%D0%B8%D0%BA%D1%81/node_modules/perfect-debounce/dist/index.mjs';
import '../_/renderer.mjs';
import 'file://D:/%D0%A5%D0%BE%D1%81%D1%82%D0%B5%D0%BB%20%D0%A4%D0%B5%D0%BD%D0%B8%D0%BA%D1%81/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://D:/%D0%A5%D0%BE%D1%81%D1%82%D0%B5%D0%BB%20%D0%A4%D0%B5%D0%BD%D0%B8%D0%BA%D1%81/node_modules/unhead/dist/server.mjs';
import 'file://D:/%D0%A5%D0%BE%D1%81%D1%82%D0%B5%D0%BB%20%D0%A4%D0%B5%D0%BD%D0%B8%D0%BA%D1%81/node_modules/devalue/index.js';
import 'file://D:/%D0%A5%D0%BE%D1%81%D1%82%D0%B5%D0%BB%20%D0%A4%D0%B5%D0%BD%D0%B8%D0%BA%D1%81/node_modules/unhead/dist/utils.mjs';
import 'file://D:/%D0%A5%D0%BE%D1%81%D1%82%D0%B5%D0%BB%20%D0%A4%D0%B5%D0%BD%D0%B8%D0%BA%D1%81/node_modules/unhead/dist/plugins.mjs';

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
        "aria-label": unref(isDark) ? "\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0441\u0432\u0435\u0442\u043B\u0443\u044E \u0442\u0435\u043C\u0443" : "\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0442\u0451\u043C\u043D\u0443\u044E \u0442\u0435\u043C\u0443"
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
      { href: "#about", label: "\u041E \u043D\u0430\u0441" },
      { href: "#rooms", label: "\u041D\u043E\u043C\u0435\u0440\u0430" },
      { href: "#prices", label: "\u0426\u0435\u043D\u044B" },
      { href: "#location", label: "\u041B\u043E\u043A\u0430\u0446\u0438\u044F" },
      { href: "#reviews", label: "\u041E\u0442\u0437\u044B\u0432\u044B" },
      { href: "#contacts", label: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B" }
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
      _push(`</span><span class="logo-text" data-v-0375ea8a>\u0424\u0435\u043D\u0438\u043A\u0441</span></a><nav class="nav" aria-label="\u041E\u0441\u043D\u043E\u0432\u043D\u0430\u044F \u043D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044F" data-v-0375ea8a><!--[-->`);
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
      _push(`<span data-v-0375ea8a>\u041F\u043E\u0437\u0432\u043E\u043D\u0438\u0442\u044C</span></a><button class="${ssrRenderClass([{ active: unref(menuOpen) }, "burger"])}"${ssrRenderAttr("aria-expanded", unref(menuOpen))} aria-label="\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043C\u0435\u043D\u044E" data-v-0375ea8a><span data-v-0375ea8a></span><span data-v-0375ea8a></span><span data-v-0375ea8a></span></button></div></div><div class="${ssrRenderClass([{ open: unref(menuOpen) }, "mobile-menu"])}" data-v-0375ea8a><nav class="mobile-nav" data-v-0375ea8a><!--[-->`);
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
      { href: "#about", label: "\u041E \u0445\u043E\u0441\u0442\u0435\u043B\u0435" },
      { href: "#rooms", label: "\u041D\u043E\u043C\u0435\u0440\u0430" },
      { href: "#prices", label: "\u0426\u0435\u043D\u044B" },
      { href: "#location", label: "\u041B\u043E\u043A\u0430\u0446\u0438\u044F" },
      { href: "#reviews", label: "\u041E\u0442\u0437\u044B\u0432\u044B" },
      { href: "#faq", label: "FAQ" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "footer" }, _attrs))} data-v-9a3a135a><div class="container footer-inner" data-v-9a3a135a><div class="footer-brand" data-v-9a3a135a><div class="footer-logo" data-v-9a3a135a>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ph:fire-fill",
        size: "24",
        class: "footer-logo-icon"
      }, null, _parent));
      _push(`<span data-v-9a3a135a>\u0424\u0435\u043D\u0438\u043A\u0441</span></div><p class="footer-tagline" data-v-9a3a135a> \u0414\u043E\u0441\u0442\u0443\u043F\u043D\u043E\u0435 \u0436\u0438\u043B\u044C\u0451 \u0440\u044F\u0434\u043E\u043C \u0441 \u041C\u043E\u0441\u043A\u0432\u043E\u0439 \u2014 \u0434\u043B\u044F \u0442\u0435\u0445, \u043A\u0442\u043E \u0446\u0435\u043D\u0438\u0442 \u043A\u043E\u043C\u0444\u043E\u0440\u0442 \u0438 \u044D\u043A\u043E\u043D\u043E\u043C\u0438\u044E. </p><div style="${ssrRenderStyle({ "margin-top": "2rem" })}" data-v-9a3a135a><p class="footer-col-title" style="${ssrRenderStyle({ "margin-bottom": "1rem" })}" data-v-9a3a135a>\u0410\u043A\u043A\u0440\u0435\u0434\u0438\u0442\u0430\u0446\u0438\u044F</p><p class="footer-tagline" data-v-9a3a135a> \u041E\u0431\u044A\u0435\u043A\u0442 \u043F\u0440\u043E\u0448\u0435\u043B \u0433\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u0443\u044E \u0430\u043A\u043A\u0440\u0435\u0434\u0438\u0442\u0430\u0446\u0438\u044E </p><p class="footer-tagline" data-v-9a3a135a>\u041D\u043E\u043C\u0435\u0440 \u0440\u0435\u0435\u0441\u0442\u0440\u043E\u0432\u043E\u0439 \u0437\u0430\u043F\u0438\u0441\u0438:</p><a class="footer-col-title" href="https://tourism.fsa.gov.ru/ru/resorts/hotels/41c7abf0-c607-11ef-92da-95e981a0ea6c/about-resort" target="_blank" data-v-9a3a135a>\u0421502024005724</a></div></div><div class="footer-links" data-v-9a3a135a><div class="footer-col" data-v-9a3a135a><p class="footer-col-title" data-v-9a3a135a>\u041D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044F</p><ul data-v-9a3a135a><!--[-->`);
      ssrRenderList(navItems, (item) => {
        _push(`<li data-v-9a3a135a><a${ssrRenderAttr("href", item.href)} data-v-9a3a135a>${ssrInterpolate(item.label)}</a></li>`);
      });
      _push(`<!--]--></ul></div><div class="footer-col" data-v-9a3a135a><p class="footer-col-title" data-v-9a3a135a>\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B</p><ul data-v-9a3a135a><li data-v-9a3a135a><a href="tel:+79804107614" data-v-9a3a135a>+7 (980) 410-76-14</a></li><li data-v-9a3a135a><span class="footer-text" data-v-9a3a135a>\u041C\u043E\u0441\u043A\u043E\u0432\u0441\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C, \u041C\u044B\u0442\u0438\u0449\u0438, \u041B\u0438\u043F\u043A\u0438\u043D\u0441\u043A\u043E\u0435 \u0448\u043E\u0441\u0441\u0435, 2-\u0439 \u043A\u0438\u043B\u043E\u043C\u0435\u0442\u0440, \u043F\u043E\u0441\u0451\u043B\u043E\u043A \u0412\u0435\u0448\u043A\u0438, \u0432\u043B1\u04412</span></li><li data-v-9a3a135a><span class="footer-text" data-v-9a3a135a>\u0420\u0430\u0431\u043E\u0442\u0430\u0435\u043C 24/7</span></li></ul></div></div></div><div class="footer-bottom" data-v-9a3a135a><div class="container footer-bottom-inner" data-v-9a3a135a><p class="footer-copy" data-v-9a3a135a> \xA9 ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} \u0425\u043E\u0441\u0442\u0435\u043B \xAB\u0424\u0435\u043D\u0438\u043A\u0441\xBB. \u0412\u0441\u0435 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043D\u044B. </p><div class="developer-credit" data-v-9a3a135a><span class="developer-trigger" data-v-9a3a135a> \u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u0441\u0430\u0439\u0442\u0430 `);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ph:code-bold",
        size: "14",
        class: "dev-icon"
      }, null, _parent));
      _push(`</span><div class="developer-tooltip" data-v-9a3a135a><p class="tooltip-title" data-v-9a3a135a>\u0421\u0432\u044F\u0437\u0430\u0442\u044C\u0441\u044F \u0441 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A\u043E\u043C</p><div class="tooltip-links" data-v-9a3a135a><a href="https://vk.com/amberlock" target="_blank" rel="noopener noreferrer" class="tooltip-link" data-v-9a3a135a>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "akar-icons:vk-fill",
        size: "18"
      }, null, _parent));
      _push(`<span data-v-9a3a135a>\u0412\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0435</span></a><a href="https://t.me/Uonu9l" target="_blank" rel="noopener noreferrer" class="tooltip-link" data-v-9a3a135a>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ph:telegram-logo-fill",
        size: "18"
      }, null, _parent));
      _push(`<span data-v-9a3a135a>Telegram</span></a></div></div></div></div></div></footer>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/Footer.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const AppFooter = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-9a3a135a"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ScrollToTop",
  __ssrInlineRender: true,
  setup(__props) {
    const isVisible = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<button${ssrRenderAttrs(mergeProps({
        class: ["scroll-top", { visible: isVisible.value }],
        "aria-label": "\u041D\u0430\u0432\u0435\u0440\u0445"
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

export { _default as default };
//# sourceMappingURL=default-CCO2yf3a.mjs.map

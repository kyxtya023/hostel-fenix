import { defineComponent, mergeProps, reactive, ref, computed, watch, unref, useSSRContext } from 'file://C:/Users/%D0%98%D0%BB%D1%8C%D1%8F/Desktop/b_1zotQsZ7Tum-1774406895089/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderStyle, ssrIncludeBooleanAttr } from 'file://C:/Users/%D0%98%D0%BB%D1%8C%D1%8F/Desktop/b_1zotQsZ7Tum-1774406895089/node_modules/vue/server-renderer/index.mjs';
import { a as _export_sfc, u as useHead, _ as __nuxt_component_0 } from './server.mjs';
import { p as publicAssetsURL } from '../_/nitro.mjs';
import 'file://C:/Users/%D0%98%D0%BB%D1%8C%D1%8F/Desktop/b_1zotQsZ7Tum-1774406895089/node_modules/ofetch/dist/node.mjs';
import 'file://C:/Users/%D0%98%D0%BB%D1%8C%D1%8F/Desktop/b_1zotQsZ7Tum-1774406895089/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/%D0%98%D0%BB%D1%8C%D1%8F/Desktop/b_1zotQsZ7Tum-1774406895089/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/%D0%98%D0%BB%D1%8C%D1%8F/Desktop/b_1zotQsZ7Tum-1774406895089/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/%D0%98%D0%BB%D1%8C%D1%8F/Desktop/b_1zotQsZ7Tum-1774406895089/node_modules/vue-router/vue-router.node.mjs';
import 'file://C:/Users/%D0%98%D0%BB%D1%8C%D1%8F/Desktop/b_1zotQsZ7Tum-1774406895089/node_modules/defu/dist/defu.mjs';
import 'file://C:/Users/%D0%98%D0%BB%D1%8C%D1%8F/Desktop/b_1zotQsZ7Tum-1774406895089/node_modules/ufo/dist/index.mjs';
import 'file://C:/Users/%D0%98%D0%BB%D1%8C%D1%8F/Desktop/b_1zotQsZ7Tum-1774406895089/node_modules/@iconify/vue/dist/iconify.mjs';
import 'file://C:/Users/%D0%98%D0%BB%D1%8C%D1%8F/Desktop/b_1zotQsZ7Tum-1774406895089/node_modules/klona/dist/index.mjs';
import 'file://C:/Users/%D0%98%D0%BB%D1%8C%D1%8F/Desktop/b_1zotQsZ7Tum-1774406895089/node_modules/@iconify/utils/lib/css/icon.mjs';
import 'file://C:/Users/%D0%98%D0%BB%D1%8C%D1%8F/Desktop/b_1zotQsZ7Tum-1774406895089/node_modules/perfect-debounce/dist/index.mjs';
import '../_/renderer.mjs';
import 'file://C:/Users/%D0%98%D0%BB%D1%8C%D1%8F/Desktop/b_1zotQsZ7Tum-1774406895089/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/Users/%D0%98%D0%BB%D1%8C%D1%8F/Desktop/b_1zotQsZ7Tum-1774406895089/node_modules/unhead/dist/server.mjs';
import 'file://C:/Users/%D0%98%D0%BB%D1%8C%D1%8F/Desktop/b_1zotQsZ7Tum-1774406895089/node_modules/devalue/index.js';
import 'file://C:/Users/%D0%98%D0%BB%D1%8C%D1%8F/Desktop/b_1zotQsZ7Tum-1774406895089/node_modules/unhead/dist/utils.mjs';
import 'file://C:/Users/%D0%98%D0%BB%D1%8C%D1%8F/Desktop/b_1zotQsZ7Tum-1774406895089/node_modules/unhead/dist/plugins.mjs';
import 'file://C:/Users/%D0%98%D0%BB%D1%8C%D1%8F/Desktop/b_1zotQsZ7Tum-1774406895089/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/%D0%98%D0%BB%D1%8C%D1%8F/Desktop/b_1zotQsZ7Tum-1774406895089/node_modules/node-mock-http/dist/index.mjs';
import 'file://C:/Users/%D0%98%D0%BB%D1%8C%D1%8F/Desktop/b_1zotQsZ7Tum-1774406895089/node_modules/scule/dist/index.mjs';
import 'file://C:/Users/%D0%98%D0%BB%D1%8C%D1%8F/Desktop/b_1zotQsZ7Tum-1774406895089/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/Users/%D0%98%D0%BB%D1%8C%D1%8F/Desktop/b_1zotQsZ7Tum-1774406895089/node_modules/pathe/dist/index.mjs';
import 'file://C:/Users/%D0%98%D0%BB%D1%8C%D1%8F/Desktop/b_1zotQsZ7Tum-1774406895089/node_modules/@iconify/utils/lib/index.mjs';
import 'file://C:/Users/%D0%98%D0%BB%D1%8C%D1%8F/Desktop/b_1zotQsZ7Tum-1774406895089/node_modules/ohash/dist/index.mjs';
import 'file://C:/Users/%D0%98%D0%BB%D1%8C%D1%8F/Desktop/b_1zotQsZ7Tum-1774406895089/node_modules/consola/dist/index.mjs';
import 'file://C:/Users/%D0%98%D0%BB%D1%8C%D1%8F/Desktop/b_1zotQsZ7Tum-1774406895089/node_modules/unstorage/dist/index.mjs';
import 'file://C:/Users/%D0%98%D0%BB%D1%8C%D1%8F/Desktop/b_1zotQsZ7Tum-1774406895089/node_modules/unstorage/drivers/fs.mjs';
import 'file:///C:/Users/%D0%98%D0%BB%D1%8C%D1%8F/Desktop/b_1zotQsZ7Tum-1774406895089/node_modules/@nuxt/nitro-server/dist/runtime/utils/cache-driver.js';
import 'file://C:/Users/%D0%98%D0%BB%D1%8C%D1%8F/Desktop/b_1zotQsZ7Tum-1774406895089/node_modules/unstorage/drivers/fs-lite.mjs';

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
      _push(` 500 \u043C\u0435\u0442\u0440\u043E\u0432 \u043E\u0442 \u041C\u041A\u0410\u0414 </div><h1 class="hero-title" data-v-366e3f6c> \u0425\u043E\u0441\u0442\u0435\u043B \u0424\u0435\u043D\u0438\u043A\u0441<br data-v-366e3f6c><span class="hero-title-accent" data-v-366e3f6c>10 \u043C\u0438\u043D\u0443\u0442<br data-v-366e3f6c> \u043E\u0442 \u043C\u0435\u0442\u0440\u043E \u0424\u0438\u0437\u0442\u0435\u0445</span></h1><p class="hero-subtitle" data-v-366e3f6c> \u041D\u0435\u0434\u043E\u0440\u043E\u0433\u043E\u0435 \u043F\u0440\u043E\u0436\u0438\u0432\u0430\u043D\u0438\u0435 \u0434\u043B\u044F \u0433\u043E\u0441\u0442\u0435\u0439 \u041C\u043E\u0441\u043A\u0432\u044B.<br data-v-366e3f6c> \u041A\u043E\u043C\u0444\u043E\u0440\u0442\u043D\u043E, \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E, \u0447\u0438\u0441\u0442\u043E 24/7 \u2014 \u0441 \u043F\u0435\u0440\u0432\u043E\u0433\u043E \u0434\u043D\u044F. </p><div class="hero-actions" data-v-366e3f6c><a href="tel:+79804107614" class="btn-primary" data-v-366e3f6c>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ph:phone-fill",
        size: "18"
      }, null, _parent));
      _push(` \u041F\u043E\u0437\u0432\u043E\u043D\u0438\u0442\u044C \u0441\u0435\u0439\u0447\u0430\u0441 </a><a href="#rooms" class="btn-secondary" data-v-366e3f6c> \u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u043D\u043E\u043C\u0435\u0440\u0430 `);
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
      _push(`<div data-v-366e3f6c><p class="hero-card-label" data-v-366e3f6c>\u0417\u0430\u0435\u0437\u0434 / \u0412\u044B\u0435\u0437\u0434</p><p class="hero-card-value" data-v-366e3f6c>\u041A\u0440\u0443\u0433\u043B\u043E\u0441\u0443\u0442\u043E\u0447\u043D\u044B\u0439 \u0441\u0435\u0440\u0432\u0438\u0441</p></div></div><div class="hero-card-divider" data-v-366e3f6c></div><div class="hero-card-row" data-v-366e3f6c>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ph:currency-rub-fill",
        size: "20",
        class: "hero-card-icon"
      }, null, _parent));
      _push(`<div data-v-366e3f6c><p class="hero-card-label" data-v-366e3f6c>\u0426\u0435\u043D\u0430 \u043E\u0442</p><p class="hero-card-value" data-v-366e3f6c>450 \u20BD / \u0441\u0443\u0442\u043A\u0438</p></div></div><div class="hero-card-divider" data-v-366e3f6c></div><div class="hero-card-row" data-v-366e3f6c>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ph:broom-fill",
        size: "20",
        class: "hero-card-icon"
      }, null, _parent));
      _push(`<div data-v-366e3f6c><p class="hero-card-label" data-v-366e3f6c>\u0412\u043A\u043B\u044E\u0447\u0435\u043D\u043E</p><p class="hero-card-value" data-v-366e3f6c>\u0415\u0436\u0435\u0434\u043D\u0435\u0432\u043D\u0430\u044F \u0443\u0431\u043E\u0440\u043A\u0430</p></div></div><div class="hero-card-divider" data-v-366e3f6c></div><div class="hero-card-row" data-v-366e3f6c>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ph:car-fill",
        size: "20",
        class: "hero-card-icon"
      }, null, _parent));
      _push(`<div data-v-366e3f6c><p class="hero-card-label" data-v-366e3f6c>\u0412\u043A\u043B\u044E\u0447\u0435\u043D\u043E</p><p class="hero-card-value" data-v-366e3f6c>\u0421\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u0430\u044F \u043F\u0430\u0440\u043A\u043E\u0432\u043A\u0430 \u043D\u0430 50 \u043C\u0430\u0448\u0438\u043D</p></div></div><a href="tel:+79804107614" class="hero-card-cta" data-v-366e3f6c> \u0417\u0430\u0431\u0440\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043C\u0435\u0441\u0442\u043E </a></div></div><div class="scroll-hint" aria-hidden="true" data-v-366e3f6c><div class="scroll-line" data-v-366e3f6c></div><span data-v-366e3f6c>\u041F\u0440\u043E\u043A\u0440\u0443\u0442\u0438\u0442\u0435</span></div></section>`);
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
        title: "\u0420\u044F\u0434\u043E\u043C \u0441 \u041C\u043E\u0441\u043A\u0432\u043E\u0439",
        desc: "\u0412\u0441\u0435\u0433\u043E 5 \u043C\u0438\u043D\u0443\u0442 \u0435\u0437\u0434\u044B \u0434\u043E \u041C\u041A\u0410\u0414. \u0423\u0434\u043E\u0431\u043D\u043E \u0434\u043E\u0431\u0440\u0430\u0442\u044C\u0441\u044F \u0434\u043E \u043B\u044E\u0431\u043E\u0439 \u0442\u043E\u0447\u043A\u0438 \u041C\u043E\u0441\u043A\u0432\u044B \u0438 \u041F\u043E\u0434\u043C\u043E\u0441\u043A\u043E\u0432\u044C\u044F."
      },
      {
        icon: "ph:currency-rub-fill",
        title: "\u0414\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0435 \u0446\u0435\u043D\u044B",
        desc: "\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u043E\u0442 450 \u20BD \u0432 \u0441\u0443\u0442\u043A\u0438. \u0413\u0438\u0431\u043A\u0438\u0435 \u0442\u0430\u0440\u0438\u0444\u044B \u0434\u043B\u044F \u0434\u043E\u043B\u0433\u043E\u0441\u0440\u043E\u0447\u043D\u043E\u0433\u043E \u043F\u0440\u043E\u0436\u0438\u0432\u0430\u043D\u0438\u044F."
      },
      {
        icon: "ph:clock-countdown-fill",
        title: "\u0420\u0430\u0431\u043E\u0442\u0430\u0435\u043C 24/7",
        desc: "\u0417\u0430\u0435\u0437\u0434 \u0438 \u0432\u044B\u0435\u0437\u0434 \u0432 \u043B\u044E\u0431\u043E\u0435 \u0432\u0440\u0435\u043C\u044F \u0441\u0443\u0442\u043E\u043A. \u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440 \u0432\u0441\u0435\u0433\u0434\u0430 \u043D\u0430 \u043C\u0435\u0441\u0442\u0435 \u2014 \u0431\u0435\u0437 \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u0439."
      },
      {
        icon: "ph:car-fill",
        title: "\u0411\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u0430\u044F \u043F\u0430\u0440\u043A\u043E\u0432\u043A\u0430",
        desc: "\u041E\u0445\u0440\u0430\u043D\u044F\u0435\u043C\u0430\u044F \u043F\u0430\u0440\u043A\u043E\u0432\u043A\u0430 \u043D\u0430 \u0442\u0435\u0440\u0440\u0438\u0442\u043E\u0440\u0438\u0438 \u043E\u0431\u044A\u0435\u043A\u0442\u0430. \u0423\u0434\u043E\u0431\u043D\u043E \u0434\u043B\u044F \u0442\u0435\u0445, \u043A\u0442\u043E \u043F\u0440\u0438\u0435\u0437\u0436\u0430\u0435\u0442 \u043D\u0430 \u043B\u0438\u0447\u043D\u043E\u043C \u0430\u0432\u0442\u043E."
      },
      {
        icon: "ph:wifi-high-fill",
        title: "\u0411\u044B\u0441\u0442\u0440\u044B\u0439 Wi-Fi",
        desc: "\u0412\u044B\u0441\u043E\u043A\u043E\u0441\u043A\u043E\u0440\u043E\u0441\u0442\u043D\u043E\u0439 \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442 \u043F\u043E \u0432\u0441\u0435\u0439 \u0442\u0435\u0440\u0440\u0438\u0442\u043E\u0440\u0438\u0438. \u0420\u0430\u0431\u043E\u0442\u0430\u0439\u0442\u0435 \u0438 \u043E\u0442\u0434\u044B\u0445\u0430\u0439\u0442\u0435 \u0431\u0435\u0437 \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u0439."
      },
      {
        icon: "ph:file-text-fill",
        title: "\u041E\u0444\u0438\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0435 \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u0435",
        desc: "\u0427\u0451\u0442\u043A\u043E\u0435 \u0438 \u0441\u0432\u043E\u0435\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0435 \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u0435 \u0432 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u0437\u0430\u043A\u043E\u043D\u043E\u0434\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E\u043C \u0420\u0424 \u0432 \u0441\u0444\u0435\u0440\u0435 \u043C\u0438\u0433\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u043E\u0433\u043E \u0443\u0447\u0451\u0442\u0430."
      },
      {
        icon: "ph:shield-check-fill",
        title: "\u041A\u0440\u0443\u0433\u043B\u043E\u0441\u0443\u0442\u043E\u0447\u043D\u0430\u044F \u043E\u0445\u0440\u0430\u043D\u0430",
        desc: "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u0430\u044F \u043E\u0445\u0440\u0430\u043D\u0430 24/7 \u0434\u043B\u044F \u0432\u0430\u0448\u0435\u0433\u043E \u0441\u043F\u043E\u043A\u043E\u0439\u043D\u043E\u0433\u043E \u043E\u0442\u0434\u044B\u0445\u0430 \u0438 \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0433\u043E \u043F\u0440\u043E\u0436\u0438\u0432\u0430\u043D\u0438\u044F \u0432 \u0445\u043E\u0441\u0442\u0435\u043B\u0435 \xAB\u0424\u0435\u043D\u0438\u043A\u0441\xBB."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "advantages section" }, _attrs))} data-v-e26c4a9e><div class="container" data-v-e26c4a9e><div class="adv-header reveal" data-v-e26c4a9e><p class="section-label" data-v-e26c4a9e>\u041F\u043E\u0447\u0435\u043C\u0443 \u043C\u044B</p><h2 class="section-title" data-v-e26c4a9e> 7 \u043F\u0440\u0438\u0447\u0438\u043D \u0432\u044B\u0431\u0440\u0430\u0442\u044C<br data-v-e26c4a9e><span class="text-accent" data-v-e26c4a9e>\u0425\u043E\u0441\u0442\u0435\u043B \xAB\u0424\u0435\u043D\u0438\u043A\u0441\xBB</span></h2></div><div class="adv-grid" data-v-e26c4a9e><!--[-->`);
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
      { text: "\u0427\u0438\u0441\u0442\u044B\u0435 \u043A\u043E\u043C\u0444\u043E\u0440\u0442\u043D\u044B\u0435 \u043D\u043E\u043C\u0435\u0440\u0430 \u0438 \u0443\u044E\u0442\u043D\u044B\u0435 \u043E\u0431\u0449\u0438\u0435 \u0437\u043E\u043D\u044B." },
      { text: "\u0415\u0436\u0435\u0434\u043D\u0435\u0432\u043D\u0430\u044F \u0443\u0431\u043E\u0440\u043A\u0430 \u0432\u043A\u043B\u044E\u0447\u0435\u043D\u0430" },
      { text: "\u041E\u0445\u0440\u0430\u043D\u044F\u0435\u043C\u0430\u044F \u0442\u0435\u0440\u0440\u0438\u0442\u043E\u0440\u0438\u044F" },
      { text: "\u0420\u044F\u0434\u043E\u043C \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u044B \u0438 \u043A\u0430\u0444\u0435" },
      { text: "\u0411\u0435\u0437 \u043B\u0438\u0448\u043D\u0438\u0445 \u043F\u0435\u0440\u0435\u043F\u043B\u0430\u0442" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "about",
        class: "about section"
      }, _attrs))} data-v-7a64bff7><div class="container about-inner" data-v-7a64bff7><div class="about-image-wrap reveal" data-v-7a64bff7><div class="about-img-frame" data-v-7a64bff7><img${ssrRenderAttr("src", _imports_0)} alt="\u0423\u044E\u0442\u043D\u0430\u044F \u0437\u043E\u043D\u0430 \u043E\u0442\u0434\u044B\u0445\u0430 \u0445\u043E\u0441\u0442\u0435\u043B\u0430 \u0424\u0435\u043D\u0438\u043A\u0441" class="about-img" data-v-7a64bff7><div class="about-img-overlay" aria-hidden="true" data-v-7a64bff7></div></div><div class="about-badge glass-card" data-v-7a64bff7>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ph:shield-check-fill",
        size: "22",
        class: "badge-icon"
      }, null, _parent));
      _push(`<div data-v-7a64bff7><p class="badge-value" data-v-7a64bff7>\u0411\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E</p><p class="badge-label" data-v-7a64bff7>\u041A\u0440\u0443\u0433\u043B\u043E\u0441\u0443\u0442\u043E\u0447\u043D\u0430\u044F \u043E\u0445\u0440\u0430\u043D\u0430</p></div></div></div><div class="about-content" data-v-7a64bff7><p class="section-label reveal" data-v-7a64bff7>\u041E \u0445\u043E\u0441\u0442\u0435\u043B\u0435</p><h2 class="section-title reveal reveal-delay-1" data-v-7a64bff7> \u041C\u0435\u0441\u0442\u043E, \u0433\u0434\u0435 \u0440\u0430\u0431\u043E\u0447\u0438\u0439<br data-v-7a64bff7>\u0434\u0435\u043D\u044C \u043D\u0430\u0447\u0438\u043D\u0430\u0435\u0442\u0441\u044F \u0441\u043F\u043E\u043A\u043E\u0439\u043D\u043E </h2><p class="about-text reveal reveal-delay-2" data-v-7a64bff7> \u0425\u043E\u0441\u0442\u0435\u043B \xAB\u0424\u0435\u043D\u0438\u043A\u0441\xBB \u2014 \u044D\u0442\u043E \u043D\u0435 \u043F\u0440\u043E\u0441\u0442\u043E \u043D\u043E\u0447\u043B\u0435\u0433, \u044D\u0442\u043E \u043A\u043E\u043C\u0444\u043E\u0440\u0442\u043D\u0430\u044F \u0431\u0430\u0437\u0430 \u0434\u043B\u044F \u0442\u0435\u0445, \u043A\u0442\u043E \u043F\u0440\u0438\u0435\u0445\u0430\u043B \u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C \u0438\u043B\u0438 \u043F\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C \u0432 \u041C\u043E\u0441\u043A\u0432\u0435 \u0438 \u043E\u0431\u043B\u0430\u0441\u0442\u0438. \u041C\u044B \u0437\u043D\u0430\u0435\u043C, \u0447\u0442\u043E \u0432\u0430\u0436\u043D\u043E \u043B\u044E\u0434\u044F\u043C, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043F\u0440\u043E\u0432\u043E\u0434\u044F\u0442 \u0432 \u043F\u043E\u0435\u0437\u0434\u043A\u0430\u0445 \u0434\u043D\u0438 \u0438 \u043D\u0435\u0434\u0435\u043B\u0438: \u0447\u0438\u0441\u0442\u043E\u0442\u0430, \u0442\u0438\u0448\u0438\u043D\u0430, \u043D\u0430\u0434\u0451\u0436\u043D\u043E\u0441\u0442\u044C \u0438 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0430\u044F \u0446\u0435\u043D\u0430. </p><p class="about-text reveal reveal-delay-3" data-v-7a64bff7> \u041D\u0430\u0448 \u0445\u043E\u0441\u0442\u0435\u043B \u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D \u0432\u0441\u0435\u0433\u043E \u0432 10 \u043C\u0438\u043D\u0443\u0442\u0430\u0445 \u043E\u0442 \u043C\u0435\u0442\u0440\u043E \u0424\u0438\u0437\u0442\u0435\u0445. \u0417\u0434\u0435\u0441\u044C \u0435\u0441\u0442\u044C \u0432\u0441\u0435 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E\u0435: \u041D\u043E\u0432\u044B\u0435 \u0443\u0434\u043E\u0431\u043D\u044B\u0435 \u043A\u0440\u043E\u0432\u0430\u0442\u0438 \u0438 \u043F\u043E\u0441\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u0438\u043D\u0430\u0434\u043B\u0435\u0436\u043D\u043E\u0441\u0442\u0438. \u0413\u043E\u0440\u044F\u0447\u0438\u0439 \u0434\u0443\u0448 \u0438 \u0441\u0430\u043D\u0443\u0437\u0435\u043B \u0432 \u043A\u0430\u0436\u0434\u043E\u043C \u043A\u043E\u043C\u043D\u0430\u0442\u0435. \u041E\u0445\u0440\u0430\u043D\u044F\u0435\u043C\u0430\u044F \u043F\u0430\u0440\u043A\u043E\u0432\u043A\u0430 \u043D\u0430 50 \u043C\u0430\u0448\u0438\u043D. </p><div class="about-highlights reveal reveal-delay-4" data-v-7a64bff7><!--[-->`);
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
      _push(` \u0423\u0437\u043D\u0430\u0442\u044C \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435 </a></div></div></section>`);
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
        places: "2 \u043C\u0435\u0441\u0442\u0430",
        title: "2-\u043C\u0435\u0441\u0442\u043D\u043E\u0435 \u0440\u0430\u0437\u043C\u0435\u0449\u0435\u043D\u0438\u0435",
        desc: "\u041A\u043E\u043C\u0444\u043E\u0440\u0442\u043D\u044B\u0439 \u043D\u043E\u043C\u0435\u0440 \u0434\u043B\u044F \u0434\u0432\u043E\u0438\u0445. \u0423\u0434\u043E\u0431\u043D\u0430\u044F \u043A\u0440\u043E\u0432\u0430\u0442\u044C, \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u0430\u044F \u0432\u0430\u043D\u043D\u0430\u044F, \u0432\u0441\u0451 \u0434\u043B\u044F \u0441\u043F\u043E\u043A\u043E\u0439\u043D\u043E\u0433\u043E \u043E\u0442\u0434\u044B\u0445\u0430.",
        featured: false,
        badge: "\u0423\u044E\u0442\u043D\u043E\u0435",
        features: [
          "\u041E\u0442\u0434\u0435\u043B\u044C\u043D\u044B\u0439 \u043D\u043E\u043C\u0435\u0440",
          "\u041E\u0442\u0434\u0435\u043B\u044C\u043D\u044B\u0439 \u0434\u0443\u0448",
          "\u0420\u0430\u0431\u043E\u0447\u0435\u0435 \u043C\u0435\u0441\u0442\u043E",
          "\u0421\u0432\u043E\u0439 \u0445\u043E\u043B\u043E\u0434\u0438\u043B\u044C\u043D\u0438\u043A"
        ],
        prices: {
          shortTerm: "800 \u20BD",
          mediumTerm: "600 \u20BD",
          longTerm: "17 500 \u20BD"
        }
      },
      {
        places: "4 \u043C\u0435\u0441\u0442\u0430",
        title: "4-\u043C\u0435\u0441\u0442\u043D\u043E\u0435 \u0440\u0430\u0437\u043C\u0435\u0449\u0435\u043D\u0438\u0435",
        desc: "\u0418\u0434\u0435\u0430\u043B\u044C\u043D\u043E \u0434\u043B\u044F \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u0434\u0440\u0443\u0437\u0435\u0439. \u041D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0437\u043E\u043D \u043E\u0442\u0434\u044B\u0445\u0430, \u043E\u0431\u0449\u0430\u044F \u043A\u0443\u0445\u043D\u044F, \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u0433\u043E\u0442\u043E\u0432\u0438\u0442\u044C.",
        featured: false,
        badge: "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u043E",
        features: [
          "\u041F\u0440\u043E\u0441\u0442\u043E\u0440\u043D\u044B\u0439 \u043D\u043E\u043C\u0435\u0440",
          "\u041E\u0431\u0449\u0430\u044F \u043A\u0443\u0445\u043D\u044F",
          "\u0414\u0443\u0448\u0435\u0432\u0430\u044F \u043A\u0430\u0431\u0438\u043D\u0430",
          "\u0411\u043E\u043B\u044C\u0448\u043E\u0439 \u0445\u043E\u043B\u043E\u0434\u0438\u043B\u044C\u043D\u0438\u043A"
        ],
        prices: {
          shortTerm: "800 \u20BD",
          mediumTerm: "600 \u20BD",
          longTerm: "16 500 \u20BD"
        }
      },
      {
        places: "6\u20138 \u043C\u0435\u0441\u0442",
        title: "6\u20138 \u043C\u0435\u0441\u0442\u043D\u043E\u0435 \u0440\u0430\u0437\u043C\u0435\u0449\u0435\u043D\u0438\u0435",
        desc: "\u041C\u043D\u043E\u0433\u043E\u043C\u0435\u0441\u0442\u043D\u044B\u0439 \u043D\u043E\u043C\u0435\u0440 \u0434\u043B\u044F \u0431\u043E\u043B\u044C\u0448\u0438\u0445 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0439. \u041E\u0442\u0434\u0435\u043B\u044C\u043D\u044B\u0435 \u043A\u0440\u043E\u0432\u0430\u0442\u0438 \u0441 \u0437\u0430\u043D\u0430\u0432\u0435\u0441\u043A\u0430\u043C\u0438, \u043B\u0438\u0447\u043D\u044B\u0435 \u043F\u043E\u043B\u043A\u0438.",
        featured: true,
        badge: "\u0412\u044B\u0433\u043E\u0434\u043D\u043E",
        features: [
          "\u041F\u0440\u043E\u0441\u0442\u043E\u0440\u043D\u044B\u0439 \u043D\u043E\u043C\u0435\u0440",
          "\u041E\u0431\u0449\u0430\u044F \u043A\u0443\u0445\u043D\u044F",
          "\u0414\u0443\u0448\u0435\u0432\u0430\u044F \u043A\u0430\u0431\u0438\u043D\u0430",
          "\u0411\u043E\u043B\u044C\u0448\u043E\u0439 \u0445\u043E\u043B\u043E\u0434\u0438\u043B\u044C\u043D\u0438\u043A"
        ],
        prices: {
          shortTerm: "800 \u20BD",
          mediumTerm: "500 \u20BD",
          longTerm: "13 500 \u20BD"
        }
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "rooms",
        class: "rooms section"
      }, _attrs))} data-v-cec63e38><div class="container" data-v-cec63e38><div class="rooms-header reveal" data-v-cec63e38><div data-v-cec63e38><p class="section-label" data-v-cec63e38>\u0420\u0430\u0437\u043C\u0435\u0449\u0435\u043D\u0438\u0435</p><h2 class="section-title" data-v-cec63e38> \u0420\u0430\u0437\u043C\u0435\u0449\u0435\u043D\u0438\u0435 \u043F\u043E<br data-v-cec63e38><span class="text-accent" data-v-cec63e38>\u0447\u0438\u0441\u043B\u0443 \u043C\u0435\u0441\u0442</span></h2></div><p class="section-desc" data-v-cec63e38> \u0421\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435 \u043D\u043E\u043C\u0435\u0440\u0430 \u043D\u0430 \u043B\u044E\u0431\u043E\u0439 \u0432\u043A\u0443\u0441. \u0412\u044B\u0431\u0438\u0440\u0430\u0439\u0442\u0435 \u043F\u043E\u0434\u0445\u043E\u0434\u044F\u0449\u0438\u0439 \u0432\u0430\u0440\u0438\u0430\u043D\u0442 \u2014 \u043E\u0442 \u0443\u044E\u0442\u043D\u043E\u0433\u043E \u043C\u0435\u0441\u0442\u0430 \u0432 \u043E\u0431\u0449\u0435\u043C \u043D\u043E\u043C\u0435\u0440\u0435 \u0434\u043E \u043A\u043E\u043C\u0444\u043E\u0440\u0442\u043D\u043E\u0433\u043E \u0440\u0430\u0437\u043C\u0435\u0449\u0435\u043D\u0438\u044F \u0441 \u0434\u0440\u0443\u0437\u044C\u044F\u043C\u0438. </p></div><div class="rooms-grid" data-v-cec63e38><!--[-->`);
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
        _push(`<!--]--></ul><div class="prices-container" data-v-cec63e38><div class="price-block" data-v-cec63e38><div class="price-label" data-v-cec63e38>\u0414\u043E 7 \u0434\u043D\u0435\u0439</div><div class="price-value" data-v-cec63e38>${ssrInterpolate(room.prices.shortTerm)}</div><div class="price-unit" data-v-cec63e38>/ \u043D\u043E\u0447\u044C</div></div><div class="price-divider" data-v-cec63e38></div><div class="price-block" data-v-cec63e38><div class="price-label" data-v-cec63e38>\u041E\u0442 7 \u0434\u043D\u0435\u0439</div><div class="price-value" data-v-cec63e38>${ssrInterpolate(room.prices.mediumTerm)}</div><div class="price-unit" data-v-cec63e38>/ \u043D\u043E\u0447\u044C</div></div><div class="price-divider" data-v-cec63e38></div><div class="price-block" data-v-cec63e38><div class="price-label" data-v-cec63e38>\u041C\u0435\u0441\u044F\u0446</div><div class="price-value" data-v-cec63e38>${ssrInterpolate(room.prices.longTerm)}</div><div class="price-unit" data-v-cec63e38>/ \u043C\u0435\u0441\u044F\u0446</div></div></div><a href="tel:+79804107614" class="${ssrRenderClass([{ "cta-featured": room.featured }, "room-cta"])}" data-v-cec63e38> \u0417\u0430\u0431\u0440\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u0442\u044C `);
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
      { icon: "ph:shower-fill", title: "\u0413\u043E\u0440\u044F\u0447\u0438\u0439 \u0434\u0443\u0448", desc: "\u0420\u0430\u0437\u0434\u0435\u043B\u044C\u043D\u044B\u0435 \u0434\u0443\u0448\u0435\u0432\u044B\u0435 \u0441 \u0433\u043E\u0440\u044F\u0447\u0435\u0439 \u0432\u043E\u0434\u043E\u0439 24/7" },
      { icon: "ph:broom-fill", title: "\u0415\u0436\u0435\u0434\u043D\u0435\u0432\u043D\u0430\u044F \u0443\u0431\u043E\u0440\u043A\u0430", desc: "\u0420\u0435\u0433\u0443\u043B\u044F\u0440\u043D\u0430\u044F \u0443\u0431\u043E\u0440\u043A\u0430 \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u0439 \u0434\u043B\u044F \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0430\u043D\u0438\u044F \u0447\u0438\u0441\u0442\u043E\u0442\u044B" },
      { icon: "ph:car-fill", title: "\u041F\u0430\u0440\u043A\u043E\u0432\u043A\u0430", desc: "\u041E\u0445\u0440\u0430\u043D\u044F\u0435\u043C\u0430\u044F \u043F\u0430\u0440\u043A\u043E\u0432\u043A\u0430 \u0434\u043B\u044F \u043B\u0438\u0447\u043D\u043E\u0433\u043E \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u0430" },
      { icon: "ph:cooking-pot-fill", title: "\u041A\u0443\u0445\u043D\u044F", desc: "\u041E\u0431\u0449\u0430\u044F \u043A\u0443\u0445\u043D\u044F \u0441 \u043F\u043B\u0438\u0442\u043E\u0439, \u043C\u0438\u043A\u0440\u043E\u0432\u043E\u043B\u043D\u043E\u0432\u043A\u043E\u0439 \u0438 \u0445\u043E\u043B\u043E\u0434\u0438\u043B\u044C\u043D\u0438\u043A\u043E\u043C" },
      { icon: "ph:washing-machine-fill", title: "\u0421\u0442\u0438\u0440\u043A\u0430", desc: "\u0421\u0442\u0438\u0440\u0430\u043B\u044C\u043D\u0430\u044F \u043C\u0430\u0448\u0438\u043D\u0430 \u0437\u0430 \u043D\u0435\u0431\u043E\u043B\u044C\u0448\u0443\u044E \u0434\u043E\u043F\u043B\u0430\u0442\u0443" },
      { icon: "ph:lock-fill", title: "\u041B\u0438\u0447\u043D\u044B\u0439 \u0448\u043A\u0430\u0444\u0447\u0438\u043A", desc: "\u0418\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u044B\u0439 \u0437\u0430\u043C\u043E\u043A \u0434\u043B\u044F \u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F \u0432\u0435\u0449\u0435\u0439" },
      { icon: "ph:first-aid-kit-fill", title: "\u0411\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u044C", desc: "\u0412\u0438\u0434\u0435\u043E\u043D\u0430\u0431\u043B\u044E\u0434\u0435\u043D\u0438\u0435 \u0438 \u043E\u0445\u0440\u0430\u043D\u0430 \u043A\u0440\u0443\u0433\u043B\u043E\u0441\u0443\u0442\u043E\u0447\u043D\u043E" },
      { icon: "ph:bed-fill", title: "\u0427\u0438\u0441\u0442\u043E\u0435 \u0431\u0435\u043B\u044C\u0451", desc: "\u041F\u043E\u0441\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u0438\u043D\u0430\u0434\u043B\u0435\u0436\u043D\u043E\u0441\u0442\u0438 \u043C\u0435\u043D\u044F\u044E\u0442\u0441\u044F \u0440\u0435\u0433\u0443\u043B\u044F\u0440\u043D\u043E" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "features section" }, _attrs))} data-v-cf929927><div class="container" data-v-cf929927><div class="features-header reveal" data-v-cf929927><p class="section-label" data-v-cf929927>\u0423\u0434\u043E\u0431\u0441\u0442\u0432\u0430</p><h2 class="section-title" data-v-cf929927>\u0412\u0441\u0451, \u0447\u0442\u043E \u043D\u0443\u0436\u043D\u043E<br data-v-cf929927><span class="text-accent" data-v-cf929927>\u0434\u043B\u044F \u0436\u0438\u0437\u043D\u0438</span></h2></div><div class="features-grid" data-v-cf929927><!--[-->`);
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
      { src: "/images/gallery-1.jpg", alt: "\u0414\u0432\u0443\u0445\u044A\u044F\u0440\u0443\u0441\u043D\u044B\u0435 \u043A\u0440\u043E\u0432\u0430\u0442\u0438" },
      { src: "/images/gallery-2.jpg", alt: "\u041F\u0440\u0435\u0434\u043A\u043E\u043C\u043D\u0430\u0442\u043D\u044B\u0439 \u043A\u043E\u0440\u0438\u0434\u043E\u0440" },
      { src: "/images/gallery-3.jpg", alt: "\u041A\u043E\u0440\u0438\u0434\u043E\u0440" },
      { src: "/images/gallery-4.jpg", alt: "\u041B\u0438\u0444\u0442" },
      { src: "/images/gallery-5.jpg", alt: "\u0412\u0430\u043D\u043D\u0430\u044F \u043A\u043E\u043C\u043D\u0430\u0442\u0430" },
      { src: "/images/gallery-6.jpg", alt: "\u0412\u0430\u043D\u043D\u0430\u044F \u043A\u043E\u043C\u043D\u0430\u0442\u0430" },
      { src: "/images/gallery-7.jpg", alt: "\u041A\u0443\u0445\u043D\u044F \u0438 \u0441\u0442\u043E\u043B\u043E\u0432\u0430\u044F" },
      { src: "/images/gallery-8.jpg", alt: "\u041F\u0440\u0435\u0434\u043A\u043E\u043C\u043D\u0430\u0442\u043D\u044B\u0439 \u043A\u043E\u0440\u0438\u0434\u043E\u0440" },
      { src: "/images/gallery-9.jpg", alt: "\u041D\u043E\u043C\u0435\u0440 4-\u0445 \u043C\u0435\u0441\u0442\u043D\u044B\u0439" },
      { src: "/images/gallery-10.jpg", alt: "\u041A\u043E\u0440\u0438\u0434\u043E\u0440" },
      { src: "/images/gallery-11.jpg", alt: "\u041A\u0443\u0445\u043D\u044F \u0438 \u0441\u0442\u043E\u043B\u043E\u0432\u0430\u044F" }
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
      }, _attrs))} data-v-05eefa13><div class="container" data-v-05eefa13><div class="gallery-header reveal" data-v-05eefa13><div data-v-05eefa13><p class="section-label" data-v-05eefa13>\u0424\u043E\u0442\u043E\u0433\u0430\u043B\u0435\u0440\u0435\u044F</p><h2 class="section-title" data-v-05eefa13> \u041A\u0430\u043A \u0443 \u043D\u0430\u0441<br data-v-05eefa13><span class="text-accent" data-v-05eefa13>\u0432\u044B\u0433\u043B\u044F\u0434\u0438\u0442</span></h2></div><p class="section-desc" data-v-05eefa13> \u0421\u043C\u043E\u0442\u0440\u0438\u0442\u0435 \u0441\u0430\u043C\u0438 \u2014 \u0447\u0438\u0441\u0442\u044B\u0435 \u043D\u043E\u043C\u0435\u0440\u0430, \u0443\u044E\u0442\u043D\u044B\u0435 \u043E\u0431\u0449\u0438\u0435 \u0437\u043E\u043D\u044B \u0438 \u0432\u0441\u0451 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E\u0435 \u0434\u043B\u044F \u043A\u043E\u043C\u0444\u043E\u0440\u0442\u043D\u043E\u0433\u043E \u043F\u0440\u043E\u0436\u0438\u0432\u0430\u043D\u0438\u044F. </p></div><div class="masonry-grid" data-v-05eefa13><!--[-->`);
      ssrRenderList(items, (item, i) => {
        _push(`<div class="${ssrRenderClass([`reveal-delay-${i % 5 + 1}`, "masonry-item reveal"])}" style="${ssrRenderStyle(item.style)}"${ssrRenderAttr("aria-label", `\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0444\u043E\u0442\u043E: ${item.alt}`)} role="button" tabindex="0" data-v-05eefa13><div class="masonry-img-wrap" data-v-05eefa13><img${ssrRenderAttr("src", item.src)}${ssrRenderAttr("alt", item.alt)} class="masonry-img" data-v-05eefa13><div class="masonry-overlay" aria-hidden="true" data-v-05eefa13><div class="overlay-icon" data-v-05eefa13>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "ph:magnifying-glass-plus-bold",
          size: "28"
        }, null, _parent));
        _push(`</div><span class="overlay-label" data-v-05eefa13>${ssrInterpolate(item.alt)}</span></div></div></div>`);
      });
      _push(`<!--]--></div></div>`);
      if (lightboxIndex.value !== null) {
        _push(`<div class="lightbox" role="dialog" aria-modal="true"${ssrRenderAttr("aria-label", items[lightboxIndex.value].alt)} data-v-05eefa13><div class="lightbox-inner" data-v-05eefa13><button class="lightbox-close" aria-label="\u0417\u0430\u043A\u0440\u044B\u0442\u044C" data-v-05eefa13><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="22" height="22" data-v-05eefa13><path fill="#ffffff" d="M208.49 191.51a12 12 0 0 1-17 17L128 145l-63.51 63.49a12 12 0 0 1-17-17L111 128L47.51 64.49a12 12 0 0 1 17-17L128 111l63.51-63.52a12 12 0 0 1 17 17L145 128Z" data-v-05eefa13></path></svg></button><button class="lightbox-nav lightbox-prev" aria-label="\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0435\u0435 \u0444\u043E\u0442\u043E"${ssrIncludeBooleanAttr(lightboxIndex.value === 0) ? " disabled" : ""} data-v-05eefa13><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="22" height="22" data-v-05eefa13><path fill="#fff" d="M228 128a12 12 0 0 1-12 12H69l51.52 51.51a12 12 0 0 1-17 17l-72-72a12 12 0 0 1 0-17l72-72a12 12 0 0 1 17 17L69 116h147a12 12 0 0 1 12 12" data-v-05eefa13></path></svg></button><img${ssrRenderAttr("src", items[lightboxIndex.value].src)}${ssrRenderAttr("alt", items[lightboxIndex.value].alt)} class="lightbox-img" data-v-05eefa13><button class="lightbox-nav lightbox-next" aria-label="\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0435 \u0444\u043E\u0442\u043E"${ssrIncludeBooleanAttr(lightboxIndex.value === items.length - 1) ? " disabled" : ""} data-v-05eefa13><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="22" height="22" data-v-05eefa13><path fill="#fff" d="m224.49 136.49l-72 72a12 12 0 0 1-17-17L187 140H40a12 12 0 0 1 0-24h147l-51.49-51.52a12 12 0 0 1 17-17l72 72a12 12 0 0 1-.02 17.01" data-v-05eefa13></path></svg></button><div class="lightbox-counter" data-v-05eefa13>${ssrInterpolate(lightboxIndex.value + 1)} / ${ssrInterpolate(items.length)}</div><div class="lightbox-caption" data-v-05eefa13>${ssrInterpolate(items[lightboxIndex.value].alt)}</div></div></div>`);
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
      { name: "\u042F\u043D\u0434\u0435\u043A\u0441", icon: "ph:magnifying-glass-fill" },
      { name: "\u0421\u0431\u0435\u0440\u041C\u0430\u0440\u043A\u0435\u0442", icon: "ph:shopping-cart-fill" },
      { name: "\u041B\u0435\u043C\u0430\u043D\u0430 \u041F\u0420\u041E", icon: "ph:wrench-fill" },
      { name: "\u0412\u043A\u0443\u0441\u0412\u0438\u043B\u043B", icon: "ph:leaf-fill" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "location",
        class: "location section"
      }, _attrs))} data-v-6fca5bbc><div class="container" data-v-6fca5bbc><div class="location-header reveal" data-v-6fca5bbc><p class="section-label" data-v-6fca5bbc>\u041B\u043E\u043A\u0430\u0446\u0438\u044F</p><h2 class="section-title" data-v-6fca5bbc> \u0420\u0430\u0441\u043F\u0430\u0445\u043D\u0438 \u0432\u043E\u0440\u043E\u0442\u0430<br data-v-6fca5bbc><span class="text-accent" data-v-6fca5bbc>\u0432 \u041C\u043E\u0441\u043A\u0432\u0443</span></h2></div><div class="logistics-section reveal" data-v-6fca5bbc><div class="logistics-header" data-v-6fca5bbc><div class="logistics-icon-wrap" data-v-6fca5bbc>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ph:warehouse-fill",
        size: "28",
        class: "logistics-icon"
      }, null, _parent));
      _push(`</div><div data-v-6fca5bbc><h3 class="logistics-title" data-v-6fca5bbc> \u041C\u044B \u0432 \u0446\u0435\u043D\u0442\u0440\u0435 \u043B\u043E\u0433\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u0438\u043D\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u044B </h3><p class="logistics-desc" data-v-6fca5bbc> \u0425\u043E\u0441\u0442\u0435\u043B \u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D \u0432 \u0446\u0435\u043D\u0442\u0440\u0435 \u043B\u043E\u0433\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u0445\u0430\u0431\u0430, \u0440\u044F\u0434\u043E\u043C \u0441 \u043A\u0440\u0443\u043F\u043D\u0435\u0439\u0448\u0438\u043C\u0438 \u0441\u043A\u043B\u0430\u0434\u0441\u043A\u0438\u043C\u0438 \u0438 \u0440\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u043C\u0438 \u0446\u0435\u043D\u0442\u0440\u0430\u043C\u0438. </p></div></div><div class="companies-grid" data-v-6fca5bbc><!--[-->`);
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
        title: "\u0420\u0430\u0431\u043E\u0447\u0438\u0435 \u0431\u0440\u0438\u0433\u0430\u0434\u044B",
        desc: "\u0421\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u0438, \u043C\u043E\u043D\u0442\u0430\u0436\u043D\u0438\u043A\u0438 \u0438 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u044B \u043D\u0430 \u0432\u0430\u0445\u0442\u0435. \u0423\u0434\u043E\u0431\u043D\u043E\u0435 \u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0440\u044F\u0434\u043E\u043C \u0441 \u043F\u0440\u043E\u043C\u0437\u043E\u043D\u0430\u043C\u0438 \u0438 \u043E\u0431\u044A\u0435\u043A\u0442\u0430\u043C\u0438 \u041C\u043E\u0441\u043A\u0432\u044B."
      },
      {
        icon: "ph:briefcase-fill",
        title: "\u041A\u043E\u043C\u0430\u043D\u0434\u0438\u0440\u043E\u0432\u043E\u0447\u043D\u044B\u0435",
        desc: "\u0414\u0435\u043B\u043E\u0432\u044B\u0435 \u043F\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u0438\u043A\u0438, \u043A\u043E\u0442\u043E\u0440\u044B\u043C \u043D\u0443\u0436\u0435\u043D \u0447\u0438\u0441\u0442\u044B\u0439 \u043D\u043E\u0447\u043B\u0435\u0433 \u0431\u0435\u0437 \u043F\u0435\u0440\u0435\u043F\u043B\u0430\u0442 \u0437\u0430 \u043B\u0438\u0448\u043D\u0438\u0435 \u0437\u0432\u0451\u0437\u0434\u044B."
      },
      {
        icon: "ph:backpack-fill",
        title: "\u041F\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u0438\u043A\u0438",
        desc: "\u0422\u0443\u0440\u0438\u0441\u0442\u044B, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0445\u043E\u0442\u044F\u0442 \u0438\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u044C \u041C\u043E\u0441\u043A\u0432\u0443, \u043D\u0435 \u0442\u0440\u0430\u0442\u044F \u0432\u0441\u0451 \u0431\u044E\u0434\u0436\u0435\u0442 \u043D\u0430 \u0433\u043E\u0441\u0442\u0438\u043D\u0438\u0446\u0443."
      },
      {
        icon: "ph:student-fill",
        title: "\u0421\u0442\u0443\u0434\u0435\u043D\u0442\u044B",
        desc: "\u0410\u0431\u0438\u0442\u0443\u0440\u0438\u0435\u043D\u0442\u044B, \u0441\u0442\u0430\u0436\u0451\u0440\u044B \u0438 \u0443\u0447\u0430\u0449\u0438\u0435\u0441\u044F \u2014 \u0434\u043B\u044F \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u0432\u0430\u0436\u043D\u0430 \u0446\u0435\u043D\u0430 \u0438 \u0443\u0434\u043E\u0431\u043D\u0430\u044F \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u043D\u0430\u044F \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E\u0441\u0442\u044C."
      },
      {
        icon: "ph:users-three-fill",
        title: "\u041A\u043E\u043B\u043B\u0435\u043A\u0442\u0438\u0432\u044B",
        desc: "\u0422\u0432\u043E\u0440\u0447\u0435\u0441\u043A\u0438\u0435 \u0438 \u0441\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u044B\u0435 \u043A\u043E\u043C\u0430\u043D\u0434\u044B, \u043F\u0440\u0438\u0435\u0437\u0436\u0430\u044E\u0449\u0438\u0435 \u0432 \u041C\u043E\u0441\u043A\u0432\u0443 \u043D\u0430 \u043A\u043E\u043D\u043A\u0443\u0440\u0441\u044B \u0438 \u0441\u043E\u0440\u0435\u0432\u043D\u043E\u0432\u0430\u043D\u0438\u044F."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "audience section" }, _attrs))} data-v-339d6dab><div class="container" data-v-339d6dab><div class="audience-header reveal" data-v-339d6dab><p class="section-label" data-v-339d6dab>\u0414\u043B\u044F \u043A\u043E\u0433\u043E</p><h2 class="section-title" data-v-339d6dab>\u041A\u0442\u043E \u043E\u0441\u0442\u0430\u043D\u0430\u0432\u043B\u0438\u0432\u0430\u0435\u0442\u0441\u044F<br data-v-339d6dab><span class="text-accent" data-v-339d6dab>\u0432 \xAB\u0424\u0435\u043D\u0438\u043A\u0441\u0435\xBB</span></h2></div><div class="audience-grid" data-v-339d6dab><!--[-->`);
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
        name: "\u041E\u043B\u0435\u0441\u044F \u0410\u0441\u043A\u043E\u043B\u0435\u043F\u043E\u0432\u0430",
        meta: "13 \u044F\u043D\u0432\u0430\u0440\u044F 2025",
        color: "#ff6a00",
        rating: 5,
        text: "\u041E\u0447\u0435\u043D\u044C \u0445\u043E\u0440\u043E\u0448\u0438\u0445 \u0445\u043E\u0441\u0442\u0435\u043B. \u041F\u0440\u0438\u043D\u044F\u043B\u0438 \u043A\u0430\u043A \u0440\u043E\u0434\u043D\u0443\u044E. \u0417\u0434\u0430\u043D\u0438\u044F \u043D\u043E\u0432\u044B\u0435 , \u043A\u0440\u0430\u0441\u0438\u0432\u044B\u0435. \u0412\u043D\u0443\u0442\u0440\u0438 \u0441\u0434\u0435\u043B\u0430\u043D \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0439 \u0440\u0435\u043C\u043E\u043D\u0442. \u0420\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u043E\u0445\u0440\u0430\u043D\u0430 \u0438 \u043F\u0440\u043E\u043F\u0443\u0441\u043A\u043D\u0430\u044F \u0441\u0438\u0441\u0442\u0435\u043C\u0430. \u0412\u043D\u0443\u0442\u0440\u0438 \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u044F \u0435\u0441\u0442\u044C \u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u044E\u0449\u0438\u0439 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B. \u041A\u043E\u0440\u0438\u0434\u043E\u0440\u044B, \u043A\u043E\u043C\u043D\u0430\u0442\u044B , \u043B\u0435\u0441\u0442\u043D\u0438\u0447\u043D\u044B\u0435 \u043F\u043B\u043E\u0449\u0430\u0434\u043A\u0438 \u043C\u043E\u044E\u0442 \u0443\u0431\u0438\u0440\u0430\u044E\u0442, \u0432\u0435\u0437\u0434\u0435 \u0447\u0438\u0441\u0442\u043E\u0442\u0430. \u041C\u0443\u0441\u043E\u0440 \u0432\u044B\u043D\u043E\u0441\u044F\u0442 \u0438\u0437 \u043A\u043E\u043C\u043D\u0430\u0442 \u043A\u0430\u0436\u0434\u043E\u0435 \u0443\u0442\u0440\u043E. \u0416\u0438\u043B\u044C\u0446\u044B \u043F\u0440\u0438\u0432\u0435\u0442\u043B\u0438\u0432\u044B\u0435 \u0438 \u0434\u043E\u0431\u0440\u043E\u0436\u0435\u043B\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0435."
      },
      {
        name: "\u041C\u0430\u043A\u0441\u0438\u043C \u0421\u0435\u0440\u0433\u0435\u0435\u043D\u043A\u043E",
        meta: "6 \u043D\u043E\u044F\u0431\u0440\u044F 2024",
        color: "#e05000",
        rating: 5,
        text: "\u041E\u0442\u043B\u0438\u0447\u043D\u044B\u0439 \u0445\u043E\u0441\u0442\u0435\u043B. \u0425\u043E\u043B\u043E\u0434\u0438\u043B\u044C\u043D\u0438\u043A\u0438 \u0432 \u043A\u0430\u0436\u0434\u043E\u0439 \u043A\u043E\u043C\u043D\u0430\u0442\u0435 \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u044B\u0435 \u0434\u0443\u0448\u0438 \u0441 \u0442\u0443\u0430\u043B\u0435\u0442\u043E\u043C \u043D\u0430 \u043A\u043E\u043C\u043D\u0430\u0442\u0443 \u043F\u043E\u043B\u043D\u043E\u0446\u0435\u043D\u043D\u044B\u0435 \u043D\u0435 \u043A\u0430\u043A \u043E\u0431\u044B\u0447\u043D\u043E \u043F\u0435\u0440\u0435\u0433\u043E\u0440\u043E\u0434\u043A\u0438 \u043A\u0430\u0436\u0434\u044B\u0439 \u0434\u0435\u043D\u044C \u043F\u0440\u043E\u0432\u043E\u0434\u044F\u0442 \u0443\u0431\u043E\u0440\u043A\u0443 \u0432 \u043A\u043E\u043C\u043D\u0430\u0442\u0430\u0445 \u0438 \u0432 \u0442\u0443\u0430\u043B\u0435\u0442\u0435 \u0447\u0442\u043E \u0443\u0434\u0438\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0434\u043B\u044F \u0445\u043E\u0441\u0442\u0435\u043B\u0430. \u0412 \u0446\u0435\u043B\u043E\u043C \u0432\u0441\u0435 \u043E\u0447\u0435\u043D\u044C \u0447\u0438\u0441\u0442\u043E \u0438 \u043E\u043F\u0440\u044F\u0442\u043D\u043E \u0432\u0435\u0440\u043D\u0443\u0441\u044C \u0441\u044E\u0434\u0430 \u0435\u0449\u0435 \u0440\u0430\u0437 100%"
      },
      {
        name: "\u0414\u0438\u043D\u0430\u0440\u0430 \u0423.",
        meta: "19 \u044F\u043D\u0432\u0430\u0440\u044F 2025",
        color: "#c04000",
        rating: 5,
        text: "\u041E\u0442\u043B\u0438\u0447\u043D\u044B\u0439 \u0445\u043E\u0441\u0442\u0435\u043B. \u0421\u043B\u044B\u0448\u0430\u043B\u0430 \u043C\u043D\u043E\u0433\u043E \u0441\u043B\u0443\u0445\u043E\u0432, \u0447\u0442\u043E \u0433\u0440\u044F\u0437\u043D\u043E. \u0418 \u0435\u0441\u0442\u044C \u0436\u0438\u0432\u043D\u043E\u0441\u0442\u044C. \u0418\u0437 \u0437\u0430 \u044D\u0442\u043E\u0433\u043E \u043D\u0435 \u0440\u0435\u0448\u0430\u043B\u0430\u0441\u044C \u0437\u0430\u0435\u0445\u0430\u0442\u044C \u0441\u044E\u0434\u0430, \u0445\u043E\u0442\u044F \u0434\u043E \u0440\u0430\u0431\u043E\u0442\u044B 3 \u0448\u0430\u0433\u0430. \u0422\u0430\u043A \u0432\u043E\u0442 \u0432\u0441\u0435 \u044D\u0442\u043E \u043C\u0438\u0444. \u0427\u0438\u0441\u0442\u043E, \u0443\u044E\u0442\u043D\u043E. \u041E\u0447\u0435\u043D\u044C \u0436\u0430\u043B\u0435\u044E \u0447\u0442\u043E \u0440\u0430\u043D\u044C\u0448\u0435 \u043D\u0435 \u043F\u0435\u0440\u0435\u0435\u0445\u0430\u043B\u0430, \u0442\u0440\u0430\u0442\u0438\u043B\u0430 \u043D\u0430 \u0434\u043E\u0440\u043E\u0433\u0443 4 \u0447\u0430\u0441\u0430. \u041F\u0440\u043E\u0436\u0438\u0432\u0430\u044E \u0432 \u0434\u0430\u043D\u043E\u043C \u0445\u043E\u0441\u0442\u0435\u043B\u0435, \u0432\u0441\u0435 \u043D\u0440\u0430\u0432\u0438\u0442\u0441\u044F! \u0416\u0430\u043B\u043A\u043E \u0442\u043E\u043B\u044C\u043A\u043E \u0447\u0442\u043E \u043B\u0438\u0444\u0442\u043E\u043C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u043D\u0435\u043B\u044C\u0437\u044F, \u043F\u043E\u0441\u043B\u0435 \u043D\u043E\u0447\u0438, \u0443\u0441\u0442\u0430\u0432\u0448\u0430\u044F \u043D\u0430 6 \u044D\u0442\u0430\u0436\u{1F612}\u0410 \u0442\u0430\u043A \u0432\u0441\u0435 \u0441\u0443\u043F\u0435\u0440\u{1F44D}"
      },
      {
        name: "\u0425\u0430\u0441\u0430\u043D \u041C\u0438\u0440\u0437\u0430\u043C\u0443\u0442\u0434\u0438\u043D\u043E\u0432",
        meta: "14 \u044F\u043D\u0432\u0430\u0440\u044F 2025",
        color: "#ff8c00",
        rating: 5,
        text: "\u0427\u0438\u0441\u0442\u043E, \u0432\u0441\u0435 \u0443\u0441\u043B\u043E\u0432\u0438\u044F \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u044B. \u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u0434\u043E\u0431\u0440\u043E\u0436\u0435\u043B\u0430\u0442\u0435\u043B\u044C\u043D\u0430\u044F. \u041E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u0435 \u0432\u043E\u0432\u0440\u0435\u043C\u044F. \u041F\u043E\u0441\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u0431\u0435\u043B\u044C\u0451 \u0447\u0438\u0441\u0442\u043E\u0435 \u0438 \u043C\u0435\u043D\u044F\u044E\u0442 \u0432\u043E\u0432\u0440\u0435\u043C\u044F. 5/5."
      },
      {
        name: "\u0412\u044F\u0447\u0435\u0441\u043B\u0430\u0432 \u0411\u0430\u0434\u043C\u0430\u0446\u044B\u0440\u0435\u043D\u043E\u0432",
        meta: "18 \u0438\u044E\u043B\u044F 2023",
        color: "#d06000",
        rating: 4.2,
        text: "\u0412 \u043D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u043C\u0435\u0441\u0442\u0430\u0445 \u0435\u0441\u0442\u044C \u043D\u0435\u0438\u0441\u043F\u0440\u0430\u0432\u043D\u043E\u0441\u0442\u0438, \u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u0441\u0432\u0435\u0440\u0445\u0443 \u0432 \u0432\u0430\u043D\u043D\u043E\u0439 \u043A\u0430\u043F\u0430\u043B\u0430 \u0432\u043E\u0434\u0430, \u043D\u043E \u0432 \u0446\u0435\u043B\u043E\u043C \u043E\u0447\u0435\u043D\u044C \u043D\u0435\u043F\u043B\u043E\u0445\u043E, \u043F\u0440\u043E\u0441\u0442\u043E\u0440\u043D\u043E, \u0441\u0432\u0435\u0442\u043B\u043E, \u0447\u0438\u0441\u0442\u043E, \u043C\u043D\u043E\u0433\u043E \u043A\u043E\u043C\u043D\u0430\u0442. \u0422\u0443\u0430\u043B\u0435\u0442 \u0438 \u0434\u0443\u0448 \u043D\u0430 \u0434\u0432\u0435 \u043A\u043E\u043C\u043D\u0430\u0442\u044B, \u043D\u0435\u043F\u043B\u043E\u0445\u043E \u0431\u044B\u043B\u043E \u0431\u044B \u0435\u0449\u0451 \u0432 \u043A\u043E\u0440\u0438\u0434\u043E\u0440\u0435 \u0440\u0435\u0437\u0435\u0440\u0432\u043D\u044B\u0435 \u0442\u0443\u0430\u043B\u0435\u0442\u044B \u0438 \u0434\u0443\u0448 \u0441\u0434\u0435\u043B\u0430\u0442\u044C. \u0420\u043E\u0437\u0435\u0442\u043A\u0438 \u0443 \u043A\u0430\u0436\u0434\u043E\u0439 \u043A\u0440\u043E\u0432\u0430\u0442\u0438. \u041A\u0440\u043E\u0432\u0430\u0442\u0438 \u0443\u0434\u043E\u0431\u043D\u044B\u0435, \u0434\u0432\u0443\u0445\u044A\u044F\u0440\u0443\u0441\u043D\u044B\u0435, \u0434\u0435\u0440\u0435\u0432\u044F\u043D\u043D\u044B\u0435. \u0412\u043D\u0438\u043C\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B."
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
      }, _attrs))} data-v-360de63b><div class="container" data-v-360de63b><div class="reviews-header reveal" data-v-360de63b><p class="section-label" data-v-360de63b>\u041E\u0442\u0437\u044B\u0432\u044B</p><h2 class="section-title" data-v-360de63b> \u0427\u0442\u043E \u0433\u043E\u0432\u043E\u0440\u044F\u0442<br data-v-360de63b><span class="text-accent" data-v-360de63b>\u043D\u0430\u0448\u0438 \u0433\u043E\u0441\u0442\u0438</span></h2></div><div class="reviews-slider" data-v-360de63b><div class="reviews-track" style="${ssrRenderStyle({
        transform: `translateX(-${unref(activeIdx) * (100 / unref(slidesPerView))}%)`
      })}" data-v-360de63b><!--[-->`);
      ssrRenderList(reviews, (review) => {
        _push(`<div class="review-slide" data-v-360de63b><div class="review-card glass-card" data-v-360de63b><div class="review-stars"${ssrRenderAttr("aria-label", `${review.rating} \u0437\u0432\u0435\u0437\u0434\u044B \u0438\u0437 5`)} data-v-360de63b><!--[-->`);
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
        _push(`<button class="${ssrRenderClass([{ active: i === unref(activeIdx) }, "dot"])}"${ssrRenderAttr("aria-label", `\u041E\u0442\u0437\u044B\u0432 ${i + 1}`)} data-v-360de63b></button>`);
      });
      _push(`<!--]--></div><div class="reviews-arrows" data-v-360de63b><button class="arrow-btn"${ssrIncludeBooleanAttr(unref(activeIdx) === 0) ? " disabled" : ""} aria-label="\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0438\u0439" data-v-360de63b>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ph:arrow-left",
        size: "20"
      }, null, _parent));
      _push(`</button><button class="arrow-btn"${ssrIncludeBooleanAttr(unref(activeIdx) === unref(maxIndex)) ? " disabled" : ""} aria-label="\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439" data-v-360de63b>`);
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
        question: "\u0412 \u043A\u0430\u043A\u043E\u0435 \u0432\u0440\u0435\u043C\u044F \u043C\u043E\u0436\u043D\u043E \u0437\u0430\u0435\u0445\u0430\u0442\u044C \u0438 \u0432\u044B\u0435\u0445\u0430\u0442\u044C?",
        answer: "\u041C\u044B \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u043C \u043A\u0440\u0443\u0433\u043B\u043E\u0441\u0443\u0442\u043E\u0447\u043D\u043E \u2014 \u0437\u0430\u0435\u0445\u0430\u0442\u044C \u0438 \u0432\u044B\u0435\u0445\u0430\u0442\u044C \u043C\u043E\u0436\u043D\u043E \u0432 \u043B\u044E\u0431\u043E\u0435 \u0432\u0440\u0435\u043C\u044F \u0441\u0443\u0442\u043E\u043A. \u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440 \u0432\u0441\u0435\u0433\u0434\u0430 \u043D\u0430 \u043C\u0435\u0441\u0442\u0435. \u0420\u0430\u043D\u043D\u0438\u0439 \u0437\u0430\u0435\u0437\u0434 \u0438\u043B\u0438 \u043F\u043E\u0437\u0434\u043D\u0438\u0439 \u0432\u044B\u0435\u0437\u0434 \u0432\u043E\u0437\u043C\u043E\u0436\u0435\u043D \u043F\u0440\u0438 \u043D\u0430\u043B\u0438\u0447\u0438\u0438 \u0441\u0432\u043E\u0431\u043E\u0434\u043D\u043E\u0433\u043E \u043C\u0435\u0441\u0442\u0430."
      },
      {
        question: "\u0415\u0441\u0442\u044C \u043B\u0438 \u043F\u0430\u0440\u043A\u043E\u0432\u043A\u0430 \u0440\u044F\u0434\u043E\u043C \u0441 \u0445\u043E\u0441\u0442\u0435\u043B\u043E\u043C?",
        answer: "\u0414\u0430, \u043D\u0430 \u0442\u0435\u0440\u0440\u0438\u0442\u043E\u0440\u0438\u0438 \u0445\u043E\u0441\u0442\u0435\u043B\u0430 \u0435\u0441\u0442\u044C \u043E\u0445\u0440\u0430\u043D\u044F\u0435\u043C\u0430\u044F \u043F\u0430\u0440\u043A\u043E\u0432\u043A\u0430. \u042D\u0442\u043E \u043E\u0441\u043E\u0431\u0435\u043D\u043D\u043E \u0443\u0434\u043E\u0431\u043D\u043E \u0434\u043B\u044F \u0442\u0435\u0445, \u043A\u0442\u043E \u043F\u0440\u0438\u0435\u0437\u0436\u0430\u0435\u0442 \u043D\u0430 \u043B\u0438\u0447\u043D\u043E\u043C \u0438\u043B\u0438 \u0440\u0430\u0431\u043E\u0447\u0435\u043C \u0430\u0432\u0442\u043E\u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u0435."
      },
      {
        question: "\u0427\u0442\u043E \u0432\u0445\u043E\u0434\u0438\u0442 \u0432 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u043F\u0440\u043E\u0436\u0438\u0432\u0430\u043D\u0438\u044F?",
        answer: "\u0412 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0432\u043A\u043B\u044E\u0447\u0435\u043D\u044B: \u043C\u0435\u0441\u0442\u043E \u0432 \u043D\u043E\u043C\u0435\u0440\u0435, \u043F\u043E\u0441\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u0431\u0435\u043B\u044C\u0451, \u0434\u043E\u0441\u0442\u0443\u043F \u043A \u043E\u0431\u0449\u0435\u0439 \u043A\u0443\u0445\u043D\u0435, \u0434\u0443\u0448 \u0438 \u0442\u0443\u0430\u043B\u0435\u0442. \u0421\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u0430\u044F \u043F\u0430\u0440\u043A\u043E\u0432\u043A\u0430 \u043D\u0430 50 \u043C\u0430\u0448\u0438\u043D. \u0421\u0442\u0438\u0440\u043A\u0430 \u043E\u043F\u043B\u0430\u0447\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u043E \u043F\u043E \u043D\u0435\u0431\u043E\u043B\u044C\u0448\u043E\u043C\u0443 \u0442\u0430\u0440\u0438\u0444\u0443."
      },
      {
        question: "\u041C\u043E\u0436\u043D\u043E \u043B\u0438 \u043E\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C\u0441\u044F \u043D\u0430 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u043C\u0435\u0441\u044F\u0446\u0435\u0432?",
        answer: "\u0414\u0430, \u043C\u044B \u0440\u0430\u0434\u044B \u0433\u043E\u0441\u0442\u044F\u043C \u043D\u0430 \u0434\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u0441\u0440\u043E\u043A. \u041F\u0440\u0438 \u043F\u0440\u043E\u0436\u0438\u0432\u0430\u043D\u0438\u0438 \u043E\u0442 2 \u043D\u0435\u0434\u0435\u043B\u044C \u043F\u0440\u0435\u0434\u0443\u0441\u043C\u043E\u0442\u0440\u0435\u043D\u0430 \u0441\u043A\u0438\u0434\u043A\u0430. \u0414\u043B\u044F \u0434\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0445 \u0441\u0440\u043E\u043A\u043E\u0432 \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u043C \u0443\u0442\u043E\u0447\u043D\u044F\u0442\u044C \u0443\u0441\u043B\u043E\u0432\u0438\u044F \u043F\u043E \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0443 \u2014 \u043C\u044B \u043F\u043E\u0434\u0431\u0435\u0440\u0451\u043C \u043D\u0430\u0438\u0431\u043E\u043B\u0435\u0435 \u0432\u044B\u0433\u043E\u0434\u043D\u044B\u0439 \u0432\u0430\u0440\u0438\u0430\u043D\u0442."
      },
      {
        question: "\u041A\u0430\u043A \u0434\u043E\u0431\u0440\u0430\u0442\u044C\u0441\u044F \u0434\u043E \u0445\u043E\u0441\u0442\u0435\u043B\u0430 \u0438\u0437 \u041C\u043E\u0441\u043A\u0432\u044B?",
        answer: "\u0425\u043E\u0441\u0442\u0435\u043B \u043D\u0430\u0445\u043E\u0434\u0438\u0442\u0441\u044F \u0432 \u041C\u044B\u0442\u0438\u0449\u0430\u0445, \u0432 10 \u043C\u0438\u043D\u0443\u0442\u0430\u0445 \u0445\u043E\u0434\u044C\u0431\u044B \u043E\u0442 \u043C\u0435\u0442\u0440\u043E \u0424\u0438\u0437\u0442\u0435\u0445. \u041D\u0430 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u0435: \u043F\u043E \u042F\u0440\u043E\u0441\u043B\u0430\u0432\u0441\u043A\u043E\u043C\u0443 \u0448\u043E\u0441\u0441\u0435 \u0432 \u0441\u0442\u043E\u0440\u043E\u043D\u0443 \u041C\u044B\u0442\u0438\u0449. \u041D\u0430 \u043E\u0431\u0449\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u043C \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u0435: \u0430\u0432\u0442\u043E\u0431\u0443\u0441\u044B \u0438\u0437 \u041C\u043E\u0441\u043A\u0432\u044B \u0438\u043B\u0438 \u044D\u043B\u0435\u043A\u0442\u0440\u0438\u0447\u043A\u0430 \u0441 \u042F\u0440\u043E\u0441\u043B\u0430\u0432\u0441\u043A\u043E\u0433\u043E \u0432\u043E\u043A\u0437\u0430\u043B\u0430 \u0434\u043E \u0441\u0442\u0430\u043D\u0446\u0438\u0438 \u041C\u044B\u0442\u0438\u0449\u0438."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "faq",
        class: "faq section"
      }, _attrs))} data-v-e6ed3dc2><div class="container faq-inner" data-v-e6ed3dc2><div class="faq-header reveal" data-v-e6ed3dc2><p class="section-label" data-v-e6ed3dc2>FAQ</p><h2 class="section-title" data-v-e6ed3dc2> \u0427\u0430\u0441\u0442\u043E \u0437\u0430\u0434\u0430\u0432\u0430\u0435\u043C\u044B\u0435<br data-v-e6ed3dc2><span class="text-accent" data-v-e6ed3dc2>\u0432\u043E\u043F\u0440\u043E\u0441\u044B</span></h2></div><div class="faq-list" data-v-e6ed3dc2><!--[-->`);
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
  }, _attrs))} data-v-fc4d533b><div class="container" data-v-fc4d533b><div class="contacts-header reveal" data-v-fc4d533b><p class="section-label" data-v-fc4d533b>\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B</p><h2 class="section-title" data-v-fc4d533b> \u0421\u0432\u044F\u0436\u0438\u0442\u0435\u0441\u044C \u0441 \u043D\u0430\u043C\u0438<br data-v-fc4d533b><span class="text-accent" data-v-fc4d533b>\u043F\u0440\u044F\u043C\u043E \u0441\u0435\u0439\u0447\u0430\u0441</span></h2></div><div class="contacts-inner" data-v-fc4d533b><div class="contacts-info reveal" data-v-fc4d533b><div class="contact-card glass-card" data-v-fc4d533b><a href="tel:+79804107614" class="contact-row" data-v-fc4d533b><div class="contact-icon-wrap" data-v-fc4d533b>`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "ph:phone-fill",
    size: "22",
    class: "contact-icon"
  }, null, _parent));
  _push(`</div><div data-v-fc4d533b><p class="contact-label" data-v-fc4d533b>\u0422\u0435\u043B\u0435\u0444\u043E\u043D</p><p class="contact-value" data-v-fc4d533b>+7 (980) 410-76-14</p></div>`);
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
  _push(`</div><div data-v-fc4d533b><p class="contact-label" data-v-fc4d533b>\u0420\u0435\u0436\u0438\u043C \u0440\u0430\u0431\u043E\u0442\u044B</p><p class="contact-value" data-v-fc4d533b>\u041A\u0440\u0443\u0433\u043B\u043E\u0441\u0443\u0442\u043E\u0447\u043D\u043E, 24/7</p></div></div><div class="contact-divider" data-v-fc4d533b></div><div class="contact-row non-link" data-v-fc4d533b><div class="contact-icon-wrap" data-v-fc4d533b>`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "ph:map-pin-fill",
    size: "22",
    class: "contact-icon"
  }, null, _parent));
  _push(`</div><div data-v-fc4d533b><p class="contact-label" data-v-fc4d533b>\u0410\u0434\u0440\u0435\u0441</p><p class="contact-value" data-v-fc4d533b> \u041C\u043E\u0441\u043A\u043E\u0432\u0441\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C, \u041C\u044B\u0442\u0438\u0449\u0438, \u041B\u0438\u043F\u043A\u0438\u043D\u0441\u043A\u043E\u0435 \u0448\u043E\u0441\u0441\u0435, 2-\u0439 \u043A\u0438\u043B\u043E\u043C\u0435\u0442\u0440, \u043F\u043E\u0441\u0451\u043B\u043E\u043A \u0412\u0435\u0448\u043A\u0438, \u0432\u043B1\u04412 </p></div></div><div class="contact-divider" data-v-fc4d533b></div><div class="contact-row non-link" data-v-fc4d533b><div class="contact-icon-wrap" data-v-fc4d533b>`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "ph:car-fill",
    size: "22",
    class: "contact-icon"
  }, null, _parent));
  _push(`</div><div data-v-fc4d533b><p class="contact-label" data-v-fc4d533b>\u041F\u0430\u0440\u043A\u043E\u0432\u043A\u0430</p><p class="contact-value" data-v-fc4d533b>\u041E\u0445\u0440\u0430\u043D\u044F\u0435\u043C\u0430\u044F \u043F\u0430\u0440\u043A\u043E\u0432\u043A\u0430 \u043D\u0430 50 \u043C\u0430\u0448\u0438\u043D</p></div></div></div><a href="tel:+79804107614" class="big-call-btn" data-v-fc4d533b>`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "ph:phone-call-fill",
    size: "24"
  }, null, _parent));
  _push(`<span data-v-fc4d533b>\u041F\u043E\u0437\u0432\u043E\u043D\u0438\u0442\u044C \u0438 \u0437\u0430\u0431\u0440\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u0442\u044C</span></a></div><div class="contacts-map glass-card reveal reveal-delay-2" data-v-fc4d533b><iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A40df10e896e50836669db844b80b1d3b7f21eff9c131ace3b0ed76b78056ffd4&amp;source=constructor" class="contact-map-iframe" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade" width="100%" height="473" frameborder="0" data-v-fc4d533b></iframe></div></div></div></section>`);
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
      title: "\u0425\u043E\u0441\u0442\u0435\u043B \xAB\u0424\u0435\u043D\u0438\u043A\u0441\xBB \u2014 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E\u0435 \u043F\u0440\u043E\u0436\u0438\u0432\u0430\u043D\u0438\u0435 \u0432 \u041C\u044B\u0442\u0438\u0449\u0430\u0445 \u0440\u044F\u0434\u043E\u043C \u0441 \u041C\u041A\u0410\u0414",
      meta: [
        { name: "description", content: "\u0425\u043E\u0441\u0442\u0435\u043B \u0424\u0435\u043D\u0438\u043A\u0441 \u0432 \u041C\u044B\u0442\u0438\u0449\u0430\u0445. \u041A\u043E\u043C\u0444\u043E\u0440\u0442\u043D\u043E\u0435 \u0438 \u043D\u0435\u0434\u043E\u0440\u043E\u0433\u043E\u0435 \u0440\u0430\u0437\u043C\u0435\u0449\u0435\u043D\u0438\u0435 \u0434\u043B\u044F \u0440\u0430\u0431\u043E\u0447\u0438\u0445 \u0438 \u0433\u043E\u0441\u0442\u0435\u0439 \u041C\u043E\u0441\u043A\u0432\u044B. Wi-Fi, \u043F\u0430\u0440\u043A\u043E\u0432\u043A\u0430, 24/7. \u0426\u0435\u043D\u044B \u043E\u0442 700 \u20BD/\u0441\u0443\u0442\u043A\u0438." }
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

export { index as default };
//# sourceMappingURL=index-BvG1Cr3x.mjs.map

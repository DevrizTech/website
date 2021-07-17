import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  Contact: () => import('../..\\components\\contact.vue' /* webpackChunkName: "components/contact" */).then(c => wrapFunctional(c.default || c)),
  Footer: () => import('../..\\components\\footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c)),
  Heading: () => import('../..\\components\\heading.vue' /* webpackChunkName: "components/heading" */).then(c => wrapFunctional(c.default || c)),
  Landing: () => import('../..\\components\\landing.vue' /* webpackChunkName: "components/landing" */).then(c => wrapFunctional(c.default || c)),
  Langs: () => import('../..\\components\\langs.vue' /* webpackChunkName: "components/langs" */).then(c => wrapFunctional(c.default || c)),
  Meet: () => import('../..\\components\\meet.vue' /* webpackChunkName: "components/meet" */).then(c => wrapFunctional(c.default || c)),
  Navbar: () => import('../..\\components\\navbar.vue' /* webpackChunkName: "components/navbar" */).then(c => wrapFunctional(c.default || c)),
  Overlay: () => import('../..\\components\\overlay.vue' /* webpackChunkName: "components/overlay" */).then(c => wrapFunctional(c.default || c)),
  Products: () => import('../..\\components\\products.vue' /* webpackChunkName: "components/products" */).then(c => wrapFunctional(c.default || c)),
  Sidebar: () => import('../..\\components\\sidebar.vue' /* webpackChunkName: "components/sidebar" */).then(c => wrapFunctional(c.default || c)),
  Stack: () => import('../..\\components\\stack.vue' /* webpackChunkName: "components/stack" */).then(c => wrapFunctional(c.default || c)),
  StackCard: () => import('../..\\components\\stackCard.vue' /* webpackChunkName: "components/stack-card" */).then(c => wrapFunctional(c.default || c)),
  TechstackCard: () => import('../..\\components\\techstackCard.vue' /* webpackChunkName: "components/techstack-card" */).then(c => wrapFunctional(c.default || c)),
  WhyUs: () => import('../..\\components\\whyUs.vue' /* webpackChunkName: "components/why-us" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}

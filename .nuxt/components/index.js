import { wrapFunctional } from './utils'

export { default as Contact } from '../..\\components\\contact.vue'
export { default as Footer } from '../..\\components\\footer.vue'
export { default as Landing } from '../..\\components\\landing.vue'
export { default as Langs } from '../..\\components\\langs.vue'
export { default as Meet } from '../..\\components\\meet.vue'
export { default as Navbar } from '../..\\components\\navbar.vue'
export { default as Overlay } from '../..\\components\\overlay.vue'
export { default as Products } from '../..\\components\\products.vue'
export { default as Sidebar } from '../..\\components\\sidebar.vue'
export { default as StackCard } from '../..\\components\\stackCard.vue'
export { default as TechstackCard } from '../..\\components\\techstackCard.vue'
export { default as WhyUs } from '../..\\components\\whyUs.vue'

export const LazyContact = import('../..\\components\\contact.vue' /* webpackChunkName: "components/contact" */).then(c => wrapFunctional(c.default || c))
export const LazyFooter = import('../..\\components\\footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const LazyLanding = import('../..\\components\\landing.vue' /* webpackChunkName: "components/landing" */).then(c => wrapFunctional(c.default || c))
export const LazyLangs = import('../..\\components\\langs.vue' /* webpackChunkName: "components/langs" */).then(c => wrapFunctional(c.default || c))
export const LazyMeet = import('../..\\components\\meet.vue' /* webpackChunkName: "components/meet" */).then(c => wrapFunctional(c.default || c))
export const LazyNavbar = import('../..\\components\\navbar.vue' /* webpackChunkName: "components/navbar" */).then(c => wrapFunctional(c.default || c))
export const LazyOverlay = import('../..\\components\\overlay.vue' /* webpackChunkName: "components/overlay" */).then(c => wrapFunctional(c.default || c))
export const LazyProducts = import('../..\\components\\products.vue' /* webpackChunkName: "components/products" */).then(c => wrapFunctional(c.default || c))
export const LazySidebar = import('../..\\components\\sidebar.vue' /* webpackChunkName: "components/sidebar" */).then(c => wrapFunctional(c.default || c))
export const LazyStackCard = import('../..\\components\\stackCard.vue' /* webpackChunkName: "components/stack-card" */).then(c => wrapFunctional(c.default || c))
export const LazyTechstackCard = import('../..\\components\\techstackCard.vue' /* webpackChunkName: "components/techstack-card" */).then(c => wrapFunctional(c.default || c))
export const LazyWhyUs = import('../..\\components\\whyUs.vue' /* webpackChunkName: "components/why-us" */).then(c => wrapFunctional(c.default || c))

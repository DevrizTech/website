<template>
  <div class="lg:max-w-screen-2xl mx-auto">
    <navbar />
    <sidebar/>
    <landing class="mb-32" />
    <langs class="mb-32" id="stack" />
    <why-us class="mb-32" id="why" />
    <meet class="mb-32" id="about" />
    <contact id="contact" />
    <Footer />
  </div>
</template>
<script>


import Navbar from "~/components/navbar";
import Landing from "~/components/landing";
import Langs from "~/components/langs";
import WhyUs from "~/components/whyUs";
import Products from "~/components/products";
import Meet from "~/components/meet";
import Contact from "~/components/contact";
import Footer from "~/components/footer";
import Sidebar from '~/components/sidebar.vue';
export default {
  components: {Footer, Contact, Meet, Products, WhyUs, Langs, Landing, Navbar,Sidebar}
};

</script>
<style>

</style>
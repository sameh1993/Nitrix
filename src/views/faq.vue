<template>
  <section class="faq-section">
    <header>
      <!-- start navbar -->
      <navbar-app></navbar-app>

      <!-- start Bread cumb -->
      <bread-cumb></bread-cumb>
    </header>

    <!-- start FrequentlyQuest -->
    <FrequentlyQuest></FrequentlyQuest>

    <!-- start aboutus one -->
    <about-us-one></about-us-one>

    <!-- start OurEcommerce -->
    <our-ecommerce></our-ecommerce>
  </section>
</template>

<script>
import navbarApp from "../components/demos/demoOne/navbar.vue";
import BreadCumb from "../components/header/bread-cumb.vue";
import FrequentlyQuest from "../components/demos/demoOne/Frequently-Questions.vue";
import AboutUsOne from "@/components/demos/aboutUsOne.vue";
import OurEcommerce from "../components/demos/demoOne/Our-Ecommerce";

export default {
  components: {
    navbarApp,
    BreadCumb,
    FrequentlyQuest,
    AboutUsOne,
    OurEcommerce
  }
};
</script>
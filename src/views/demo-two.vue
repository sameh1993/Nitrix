<template>
  <div class="demoTwo-section">
    <header>
      <!-- start navbar -->
      <navbarDemoOne></navbarDemoOne>

      <!-- start welcome section -->
      <welcomeApp></welcomeApp>
    </header>

    <!-- start our main feature -->
    <OurMainFeature></OurMainFeature>

    <!-- start about two from demo one -->
    <AboutUsTwo></AboutUsTwo>

    <!-- start about us second -->
    <AboutUsSecond></AboutUsSecond>

    <!-- start about us three -->
    <aboutUsthree></aboutUsthree>

    <!-- start how it work -->
    <how-it-works></how-it-works>

    <!-- start our serivces -->
    <our-serives></our-serives>

    <!-- start spread map -->
    <spread-map></spread-map>

    <!-- start our ecommerce -->
    <our-ecommerce></our-ecommerce>

    <!-- start FrequentlyQuest -->
    <FrequentlyQuest></FrequentlyQuest>

    <!-- start Our Pricing Plans -->
    <OurPricingPlans></OurPricingPlans>

    <!-- start our testimonial -->
    <ourTestimonial></ourTestimonial>

    <!-- start LatestNews -->
    <LatestNews></LatestNews>

    <!-- start ContactUs -->
    <contact-us></contact-us>
  </div>
</template>


<script>
// We import JQuery
const $ = require("jquery");
// We declare it globally
window.$ = $;

// import main components
import navbarDemoOne from "@/components/demos/demoOne/navbar.vue";
import welcomeApp from "@/components/demos/welcome.vue";
import OurMainFeature from "../components/demos/demoTwo/what-we-do";
import AboutUsTwo from "@/components/demos/aboutUsTwo.vue";
import AboutUsSecond from "@/components/demos/demoTwo/aboutSecond.vue";
import aboutUsthree from "../components/demos/aboutUsThree";
import HowItWorks from "../components/demos/demoTwo/how-it-works.vue";
import OurSerives from "../components/demos/ourServices.vue";
import spreadMap from "../components/demos/demoOne/spread-map.vue";
import OurEcommerce from "../components/demos/demoOne/Our-Ecommerce";
import FrequentlyQuest from "../components/demos/demoOne/Frequently-Questions";
import OurPricingPlans from "../components/demos/demoOne/our-pricing-plans.vue";
import ourTestimonial from "../components/demos/demoTwo/our-testionail.vue";
import LatestNews from "../components/demos/latestnews.vue";
import ContactUs from "../components/demos/contactUs.vue";

export default {
  components: {
    navbarDemoOne,
    welcomeApp,
    OurMainFeature,
    AboutUsTwo,
    AboutUsSecond,
    aboutUsthree,
    HowItWorks,
    OurSerives,
    spreadMap,
    OurEcommerce,
    FrequentlyQuest,
    OurPricingPlans,
    ourTestimonial,
    LatestNews,
    ContactUs
  },
  mounted() {}
};
</script>
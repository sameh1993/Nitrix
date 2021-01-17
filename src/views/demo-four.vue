<template>
  <div class="demoFour-section">
    <!-- start header -->
    <header>
      <!-- start navbar -->
      <navbar-app></navbar-app>

      <!-- start welcome -->
      <welcome-app></welcome-app>
    </header>

    <!-- start demo vedio -->
    <demoVedio></demoVedio>

    <!-- sart how it work -->
    <howITWork></howITWork>

    <!-- start about us one -->
    <about-us-one></about-us-one>

    <!-- start OurSerives -->
    <OurSerives></OurSerives>

    <!-- start spread map -->
    <spread-map></spread-map>

    <!-- start our ecommerce -->
    <OurEcommerce></OurEcommerce>

    <!-- start FrequentlyQuest -->
    <FrequentlyQuest></FrequentlyQuest>

    <!-- start Our Pricing Plans -->
    <OurPricingPlans></OurPricingPlans>

    <!-- start our team -->
    <our-team></our-team>

        <!-- start LatestNews -->
    <LatestNews></LatestNews>

    <!-- start ContactUs -->
    <contact-us></contact-us>

    
  </div>
</template>

<script>
import navbarApp from "@/components/demos/demoOne/navbar.vue";
import welcomeApp from "@/components/demos/welcome.vue";
import demoVedio from "@/components/demos/demoFour/demo-vedio.vue";
import howITWork from "@/components/demos/demoOne/how-it-work.vue";
import AboutUsOne from "@/components/demos/aboutUsOne.vue";
import OurSerives from "../components/demos/ourServices.vue";
import spreadMap from "../components/demos/demoOne/spread-map.vue";
import OurEcommerce from "../components/demos/demoOne/Our-Ecommerce.vue";
import FrequentlyQuest from "../components/demos/demoOne/Frequently-Questions";
import OurPricingPlans from "../components/demos/demoOne/our-pricing-plans.vue";
import OurTeam from "../components/demos/ourTeam.vue";
import LatestNews from "../components/demos/latestnews.vue";
import ContactUs from "../components/demos/contactUs.vue";

export default {
  components: {
    navbarApp,
    welcomeApp,
    demoVedio,
    howITWork,
    AboutUsOne,
    OurSerives,
    spreadMap,
    OurEcommerce,
    FrequentlyQuest,
    OurPricingPlans,
    OurTeam,
        LatestNews,
    ContactUs
  }
};
</script>
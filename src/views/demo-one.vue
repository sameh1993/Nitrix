<template>
  <div class="demoOne-section">
    <!-- start header section -->
    <header>
      <!-- start navbar demo one -->
      <navbar-demo-one></navbar-demo-one>

      <!-- start welcome section -->
      <welcome></welcome>
    </header>
    <!-- end header section -->

    <!-- start content for One Demo -->
    <div class="double-bg-1">
      <!-- start how it work -->
      <how-it-work></how-it-work>

      <!-- start about us page -->
      <AboutUsOne></AboutUsOne>

      <!-- start about two -->
      <about-us-two></about-us-two>

      <!-- start aboutus three -->
      <AboutUsThree></AboutUsThree>
    </div>
    <!-- enf content for one Demo -->


    <!-- start our services -->
    <OurServices></OurServices>

    <!-- start spread map -->
    <spread-map></spread-map>

    <!-- start our ecommerce -->
    <our-ecommerce></our-ecommerce>

    <!-- start FrequentlyQuest -->
    <FrequentlyQuest></FrequentlyQuest>

    <!-- start Our Pricing Plans -->
    <OurPricingPlans></OurPricingPlans>

    <!-- start our team -->
    <our-team></our-team>

    <!-- start Latest News -->
    <LatestNews></LatestNews>

    <!-- start contact us -->
    <contact-us class="footer"></contact-us>

  </div>
</template>

<style scoped>
.footer {
  background: url('../assets/img/core-img/pattern.png') no-repeat;
  background-position-x: center;
}
</style>


<script>
import navbarDemoOne from "@/components/demos/demoOne/navbar.vue";
import welcome from "@/components/demos/welcome.vue";
import HowItWork from "@/components/demos/demoOne/how-it-work.vue";
import AboutUsOne from "@/components/demos/aboutUsOne.vue";
import AboutUsTwo from "@/components/demos/aboutUsTwo.vue";
import AboutUsThree from "@/components/demos/aboutUsThree.vue";
import OurServices from "@/components/demos/ourServices.vue";
import spreadMap from "@/components/demos/demoOne/spread-map.vue";
import OurEcommerce from "../components/demos/demoOne/Our-Ecommerce";
import FrequentlyQuest from "../components/demos/demoOne/Frequently-Questions";
import OurPricingPlans from "../components/demos/demoOne/our-pricing-plans.vue";
import ourTeam from "../components/demos/ourTeam.vue";
import LatestNews from "../components/demos/latestnews.vue";
import ContactUs from "../components/demos/contactUs.vue";

export default {
  components: {
    navbarDemoOne,
    welcome,
    HowItWork,
    AboutUsOne,
    AboutUsTwo,
    AboutUsThree,
    OurServices,
    spreadMap,
    OurEcommerce,
    FrequentlyQuest,
    OurPricingPlans,
    ourTeam,
    LatestNews,
    ContactUs
  },
};
</script>
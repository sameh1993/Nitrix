<template>
  <div class="demoThree-section">
    <!-- start navbar -->
    <navbarDemoOne></navbarDemoOne>

    <!-- start welcome -->
    <welcome-app></welcome-app>

    <!-- start our Ecommerce from demo one -->
    <whyChooseApp></whyChooseApp>

    <!-- start about us second from demo two -->
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
    <OurMainFeature></OurMainFeature>

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
import navbarDemoOne from "@/components/demos/demoOne/navbar.vue";
import welcomeApp from "@/components/demos/welcome.vue";
import whyChooseApp from "@/components/demos/demoOne/Our-Ecommerce.vue";
import AboutUsSecond from "@/components/demos/demoTwo/aboutSecond.vue";
import aboutUsthree from "../components/demos/aboutUsThree";
import HowItWorks from "../components/demos/demoTwo/how-it-works.vue";
import OurSerives from "../components/demos/ourServices.vue";
import spreadMap from "../components/demos/demoOne/spread-map.vue";
import OurMainFeature from "../components/demos/demoTwo/what-we-do";
import FrequentlyQuest from "../components/demos/demoOne/Frequently-Questions";
import OurPricingPlans from "../components/demos/demoOne/our-pricing-plans.vue";
import ourTestimonial from "../components/demos/demoTwo/our-testionail.vue";
import LatestNews from "../components/demos/latestnews.vue";
import ContactUs from "../components/demos/contactUs.vue";


export default {
  components: {
    navbarDemoOne,
    welcomeApp,
    whyChooseApp,
    AboutUsSecond,
    aboutUsthree,
    HowItWorks,
    OurSerives,
    spreadMap,
    OurMainFeature,
    FrequentlyQuest,
    OurPricingPlans,
    ourTestimonial,
    LatestNews,
    ContactUs
  },
};
</script>
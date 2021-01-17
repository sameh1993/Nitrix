<template>
    <div class="pricing-section">
        <header>
            <!-- start navbar -->
            <navbar-app></navbar-app>

            <!-- start bread cumb -->
            <BreadCumb></BreadCumb>
        </header>

        <!-- start OurPricingPlans -->
        <OurPricingPlans></OurPricingPlans>

        <!-- start spread map -->
        <spread-map></spread-map>

        <!-- start how it work -->
        <HowItWork></HowItWork>
    </div>
</template>

<script>
import navbarApp from "../components/demos/demoOne/navbar.vue";
import BreadCumb from "../components/header/bread-cumb.vue";
import OurPricingPlans from "../components/demos/demoOne/our-pricing-plans.vue";
import spreadMap from "@/components/demos/demoOne/spread-map.vue";
import HowItWork from "@/components/demos/demoOne/how-it-work.vue";


export default {
    components: {
        navbarApp,
        BreadCumb,
        OurPricingPlans,
        spreadMap,
        HowItWork
    }
}
</script>
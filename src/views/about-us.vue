<template>
    <div class="aboutUs-section">
        <header>
            <!-- navbar -->
        <navbar-app></navbar-app>

        <!-- start welcome -->
        <breadCumb></breadCumb>
        </header>

        <!-- start about two from demo one -->
        <aboutTwoDemoOne></aboutTwoDemoOne>

        <!-- start About Us Second -->
        <AboutUsSecond></AboutUsSecond>

        <!-- start spread map -->
        <spread-map></spread-map>

        <!-- start our team -->
        <our-team></our-team>
    </div>
</template>


<script>
import navbarApp from "@/components/demos/demoOne/navbar.vue"
import breadCumb from "@/components/header/bread-cumb.vue";
import aboutTwoDemoOne from "@/components/demos/aboutUsTwo.vue";
import AboutUsSecond from "@/components/demos/demoTwo/aboutSecond.vue";
import spreadMap from "../components/demos/demoOne/spread-map.vue";
import ourTeam from "../components/demos/ourTeam.vue";



export default {
    components: {
        navbarApp,
        breadCumb,
       aboutTwoDemoOne,
       AboutUsSecond,
       spreadMap,
       ourTeam
    }
}
</script>
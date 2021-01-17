<template>
    <div class="services-section">
        <header>
            <!-- start navbar -->
            <navbar-app></navbar-app>

            <!-- start Bread cumb -->
            <bread-cumb></bread-cumb>
        </header>

        <!-- start services -->
        <OurServices></OurServices>

        <!-- start spead map -->
        <spreadMap></spreadMap>

        <!-- stat about three from demo one -->
        <AboutUsThree></AboutUsThree>
    </div>
</template>

<script>
import navbarApp from "../components/demos/demoOne/navbar.vue";
import BreadCumb from "../components/header/bread-cumb.vue";
import OurServices from "@/components/demos/ourServices.vue";
import spreadMap from "@/components/demos/demoOne/spread-map.vue";
import AboutUsThree from "@/components/demos/aboutUsThree.vue";


export default {
    components :{
        navbarApp,
        BreadCumb,
        OurServices,
        spreadMap,
        AboutUsThree
    }
}
</script>
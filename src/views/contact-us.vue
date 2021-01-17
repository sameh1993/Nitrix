<template>
    <div class="contactUs-section">
        <header>
            <!-- start navbar -->
            <navbarApp></navbarApp>

            <!-- start bread cumb -->
            <bread-cumb></bread-cumb>
        </header>

        <!-- start contact us -->
        <contactUs></contactUs>
    </div>  
</template>

<script>
import navbarApp from "@/components/demos/demoOne/navbar.vue";
import breadCumb from "@/components/header/bread-cumb.vue";
import contactUs from "@/components/demos/contactUs.vue";

export default {
    components: {
        navbarApp,
        breadCumb,
        contactUs
    }
}
</script>
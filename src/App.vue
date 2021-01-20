<template>
  <div class="root">
    <!-- start header section -->
    <header v-if="$route.name == 'Home'" class="travel-bg">
      <!-- navigation bar -->
      <NavbarApp></NavbarApp>

      <!-- start welcome section -->
      <welcomeApp></welcomeApp>
    </header>
    <!-- end header section -->
    <!-- start view router -->
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <!-- end View Router -->

    <!-- ##### Footer Area Start ##### -->
    <footer>
      <!-- start contact us section -->
      <footer-contact></footer-contact>
    </footer>
    <!-- ##### Footer Area End ##### -->
  </div>
</template>

<style>
</style>

<script>
const $ = require("jquery");
// We declare it globally
window.$ = $;

import NavbarApp from "@/components/header/navbar.vue";
import welcomeApp from "@/components/header/welcome.vue";
import FooterContact from "./components/footer/footerContact.vue";

import WOW from "wow.js";

export default {
  components: {
    NavbarApp,
    welcomeApp,
    FooterContact
  },
  mounted() {
    // when scroll add class shrink
    $(window).scroll(function() {
      if ($(window).scrollTop() >= 100) {
        $(".classy-nav-container").addClass("shrink");
        $("#scrollUp").fadeIn(800);
      } else {
        $(".classy-nav-container").removeClass("shrink");
        $("#scrollUp").fadeOut(800);
      }
    });

    // when click scroll Top to zero smoothly
    $("#scrollUp").click(function() {
      $("html, body").animate(
        {
          scrollTop: 0
        },
        1000
      );
    });

    if ($(window).width() >= 767) {
      // active wowjs library
      new WOW().init();
    }
  },
  beforeMount() {
    $("#preloader")
      .delay(1000)
      .fadeOut(700, function() {
        $("#preloader").remove();
      });
  }
};
</script>

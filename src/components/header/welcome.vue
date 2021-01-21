<template>
  <section class="welcome_area transparent dzsparallaxer auto-init animated-headline">
    <div
      class="divimage dzsparallaxer--target"
    >
      <!-- style="background-image: url(@/assets/img/bg-img/demo-bg.png)" -->
      <div class="container">
        <div class="hero-content transparent">
          <div class="container h-100">
            <div class="row h-100 align-items-center">
              <!-- Welcome Content -->
              <div class="mt-0 ml-0 col-12 col-lg-10 offset-lg-1">
                <!-- Wellcome Heading Text -->
                <div class="welcome-text headline text-center">
                  <div class="promo-section mt-30 mb-0">
                    <div class="integration-link">
                      <div class="integration-icon">
                        <p class="badge">OFFER</p>
                      </div>
                      <span class="integration-text">
                        Free Clean and Creative
                        <span class="bold"> App Landing Page</span>
                      </span>
                    </div>
                  </div>
                  <div class="cd-intro mt-20 default-title">
                    <h2
                      class="cd-headline clip is-full-width"
                    >
                      <span class="w-text">Nitix Template</span>
                      <span class="cd-words-wrapper">
                        <b class="special-span bold is-visible">App Showcase</b>
                        <b class="special-span bold">App Landing</b>
                        <b class="special-span bold">App Launch</b>
                      </span>
                    </h2>
                    <p class="desc w-text wow fadeInRight" data-wow-duration="2s">
                      Nitix App Landing page Template
                      <span
                        class="special-span bold"
                      >Creative & Unique Design</span> is our New, Creative & Unique Design Clean and Responsive React Next App landing page & Application showcase based on Bootstrap All files are clearly organised we believe it will be easy to use and edit them. This template is well organized and very easy to customize.
                    </p>
                  </div>
                  <!-- Learn More Button-->
                  <div class="dream-btn-group">
                    <a href="#" class="btn dream-btn">Choose demo</a>
                    <a href="#" class="btn dream-btn">Buy Now!</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/_Rules.scss";

.bg-demoTwo {
  background: url("../../assets/img/bg-img/header2.png") no-repeat bottom center !important;
}



.welcome_area {
  height: auto !important;
  position: absolute;
  top: 0;
  .hero-content {
    min-height: 100vh;
  }
  .row {
    justify-content: center;
    align-items: center;
    height: 100vh !important;
    align-items: center;
    .cd-words-wrapper {
      margin-left: 5px;
    }
  }
  @include maxScreen(lg) {
    .cd-intro.default-title > h2 {
      font-size: 30px !important;
    }
  }
  @include maxScreen(md) {
    h3 {
      font-size: 27px;
    }
    .btn {
      font-size: 11px;
      min-width: 121px;
      margin: 0 4px;
    }
  }
}
</style>

<script>
global.jQuery = require("jquery");
var $ = global.jQuery;
window.$ = $;

import "../../assets/js/animated.js";

export default {
  mounted() {}
};
</script>
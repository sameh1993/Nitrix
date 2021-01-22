<template>
  <!-- ##### About Us Area Start ##### -->
  <section id="aboutTwo" class="about-us-area section-padding-100-0 clearfix">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-12 col-lg-6">
          <div class="who-we-contant">
            <div
              class="dream-dots text-left fadeInUp"
              data-wow-delay="0.2s"
              style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInUp;"
            >
              <img src="@/assets/img/svg/section-icon-2.svg" alt />
            </div>
            <h4
              class="wow fadeInUp text-capiltalize"
              data-wow-delay="0.3s"
            > {{currentItem.title}} </h4>
            <p class="wow fadeInUp" data-wow-delay="0.4s">{{ currentItem.para | shorten(197)}}</p>
            <p class="wow fadeInUp" data-wow-delay="0.5s">{{ currentItem.para | shorten(130)}}</p>
            <a class="btn wow dream-btn mt-30 fadeInUp" data-wow-delay="0.6s" href="#">Read More</a>
          </div>
        </div>

        <div class="col-12 col-lg-6">
          <div class="welcome-meter fadeInUp" data-wow-delay="0.7s">
            <img :src="currentItem.img" class="mt-s center-block" alt />
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- ##### About Us Area End ##### -->
</template>

<style lang="scss">
@import "@/assets/_Rules.scss";

.about-us-area {
  @include maxScreen(md) {
    h4 {
      font-size: 24px;
    }
  }
}

.demoTwo-section,
.aboutUs-section {
  #aboutTwo {
    .row {
      flex-direction: row-reverse !important;
    }
    p {
      color: #777;
    }
  }
}

.aboutUs-section {
  #aboutTwo {
    padding: 80px 0;
  }
}
</style>

<style lang="scss" scoped>
@import "@/assets/_Rules.scss";
</style>

<script>
export default {
  data() {
    return {
      currentItem: {},
      aboutUsSecond: {
        title: "We complete every project with extra care as customer need.",
        para: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, non suscipit arcu. Quisque aliquam posuere tortor, sit amet convallis nunc scelerisque in.
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore eius molestiae facere, natus reprehenderit eaque eum, autem ipsam. Magni, error. Tempora odit laborum iure inventore possimus laboriosam qui nam. Fugit!`,
        img: require("@/assets/img/core-img/app-2.png")
      },
      aboutDemoTwo: {
        title: "Build, edit and create a custom test framework in minutes.",
        para: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, non suscipit arcu. Quisque aliquam posuere tortor, sit amet convallis nunc scelerisque in.

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore eius molestiae facere, natus reprehenderit eaque eum, autem ipsam. Magni, error. Tempora odit laborum iure inventore possimus laboriosam qui nam. Fugit!`,
        img: require("@/assets/img/core-img/about2.png")
      }
    };
  },
  mounted() {
    if (this.$route.name == "demoOne") {
      this.currentItem = this.aboutUsSecond;
    } else if (this.$route.name == "demoTwo") {
      this.currentItem = this.aboutDemoTwo;
    } else if (this.$route.name == "about us") {
      this.currentItem = this.aboutDemoTwo;
    }
  }
};
</script>
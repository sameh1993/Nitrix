<template>
  <!-- ##### Welcome Area Start ##### -->
  <section
    class="welcome_area clearfix dzsparallaxer auto-init ico"
    id="home"
    :class="$route.name == 'demoTwo' ? 'demoTwo' : ''"
  >
    <div class="divimage dzsparallaxer--target">
      <!-- Hero Content -->
      <div class="hero-content">
        <div class="container h-100">
          <div class="row h-100 align-items-center">
            <!-- Welcome Content -->
            <div class="col-12 col-lg-6 col-md-12">
              <div class="welcome-content">
                <div class="welcome-content">
                  <div class="promo-section">
                    <h3 class="special-head">{{currentItem.subTitle}}</h3>
                  </div>
                </div>
                <h1 class="wow fadeInUp b-text" data-wow-delay="0.2s">{{ currentItem.title }}</h1>
                <p class="wow fadeInUp" data-wow-delay="0.3s">{{ currentItem.para }}</p>

                <div class="dream-btn-group wow fadeInUp" data-wow-delay="0.4s">
                  <a href="#" class="btn dream-btn">Learn More</a>
                  <a href="#" class="btn dream-btn">Contact Us</a>
                </div>
              </div>
            </div>

            <!-- Welcome Video Area -->
            <div class="col-12 col-lg-6 col-md-12 img">
              <div
                v-if="currentItem.img"
                class="header-ilustration-1 fadeInUp pt-4"
                style
                data-wow-delay="0.5s"
              >
                <img :src="currentItem.img" alt />
                <div v-if="$route.name == 'demoOne'" class="video-btn-container">
                  <div class="video-icon">
                    <a
                      href="https://www.youtube.com/watch?v=gbXEPHsTkgU"
                      class="btn dream-btn video-btn"
                      id="videobtn"
                    >
                      <i class="fa fa-play"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- ##### Welcome Area End ##### -->
</template>

<style lang="scss" scoped>
@import "@/assets/_Rules.scss";

.dream-btn-group a {
  margin: 0 2px;
}

.welcome_area {
  min-height: 100vh;
  overflow: hidden;
  @include maxScreen(lg) {
    
  }
  .row {
    & > div {
      margin: 40px 0;
      padding: 34px 0;
      p {
        color: #777;
      }
    }
  }
  .btn {
    margin-left: 2px;
    margin-right: 2px;
  }
  .divimage {
    background: url("../../assets/img/svg/bg_hero.svg") no-repeat center right;
  }
  @include maxScreen(lg) {
    .img {
      display:none;
    }
  }
}

.demoTwo-section {
  .welcome_area {
    background-image: url("../../assets/img/bg-img/header2.png");
    background-size: cover;
    min-height: 700px;
    background-position-y: -159px;
    background-repeat: no-repeat;
  }
  .divimage {
    background: transparent;
  }
  h1 {
    color: #fff !important;

  }
  p {
    color: #fff !important;
  }
  .special-head:before {
    background-color: #fff;
  }
}

.demoThree-section {
  .welcome_area .divimage {
    background: url("../../assets/img/bg-img/bg-6.png") no-repeat center;
    background-size: cover;
  }
}

.demoFour-section {
  .welcome_area .divimage {
    background: url("../../assets/img/bg-img/bg3.png") no-repeat;
    background-size: cover;
  }
}

.main-ilustration.demoThree {
  background-image: url("../../assets/img/bg-img/bg-6.png");
}
</style>

<script>

export default {
  data() {
    return {
      currentItem: {},
      demoOne: {
        subTitle: "Discover a new ways to enjoy your World!",
        title: "The most powerful App landing page",
        para: `We have over 15 year exprience in business consultting arena. We
                have over 15 year exprience in business consultting arena and
                artficial intelligence.`,
        img: require("@/assets/img/bg-img/header-1.png")
      },
      demoTwo: {
        subTitle: "Discover a new ways to enjoy your World!",
        title: "The greatest landing page on market.",
        para: `We have over 15 year exprience in business consultting arena. We
                have over 15 year exprience in business consultting arena and
                artficial intelligence.`,
        img: require("@/assets/img/core-img/app-5.png")
      },
      demoThree: {
        subTitle: "Crypto App landing page template",
        title: "Track your Crypto Coins and Markets",
        para: `We have over 15 year exprience in business consultting arena. We
                have over 15 year exprience in business consultting arena and
                artficial intelligence.`,
        img: require("@/assets/img/core-img/app-6.png")
      },
      demoFour: {
        subTitle: "Update Get creative landing page tempate for your App!",
        title: "Easiest way to develop your business",
        para: `We have over 15 year exprience in business consultting arena. We
                have over 15 year exprience in business consultting arena and
                artficial intelligence.`,
        img: ""
      }
    };
  },
  mounted() {
    if (this.$route.name == "demoOne") {
      this.currentItem = this.demoOne;
    } else if (this.$route.name == "demoTwo") {
      this.currentItem = this.demoTwo;
    } else if (this.$route.name == "demoThree") {
      this.currentItem = this.demoThree;
    } else if (this.$route.name == "demoFour") {
      this.currentItem = this.demoFour;
    }
  },
  filters: {
    subText(v, textLength) {
      return v.subString(1, textLength);
    }
  }
};
</script>
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
                <div  v-if="$route.name != 'demoFour'" class="welcome-content">
                  <div class="promo-section">
                    <h3 class="special-head">{{currentItem.subTitle}}</h3>
                  </div>
                </div>
                <div v-if="$route.name == 'demoFour'" class="promo-section">
                  <div class="integration-link">
                    <div class="integration-icon">
                      <p class="badge">Update</p>
                    </div>
                    <span class="integration-text">Get creative landing page tempate for your App!</span>
                  </div>
                </div>
                <h2 class="wow fadeInUp" data-wow-delay="0.2s">{{ currentItem.title }}</h2>
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
  .row {
    & > div {
      margin: 40px 0;
      padding: 34px 0;
      p {
        color: #777;
      }
    }
    @include maxScreen(md) {
      h3 {
        font-size: 18px !important;
      }
      h2 {
        font-size: 28px;
      }
      .btn {
        font-size: 12px;
        margin: 0 4px;
        min-width: 121px;
      }
    }
  }
  .btn {
    margin-left: 4px;
    margin-right: 4px;
  }
  .divimage {
    background: url("../../assets/img/svg/bg_hero.svg") no-repeat center right;
  }
  @include maxScreen(lg) {
    .img {
      display: none;
    }
    h3 {
      font-size: 28px !important;
    }
    .btn {
      font-size: 11px;
      min-width: 121px;
      margin: 0 3px;
    }
  }
}
.demoOne-section {
  .welcome-content {
    h2 {
      color: #000;
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
  .special-head {
    color: #f8f517;
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
  .welcome_area {
    .divimage {
      background: url("../../assets/img/bg-img/bg-6.png") no-repeat center;
      background-size: cover;
    }
    h2 {
      color: #000;
      font-size: 45px;
      span {
        color: #10a6ec;
      }
    }
  }
}

.demoFour-section {
  .welcome_area .divimage {
    background: url("../../assets/img/bg-img/bg3.png") no-repeat;
    background-size: cover;
  }
  h2 {
    color: #000;
    font-size: 45px;
    span {
      color: #10a6ec;
    }
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
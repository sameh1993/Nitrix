<template>
 <!-- ##### About Us Area Start ##### -->
        <section class="about-us-area section-padding-0-0 clearfix" id="aboutOne">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-12 col-lg-6">
                        <div class="welcome-meter fadeInUp" data-wow-delay="0.7s">
                            <img :src="currentDemo.img" class="img-responsive center-block" alt="">
                        </div>
                    </div>

                    <div class="col-12 col-lg-6">
                        <div class="who-we-contant mt-s">
                            <div class="dream-dots text-left fadeInUp" data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInUp;">
                                <img src="@/assets/img/svg/section-icon-1.svg" alt="">
                            </div>
                            <h4 class="wow b-text fadeInUp" data-wow-delay="0.3s"> {{currentDemo.title}} </h4>
                            <p class="fadeInUp" data-wow-delay="0.5s"> {{aboutUsOne.para}} </p>
                            <div class="list-wrap align-items-center">
                                <div class="row">
                                    
                                    <div v-for="(item, index) in currentDemo.feat" :key="index" class="col-md-6">
                                        <div class="side-feature-list-item">
                                            <img :src="item.img" class="check-mark-icon" alt="">
                                            <div class="foot-c-info"> {{item.title}} </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="clearfix"></div>
                            <a class="btn dream-btn mt-30 fadeInUp" data-wow-delay="0.6s" href="#">Read More</a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        <!-- ##### About Us Area End ##### -->
</template>

<style lang="scss">
  p {
    color: #888;
  }


</style>


<script>
export default {
  data() {
    return {
        currentDemo: {},
      aboutUsOne: {
        title: "Introducing the most powerful App Template on the market.",
        para: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, non suscipit arcu. Quisque aliquam posuere tortor, sit amet convallis nunc scelerisque in.

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore eius molestiae facere, natus reprehenderit eaque eum, autem ipsam. Magni, error. Tempora odit laborum iure inventore possimus laboriosam qui nam. Fugit!`,
        img: require("@/assets/img/core-img/app-1.png"),
        feat: [
            {title: "Fully Responsive", img: require("@/assets/img/features/feature-1.svg")},
            {title: "Clean & Modern Design", img: require("@/assets/img/features/feature-2.svg")},
            {title: "Multi-Device Testing", img: require("@/assets/img/features/feature-3.svg")},
            {title: "great User Experience", img: require("@/assets/img/features/feature-4.svg")},
            {title: "Easy To Customize", img: require("@/assets/img/features/feature-5.svg")},
            {title: "Launch Quickly", img: require("@/assets/img/features/feature-6.svg")},
        ]
      },
      aboutDemoFour: {
        title: "Introducing the most powerful App Template on the market.",
        para: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, non suscipit arcu. Quisque aliquam posuere tortor, sit amet convallis nunc scelerisque in.

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore eius molestiae facere, natus reprehenderit eaque eum, autem ipsam. Magni, error. Tempora odit laborum iure inventore possimus laboriosam qui nam. Fugit!`,
        img: require("@/assets/img/core-img/app-3.png"),
        feat: [
            {title: "Fully Responsive", img: require("@/assets/img/features/feature-1.svg")},
            {title: "Clean & Modern Design", img: require("@/assets/img/features/feature-2.svg")},
            {title: "Multi-Device Testing", img: require("@/assets/img/features/feature-3.svg")},
            {title: "great User Experience", img: require("@/assets/img/features/feature-4.svg")},
            {title: "Easy To Customize", img: require("@/assets/img/features/feature-5.svg")},
            {title: "Launch Quickly", img: require("@/assets/img/features/feature-6.svg")},
        ]
      },
    };
  },
  mounted() {
      if(this.$route.name == 'demoOne' || this.$route.name == 'FAQ Questions') {
          this.currentDemo = this.aboutUsOne
      } else if (this.$route.name == 'demoFour') {
          this.currentDemo = this.aboutDemoFour
          console.log(this.$route.name)
      }
  }
};
</script>
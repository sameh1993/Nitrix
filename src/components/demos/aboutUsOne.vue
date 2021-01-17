<template>
 <!-- ##### About Us Area Start ##### -->
        <section class="about-us-area section-padding-0-0 clearfix" id="about">
            <div class="container">
                <div class="row align-items-center">
                    
                    <div class="col-12 col-lg-6">
                        <div class="welcome-meter fadeInUp" data-wow-delay="0.7s">
                            <img :src="aboutUsOne.img" class="img-responsive center-block" alt="">
                        </div>
                    </div>

                    <div class="col-12 col-lg-6">
                        <div class="who-we-contant mt-s">
                            <div class="dream-dots text-left fadeInUp" data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInUp;">
                                <img src="@/assets/img/svg/section-icon-1.svg" alt="">
                            </div>
                            <h4 class="wow b-text fadeInUp" data-wow-delay="0.3s"> {{aboutUsOne.title}} </h4>
                            <p class="fadeInUp" data-wow-delay="0.5s"> {{aboutUsOne.para}} </p>
                            <div class="list-wrap align-items-center">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="side-feature-list-item">
                                            <img src="@/assets/img/features/feature-1.svg" class="check-mark-icon" alt="">
                                            <div class="foot-c-info">Fully Responsive</div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="side-feature-list-item">
                                            <img src="@/assets/img/features/feature-2.svg" class="check-mark-icon" alt="">
                                            <div class="foot-c-info">Clean & Modern Design</div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="side-feature-list-item">
                                            <img src="@/assets/img/features/feature-3.svg" class="check-mark-icon" alt="">
                                            <div class="foot-c-info">Multi-Device Testing </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="side-feature-list-item">
                                            <img src="@/assets/img/features/feature-4.svg" class="check-mark-icon" alt="">
                                            <div class="foot-c-info">great User Experience</div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="side-feature-list-item">
                                            <img src="@/assets/img/features/feature-5.svg" class="check-mark-icon" alt="">
                                            <div class="foot-c-info">Easy To Customize</div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="side-feature-list-item">
                                            <img src="img/features/feature-6.svg" class="check-mark-icon" alt="">
                                            <div class="foot-c-info">Launch Quickly</div>
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
      aboutUsOne: {
        title: "Introducing the most powerful App Template on the market.",
        para: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, non suscipit arcu. Quisque aliquam posuere tortor, sit amet convallis nunc scelerisque in.

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore eius molestiae facere, natus reprehenderit eaque eum, autem ipsam. Magni, error. Tempora odit laborum iure inventore possimus laboriosam qui nam. Fugit!`,
        img: require("@/assets/img/core-img/app-1.png"),
      },
    };
  },
};
</script>
<template>
  <section class="demo section-padding-100-0" id="demo">
    <div class="container">
     <div class="section-heading text-center">
                <!-- Dream Dots -->
                <div class="dream-dots justify-content-center wow fadeInUp" data-wow-delay="0.2s">
                    <img src="@/assets/img/svg/section-icon-1.svg" alt="">
                </div>
                <h2 class="wow fadeInLeft" data-wow-delay="0.2s"> {{listDemos.mainTitle}} </h2>
                <p class="wow fadeInUp" data-wow-delay="0.4s"> {{listDemos.para}} </p>
            </div>
      <div class="row">
        <div
          class="col-lg-4 col-md-6 col-sm-12"
          v-for="(item, index) in listDemos.content"
          :key="index"
        >
          <div class="demo-item">
            <router-link :to="item.path">
              <img :src="item.img" alt="demo" class="img-responsive"
            /></router-link>
            <router-link :to="item.path" class="preview-demo text-center">
              {{ item.title }} <i class="fa fa-long-arrow-right"></i
            ></router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.demo-item img {
  width: 100%;
}

.justify-content-center h2 {
  color: #222 !important;
}

.justify-content-center p {
  color: #888;
}

.preview-btn-wrapper a {
  text-decoration: none;
}
</style>

<script>
import $ from "jquery";
window.$ = $;

export default {
  data() {
    return {
      listDemos: {
        mainTitle: "Choose A Demo",
        para: "Nitix will be a perfect platform for presenting your App launch. This Landing Page comes in great and clean designs.",
        content: [
        {
          path: "/index-demo-1",
          title: "view demo one",
          img: require("@/assets/img/demos/demo-1.png"),
        },
        {
          path: "/index-demo-2",
          title: "view demo two",
          img: require("@/assets/img/demos/demo-2.png"),
        },
        {
          path: "/index-demo-3",
          title: "view demo three",
          img: require("@/assets/img/demos/demo-3.png"),
        },
        {
          path: "/index-demo-4",
          title: "view demo four",
          img: require("@/assets/img/demos/demo-4.png"),
        },
        {
          path: "/about-us",
          title: "about page",
          img: require("@/assets/img/demos/demo-5.png"),
        },
        {
          path: "/services",
          title: "services page",
          img: require("@/assets/img/demos/demo-6.png"),
        },
        {
          path: "/faq",
          title: "FAQ page",
          img: require("@/assets/img/demos/demo-7.png"),
        },
        {
          path: "/pricing",
          title: "pricing page",
          img: require("@/assets/img/demos/demo-8.png"),
        },
        {
          path: "/contact-us",
          title: "contact page",
          img: require("@/assets/img/demos/demo-9.png"),
        },
      ]
      },
    };
  },
  mounted() {
    console.log($("#demo").offset().top)
  }
};
</script>
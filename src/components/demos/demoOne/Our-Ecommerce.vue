<template>
  <!-- ##### Our features Area start ##### -->
  <section class="features section-padding-100">
    <div class="container">
      <div class="section-heading text-center">
        <div
          class="dream-dots justify-content-center fadeInUp"
          data-wow-delay="0.2s"
          style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInUp;"
        >
          <img src="@/assets/img/svg/section-icon-4.svg" alt />
        </div>
        <h2
          class="fadeInUp"
          data-wow-delay="0.3s"
          style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInUp;"
        >{{ourEconmmerce.title}}</h2>
        <p
          class="fadeInUp"
          data-wow-delay="0.4s"
          style="visibility: visible; animation-delay: 0.4s; animation-name: fadeInUp;"
        >{{ourEconmmerce.para}}</p>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="services-column col-lg-6 col-md-12 col-xs-12">
          <!--Services Block Four-->
          <div
            class="services-block-four"
            v-for="(item, index) in ourEconmmerce.content.cont"
            :key="index"
          >
            <div class="inner-box">
              <div class="icon-img-box">
                <img :src="item.img" alt />
              </div>
              <h3>
                <a href="#">{{ item.SubTitle }}</a>
              </h3>
              <div class="text">{{ item.para }}</div>
            </div>
          </div>
        </div>
        <div class="service-img-wrapper col-lg-6 col-md-12 col-sm-12">
          <div class="image-box">
            <img :src="ourEconmmerce.content.img" class="img-responsive center-block" alt />
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- ##### Our features Area End ##### -->
</template>

<style lang="scss" scoped>
.demoThree-section {
  .row{
    flex-direction: row-reverse;
  }
}
</style>

<script>
export default {
  data() {
    return {
      ourEconmmerce: {
        title: "Our Ecommerce App",
        para:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.",
        content: {
          img: require("@/assets/img/core-img/app-3.png"),
          cont: [
            {
              img: require("@/assets/img/svg/feature1.svg"),
              SubTitle: "Measure The Customer Experience",
              para:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium modi assumenda beatae provident non ipsum dolor sit amet, consectetur adipisicing elit."
            },
            {
              img: require("@/assets/img/svg/feature2.svg"),
              SubTitle: "Multi-Device Testing Made Simple",
              para:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium modi assumenda beatae provident non ipsum dolor sit amet, consectetur adipisicing elit."
            },
            {
              img: require("@/assets/img/svg/feature3.svg"),
              SubTitle: "Launch Quickly With Reusable Templates",
              para:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium modi assumenda beatae provident non ipsum dolor sit amet, consectetur adipisicing elit."
            }
          ]
        }
      }
    };
  }
};
</script>
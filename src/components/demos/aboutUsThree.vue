<template>
  <!-- ##### About Us Area Start ##### -->
  <section class="about-us-area resolution section-padding-100-0 clearfix">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-12 col-lg-6">
          <div class="row">

            <div class="col-sm-6 col-xs-12" v-for="(item, index) in aboutThree.serivces" :key="index">
              <div class="article box-shadow">
                <i class="ui-layers article__icon"></i>
                <h3 class="article__title"> {{item.title}} </h3>
                <p> {{item.para}} </p>
              </div>

            </div>
          </div>
        </div>

        <div class="col-12 col-lg-6">
          <div class="who-we-contant mb-30">
            <div
              class="dream-dots text-left fadeInUp"
              data-wow-delay="0.2s"
              style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInUp;"
            >
              <img src="@/assets/img/svg/section-icon-5.svg" alt />
            </div>
            <h4
              class="fadeInUp"
              data-wow-delay="0.3s"
            > {{ aboutThree.title }} </h4>
            <p
              class="fadeInUp"
              data-wow-delay="0.4s"
            > {{ aboutThree.para | shorten(197)}} </p>
            <p
              class="fadeInUp"
              data-wow-delay="0.5s"
            >{{ aboutThree.para | shorten(130)}}</p>
            <a class="btn dream-btn mt-30 fadeInUp" data-wow-delay="0.6s" href="#">Read More</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- ##### About Us Area End ##### -->
</template>

<style lang="scss" scoped>
.demoTwo-section {
    .resolution {
        p {
            color: #777;
        }
    }
    .about-us-area {
      .row {
        flex-direction: row;
      }
    }
}
</style>


<script>
import $ from "jquery";
window.$ = $;

export default {
  data(){
    return {
      aboutThree :{
        serivces: [
          {title: "High Resolution", para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." },
          {title: "Creative Design", para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." },
          {title: "Pixel Perfect", para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." },
          {title: "Retina Ready", para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." },
        ],
        title: "Build, edit and create a custom test framework in minutes.",
        para: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, non suscipit arcu. Quisque aliquam posuere tortor, sit amet convallis nunc scelerisque in.

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore eius molestiae facere, natus reprehenderit eaque eum, autem ipsam. Magni, error. Tempora odit laborum iure inventore possimus laboriosam qui nam. Fugit!`,

      }
    }
  },
  mounted() {

    $(".about-us-area .row > div:first-child > div").addClass("hover");
  }
}
</script>
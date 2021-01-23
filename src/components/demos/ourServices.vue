<template>
 <!-- ##### Our Services Area Start ##### -->
    <section class="our_services_area section-padding-100 clearfix" id="services">
        <div class="container">
            
            <div class="section-heading text-center">
                
                <div class="dream-dots justify-content-center fadeInUp" data-wow-delay="0.2s">
                    <img src="@/assets/img/svg/section-icon-3.svg" alt="">
                </div>
                <h2 class="fadeInUp" data-wow-delay="0.3s"> {{ourSer.title}} </h2>
                <p class="fadeInUp" data-wow-delay="0.4s"> {{ourSer.para}} </p>
            </div>
                

            <div class="row">

                <div v-for="(item, index) in ourSer.contentSer" :key="index" class="col-12 col-md-6 col-lg-4">
                    <!-- Content -->
                    <div class="service_single_content text-center mb-100 fadeInUp" data-wow-delay="0.7s">
                        <!-- Icon -->
                        <div class="service_icon">
                            <img :src="item.img" alt="">
                        </div>
                        <h6> {{item.title}} </h6>
                        <p> {{ item.para }} </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- ##### Our Services Area End ##### -->
</template>

<style lang="scss">
.service_icon {
  h6 {
    color: #fff !important;
  }
}

.demoFour-section {
  .service_icon {
    h6 {
      color: #000;
    }
    p {
      color: #888;
    }
  }
}

.our_services_area {
  .row > div {
    border-radius: 10px;
    background-color: #fff;
    background-image: url('../../assets/img/core-img/cards-bg.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    -webkit-box-shadow: 0 20px 40px 0 rgba(0,0,0,.11);
    box-shadow: 0 5px 40px 0 rgba(0,0,0,.11);
    border: none;
    padding: 40px 20px;
    margin-bottom: 30px !important;
    transform: scale(.95);
    height: 334px;

    h6 {
      color: #000;
    }
    p{
      color: #777;
    }
  }
}

</style>

<script>
export default {
  data() {
    return {
      ourSer: {
        title: "Why Choose Us",
        para:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.",
        contentSer: [
          {
            img: require("@/assets/img/features/1.png"),
            title: "Creative Chart Modules",
            para:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque quam, maximus ut accumsan ut, posuere sit Lorem ipsum.",
          },
          {
            img: require("@/assets/img/features/2.png"),
            title: "Adaptive Social Assistant",
            para:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque quam, maximus ut accumsan ut, posuere sit Lorem ipsum.",
          },
          {
            img: require("@/assets/img/features/3.png"),
            title: "Ecommerce Embedded",
            para:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque quam, maximus ut accumsan ut, posuere sit Lorem ipsum.",
          },
          {
            img: require("@/assets/img/features/4.png"),
            title: "Notification System",
            para:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque quam, maximus ut accumsan ut, posuere sit Lorem ipsum.",
          },
          {
            img: require("@/assets/img/features/5.png"),
            title: "Creative Layout",
            para:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque quam, maximus ut accumsan ut, posuere sit Lorem ipsum.",
          },
          {
            img: require("@/assets/img/features/6.png"),
            title: "Professional Support",
            para:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque quam, maximus ut accumsan ut, posuere sit Lorem ipsum.",
          },
        ],
      },
    };
  },
};
</script>
<template>
  <section class="how section-padding-0-50" style="padding-bottom: 70px">
    <div class="container">
      <div class="section-heading text-center">
        <div
          class="dream-dots justify-content-center wow fadeInUp"
          data-wow-delay="0.2s"
        >
          <img src="@/assets/img/svg/section-icon-2.svg" alt="" />
        </div>
        <h2 class="wow fadeInUp" data-wow-delay="0.3s">
          {{ HowItWork.title }}
        </h2>
        <p class="wow fadeInUp" data-wow-delay="0.4s">
          {{ HowItWork.para }}
        </p>
      </div>
      <div class="row">
        <div
          class="col-12 col-md-6 col-lg-4"
          v-for="(item, index) in HowItWork.content"
          :key="index"
        >
          <!-- Content -->
          <div
            class="service_single_content box-shadow text-center mb-100 wow fadeInUp"
            data-wow-delay="0.2s"
          >
            <!-- Icon -->
            <div class="service_icon">
              <img :src="item.mainImg" class="colored-icon" alt="" />
              <img :src="item.img" class="white-icon" alt="" />
              <span class="step-num">1</span>
            </div>
            <h6>{{ item.title }}</h6>
            <p>
              {{ item.para }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.pricing-section {
  .how {
    padding-bottom: 0 !important;
    .row > div:last-child {
      margin-bottom: 0 !important;
    }
  }
}
</style>

<script>
export default {
  data() {
    return {
      HowItWork: {
        title: "How It Works",
        para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.",
        content: [
          {
            mainImg: require("@/assets/img/icons/h1.png"),
            img: require("@/assets/img/icons/h11.png"),
            title: "Register New Account",
            para:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque quam, maximus ut accumsan ut, posuere sit Lorem ipsum.",
          },
          {
            mainImg: require("@/assets/img/icons/h2.png"),
            img: require("@/assets/img/icons/h22.png"),
            title: "Setup Account Info",
            para:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque quam, maximus ut accumsan ut, posuere sit Lorem ipsum.",
          },
          {
            mainImg: require("@/assets/img/icons/h3.png"),
            img: require("@/assets/img/icons/h33.png"),
            title: "Start Buying & Selling",
            para:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque quam, maximus ut accumsan ut, posuere sit Lorem ipsum.",
          },
        ],
      },
    };
  },
};
</script>



<style lang="scss" scoped>
.service_single_content {
  padding: 40px 20px;
  padding-bottom: 30px;
  h6 {
    color: #000 !important;
  }
  p {
    color: #777 !important;
  }
}
</style>
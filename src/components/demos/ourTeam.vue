<template>
  <!-- ##### Team Area Start ##### -->
  <section class="our_team_area section-padding-100-0 clearfix" id="team">
    <div class="container">
      <div class="">
        <div class="col-12">
          <div class="section-heading text-center">
            <!-- Dream Dots -->
            <div class="dream-dots justify-content-center fadeInUp" data-wow-delay="0.2s">
                            <img src="@/assets/img/svg/section-icon-2.svg" alt="">
                        </div>
            <h2 class="wow fadeInUp" data-wow-delay="0.3s">Awesome Team</h2>
            <p class="wow fadeInUp" data-wow-delay="0.4s">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
              accumsan nisi Ut ut felis congue nisl hendrerit commodo.
            </p>
          </div>
        </div>
      </div>

      <div class="row">
        <!-- Single Team Member -->
        <div
          class="col-12 col-sm-6 col-lg-3 wow fadeInUp"
          v-for="(item, index) in ourTeam"
          :key="index"
           data-wow-delay="0.5s"
        >
          <div class="single-team-member">
            <!-- Image -->
            <div class="team-member-thumb text-center">
              <img :src="item.img" class="center-block" alt="" />
            </div>
            <!-- Team Info -->
            <div class="team-info">
              <h5 class="b-text">{{ item.title }}</h5>
              <p>{{ item.titleJob }}</p>
            </div>
            <!-- Icon -->
            <div class="team-social-icon">
              <a href="#"><i class="fa fa-twitter"></i></a>
              <a href="#"><i class="fa fa-instagram"></i></a>
              <a href="#"><i class="fa fa-facebook"></i></a>
              <a href="#"><i class="fa fa-skype"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- ##### Team Area End ##### -->
</template>

<style lang="scss" scoped>
@import '@/assets/_Rules.scss';

.our_team_area {
  .row > div{
    background-color: #F2F4F8;
    transform:scalex(.95);
    padding:25px 0;
    margin-bottom: 80px;
    @include maxScreen(md) {
      margin-bottom: 50px !important; 
    }
  }
}
</style>

<script>
export default {
  data() {
    return {
      ourTeam: [
        {
          img: require("@/assets/img/team-img/1.png"),
          title: "SUNNY KHAN",
          titleJob: "EXECUTIVE OFFICER",
        },
        {
          img: require("@/assets/img/team-img/2.png"),
          title: "AJOY DAS",
          titleJob: "BUSINESS DEVELOPMENT",
        },
        {
          img: require("@/assets/img/team-img/3.png"),
          title: "AFROZA MOU",
          titleJob: "UX/UI DESIGNER",
        },
        {
          img: require("@/assets/img/team-img/4.png"),
          title: "LIM SARAH",
          titleJob: "HEAD OF MARKETING",
        },
       
      ],
    };
  },
};
</script>
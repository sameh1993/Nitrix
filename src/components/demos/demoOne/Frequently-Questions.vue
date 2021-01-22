<template>
  <!-- ##### FAQ & Timeline Area Start ##### -->
  <div class="hos-sec-1 section-padding-0-100" id="faq">
    <div class="container">
  	<div class="section-heading text-center">
	            <div class="dream-dots justify-content-center fadeInUp" data-wow-delay="0.2s">
	                <img src="@/assets/img/svg/section-icon-5.svg" alt="">
	            </div>
              <h2> {{cardList.mainTitle}} </h2>
	            <p class="fadeInUp" data-wow-delay="0.4s"> {{cardList.para}} </p>
	        </div>
      <div class="row align-items-center">
        <div class="col-12 col-lg-6 offset-lg-0 col-md-8 offset-md-2 col-sm-12">
          <img
            src="@/assets/img/core-img/faq.png"
            alt=""
            class="center-block img-responsive"
          />
        </div>
        <div class="col-12 col-lg-6 col-md-12">
          <div id="accordion">
            <div v-for="(item, index) in cardList.content" :key="index" class="card">
              <div class="card-header" :id="item.idHead">
                <h5 class="mb-0">
                  <button
                    class="btn btn-link collapsed"
                    data-toggle="collapse"
                    :data-target="'#'+ item.dataToggle"
                    aria-expanded="false"
                    :aria-controls="item.dataToggle"
                  >
                    - {{item.titleCard}}
                  </button>
                </h5>
              </div>

              <div
                :id="item.dataToggle"
                class="collapse"
                :aria-labelledby="item.idHead"
                data-parent="#accordion"
                
              >
                <div class="card-body">
                  {{item.bodyCard}}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hos-sec-1 {
  .card {
    margin-top: 20px;
    background: transparent;
    border: 0;
    .card-header {
      padding: 0;
      background-image: linear-gradient(to right, #21d397 0%, #7450fe 100%);
      border-top: 1px solid #f2f4f8;
      border-radius: 35px;
      button {
        padding: 12px 25px;
        font-weight: 600;
        color: #fff;
        display: block;
        width: 100%;
        text-decoration: none;
        text-align: left;
        text-transform: capitalize;
      }
    }
    .card-body {
      background-color: #fff;
      width: 87%;
      margin: 0 auto;
      padding-right:0;
      padding-left:0;
    }
  }
}

.faq-section {
  .hos-sec-1 {
    padding: 80px 0;
  }
}
</style>


<script>
export default {
  data() {
    return {
      cardList: {
        mainTitle: "App Frequently Questions",
        para:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.",
        content: [
          {titleCard: "What are the objectives of this App?",idHead:'headingOne', dataToggle: "collapseOne", bodyCard: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa"},
          {titleCard: "What is the best features and services we deiver?",idHead:'headingTwo', dataToggle: "collapseTwo", bodyCard: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa"},
          {titleCard: "Why this app important to me?",idHead:'headingThree', dataToggle: "collapseThree", bodyCard: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa"},
          {titleCard: "how may I take part in and purchase this App?",idHead:'headingFour', dataToggle: "collapseFour", bodyCard: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa"},

        ]
      }
    }
  }
}
</script>


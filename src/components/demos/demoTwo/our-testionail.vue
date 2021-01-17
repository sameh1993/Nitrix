<template>
  <!-- ##### Testimonial Area Start ##### -->
  <section class="clients_testimonials_area bg-img section-padding-100">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="section-heading text-center">
            <div class="dream-dots justify-content-center fadeInUp" data-wow-delay="0.2s">
              <img src="img/svg/section-icon-4.svg" alt />
            </div>
            <h2 class="wow fadeInUp" data-wow-delay="0.3s">What Our Client Say</h2>
            <p
              class="wow fadeInUp"
              data-wow-delay="0.4s"
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="cotainer-fluid">
      <div class="row justify-content-center wow fadeInUp" data-wow-delay="0.4s">
        <div class="col-12 col-md-10 col-xs-10 offset-xs-1">
          <div class="client_slides owl-carousel">
            <!-- Single Testimonial -->
            <div class="single-testimonial text-center">
              <!-- Testimonial Image -->
              <div class="testimonial_image">
                <img src="@/assets/img/test-img/1.jpg" alt />
              </div>
              <!-- Testimonial Feedback Text -->
              <div class="testimonial-description">
                <div class="testimonial_text">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis magni, quisquam, accusantium dolores atque, doloribus odit minus maiores sunt mollitia consequatur, soluta quasi.</p>
                </div>

                <!-- Admin Text -->
                <div class="admin_text">
                  <h5>Sunny Khan</h5>
                  <p>Head of Design, Designing World</p>
                </div>
              </div>
            </div>

            <!-- Single Testimonial -->
            <div class="single-testimonial text-center">
              <!-- Testimonial Image -->
              <div class="testimonial_image">
                <img src="@/assets/img/test-img/2.jpg" alt />
              </div>
              <!-- Testimonial Feedback Text  -->
              <div class="testimonial-description">
                <div class="testimonial_text">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error nostrum adipisci porro quisquam. Rem, earum, tenetur? Architecto et, earum repudiandae.</p>
                </div>

                <!-- Admin Text -->
                <div class="admin_text">
                  <h5>Ajoy Das</h5>
                  <p>Head of Idea, Designing World</p>
                </div>
              </div>
            </div>

            <!-- Single Testimonial -->
            <div class="single-testimonial text-center">
              <!-- Testimonial Image -->
              <div class="testimonial_image">
                <img src="@/assets/img/test-img/3.jpg" alt />
              </div>
              <!-- Testimonial Feedback Text  -->
              <div class="testimonial-description">
                <div class="testimonial_text">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et delectus, nam repudiandae repellat similique excepturi id placeat molestias consequuntur, laudantium dolorem nesciunt sit molestiae.</p>
                </div>
                <!-- Admin Text -->
                <div class="admin_text">
                  <h5>Jebin Khan</h5>
                  <p>Head of Marketing, Designing World</p>
                </div>
              </div>
            </div>

            <!-- Single Testimonial -->
            <div class="single-testimonial text-center">
              <!-- Testimonial Image -->
              <div class="testimonial_image">
                <img src="@/assets/img/test-img/3.jpg" alt />
              </div>
              <!-- Testimonial Feedback Text  -->
              <div class="testimonial-description">
                <div class="testimonial_text">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et delectus, nam repudiandae repellat similique excepturi id placeat molestias consequuntur, laudantium dolorem nesciunt sit molestiae.</p>
                </div>
                <!-- Admin Text -->
                <div class="admin_text">
                  <h5>Jebin Khan</h5>
                  <p>Head of Marketing, Designing World</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- ##### Testimonial Area End ##### -->
</template>

<style lang="scss" scoped>
  .clients_testimonials_area {
    p {
      color: #777;
    }
    h5 {
        color: #000;
    }
  }
</style>

<script>
const $ = require("jquery");
// We declare it globally
window.$ = $;

import "../../../../node_modules/owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel";

export default {
  mounted() {
    $(".owl-carousel").owlCarousel({
         responsive: {
            0: {
                items: 1
            },
            991: {
                    items: 2
                },
            767:{
                    items: 1
                }
            },
            loop: true,
            autoplay: true,
            smartSpeed: 700,
            dots: true
    });
     var welcomeSlider = $('.welcome_slides');

        welcomeSlider.owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            smartSpeed: 1500,
            nav: true,
            navText: ["<i class='ti-angle-left'</i>", "<i class='ti-angle-right'</i>"],
            dots: true,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut'
        })
  }
};
</script>
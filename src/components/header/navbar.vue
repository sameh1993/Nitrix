<template>
  <div class="navbar classy-nav-container wow fadeInDown breakpoint-off" data-wow-delay="0.3s">
    <div class="container">
      <!-- Classy Menu -->
      <nav class="classy-navbar justify-content-between wow fadeInDown" id="dreamNav">
        <!-- Logo -->
        <router-link class="nav-brand b-text light" to="/">
          <img src="@/assets/img/core-img/logo.png" alt="logo" />Nitix.
        </router-link>

        <!-- Navbar Toggler -->
        <div class="classy-navbar-toggler demo">
          <span class="navbarToggler">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>

        <!-- Menu -->
        <div class="classy-menu">
          <!-- close btn -->
          <div class="classycloseIcon">
            <div class="cross-wrap">
              <span class="top"></span>
              <span class="bottom"></span>
            </div>
          </div>

          <!-- Nav Start -->
          <div class="classynav">
            <ul id="nav">
              <li>
                <a href="#">Home</a>
              </li>

              <li>
                <a href="#demo">Pick up demo</a>
              </li>
            </ul>

            <!-- Button -->
            <a href="#" class="btn login-btn ml-30">Purchase Now!</a>
          </div>
          <!-- Nav End -->
        </div>
      </nav>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/_Rules.scss";

.navbar {
  background-color: transparent;
  a,
  .nav-brand {
    color: #fff !important;
  }
}

.shrink {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  background-color: #d7dfef;
  .nav-brand {
    color: #000 !important;
  }
  @include minScreen(lg) {
    .classynav > li > a {
      color: #333 !important;
    }
  }
}

@include maxScreen(lg) {
  .classy-menu {
    background-color: #192a56;
    flex-direction: column;
    .classynav {
      height: 100%;
    }
  }
  .classynav > ul > li {
    background-color: transparent;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  }
  .classynav > ul > li > a {
    background: transparent;
  }
  .classynav {
    align-items: stretch !important;
    flex-direction: column !important;
  }

  .classynav > a {
    margin-left: 20px;
    color: rgb(76, 73, 73);
    @include maxScreen(lg) {
      padding-left: 15px;
      padding-right: 15px;
      width: 180px !important;
    }
  }

  .classycloseIcon .cross-wrap span {
    background-color: #fff;
  }
}

.demoThree-section {
  .classy-nav-containe {
    li a {
      color: #04d0ff;
      font-size: 17px;
      font-weight: 300;
    }
    .nav-brand {
      color: #04d0ff !important;
      font-weight: 600;
      font-weight: 600;
    }
  }
}

.bg-transparent {
  background-color: transparent;
  transition: all 0.5s linear;
}

.bg-fixed {
  background-color: #d7dfef !important;
}

// .classy-nav-container a {
//   color: rgba(225, 255, 255, 0.7) !important;
// }

.classy-nav-container li a:hover {
  font-size: 16px;
  color: #fff;
}
</style>

<script>
const $ = require("jquery");
window.$ = window.jQuery = $;

export default {
  mounted() {
    $("#nav li a").click(function() {
      $("html, body").animate(
        {
          scrollTop: $($(this).attr("href")).offset().top - 100
        },
        1700
      );
    });

    // toggle class active menu in mobile section
    $(".classy-navbar-toggler").click(function() {
      $(".classy-menu").toggleClass("menu-on");
    });

    // hidden the menu in mobile section
    $(".classycloseIcon .cross-wrap").click(function() {
      $(".classy-menu").removeClass("menu-on");
    });

    $(window).scroll(function() {
      if ($(window).scrollTop() >= 100) {
        $(".classy-nav-container").addClass("bg-fixed");
      } else {
        $(".classy-nav-container").removeClass("bg-fixed");
      }
    });
  }
};
</script>
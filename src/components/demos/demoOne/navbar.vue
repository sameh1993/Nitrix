<template>
  <div
    class="classy-nav-container bg-transparent breakpoint-off fixed-top"
    :class="$route.name == 'demoOne' ? 'demoOne' : ''"
    id="navbar"
  >
    <div class="container">
      <!-- Classy Menu -->
      <nav class="classy-navbar justify-content-between" id="dreamNav">
        <!-- Logo -->
        <router-link class="nav-brand" to="/">
          <img src="@/assets/img/core-img/logo.png" alt="logo" />
          Nitix.
        </router-link>

        <!-- Navbar Toggler -->
        <div class="classy-navbar-toggler">
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
          <div class="classynav menu-on">
            <ul id="nav" class="mb-0">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#roadmap">Roadmap</a>
              </li>
              <li>
                <a href="#team">Team</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>

            <!-- Button -->
            <a href="#" class="btn login-btn ml-2">Log in</a>
          </div>
          <!-- Nav End -->
        </div>
      </nav>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/_Rules.scss";

.classy-navbar-toggler .navbarToggler span {
  background-color: #fff;
}

// .aboutUs-section,
// .demoTwo-section {
//   .classy-nav-container .nav-brand,
//   .classynav ul li a {
//     color: #fff !important;
//   }
// }

.classy-nav-container {
  background-color: #281b87;
  position: fixed;

  .btn {
    line-height: 2.7 !important;
  }

  .classy-nav-container a:focus,
  .classy-nav-container a:hover {
    font-size: 16px;
  }
  @include minScreen(lg) {
    padding: 7px 0;
  }
  @include maxScreen(lg) {
    .classy-menu {
      background-color: #192a56;
      flex-direction: column;
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
      width: 110px;
      margin-left: 20px;
      color: rgb(76, 73, 73);
    }
    .cross-wrap span {
      background-color: #fff;
    }
  }
}

.demoFour-section,
.services-section,
.demoOne-section {
  .classy-nav-container .nav-brand {
    color: #000 !important;
  }
  .classynav li a {
    color: #333 !important;
  }

  .classy-navbar-toggler .navbarToggler span {
    background: #333 !important;
  }
}

.demoTwo-section {
  .classy-nav-container .nav-brand {
    color: #fff !important;
  }
  .classynav li a {
    color: #fff !important;
  }

  .classy-navbar-toggler .navbarToggler span {
    background: #fff !important;
  }
}

.demoThree-section {
  .classy-nav-containe {
    li a {
      color: #04d0ff ;
      font-size: 17px;
      font-weight: 300;
    }
    .nav-brand {
      color: #04d0ff  !important;
      font-weight: 600;
      font-weight: 600;
    }
  }
}

.shrink {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  background-color: #d7dfef;
  #dreamNav {
    .nav-brand {
      color: #000 !important;
    }
    .classynav li a {
      color: #333 !important;
    }
  }
}

.services-section,
.demoFour-section {
  @include maxScreen(lg) {
    .classy-navbar-toggler .navbarToggler span {
      background-color: #333 !important;
    }
  }
}

.classynav li a {
  font-size: 16px !important;
}

.bg-transparent {
  background-color: transparent;
  transition: all 0.5s linear;
}

.bg-fixed {
  background-color: #d7dfef !important;
}

.classy-nav-container a {
  color: rgba(225, 255, 255, 0.7) !important;
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
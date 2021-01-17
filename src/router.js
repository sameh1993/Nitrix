import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

// import Main Components
import HomePage from "./views/Home.vue";
const DemoOne = () => import("./views/demo-one.vue");
const DemoTwo = () => import("./views/demo-two.vue");
const DemoThree = () => import("./views/demo-three.vue");
const DemoFour = () => import('./views/demo-four.vue');
const aboutUs = () => import('./views/about-us.vue');
const services = () => import("./views/services.vue");
const FAQ = () => import("./views/faq.vue");
const pricing = () => import('./views/pricing.vue')
const ContactUs = () => import('./views/contact-us.vue')


export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      name: "Home",
      path: "/",
      component: HomePage,
    },
    {
      name: "demoOne",
      path: "/index-demo-1",
      component: DemoOne,
    },
    {
      name: "demoTwo",
      path: "/index-demo-2",
      component: DemoTwo,
    },
    {
      name: "demoThree",
      path: "/index-demo-3",
      component: DemoThree,
    },
    {
      name: "demoFour",
      path: "/index-demo-4",
      component: DemoFour,
    },
    {
      name: "about us",
      path: "/about-us",
      component: aboutUs,
    },
    {
      name: "Services",
      path: "/services",
      component: services,
    },

    {
      name: "FAQ Questions",
      path: "/faq",
      component: FAQ,
    },

    {
      name: "pricing",
      path: "/pricing",
      component: pricing,
    },
    {
      name: "contact us",
      path: "/contact-us",
      component: ContactUs,
    },
  ],
});

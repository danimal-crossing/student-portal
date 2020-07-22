import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Login from "../views/Login.vue";
import ResumesShow from "../views/ResumesShow.vue";
import CapstonesShow from "../views/CapstonesShow.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/resumes/:id",
    name: "resumes-show",
    component: ResumesShow,
  },
  {
    path: "/capstones/:id",
    name: "capstones-show",
    component: CapstonesShow,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

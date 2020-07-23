import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import ResumesShow from "../views/ResumesShow.vue";
import CapstonesShow from "../views/CapstonesShow.vue";
import ResumesEdit from "../views/ResumesEdit.vue";
import CapstonesEdit from "../views/CapstonesEdit.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },

  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/logout",
    name: "logout",
    component: Logout,
  },
  {
    path: "/resume",
    name: "resumes-show",
    component: ResumesShow,
  },
  {
    path: "/capstones",
    name: "capstones-show",
    component: CapstonesShow,
  },
  {
    path: "/resumes/:id/edit",
    name: "resumes-edit",
    component: ResumesEdit,
  },
  {
    path: "/capstones/:id/edit",
    name: "capstones-edit",
    component: CapstonesEdit,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

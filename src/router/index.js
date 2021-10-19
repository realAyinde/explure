import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/login",
    name: "LogIn",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/LogIn.vue"),
  },
  {
    path: "/repair",
    name: "Repair",
    component: () =>
      import("../views/Repair.vue"),
  },
  {
    path: "/details",
    name: "Details",
    component: () =>
      import("../views/ConfirmDetails.vue"),
  },
  {
    path: "/review",
    name: "Review",
    component: () =>
      import("../views/Reviews.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

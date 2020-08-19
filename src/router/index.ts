import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "@/views/Home";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/views/About")
  },
  {
    path: "/example",
    name: "Example",

    component: () => import("@/views/example/Example")
  },
  {
    path: "/quill-test",
    name: "quill-test",
    component: () => import("@/views/quill-test")
  },
  {
    path: "/config-demo",
    name: "config-demo",
    component: () => import("@/views/config-demo")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

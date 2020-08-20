import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import { component } from 'vue/types/umd';
import Home from "../views/Home";

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

    component: () => import("@/views/example/Example"),
  },
  {
    path: "/quill-test",
    name: "quill-test",
    component: () => import("@/views/quill-test")
  },
  {
    path: '/demo',
    name: 'Demo',
    // redirect:'/demo/prop',
    component:() => import('@/views/demo/index'),
    children:[
      {
        path:'/demo/prop',
        name:'Prop',
        component:() => import('@/views/demo/prop/index')
      },
      {
        path:'/demo/data',
        name:'Data',
        component:() => import('@/views/demo/data/index')
      },
      {
        path:'/demo/methods',
        name:'Methods',
        component:() => import('@/views/demo/methods/index')
      },
      {
        path:'/demo/components',
        name:'Components',
        component:() => import('@/views/demo/components/index')
      },
      {
        path:'/demo/computed',
        name:'Computed',
        component:() => import('@/views/demo/computed/index')
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

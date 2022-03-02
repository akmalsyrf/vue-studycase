import { createRouter, createWebHistory } from "vue-router";

import DataMethods from "../views/1-Data-methods.vue";
import DataBinding from "../views/2-Data-binding.vue";
import TwoDataBinding from "../views/3-2way-data-binding.vue";
import LoopConditional from "../views/4-Loop-conditional.vue";
import LifecycleHooks from "../views/5-Lifecycle-hooks.vue";
import Computed from "../views/6-Computed-properties.vue";
import Props from "../views/7-Props.vue";
import Events from "../views/8-Custom-event.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: DataMethods,
  },
  {
    path: "/2",
    name: "2",
    component: DataBinding,
  },
  {
    path: "/3",
    name: "3",
    component: TwoDataBinding,
  },
  {
    path: "/4",
    name: "4",
    component: LoopConditional,
  },
  {
    path: "/5",
    name: "5",
    component: LifecycleHooks,
  },
  {
    path: "/6",
    name: "6",
    component: Computed,
  },
  {
    path: "/7",
    name: "7",
    component: Props,
  },
  {
    path: "/8",
    name: "8",
    component: Events,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/AboutView.vue");
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

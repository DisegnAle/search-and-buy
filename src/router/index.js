import Vue from "vue";
import VueRouter from "vue-router";
import login from "../views/login/index.vue";
import products from "../views/products/index.vue";
//import store from "@/store/index";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: login,
  },
  {
    path: "/products",
    name: "products",
    component: products,
    //meta: { requiresAuth: true },
  },
  {
    path: "/",
    redirect: "/products",
  },
];

const router = new VueRouter({
  routes,
});

// temporary

/* router.beforeEach((to, _, next) => {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next("/login");
  } else {
    next();
  }
}); */

export default router;

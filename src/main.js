import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vuex from "vuex";
import axios from "axios";
import VueAxios from "vue-axios";
import ElementUI from "element-ui";
import locale from "element-ui/lib/locale/lang/en";
import { auth } from "./firebase";
import "element-ui/lib/theme-chalk/index.css";
import "element-ui/lib/theme-chalk/reset.css";
import "./assets/styles/index.less";

Vue.use(Vuex);
Vue.use(VueAxios, axios);
Vue.use(ElementUI, { locale });

Vue.config.productionTip = false;

let app;
auth.onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount("#app");
  }
});

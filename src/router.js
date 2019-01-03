import Vue from "vue";
import Router from "vue-router";

import Layout from "./views/layout/layout";
import Home from "./views/home/home";
import Login from "./views/login/login";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/",
      name: "Layout",
      component: Layout,
      children: [
        {
          path: "home",
          name: "home",
          component: Home
        }
      ]
    }
  ]
});

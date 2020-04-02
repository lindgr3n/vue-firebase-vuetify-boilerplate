import Vue from "vue";
import VueRouter from "vue-router";
import { getUser } from "@/firebase";
import Home from "@/views/Home.vue";
import SignIn from "@/views/SignIn.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    redirect: "/sign-in"
  },
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/sign-in",
    name: "SignIn",
    component: SignIn
  },
  {
    path: "/sign-up",
    name: "SignUp",
    component: () =>
      import(/* webpackChunkName: "sign-up" */ "@/views/SignUp.vue")
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    meta: {
      requiresAuth: true
    },
    component: () => import(/* webpackChunkName: "about" */ "@/views/About.vue")
  },
  {
    path: "/user-data",
    name: "UserData",
    meta: {
      requiresAuth: true
    },
    component: () =>
      import(/* webpackChunkName: "user-data" */ "@/views/UserData.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const currentUser = getUser();

  if (!requiresAuth) {
    next();
  } else if (requiresAuth && !currentUser) {
    next("sign-in");
  } else if (!requiresAuth && currentUser) {
    next("/home");
  } else {
    next();
  }
});

export default router;

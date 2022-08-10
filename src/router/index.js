import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage/HomePage.vue";
import NewNewsPage from "@/pages/NewNewsPage/NewNewsPage.vue";
import store from "@/store/index";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/new",
    name: "New",
    component: NewNewsPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  store.dispatch("updateNavCurrentIndex", to.path);
  next();
});

export default router;

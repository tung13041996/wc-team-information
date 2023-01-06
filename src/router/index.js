import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TeamDetail from "@/views/TeamDetail.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/teams/:id",
    name: "TeamDetail",
    props: true,
    component: TeamDetail,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

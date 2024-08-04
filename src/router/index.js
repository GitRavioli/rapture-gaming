import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Contests from "../views/Contests.vue";
import AboutView from "../views/AboutView.vue";
import CaptainReport from "../views/CaptainReport.vue";
import TournamentBracket from "@/views/TournamentBracket.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/contests",
      name: "contests",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Contests.vue"),
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/report",
      name: "captainreport",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/CaptainReport.vue"),
    },
    {
      path: "/bracket",
      name: "tournamebracket",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/TournamentBracket.vue"),
    },
    {
      path: "/captain-notes",
      name: "captainnotes",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/CaptainNotes.vue"),
    },
    {
      path: "/report-output",
      name: "reportoutput",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/CaptainReportOutput.vue"),
      props: (route) => ({
        report: JSON.parse(localStorage.getItem("phoenixCaptainReport")),
      }),
    },
  ],
});

export default router;

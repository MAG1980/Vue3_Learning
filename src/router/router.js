import { createRouter, createWebHashHistory } from "vue-router";
import Main from "@/pages/Main";

const routes = [
  {
    path: "/",
    component: Main
  }
];

const history = createWebHashHistory();

export const router = createRouter({ routes, history });

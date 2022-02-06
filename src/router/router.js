import { createRouter, createWebHashHistory } from "vue-router";
import { Main, PostPage } from "@/pages/index.js";

const routes = [
  {
    path: "/",
    component: Main
  },
  {
    path: "/posts",
    component: PostPage
  }
];

const history = createWebHashHistory();

export const router = createRouter({ routes, history });

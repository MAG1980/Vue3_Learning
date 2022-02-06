import { createRouter, createWebHashHistory } from "vue-router";
import { Main, PostPage, About } from "@/pages/index.js";

const routes = [
  {
    path: "/",
    component: Main
  },
  {
    path: "/posts",
    component: PostPage
  },
  {
    path: "/about",
    component: About
  }
];

const history = createWebHashHistory();

export const router = createRouter({ routes, history });

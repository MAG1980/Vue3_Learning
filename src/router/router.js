import { createRouter, createWebHashHistory } from "vue-router";
import { Main, PostPage, About } from "@/pages/index.js";

export const routes = [
  {
    path: "/",
    component: Main,
    title: "Main page"
  },
  {
    path: "/posts",
    component: PostPage,
    title: "Posts page"
  },
  {
    path: "/about",
    component: About,
    title: "About page"
  }
];

const history = createWebHashHistory();

export const router = createRouter({ routes, history });

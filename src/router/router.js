import { createRouter, createWebHashHistory } from "vue-router";
import {
  Main,
  PostsPage,
  PostItemPage,
  About,
  PostsPageWithVuex
} from "@/pages/index.js";

export const routes = [
  {
    path: "/",
    component: Main,
    title: "Main page"
  },
  {
    path: "/posts",
    component: PostsPage,
    title: "Posts page"
  },
  {
    path: "/about",
    component: About,
    title: "About page"
  },
  {
    path: "/posts/:id",
    component: PostItemPage
  },
  {
    path: "/store",
    component: PostsPageWithVuex,
    title: "Posts Page with Vuex"
  }
];

const history = createWebHashHistory();

export const router = createRouter({ routes, history });

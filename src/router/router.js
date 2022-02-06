import { createRouter, createWebHashHistory } from "vue-router";
import Main from "@/pages/Main";
import PostPage from "@/pages/PostPage";

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

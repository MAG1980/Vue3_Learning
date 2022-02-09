import { createStore } from "vuex";
import { postsModule } from "@/store/PostsModule";
export default createStore({
  modules: {
    posts: postsModule
  }
});

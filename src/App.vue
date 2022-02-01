<template>
  <div class="app">
    <h1>Страница с постами</h1>
    <MyButton @click="fetchPosts">Download Posts</MyButton>
    <MyButton @click="showDialog">Создать пост</MyButton>
    <MyDialog v-model:show="dialogVisible">
      <post-form @create-post="addPost"></post-form>
      <!-- <post-form @create-post="this.posts.push(post)"></post-form> -->
    </MyDialog>
    <post-list :posts="posts" @remove="removePost"></post-list>
  </div>
</template>
<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import axios from "axios";
export default {
  components: {
    PostForm,
    PostList,
  },
  data() {
    return {
      dialogVisible: false,
      post_title: "",
      post_content: "",
      posts: [],
    };
  },
  methods: {
    addPost(post) {
      this.posts.push(post);
      this.hideDialog();
    },
    removePost(post) {
      this.posts = this.posts.filter((item) => item.id !== post.id);
    },
    showDialog() {
      this.dialogVisible = true;
    },
    hideDialog() {
      this.dialogVisible = false;
    },
    async fetchPosts() {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts?_limit=10"
        );
        this.posts = response.data;
        console.log(response);
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app {
  padding: 20px;
}
</style>
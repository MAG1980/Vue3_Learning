<template>
  <div class="app">
    <h1>Страница с постами</h1>
    <div class="app__buttons">
      <MyButton @click="showDialog">Создать пост</MyButton>
      <MySelect v-model="selectedSort" :options="sortOptions" />
    </div>
    <p v-if="isPostsLoading">Идёт загрузка!</p>

    <MyDialog v-model:show="dialogVisible">
      <post-form @create-post="addPost"></post-form>
      <!-- <post-form @create-post="this.posts.push(post)"></post-form> -->
    </MyDialog>
    <post-list
      :posts="posts"
      @remove="removePost"
      v-if="!isPostsLoading"
    ></post-list>
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
      isPostsLoading: false,
      selectedSort: "",
      sortOptions: [
        { value: "title", name: "По заголовку" },
        { value: "body", name: "По содержимому" },
      ],
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
      this.isPostsLoading = true;
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts?_limit=10"
        );
        this.posts = response.data;
        this.isPostsLoading = false;
        console.log(response);
      } catch (e) {
        console.log(e);
      } finally {
      }
    },
  },
  mounted() {
    this.isPostsLoading = true;
    setTimeout(() => this.fetchPosts(), 2000);
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
.app__buttons {
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
}
</style>
<template>
  <div class="app">
    <post-form @create-post="addPost"></post-form>
    <!-- <post-form @create-post="this.posts.push(post)"></post-form> -->
    <post-list :posts="posts"></post-list>
  </div>
</template>
<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
export default {
  components: {
    PostForm,
    PostList,
  },
  data() {
    return {
      post_title: "",
      post_content: "",
      posts: [
        {
          id: 1,
          title: "JavaScript 1",
          content: "Содержание поста о JavaScript 1",
        },
        {
          id: 2,
          title: "JavaScript 2",
          content: "Содержание поста о JavaScript 2",
        },
        {
          id: 3,
          title: "JavaScript 3",
          content: "Содержание поста о JavaScript 3",
        },
      ],
    };
  },
  methods: {
    addPost(post) {
      this.posts.push(post);
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
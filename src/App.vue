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
      likes: 0,
      dislikes: 5,
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
    addLike() {
      this.likes += 1;
    },
    addDislike() {
      this.dislikes += 1;
    },
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
.post {
  padding: 15px;
  border: 3px solid teal;
  margin-bottom: 10px;
}
.post__buttons {
  display: flex;
  justify-content: space-around;
}
.post__button {
  padding: 5px 10px;
  margin: 10px 0;
  border-radius: 5px;
}
.post__button_like {
  background: teal;
}
.post__button_dislike {
  background: red;
}
</style>
<template>
  <h2 class="post__index">Страница поста {{ $route.params.id }}</h2>
  <h1 class="post__title">{{ post.title }}</h1>
  <p class="post__body">{{ post.body }}</p>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      isPostLoading: false,
      post: "",
    };
  },
  methods: {
    async fetchPost() {
      this.isPostLoading = true;
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              id: this.$route.params.id,
            },
          }
        );
        this.post = response.data[0];
      } catch (e) {
        console.log(e);
      } finally {
        this.isPostLoading = false;
      }
    },
  },
  mounted() {
    this.fetchPost();
  },
};
</script>
<style scoped>
.post__title {
  color: blue;
  text-align: center;
  margin-bottom: 15px;
  text-transform: uppercase;
}
.post__index {
  color: teal;
  margin-bottom: 5px;
  font-size: 12px;
}
.post__body::first-letter {
  text-transform: uppercase;
  font-size: 30px;
  color: red;
}
</style>
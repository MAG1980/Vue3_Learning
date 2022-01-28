<template>
  <form class="post__form" v-on:submit.prevent>
    <h4>Создание поста</h4>
    <MyInput
      class="post__input"
      :type="'text'"
      placeholder="Название поста"
      v-model="post.title"
    />
    <MyInput
      class="post__input"
      :type="'text'"
      placeholder="Содержание поста"
      v-model="post.content"
    />
    <MyButton type="submit" @click.prevent="createPost">
      Добавить пост
    </MyButton>
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: "",
        content: "",
      },
    };
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit("create-post", this.post);
      this.post = {
        title: "",
        content: "",
      };
    },
  },
};
</script>

<style scoped>
.post__form {
  display: flex;
  flex-direction: column;
  border: 3px solid teal;
  margin-bottom: 10px;
  padding: 10px;
}
</style>
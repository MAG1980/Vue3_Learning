<template>
  <form class="post__form" v-on:submit.prevent>
    <h4>Создание поста</h4>
    <input
      class="post__input"
      type="text"
      placeholder="Название поста"
      :value="post.title"
      @input="post.title = $event.target.value"
    />
    <input
      class="post__input"
      type="text"
      placeholder="Содержание поста"
      :value="post.content"
      @input="post.content = $event.target.value"
    />
    <button class="post__button" type="submit" v-on:click.prevent="createPost">
      Добавить пост
    </button>
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
.post__input {
  border: 1px solid teal;
  padding: 5px;
  margin-top: 10px;
}
</style>
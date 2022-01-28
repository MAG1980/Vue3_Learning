<template>
  <div class="app">
    <form class="post__form">
      <h4>Создание поста</h4>
      <input
        class="post__input"
        type="text"
        placeholder="Название поста"
        v-bind:value="post_title"
        v-on:input="post_title = $event.target.value"
      />
      <input
        class="post__input"
        type="text"
        placeholder="Содержание поста"
        v-bind:value="post_content"
        v-on:input="post_content = $event.target.value"
      />
      <button
        class="post__button"
        type="submit"
        v-on:click.prevent="createPost"
      >
        Добавить пост
      </button>
    </form>

    <div v-for="post in posts" v-bind:key="post.id">
      <div class="post">
        <div>
          <strong>{{ post.title }}:</strong>
        </div>
        <div>{{ post.content }}</div>
        <div class="post__buttons">
          <div>
            <button class="post__button post__button_like" v-on:click="addLike">
              Like
            </button>
            <div>
              Количество лайков: <strong>{{ likes }}</strong>
            </div>
          </div>
          <div>
            <button
              class="post__button post__button_dislike"
              v-on:click="addDislike"
            >
              DisLike
            </button>
            <div>
              Количество дизлайков: <strong>{{ dislikes }}</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
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

    createPost() {
      this.posts.push({
        id: Date.now(),
        title: this.post_title,
        content: this.post_content,
      });
      this.post_title = "";
      this.post_content = "";
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
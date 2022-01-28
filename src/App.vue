<template>
  <div>
    <div class="post">
      <div><strong>Название:</strong> Пост о JavaScript</div>
      <div><strong>Описание:</strong> Текст поста о JavaScript</div>
      <div class="post__buttons">
        <button class="post__button post__button_like" v-on:click="addLike">
          Like
        </button>
        <button
          class="post__button post__button_dislike"
          v-on:click="addDislike"
        >
          DisLike
        </button>
      </div>
      <div>
        Количество лайков: <strong>{{ likes }}</strong>
      </div>
      <div>
        Количество дизлайков: <strong>{{ dislikes }}</strong>
      </div>
    </div>
    <div class="post">
      <div><strong>Название:</strong> Пост о JavaScript</div>
      <div><strong>Описание:</strong> Текст поста о JavaScript</div>
      <div class="post__buttons">
        <button class="post__button post__button_like" v-on:click="addLike">
          Like
        </button>
        <button
          class="post__button post__button_dislike"
          v-on:click="addDislike"
        >
          DisLike
        </button>
      </div>
      <div>
        Количество лайков: <strong>{{ likes }}</strong>
      </div>
      <div>
        Количество дизлайков: <strong>{{ dislikes }}</strong>
      </div>
    </div>
    <div class="post">
      <div><strong>Название:</strong> Пост о JavaScript</div>
      <div><strong>Описание:</strong> Текст поста о JavaScript</div>
      <div class="post__buttons">
        <button class="post__button post__button_like" v-on:click="addLike">
          Like
        </button>
        <button
          class="post__button post__button_dislike"
          v-on:click="addDislike"
        >
          DisLike
        </button>
      </div>
      <div>
        Количество лайков: <strong>{{ likes }}</strong>
      </div>
      <div>
        Количество дизлайков: <strong>{{ dislikes }}</strong>
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
    };
  },
  methods: {
    addLike() {
      this.likes += 1;
    },
    addDislike() {
      this.dislikes += 1;
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
.post {
  padding: 15px;
  border: 3px solid teal;
}
.post__buttons {
  display: flex;
  justify-content: space-around;
}
.post__button {
  padding: 5px 10px;
}
.post__button_like {
  background: teal;
}
.post__button_dislike {
  background: red;
}
</style>
<template>
  <div class="post">
    <div>
      <strong>{{ post.id }}: {{ post.title }}:</strong>
    </div>
    <div>{{ post.content }}</div>
    <div class="post__buttons">
      <div>
        <MyButton class="post__button post__button_like" @click="addLike">
          Like
        </MyButton>
        <div>
          Количество лайков: <strong>{{ likes }}</strong>
        </div>
      </div>
      <div>
        <MyButton class="post__button post__button_dislike" @click="addDislike">
          DisLike
        </MyButton>
        <div>
          Количество дизлайков: <strong>{{ dislikes }}</strong>
        </div>
      </div>
    </div>
    <div>
      <div class="edit__buttons">
        <MyButton
          class="post__button edit__button_change"
          @click="$router.push(`/posts/${post.id}`)"
        >
          Открыть
        </MyButton>
        <MyButton
          class="post__button edit__button_delete"
          @click="$emit('remove', post)"
        >
          Удалить
        </MyButton>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      likes: 0,
      dislikes: 0,
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
<style scoped>
.post {
  padding: 15px;
  border: 3px solid teal;
  margin-bottom: 10px;
}
.post__buttons {
  display: flex;
  justify-content: space-around;
}
.post__button_like {
  background: teal;
}
.post__button_dislike {
  background: red;
}
.edit__buttons {
  display: flex;
  flex-direction: column;
}
.edit__button_change {
  background: royalblue;
}
.edit__button_delete {
  background: red;
}
</style>
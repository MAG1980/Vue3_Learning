<template>
  <div class="post">
    <div>
      <strong>{{ post.title }}:</strong>
    </div>
    <div>{{ post.content }}</div>
    <div class="post__buttons">
      <div>
        <button class="post__button post__button_like" @click="addLike">
          Like
        </button>
        <div>
          Количество лайков: <strong>{{ likes }}</strong>
        </div>
      </div>
      <div>
        <button class="post__button post__button_dislike" @click="addDislike">
          DisLike
        </button>
        <div>
          Количество дизлайков: <strong>{{ dislikes }}</strong>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      title: String,
      content: String,
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
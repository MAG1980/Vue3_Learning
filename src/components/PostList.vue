<template>
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
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
</style>
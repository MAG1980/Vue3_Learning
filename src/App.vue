<template>
  <div>
    <div>
      <button v-on:click="addLike">Like</button>
      <button v-on:click="addDislike">DisLike</button>
    </div>
    <div>
      Количество лайков: <strong>{{ likes }}</strong>
    </div>
    <div>
      Количество дизлайков: <strong>{{ dislikes }}</strong>
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
<style scoped>
</style>
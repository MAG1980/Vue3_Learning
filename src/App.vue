<template>
  <div>
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
};
</script>
<style scoped>
</style>
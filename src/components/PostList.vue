<template>
  <div class="box">
    <h3 class="title">Список постов</h3>
    <div v-for="post in posts" :key="post.id">
      <PostItem :post="post" />
    </div>
  </div>
</template>

<script>
import PostItem from "@/components/PostItem.vue";
export default {
  components: {
    PostItem,
  },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.box {
  margin: 20px 0;
}
.title {
  text-align: center;
  margin: 5px;
}
</style>
<template>
  <div class="box" v-if="posts.length !== 0">
    <h3 class="title">Список постов</h3>
    <PostItem
      v-for="post in posts"
      :key="post.id"
      :post="post"
      @remove="$emit('remove', post)"
    />
  </div>
  <div v-else>
    <h3 class="title title_error">Список постов пуст</h3>
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
.title_error {
  color: red;
}
</style>
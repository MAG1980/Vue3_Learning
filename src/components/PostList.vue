<template>
  <div v-for="post in posts" v-bind:key="post.id">
    <PostItem :post="post" />
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
</style>
<template>
  <div class="box" v-show="posts.length">
    <h3 class="title">Список постов</h3>
    <transition-group name="postList">
      <PostItem
        v-for="post in posts"
        :key="post.id"
        :post="post"
        @remove="$emit('remove', post)"
      />
    </transition-group>
  </div>
  <div v-show="!posts.length">
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
.postList-move,
.postList-enter-active,
.postList-leave-active {
  transition: all 0.5s ease;
}

.postList-enter-from,
.postList-leave-to {
  opacity: 0;
  transform: translateX(100px);
}
</style>
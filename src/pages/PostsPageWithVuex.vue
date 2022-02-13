<template>
  <h1>{{ $store.state.posts.limit }}</h1>
  <div class="app">
    <h1 class="app__title">Страница с постами</h1>
    <h2>
      {{
        $store.state.isAuth ? "Авторизация успешна!" : "Требуется авторизация!"
      }}
    </h2>
    <!-- <MyInput v-Focus v-model:value="searchQuery" placeholder="Поиск..." /> -->
    <div class="app__buttons">
      <MyButton @click="showDialog">Создать пост</MyButton>
      <!-- <MySelect v-model="selectedSort" :options="sortOptions" /> -->
    </div>
    <p v-if="isPostsLoading">Идёт загрузка!</p>

    <MyDialog v-model:show="dialogVisible">
      <post-form @create-post="addPost"></post-form>
    </MyDialog>
    <post-list
      :posts="sortedSearchedPosts"
      @remove="removePost"
      v-if="!isPostsLoading"
    ></post-list>

    <div v-Intersection="loadMorePosts" class="observer"></div>
  </div>
</template>
<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
  name: "PostsPage",
  components: {
    PostForm,
    PostList,
  },
  data() {
    return {
      dialogVisible: false,
    };
  },
  methods: {
    ...mapActions("posts", ["fetchPosts", "loadMorePosts"]),
    // ...mapActions(
    //   { loadMorePosts: "posts/loadMorePosts" },
    //   { fetchPosts: "posts/fetchPosts" }
    // ),
    ...mapMutations("posts", ["setPage"]),

    // addPost(post) {
    //   this.posts.push(post);
    //   this.hideDialog();
    // },
    // removePost(post) {
    //   this.posts = this.posts.filter((item) => item.id !== post.id);
    // },
    // showDialog() {
    //   this.dialogVisible = true;
    // },
    // hideDialog() {
    //   this.dialogVisible = false;
    // },
    // changePage(pageNumber) {
    //   this.page = pageNumber;
    // },
  },
  watch: {
    // page() {
    //   this.fetchPosts();
    // },
    // newValue - значение selectedSort после изменения
    // selectedSort(newValue) {
    //   console.log(newValue);
    //   this.posts.sort((post1, post2) => {
    //     return post1[newValue]?.localeCompare(post2[newValue]);
    //   });
    // },
  },
  computed: {
    ...mapState({
      posts: (state) => state.posts.posts,
      isPostsLoading: (state) => state.posts.isPostsLoading,
      selectedSort: (state) => state.posts.selectedSort,
      sortOptions: (state) => state.posts.sortOptions,
      searchQuery: (state) => state.posts.searchQuery,
      page: (state) => state.posts.page,
      limit: (state) => state.posts.limit,
      totalPages: (state) => state.posts.totalPages,
    }),
    ...mapGetters({
      sortedPosts: "posts/sortedPosts",
      sortedSearchedPosts: "posts/sortedSearchedPosts",
    }),
  },
  mounted() {
    this.fetchPosts();
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app {
  padding: 20px;
}
.app__title {
  margin-bottom: 15px;
}
.app__buttons {
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
}
.page__wrapper {
  display: flex;
  margin: 15px 0;
}
.page__number {
  border: 1px solid blue;
  padding: 7px 10px;
}
.page__number_current {
  border: 2px solid green;
}
</style>

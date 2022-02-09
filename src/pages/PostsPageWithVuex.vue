<template>
  <h1>{{ $store.state.posts.limit }}</h1>
  <!-- <div class="app">
    <h1 class="app__title">Страница с постами</h1>
    <h2>
      {{
        $store.state.isAuth ? "Авторизация успешна!" : "Требуется авторизация!"
      }}
    </h2>
    <MyInput v-Focus v-model:value="searchQuery" placeholder="Поиск..." />
    <div class="app__buttons">
      <MyButton @click="showDialog">Создать пост</MyButton>
      <MySelect v-model="selectedSort" :options="sortOptions" />
    </div>
    <p v-if="isPostsLoading">Идёт загрузка!</p>

    <MyDialog v-model:show="dialogVisible">
      <post-form @create-post="addPost"></post-form>
       <post-list
      :posts="sortedSearchedPosts"
      @remove="removePost"
      v-if="!isPostsLoading"
    ></post-list>
    <div v-Intersection="loadMorePosts" class="observer"></div>
  </div> -->
</template>
<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
export default {
  name: "PostsPage",
  components: {
    PostForm,
    PostList,
  },
  data() {
    return {
      post_title: "",
      post_content: "",
      posts: [],
      isPostsLoading: false,
      selectedSort: "",
      sortOptions: [
        { value: "title", name: "По заголовку" },
        { value: "body", name: "По содержимому" },
      ],
      searchQuery: "",
      page: 1,
      limit: 10,
      totalPages: 0,
    };
  },
  methods: {
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
  computed: {},
  mounted() {
    // this.isPostsLoading = true;
    // Симуляция задержки ответа сервера
    // setTimeout(() => this.fetchPosts(), 2000);
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

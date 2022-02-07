<template>
  <div class="app">
    <h1>Страница с постами</h1>
    <MyInput v-Focus v-model:value="searchQuery" placeholder="Поиск..." />
    <div class="app__buttons">
      <MyButton @click="showDialog">Создать пост</MyButton>
      <MySelect v-model="selectedSort" :options="sortOptions" />
    </div>
    <p v-if="isPostsLoading">Идёт загрузка!</p>

    <MyDialog v-model:show="dialogVisible">
      <post-form @create-post="addPost"></post-form>
      <!-- <post-form @create-post="this.posts.push(post)"></post-form> -->
    </MyDialog>
    <!-- <div class="page__wrapper">
      <div
        class="page__number"
        :class="{ page__number_current: page === pageNumber }"
        v-for="pageNumber in totalPages"
        :key="pageNumber"
        @click="changePage(pageNumber)"
      >
        {{ pageNumber }}
      </div>
    </div> -->
    <post-list
      :posts="sortedSearchedPosts"
      @remove="removePost"
      v-if="!isPostsLoading"
    ></post-list>

    <!-- Слежение за появлением данного div в области видимости
    с помощью пользовательской директивы
    для бесконечной подгрузки постов -->
    <div v-Intersection="loadMorePosts" class="observer"></div>
  </div>
</template>
<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import axios from "axios";
export default {
  name: "PostsPage",
  components: {
    PostForm,
    PostList,
  },
  data() {
    return {
      dialogVisible: false,
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
    addPost(post) {
      this.posts.push(post);
      this.hideDialog();
    },
    removePost(post) {
      this.posts = this.posts.filter((item) => item.id !== post.id);
    },
    showDialog() {
      this.dialogVisible = true;
    },
    hideDialog() {
      this.dialogVisible = false;
    },
    async fetchPosts() {
      this.isPostsLoading = true;
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: this.page,
              _limit: this.limit,
            },
          }
        );
        this.totalPages = Math.ceil(
          response.headers["x-total-count"] / this.limit
        );
        this.posts = response.data;
      } catch (e) {
        console.log(e);
      } finally {
        this.isPostsLoading = false;
      }
    },
    // changePage(pageNumber) {
    //   this.page = pageNumber;
    // },
    async loadMorePosts() {
      // Если изменять значение isPostsLoading,
      //будет происходить перерисовака UI
      // и "прыжок" к месту её отображения
      // this.isPostsLoading = true;
      try {
        // Для подгрузки следующего блока постов
        this.page += 1;
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: this.page,
              _limit: this.limit,
            },
          }
        );
        this.totalPages = Math.ceil(
          response.headers["x-total-count"] / this.limit
        );
        //В отличие от fetchPosts новые посты не перезаписывают старые,
        // а добавляются в конец массива.
        this.posts = [...this.posts, ...response.data];
        // this.isPostsLoading = false;
      } catch (e) {
        console.log(e);
      }
    },
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
    sortedPosts() {
      return [...this.posts].sort((post1, post2) => {
        return post1[this.selectedSort]?.localeCompare(
          post2[this.selectedSort]
        );
      });
    },
    sortedSearchedPosts() {
      // использую computed-свойство sortedPosts
      return this.sortedPosts.filter((post) =>
        post.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  created() {
    this.isPostsLoading = true;
    // Симуляция задержки ответа сервера
    setTimeout(() => this.fetchPosts(), 2000);
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
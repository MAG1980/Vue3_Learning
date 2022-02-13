import axios from "axios";

export const postsModule = {
  namespaced: true,
  state: () => ({
    posts: [],
    isPostsLoading: false,
    selectedSort: "",
    sortOptions: [
      { value: "title", name: "По заголовку" },
      { value: "body", name: "По содержимому" }
    ],
    searchQuery: "",
    page: 1,
    limit: 10,
    totalPages: 0
  }),
  getters: {
    sortedPosts(state) {
      return [...state.posts].sort((post1, post2) => {
        return post1[state.selectedSort]?.localeCompare(
          post2[state.selectedSort]
        );
      });
    },
    sortedSearchedPosts(state, getters) {
      // использую computed-свойство sortedPosts
      return getters.sortedPosts.filter((post) =>
        post.title.toLowerCase().includes(state.searchQuery.toLowerCase())
      );
    }
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
    setIsPostsLoading(state, bool) {
      state.isPostsLoading = bool;
    },
    setSelectedSort(state, selectedSort) {
      state.selectedSort = selectedSort;
    },
    setPage(state, page) {
      state.page = page;
    },
    setTotalPages(state, totalPages) {
      state.totalPages = totalPages;
    },

    setSearchQuery(state, searchQuery) {
      state.searchQuery = searchQuery;
    }
  },
  actions: {
    async fetchPosts({ state, commit }) {
      try {
        commit("setIsPostsLoading", true);
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: state.page,
              _limit: state.limit
            }
          }
        );
        commit(
          "setTotalPages",
          Math.ceil(response.headers["x-total-count"] / state.limit)
        );
        commit("setPosts", response.data);
      } catch (e) {
        console.log(e);
      } finally {
        commit("setIsPostsLoading", false);
      }
    },
    async loadMorePosts({ state, commit }) {
      // Если изменять значение isPostsLoading,
      //будет происходить перерисовака UI
      // и "прыжок" к месту её отображения
      // this.isPostsLoading = true;
      try {
        // Для подгрузки следующего блока постов
        commit("setPage", state.page + 1);

        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: state.page,
              _limit: state.limit
            }
          }
        );
        commit(
          "setTotalPages",
          Math.ceil(response.headers["x-total-count"] / state.limit)
        );
        //В отличие от fetchPosts новые посты не перезаписывают старые,
        // а добавляются в конец массива.
        commit("setPosts", [...state.posts, ...response.data]);
        // this.isPostsLoading = false;
      } catch (e) {
        console.log(e);
      }
    }
  }
};

import { createStore } from "vuex";

export default createStore({
  state: {
    likes: 3
  },
  getters: {
    doubleLikes(state) {
      return state.likes * 2;
    }
  },
  mutations: {
    incrementLikes(state) {
      return {
        ...state,
        likes: state.likes++
      };
    },
    decrementLikes(state) {
      return {
        ...state,
        likes: state.likes--
      };
    }
  },
  actions: {},
  modules: {}
});

<template>
  <nav class="navbar">
    <div class="navbar__logo" @click="$router.push('/')">Vue 3</div>
    <div class="navbar__buttons">
      <my-button
        class="navbar__button navbar__button_first"
        @click="$router.push('/store')"
        >Posts Page with Vuex</my-button
      >
      <my-button
        class="navbar__button navbar__button_first"
        @click="$router.push('/posts')"
        >Список постов</my-button
      >
      <my-button class="navbar__button" @click="$router.push('/about')"
        >About</my-button
      >
    </div>
  </nav>
</template>
<script>
export default {};
</script>
<style scoped>
.navbar {
  height: 50px;
  background: teal;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  align-items: center;
  padding: 0 15px;
}
.navbar__logo {
  color: white;
  font-size: 20px;
}
.navbar__buttons {
  margin-left: auto;
}
.navbar__button {
  margin-left: 15px;
}
.navbar__button_first {
  margin-left: 0;
}
</style>
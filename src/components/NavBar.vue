<template>
  <nav class="navbar">
    <div>Vue 3</div>
    <div class="navbar__buttons">
      <my-button class="navbar__button navbar__button_first"
        >Список постов</my-button
      >
      <my-button class="navbar__button">About</my-button>
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
<template>
  <button class="button"><slot></slot></button>
</template>
<script>
export default {
  name: "MyButton",
};
</script>
<style scoped>
.button {
  padding: 5px 10px;
  margin: 10px 0;
  border-radius: 5px;
}
</style>
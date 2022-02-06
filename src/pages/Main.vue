<template>
  <div>
    <h1>Wellcome!</h1>
    <ul>
      <li v-for="route in routes" :key="route.title">
        <router-link :to="route.path"> {{ route.title }} </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import { routes } from "@/router/router";
export default {
  name: "Main",
  data() {
    return {
      routes,
    };
  },
};
</script>
<style scoped></style>
import { createApp } from "vue";
import components from "@/components/UI";
import App from "./App.vue";
import router from "@/router/router.js";
const app = createApp(App);
components.forEach((component) => {
  app.component(component.name, component);
});

app.use(router).mount("#app");
//метод use() используется для подключения
//сторонних библиотек, плагинов и т.п.

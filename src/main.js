import { createApp } from "vue";
import components from "@/components/UI";
import App from "./App.vue";
import { router } from "@/router/router.js";
import directives from "@/directives/index.js";
import store from "@/store";

const app = createApp(App);

//регистрирую глобально массив UI-компонентов
components.forEach((component) => {
  app.component(component.name, component);
});

//регистрирую глобально массив пользовательских директив
directives.forEach((directive) => {
  app.directive(directive.name, directive);
});

app.use(router).use(store).mount("#app");
//метод use() используется для подключения
//сторонних библиотек, плагинов и т.п.

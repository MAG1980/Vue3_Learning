import { createApp } from "vue";
import components from "@/components/UI";
import App from "./App.vue";
import { router } from "@/router/router.js";
import Vintersection from "@/directives/Vintersection";
const app = createApp(App);

//регистрирую глобально массив UI-компонентов
components.forEach((component) => {
  app.component(component.name, component);
});

//регистрирую глобально директиву
app.directive("intersection", Vintersection);

app.use(router).mount("#app");
//метод use() используется для подключения
//сторонних библиотек, плагинов и т.п.

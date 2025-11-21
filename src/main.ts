import { createApp } from "vue";
import "./index.css";
import App from "./App.vue";
import { router } from "./router";
import Particles from "@tsparticles/vue3";
import { loadSlim } from "@tsparticles/slim";
import { printMiniBanner } from "./banner";
import { createPinia } from "pinia";
import { createPersistedState } from "pinia-plugin-persistedstate";
const pinia = createPinia();
pinia.use(createPersistedState());
createApp(App)
  .use(router)
  .use(pinia)
  .use(Particles, {
    init: async (engine) => {
      await loadSlim(engine);
    },
  })
  .mount("#app");

printMiniBanner();

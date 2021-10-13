import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import IconBase from "@/components/icons/IconBase.vue";
import IconCheck from '@/components/icons/IconCheck.vue'
import IconHome from '@/components/icons/IconHome.vue'
import IconBookmark from '@/components/icons/IconBookmark.vue'
import IconProfile from '@/components/icons/IconProfile.vue'
import IconTools from '@/components/icons/IconTools.vue'

const app = createApp(App).use(store).use(router)

app.component("icon-base", IconBase)
    .component('icon-check', IconCheck)
    .component('icon-bookmark', IconBookmark)
    .component('icon-profile', IconProfile)
    .component('icon-profile', IconProfile)
    .component('icon-tools', IconTools)
    .component('icon-home', IconHome);

app.mount("#app")

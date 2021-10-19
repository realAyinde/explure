import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import IconBase from "@/components/icons/IconBase.vue";
import commentdots from '@/components/icons/commentdots.vue'
import bell from '@/components/icons/bell.vue'
import star from '@/components/icons/star.vue'
import user from '@/components/icons/user.vue'
import shoppingbag from '@/components/icons/shoppingbag.vue'
import qrcode from '@/components/icons/qrcode.vue'
import plus from '@/components/icons/plus.vue'
import minus from '@/components/icons/minus.vue'
import home from '@/components/icons/home.vue'
import caretup from '@/components/icons/caretup.vue'
import caretdown from '@/components/icons/caretdown.vue'
import chevronright from '@/components/icons/chevronright.vue'
import chevronleft from '@/components/icons/chevronleft.vue'
import DRSlider from '@/components/doubleRangesSlider.vue'

const app = createApp(App).use(store).use(router)

app.component("icon-base", IconBase)
    .component('icon-commentdots', commentdots)
    .component('icon-star', star)
    .component('icon-user', user)
    .component('icon-bell', bell)
    .component('icon-shoppingbag', shoppingbag)
    .component('icon-plus', plus)
    .component('icon-minus', minus)
    .component('icon-home', home)
    .component('icon-caretup', caretup)
    .component('icon-caretdown', caretdown)
    .component('icon-chevronright', chevronright)
    .component('icon-chevronleft', chevronleft)
    .component('icon-qrcode', qrcode)
    .component('dr-slider', DRSlider);

app.mount("#app")

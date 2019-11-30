import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueCarousel from 'vue-carousel';
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import axios from 'axios';

Vue.use(VueCarousel);

Vue.config.productionTip = false;
Vue.prototype.$http = axios
new Vue({
    router,
    render: h => h(App)
}).$mount("#app");
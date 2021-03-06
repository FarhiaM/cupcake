import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueCarousel from 'vue-carousel';
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import axios from 'axios';
import store from './store'

Vue.use(VueCarousel);

Vue.config.productionTip = false;
Vue.prototype.$axios = axios

axios.defaults.baseURL = 'https://api.edamam.com/'

axios.defaults.params = {
    app_id: process.env.VUE_APP_API_ID,
    app_key: process.env.VUE_APP_API_KEY
        //dishType: 'dessert'
}

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
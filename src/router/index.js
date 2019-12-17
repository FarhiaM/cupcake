import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Maps from "../views/Maps.vue";
import Faq from "../views/Faq.vue";
import Search from "../views/Search.vue";
import About from "../views/About.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "home",
        component: Home
    },
    {
        path: "/about",
        name: "about",
        component: About
    },
    {
        path: "/maps",
        name: "maps",
        component: Maps
    },
    {
        path: "/faq",
        name: "faq",
        component: Faq
    },
    {
        path: "/search",
        name: "search",
        component: Search
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;
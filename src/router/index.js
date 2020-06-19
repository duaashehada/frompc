import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import help from "../views/help.vue";
import blog from "../views/blog.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/About.vue")
    },
    {
        path: "/help",
        name: "help",
        component: help
    },
    {
        path: "/blog",
        name: "blog",
        component: blog
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;

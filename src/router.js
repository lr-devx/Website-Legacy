import { createRouter, createWebHistory } from "vue-router";
import Blogs from "./assets/blogs.json";

const routes = [
    {
        "path": "/",
        "component": () => import("./views/HomeView.vue")
    },
    {
        "path": "/blogs",
        "component": () => import("./views/BlogListView.vue")
    },
    {
        "path": "/projects",
        "component": () => import("./views/ProjectView.vue")
    },
    {
        "path": "/pricing",
        "component": () => import("./views/PricingView.vue")
    },
    {
        "path": "/about",
        "component": () => import("./views/AboutView.vue")
    },
    {
        "path": "/:catchAll(.*)",
        "component": () => import("./views/NotFoundView.vue")
    }
]

for (var i = 0; i < Blogs.length; i++) {
    routes.push({
        "name": Blogs[i].id,
        "path": `/blogs/${Blogs[i].id}`,
        "component": () => import("./views/BlogView.vue")
    });
}

const router = createRouter({
    history: createWebHistory(import.meta.BASE_URL),
    routes: routes
});

export default router;
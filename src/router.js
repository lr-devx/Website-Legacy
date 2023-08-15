import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        "path": "/",
        "name": "home",
        "component": () => import("./views/HomeView.vue")
    },
    {
        "path": "/blogs",
        "name": "blogs",
        "component": () => import("./views/BlogListView.vue")
    },
    {
        "path": "/blogs/view",
        "name": "blog-viewer",
        "component": () => import("./views/BlogView.vue")
    },
    {
        "path": "/projects",
        "name": "projects",
        "component": () => import("./views/ProjectListView.vue")
    },
    {
        "path": "/projects/details",
        "name": "project-details",
        "component": () => import("./views/ProjectDetails.vue")
    },
    {
        "path": "/pricing",
        "name": "pricing",
        "component": () => import("./views/PricingView.vue")
    },
    {
        "path": "/about",
        "name": "about",
        "component": () => import("./views/AboutView.vue")
    },
    {
        "path": "/:catchAll(.*)",
        "name": "not-found",
        "component": () => import("./views/NotFoundView.vue")
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.BASE_URL),
    routes: routes
});

export default router;
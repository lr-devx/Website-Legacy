import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        "path": "/",
        "name": "Home",
        "component": () => import("./views/HomeView.vue")
    },
    {
        "path": "/blogs",
        "name": "Blogs",
        "component": () => import("./views/BlogListView.vue")
    },
    {
        "path": "/blogs/view",
        "name": "Blog Viewer",
        "component": () => import("./views/BlogView.vue")
    },
    {
        "path": "/projects",
        "name": "Projects",
        "component": () => import("./views/ProjectView.vue")
    },
    {
        "path": "/pricing",
        "name": "Pricing",
        "component": () => import("./views/PricingView.vue")
    },
    {
        "path": "/about",
        "name": "About",
        "component": () => import("./views/AboutView.vue")
    },
    {
        "path": "/:catchAll(.*)",
        "name": "Not Found",
        "component": () => import("./views/NotFoundView.vue")
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.BASE_URL),
    routes: routes
});

export default router;
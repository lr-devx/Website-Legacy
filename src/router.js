import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        "path": "/",
        "component": () => import("./views/HomeView.vue")
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

const router = createRouter({
    history: createWebHistory(import.meta.BASE_URL),
    routes: routes
});

export default router;
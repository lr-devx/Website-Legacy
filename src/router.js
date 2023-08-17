import { createRouter, createWebHistory } from "vue-router";

import HomeView from "./views/HomeView.vue";
import BlogListViewer from "./views/BlogListView.vue";
import BlogView from "./views/BlogView.vue";
import ProjectListView from "./views/ProjectListView.vue";
import ProjectDetailsView from "./views/ProjectDetailsView.vue";
import PricingView from "./views/PricingView.vue";
import AboutView from "./views/AboutView.vue";
import NotFoundView from "./views/NotFoundView.vue";

const routes = [
    {
        "path": "/",
        "name": "home",
        "component": HomeView
    },
    {
        "path": "/blogs",
        "name": "blogs",
        "component": BlogListViewer
    },
    {
        "path": "/blogs/view",
        "name": "blog-viewer",
        "component": BlogView
    },
    {
        "path": "/projects",
        "name": "projects",
        "component": ProjectListView
    },
    {
        "path": "/projects/details",
        "name": "project-details",
        "component": ProjectDetailsView
    },
    {
        "path": "/pricing",
        "name": "pricing",
        "component": PricingView
    },
    {
        "path": "/about",
        "name": "about",
        "component": AboutView
    },
    {
        "path": "/:catchAll(.*)",
        "name": "not-found",
        "component": NotFoundView
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.BASE_URL),
    routes: routes
});

export default router;
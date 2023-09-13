import { createRouter, createWebHistory } from "vue-router";

import HomeView from "./views/Home.vue";
import BlogListViewer from "./views/BlogList.vue";
import BlogView from "./views/BlogViewer.vue";
import ProjectListView from "./views/ProjectList.vue";
import ProjectDetailsView from "./views/ProjectDetails.vue";
import PricingView from "./views/Pricing.vue";
import UnknownView from "./views/TheUnknown.vue";
import NotFoundView from "./views/NotFound.vue";

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
        "path": "/unveiled-mystery",
        "name": "the-unknown",
        "component": UnknownView
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
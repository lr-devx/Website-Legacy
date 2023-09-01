<template>
    <div id="container">
        <h1 class="main-title">{{ $t("published-blogs") }}</h1>
        <div class="blogs-list">
            <RouterLink v-for="blog in Blogs" class="blog-item" :to="{path: 'blogs/view', query: { id: blog.id }}">
                <div class="blog-item-content">
                    <h1 class="blog-item-title">{{ blog.title }}</h1>
                    <h3 class="blog-item-description">{{ blog.description }}</h3>
                    <div class="blog-item-tags">
                        <h4 v-for="tag in blog.tags">{{ tag }}</h4>
                    </div>
                </div>
            </RouterLink>
            <div class="no-blogs-container" v-if="isBlogListEmpty">
                <p>{{ $t("no-blogs-yet") }}</p>
                <p>{{ $t("no-blogs-check-later") }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref } from "vue";
    import Blogs from "@/assets/blogs/blogs.json";
    
    const isBlogListEmpty = ref(Blogs.length == 0);
</script>

<style scoped>
    #container {
        background-color: burlywood;
    }

    .main-title {
        color: white;
        text-align: center;
        padding: 1.5rem;
    }

    .blogs-list {
        display: grid;
        grid-template-columns: 1fr;
        justify-content: center;
        gap: 1rem;
        padding-left: 25%;
        padding-right: 25%;
        padding-bottom: 2rem;
    }

    .blog-item {
        max-width: calc(1920px / 2);
        text-decoration: none;
    }

    .blog-item-content {
        background-color: deeppink;
        height: 8rem;
    }

    .blog-item-title {
        color: white;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        padding-top: 0.5rem;
        padding-left: 1rem;
    }

    .blog-item-description {
        color: lightgray;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        padding-left: 1rem;
    }

    .blog-item-tags {
        display: flex;
        padding-top: 0.5rem;
        padding-left: 1rem;
    }

    .blog-item-tags h4 {
        color: white;
        background-color: darkblue;
        width: max-content;
        margin-right: 0.5rem;
        padding: 0.25rem;
    }

    .no-blogs-container {
        color: black;
        text-align: center;
        font-size: 1.5rem;
        font-weight: 600;
    }

    @media (max-width: 64rem) {
        .blog-item {
            max-width: 95vw;
        }

        .blog-item-description {
            min-width: 85vw;
        }
    }
</style>
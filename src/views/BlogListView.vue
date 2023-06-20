<script setup>
    import Blogs from "../assets/blogs.json";
</script>

<template>
    <div id="container">
        <h1 id="main-title">{{ $t("published-blogs") }}</h1>
        <div id="blogs-list">
            <RouterLink v-for="blog in Blogs" id="blog-item" :to="{path: 'blogs/view', query: { id: blog.id }}">
                <div id="blog-item-content">
                    <h1 id="blog-item-title">{{ blog.title }}</h1>
                    <h3 id="blog-item-description">{{ blog.description }}</h3>
                    <div id="blog-item-tags">
                        <h4 v-for="tag in blog.tags">{{ tag }}</h4>
                    </div>
                </div>
            </RouterLink>
            <div id="no-blogs-container" v-if="Blogs.length == 0">
                <p>{{ $t("no-blogs-yet") }}</p>
                <p>{{ $t("no-blogs-check-later") }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
    #container {
        background-color: burlywood;
    }

    #main-title {
        padding: 1.5rem;
        text-align: center;
        color: white;
    }

    #blogs-list {
        display: grid;
        justify-content: center;
        padding-left: 25%;
        padding-right: 25%;
        padding-bottom: 2rem;
        grid-template-columns: 1fr;
        gap: 1rem;
    }

    #blog-item {
        max-width: calc(1920px / 2);
        text-decoration: none;
    }

    #blog-item-content {
        height: 8rem;
        background-color: deeppink;
    }

    #blog-item-title {
        padding-top: 1rem;
        padding-left: 1rem;
        color: white;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    #blog-item-description {
        padding-left: 1rem;
        padding-right: 1rem;
        color: lightgray;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    #blog-item-tags {
        display: flex;
        padding-top: 0.5rem;
        padding-left: 1rem;
    }

    #blog-item-tags h4 {
        width: max-content;
        padding: 0.25rem;
        margin-right: 0.5rem;
        color: white;
        background-color: darkblue;
    }

    #no-blogs-container {
        color: black;
        text-align: center;
        font-size: 1.5rem;
        font-weight: 600;
    }

    @media (max-width: 64rem) {
        #blog-item {
            max-width: 95vw;
        }

        #blog-item-description {
            min-width: 85vw;
        }
    }
</style>
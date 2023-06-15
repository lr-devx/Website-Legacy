<script setup>
    import Blogs from "../assets/blogs.json";
    import { onMounted, ref } from "vue";
    const container = ref(null);

    onMounted(() => {
        container.value.style.minHeight = `${document.documentElement.clientHeight - (80 + 64)}px`;
    });

    document.title = "Alian/DEAD - Blogs";
</script>

<template>
    <div id="container" ref="container">
        <h1 id="main-title">Published blogs</h1>
        <div id="blogs-list">
            <a v-for="blog in Blogs" id="blog-item" :href="`/blogs/${blog.id}`">
                <div id="blog-item-content">
                    <h1 id="blog-item-title">{{ blog.title }}</h1>
                    <h3 id="blog-item-description">{{ blog.description }}</h3>
                    <div id="blog-item-tags">
                        <h4 v-for="tag in blog.tags">{{ tag }}</h4>
                    </div>
                </div>
            </a>
            <div id="no-blogs-container" v-if="Blogs.length == 0">
                <p>No blogs available yet...</p>
                <p>Check back later!</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
    #container {
        max-width: 1920px;
        margin: auto;
        background-color: burlywood;
    }

    #main-title {
        padding: 24px;
        text-align: center;
        color: white;
    }

    #blogs-list {
        display: grid;
        justify-content: center;
        padding-left: 25%;
        padding-right: 25%;
        padding-bottom: 32px;
        grid-template-columns: 1fr;
        gap: 16px;
    }

    #blog-item {
        max-width: calc(1920px / 2);
        text-decoration: none;
    }

    #blog-item-content {
        height: 128px;
        background-color: deeppink;
    }

    #blog-item-title {
        padding-top: 16px;
        padding-left: 16px;
        color: white;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    #blog-item-description {
        padding-left: 16px;
        padding-right: 16px;
        color: lightgray;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    #blog-item-tags {
        display: flex;
        padding-top: 8px;
        padding-left: 16px;
    }

    #blog-item-tags h4 {
        width: max-content;
        padding: 4px;
        margin-right: 8px;
        color: white;
        background-color: darkblue;
    }

    #no-blogs-container {
        color: black;
        text-align: center;
        font-size: 24px;
        font-weight: 600;
    }

    @media (max-width: 1024px) {
        #blog-item {
            max-width: 95vw;
        }

        #blog-item-description {
            min-width: 85vw;
        }
    }
</style>
<script setup>
    import { ref, computed } from "vue";
    import { useRoute } from "vue-router";
    import { marked } from "marked";
    import Blogs from "../assets/blogs.json";

    const route = useRoute();
    
    const blog = ref({});
    const markdown = ref("");
    const blogExists = ref(false);

    for (var i = 0; i < Blogs.length; i++) {
        if (Blogs[i].id == route.query.id) {
            blog.value = Blogs[i];
            break;
        }
    }

    import(`../assets/blogs/${blog.value.id}.md`).then(module => {
            markdown.value = module.default || "";
            blogExists.value = true;
    }).catch(err => {
            console.warn(`Markdown source was not found (${route.query.id}.md)`);
            console.error(err);
    });

    const getMarkdownRender = computed(() => {
        return marked(markdown.value);
    });
</script>

<template>
    <div id="container">
        <div v-if="blogExists" class="markdown">
            <RouterLink to="/blogs" class="go-back">&LeftArrow; {{ $t("go-back") }}</RouterLink>
            <div>
                <h1 class="meta-title">{{ blog.title }}</h1>
                <hr class="meta-separator">
            </div>
            <div class="render" v-html="getMarkdownRender"></div>
        </div>
        <div v-else class="not-found">
            <h1 class="not-found-title">{{ $t("blog-not-found-title") }}</h1>
            <h3 class="not-found-description">{{ $t("blog-not-found-description") }}</h3>
        </div>
    </div>
</template>

<style scoped>
    #container {
        display: flex;
        justify-content: center;
        background-color: green;
    }

    .markdown {
        width: calc(1920px / 2);
        padding-top: 16px;
        background-color: mediumslateblue;
    }

    .go-back {
        margin-left: 16px;
        color: white;
        font-size: 16px;
        text-decoration: none;
    }

    .meta-title {
        font-size: 48px;
        margin-top: 16px;
        margin-left: 16px;
    }

    .meta-separator {
        border: 0.1rem solid lightgray;
        margin: 8px 16px 16px 16px;
    }

    .render {
        margin-left: 24px;
    }

    .not-found {
        align-self: center;
        text-align: center;
    }

    .not-found-title {
        font-size: 3rem;
    }

    .not-found-description {
        font-size: 2rem;
    }

    @media (max-width: calc(1920px / 2)) {
        .markdown {
            width: 100%;
        }
    }

    @media (max-width: 45rem) {
        .not-found-title {
            font-size: xx-large;
        }

        .not-found-description {
            font-size: large;
        }
    }

    @media (max-width: 30rem) {
        .not-found-title {
            font-size: large;
        }

        .not-found-description {
            font-size: medium;
        }
    }
</style>

<style>
    img {
        width: 100%;
        height: 100%;
    }
    
    pre {
        overflow: auto;
        white-space: nowrap;
        color: white;
        background-color: darkslategray;
    }

    .render > * {
        word-wrap: break-word;
        margin-right: 16px;
        margin-bottom: 16px;
        max-width: 100%;
    }
</style>
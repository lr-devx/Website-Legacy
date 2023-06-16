<script setup>
    import { onMounted, ref, computed } from "vue";
    import { useRoute } from "vue-router";
    import { marked } from "marked";
    import Blogs from "../assets/blogs.json";

    const route = useRoute();
    
    const blog = ref({});
    const markdown = ref("");
    const container = ref(null);
    
    for (var i = 0; i < Blogs.length; i++) {
        if (Blogs[i].id == route.name) {
            blog.value = Blogs[i];
            break;
        }
    }
    
    try {
        import(`../assets/blogs/${blog.value.id}.md`).then(module => {
            markdown.value = module.default || "";
        });
    } catch { }

    const getMarkdownRender = computed(() => {
        return marked(markdown.value);
    });

    onMounted(() => {
        container.value.style.minHeight = `${document.documentElement.clientHeight - (80 + 64)}px`;
    });

    document.title = `Alian/DEAD - Blogs`;
</script>

<template>
    <div id="container" ref="container">
        <div id="md-container">
            <RouterLink to="/blogs" id="go-back">&LeftArrow; Go back</RouterLink>
            <div id="meta-container">
                <h1 id="meta-title">{{ blog.title }}</h1>
                <hr id="separator">
            </div>
            <div id="main" v-html="getMarkdownRender"></div>
        </div>
    </div>
</template>

<style scoped>
    #container {
        display: flex;
        justify-content: center;
        background-color: green;
    }

    #md-container {
        width: calc(1920px / 2);
        padding-top: 16px;
        background-color: mediumslateblue;
    }

    #go-back {
        margin-left: 16px;
        color: white;
        font-size: 16px;
        text-decoration: none;
    }

    #meta-title {
        font-size: 48px;
        margin-top: 16px;
        margin-left: 16px;
    }

    #separator {
        border: 0.1rem solid lightgray;
        margin: 8px 16px 16px 16px;
    }

    #main {
        margin-left: 24px;
    }

    @media (max-width: calc(1920px / 2)) {
        #md-container {
            width: 100%;
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

    #main > * {
        word-wrap: break-word;
        margin-right: 16px;
        margin-bottom: 16px;
        max-width: 100%;
    }
</style>
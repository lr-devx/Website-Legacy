<template>
    <div id="container">
        <div class="project-details" v-if="projectExists && hasInitialized">
            <div class="head-banner">
                <img alt="banner" class="banner" :src="getImageSrc(project.banner)" onerror="this.src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII='"/>
                <div class="icon-ghost">
                    <img alt="icon" class="icon" :src="getImageSrc(project.icon)" onerror="this.src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII='"/>
                </div>
            </div>
            <a class="project-link-top" :href="project['link-url']">{{ project["link-title"] }}</a>
            <div class="main-content">
                <h1 class="project-name">{{ project.name }}</h1>
                <h2 class="project-desc">{{ project.desc }}</h2>
                <h3 class="project-long-desc">{{ project["long-desc"] }}</h3>
            </div>
            <a class="project-link-bottom" :href="project['link-url']">{{ project["link-title"] }}</a>
        </div>
        <div v-else-if="hasInitialized" class="not-found">
            <h1 class="not-found-title">{{ $t("project-not-found-title") }}</h1>
            <h3 class="not-found-description">{{ $t("project-not-found-description") }}</h3>
        </div>
        <div v-else class="not-found">
            <h1 class="not-found-title">{{ $t("loading") }}</h1>
        </div>
    </div>
</template>

<script setup>
    import { ref } from "vue";
    import { useRoute } from "vue-router";

    const route = useRoute();
    
    const project = ref({});
    const projectExists = ref(false);
    const hasInitialized = ref(false);

    import(`@/assets/projects/${route.query.id}.json`).then(module => {
            project.value = module.default || {};
            projectExists.value = true;
            hasInitialized.value = true;
    }).catch(err => {
            hasInitialized.value = true;
            console.warn(`Project details were not found (${route.query.id}.json)`);
            console.error(err);
    });

    function getImageSrc(name) {
        return `/static/${name}`;
    }
</script>

<style scoped>
    #container {
        background-color: mediumorchid;
        display: flex;
        justify-content: center;
    }

    .project-details {
        width: 100%;
        padding-bottom: 2rem;
    }

    .banner {
        background-color: black;
        height: 256px;
    }

    .icon-ghost {
        background-color: mediumorchid;
        width: 16rem;
        height: 16rem;
        border-radius: 4rem;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 192px;
        margin-left: 6rem;
    }

    .icon {
        background-color: black;
        border-radius: 4rem;
        position: absolute;
        width: 15rem;
        height: 15rem;
    }

    .project-link-top {
        background-color: #f0f0f0;
        color: black;
        width: 192px;
        text-align: center;
        text-decoration: none;
        border: none;
        float: right;
        margin: 32px;
        padding-top: 12px;
        padding-bottom: 12px;
    }

    .project-link-top:hover {
        background-color: red;
    }

    .project-link-bottom {
        display: none;
    }
    
    .main-content {
        margin-top: 128px;
        margin-left: 64px;
        margin-right: 64px;
        background-color: rgba(0, 0, 0, 0.1);
    }

    .project-name {
        font-size: 64px;
    }

    .project-long-desc {
        margin-top: 8px;
    }

    h1, h2, h3 {
        color: white;
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

    @media (max-width: 960px) {
        .head-banner {
            display: flex;
            justify-content: center;
        }

        .icon-ghost {
            margin-left: 0;
        }

        .project-link-top {
            display: none;
        }

        .project-link-bottom {
            background-color: #f0f0f0;
            color: black;
            display: block;
            margin-top: 16px;
            margin-left: auto;
            margin-right: auto;
            width: 192px;
            padding-top: 12px;
            padding-bottom: 12px;
            text-decoration: none;
            text-align: center;
            align-self: center;
            border: none;
        }

        .project-link-bottom:hover {
            background-color: red;
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
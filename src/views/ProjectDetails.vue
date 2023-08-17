<script setup>
    import { ref } from "vue";
    import { useRoute } from "vue-router";

    const route = useRoute();
    
    const project = ref({});
    const projectExists = ref(false);

    import(`../assets/projects/${route.query.id}.json`).then(module => {
            project.value = module.default || {};
            projectExists.value = true;
    }).catch(err => {
            console.warn(`Project details were not found (${route.query.id}.json)`);
            console.error(err);
    });

    function getImageSrc(type, name) {
        return new URL(`/src/assets/${type}/${name}`, import.meta.url);
    }
</script>

<template>
    <div id="container">
        <div class="project-details" v-if="projectExists">
            <div class="head-banner">
                <img class="banner" :src="getImageSrc('banners', project.banner)"/>
                <div class="icon-ghost">
                    <img class="icon" :src="getImageSrc('icons', project.icon)"/>
                </div>
            </div>
            <button class="project-link-top">{{ project["link-title"] }}</button>
            <div class="main-content">
                <h1 class="project-name">{{ project.name }}</h1>
                <h2 class="project-desc">{{ project.desc }}</h2>
                <h3 class="project-long-desc">{{ project["long-desc"] }}</h3>
            </div>
            <button class="project-link-bottom">{{ project["link-title"] }}</button>
        </div>
        <div v-else class="not-found">
            <h1 class="not-found-title">{{ $t("project-not-found-title") }}</h1>
            <h3 class="not-found-description">{{ $t("project-not-found-description") }}</h3>
        </div>
    </div>
</template>

<style scoped>
    #container {
        display: flex;
        justify-content: center;
        background-color: mediumorchid;
    }

    .project-details {
        padding-bottom: 2rem;
    }

    .banner {
        height: 256px;
        width: 100%;
    }

    .icon-ghost {
        position: absolute;
        background-color: mediumorchid;
        width: 16rem;
        height: 16rem;
        margin-left: 6rem;
        top: 192px;
        border-radius: 4rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .icon {
        position: absolute;
        width: 15rem;
        height: 15rem;
        border-radius: 4rem;
    }

    .project-link-top {
        float: right;
        margin: 32px;
        width: 192px;
        height: 48px;
        text-align: center;
        border: none;
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

    @media (max-width: 45rem) {
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
            display: block;
            margin-top: 16px;
            margin-left: auto;
            margin-right: auto;
            width: 192px;
            height: 48px;
            text-align: center;
            border: none;
        }

        .project-link-bottom:hover {
            background-color: red;
        }

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
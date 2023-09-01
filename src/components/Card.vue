<template>
    <div id="card">
        <div class="head-banner">
            <img alt="banner" :src="getImageSrc(banner)"/>
            <div class="icon-ghost">
                <img alt="icon" class="icon" :src="getImageSrc(icon)"/>
            </div>
        </div>
        <h1 class="name">{{ name }}</h1>
        <h3 class="description">{{ description }}</h3>
        <RouterLink class="view-details" v-if="showDownload == 'true'" :to="{path: 'projects/details', query: { id: projectId }}">
            {{ $t("view-details") }}
        </RouterLink>
    </div>
</template>

<script setup>
    import { RouterLink } from 'vue-router';

    defineProps({
        name: String,
        projectId: String,
        icon: String,
        banner: String,
        description: String,
        showDownload: String
    });

    function getImageSrc(name) {
        return `/static/${name}`;
    }
</script>

<style scoped>
    #card {
        background-color: gold;
        width: 20rem;
        height: auto;
        margin: auto;
    }

    .head-banner {
        display: flex;
    }

    .icon-ghost {
        background-color: gold;
        width: 8rem;
        height: 8rem;
        margin: 1.5rem;
        border-radius: 4rem;
        display: flex;
        position: absolute;
        align-items: center;
        justify-content: center;
    }

    .icon {
        position: absolute;
        width: 7rem;
        height: 7rem;
        border-radius: 4rem;
    }

    .name {
        margin-top: 1.5rem;
        margin-left: 1.5rem;
    }

    .description {
        word-wrap: break-word;
        margin-left: 1.5rem;
        margin-right: 1.5rem;
        padding-bottom: 1rem;
    }

    .view-details {
        background-color: #f0f0f0;
        text-decoration: none;
        text-align: center;
        width: 90%;
        display: block;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 0.5rem;
        padding: 0.5rem;
    }

    .view-details:hover {
        color: white;
        background-color: red;
    }
</style>
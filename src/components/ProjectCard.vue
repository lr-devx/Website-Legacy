<script setup>
    defineProps({
        name: String,
        icon: String,
        banner: String,
        description: String,
        showDownload: String
    });

    function getImageSrc(type, name) {
        return new URL(`/src/assets/${type}/${name}`, import.meta.url);
    }
</script>

<template>
    <div id="card">
        <div class="head-banner">
            <img :src="getImageSrc('banners', banner)"/>
            <div class="icon-ghost">
                <img class="icon" :src="getImageSrc('icons', icon)"/>
            </div>
        </div>
        <h1 class="name">{{ name }}</h1>
        <h3 class="description">{{ description }}</h3>
        <button class="view-details" v-if="showDownload == 'true'">{{ $t("view-details") }}</button>
    </div>
</template>

<style scoped>
    #card {
        background-color: gold;
        padding-bottom: 1rem;
        width: 20rem;
        height: auto;
        margin: auto;
    }

    .head-banner {
        display: flex;
    }

    .icon-ghost {
        position: absolute;
        background-color: gold;
        width: 8rem;
        height: 8rem;
        margin: 1.5rem;
        border-radius: 4rem;
        display: flex;
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
    }

    .view-details {
        width: 95%;
        border: 0;
        padding: 8px;
        display: block;
        margin-top: 16px;
        margin-left: auto;
        margin-right: auto;
    }

    .view-details:hover {
        background-color: red;
    }
</style>
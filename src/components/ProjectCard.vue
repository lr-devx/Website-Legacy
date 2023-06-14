<script setup>
    defineProps({
        name: String,
        icon: String,
        banner: String,
        description: String
    });

    function getImageSrc(type, name) {
        return new URL(`/src/assets/${type}/${name}`, import.meta.url);
    }
</script>

<template>
    <div id="container">
        <div id="head-banner">
            <img id="banner" :src="getImageSrc('banners', banner)"/>
            <div id="icon-ghost">
                <img id="icon" :src="getImageSrc('icons', icon)"/>
            </div>
        </div>
        <h1 id="name">{{ name }}</h1>
        <h3 id="description">{{ description }}</h3>
    </div>
</template>

<style scoped>
    #container {
        background-color: gold;
        width: 320px;
        padding-bottom: 16px;
        height: auto;
        margin: auto;
    }

    #head-banner {
        display: flex;
    }

    #banner {
        width: 100%;
        height: 128px;
    }

    #icon-ghost {
        position: absolute;
        background-color: gold;
        width: 128px;
        height: 128px;
        margin: 24px;
        border-radius: 64px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    #icon {
        position: absolute;
        width: 112px;
        height: 112px;
        border-radius: 64px;
    }

    #name {
        margin-top: 24px;
        margin-left: 24px;
    }

    #description {
        word-wrap: break-word;
        margin-left: 24px;
        margin-right: 24px;
    }
</style>
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
        width: 20rem;
        padding-bottom: 1rem;
        height: auto;
        margin: auto;
    }

    #head-banner {
        display: flex;
    }

    #banner {
        width: 100%;
        height: 8rem;
    }

    #icon-ghost {
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

    #icon {
        position: absolute;
        width: 7rem;
        height: 7rem;
        border-radius: 4rem;
    }

    #name {
        margin-top: 1.5rem;
        margin-left: 1.5rem;
    }

    #description {
        word-wrap: break-word;
        margin-left: 1.5rem;
        margin-right: 1.5rem;
    }
</style>
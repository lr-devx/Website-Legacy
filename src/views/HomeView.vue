<script setup>
    import Slider from "../components/Slider.vue";
</script>

<template>
    <Slider/>
    <div id="container">
        <h1 id="main-title">{{ $t("whoami") }}</h1>
        <h3 id="main-description">
            <p>{{ $t("whoami-description-1") }}</p>
            <p>{{ $t("whoami-description-2") }}</p>
            <br>
            <p>{{ $t("whoami-description-3") }}</p>
        </h3>
    </div>
</template>

<style scoped>
    #container {
        max-width: 1920px;
        margin: auto;
        background-color: saddlebrown;
    }

    #main-title {
        color: white;
        padding-top: 32px;
        padding-bottom: 16px;
        text-align: center;
    }

    #main-description {
        color: lightgray;
        word-wrap: break-word;
        text-align: center;
    }
</style>
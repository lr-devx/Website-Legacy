<script setup>
    import Slider from "../components/Slider.vue";
</script>

<template>
    <Slider/>
    <div id="container">
        <h1 id="main-title">Whoami?</h1>
        <h3 id="main-description">
            <p>According to the Windows&reg; Command Prompt I'm "laptop\aliandead".</p>
            <p>But in reality, I'm a french developer with 4 years of experience.</p>
            <br>
            <p>I made many projects over the years and gained a decent amount of knowledge in Computer Science.</p>
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
        padding-top: 64px;
        padding-bottom: 16px;
        text-align: center;
    }

    #main-description {
        color: lightgray;
        word-wrap: break-word;
        text-align: center;
    }
</style>
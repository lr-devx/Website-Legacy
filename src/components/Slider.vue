<script setup>
    // TODO
</script>

<template>
    <div id="slider-container">
        <div id="clickable-previous" />
        <div id="slider-data">
            <h1 id="slide-title">Title</h1>
            <h3 id="slide-description">Description</h3>
            <button id="slide-button">Button</button>
        </div>
        <div id="clickable-next" />
    </div>
</template>

<style scoped>
    #slider-container {
        width: 100%;
        height: 32rem;
        max-width: 1920px;
        margin: auto;
        overflow: hidden;
        display: flex;
        align-items: center;
        background-color: blue;
    }

    #slider-data {
        flex: 1;
        background-color: green;
    }

    #clickable-previous {
        width: 12rem;
        height: 32rem;
        background-color: deeppink;
    }

    #clickable-next {
        width: 12rem;
        height: 32rem;
        background-color: purple;
    }

    #slide-title {
        color: white;
        font-size: 64px;
    }

    #slide-description {
        color: lightgray;
        font-weight: 600;
        font-size: 18px;
        word-wrap: break-word;
        width: 500px;
        margin-top: 0.25vh;
        margin-left: 0.25vw;
    }

    #slide-button {
        width: 12rem;
        height: 3rem;
        border: 0;
        background-color: white;
        margin-top: 2.5vh;
    }

    #slide-button:hover {
        background-color: red;
    }

    @media (max-width: 720px) {
        #slide-title {
            text-align: center;
        }

        #slide-description {
            text-align: center;
            width: auto;
        }

        #clickable-next {
            display: none;
        }

        #clickable-previous {
            display: none;
        }

        #slide-button {
            display: block;
            margin-left: auto;
            margin-right: auto;
        }
    }
</style>
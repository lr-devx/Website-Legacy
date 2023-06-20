<template>
    <div id="slide">
        <div class="slide-data">
            <h1 class="slide-title">{{ $t("slide-title") }}</h1>
            <h3 class="slide-description">{{ $t("slide-description") }}</h3>
            <button class="slide-button" @click="$router.push('/blogs')">{{ $t("slide-button") }}</button>
        </div>
    </div>
</template>

<style scoped>
    #slide {
        width: 100%;
        height: 36rem;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: blue;
    }

    .slide-data {
        max-width: 50%;
    }

    .slide-title {
        text-align: center;
        color: white;
        font-size: 3rem;
        transition: opacity 0.5s ease;
    }

    .slide-description {
        text-align: center;
        color: lightgray;
        font-weight: 600;
        font-size: 1.5rem;
        word-wrap: break-word;
        margin-top: 1rem;
        transition: opacity 0.5s ease;
    }

    .slide-button {
        width: 12rem;
        height: 3rem;
        border: 0;
        background-color: white;
        margin-top: 2rem;
        display: block;
        margin-left: auto;
        margin-right: auto;
    }

    .slide-button:hover {
        background-color: red;
    }

    @media (max-width: 45rem) {
        .slide-data {
            max-width: 75%;
        }
    }
</style>
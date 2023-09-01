<template>
    <div id="container">
        <div class="text-container">
            <h2 class="title">{{ $t("not-found-title") }}</h2>
            <h5 class="description">{{ $t("not-found-description") }}</h5>
        </div>
    </div>
</template>

<script setup />

<style scoped>
    #container {
        background-color: midnightblue;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .text-container {
        text-align: center;
    }

    .title {
        color: white;
        font-size: 3rem;
    }

    .description {
        color: lightgray;
        font-size: 2rem;
    }

    @media (max-width: 45rem) {
        .title {
            font-size: xx-large;
        }

        .description {
            font-size: large;
        }
    }

    @media (max-width: 30rem) {
        .title {
            font-size: large;
        }

        .description {
            font-size: medium;
        }
    }
</style>
<template>
    <div id="container">
        <h1 class="title">{{ $t("products-unavailable") }}</h1>
    </div>
</template>

<script setup />

<style scoped>
    #container {
        background-color: darkslateblue;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .title {
        color: white;
        font-size: 3rem;
        margin: 10%;
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
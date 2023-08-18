<script setup>
</script>

<template>
    <div id="container">
        <h1 class="title">{{ $t("products-unavailable") }}</h1>
    </div>
</template>

<style scoped>
    #container {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        background-color: darkslateblue;
    }

    .title {
        font-size: 3rem;
        color: white;
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
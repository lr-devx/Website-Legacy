<template>
    <div id="container">
        <div class="text-container">
            <h2 class="title">{{ $t("not-found-title") }}</h2>
            <h5 class="description">{{ $t("not-found-description") }}</h5>
        </div>
    </div>
</template>

<style scoped>
    #container {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: midnightblue;
    }
    
    .text-container {
        text-align: center;
    }

    .title {
        font-size: 3rem;
        color: white;
    }

    .description {
        
        font-size: 2rem;
        color: lightgray;
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
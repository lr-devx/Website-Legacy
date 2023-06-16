<script setup>
    import {onMounted, ref } from "vue";
    const container = ref(null);

    onMounted(() => {
        container.value.style.minHeight = `${document.documentElement.clientHeight - (80 + 64)}px`;
    });

    document.title = "Alian/DEAD - Not Found";
</script>

<template>
    <div id="container" ref="container">
        <div id="text-container">
            <h2>{{ $t("not-found-title") }}</h2>
            <h5>{{ $t("not-found-description") }}</h5>
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
    
    #text-container {
        text-align: center;
    }

    h2 {
        font-size: 3rem;
        color: white;
    }

    h5 {
        
        font-size: 2rem;
        color: lightgray;
    }

    @media (max-width: 45rem) {
        h2 {
            font-size: xx-large;
        }

        h5 {
            font-size: large;
        }
    }

    @media (max-width: 30rem) {
        h2 {
            font-size: large;
        }

        h5 {
            font-size: medium;
        }
    }
</style>
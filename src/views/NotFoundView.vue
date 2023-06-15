<script setup>
    import { onMounted, ref } from "vue";
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
        max-width: 1920px;
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: midnightblue;
    }
    
    #text-container {
        text-align: center;
    }

    h2 {
        font-size: 48px;
        color: white;
    }

    h5 {
        
        font-size: 32px;
        color: lightgray;
    }

    @media (max-width: 720px) {
        h2 {
            font-size: xx-large;
        }

        h5 {
            font-size: large;
        }
    }

    @media (max-width: 480px) {
        h2 {
            font-size: large;
        }

        h5 {
            font-size: medium;
        }
    }
</style>
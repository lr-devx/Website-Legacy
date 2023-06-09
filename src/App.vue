<template>
    <Navigation />
</template>

<script>
    import Navigation from "./components/Navigation.vue"

    export default {
        name: "App",
        components: {
            Navigation
        }
    }
</script>

<style>
    * {
        margin: 0;
    }

    body {
        background-color: black;
    }

    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
</style>
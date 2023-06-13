<template>
    <Navigation />
    <router-view />
</template>

<script>
    import Navigation from "./components/NavigationBar.vue"

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
        font-family: "Segoe UI";
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
</style>
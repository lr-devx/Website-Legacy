<template>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <ManyWorld msg="Hello to many world"/>
</template>

<script>
    import HelloWorld from './components/HelloWorld.vue'
    import ManyWorld from "./components/ManyWorld.vue"

    export default {
        name: 'App',
        components: {
            HelloWorld,
            ManyWorld
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #e5d9d9;
        margin-top: 60px;
    }

    body {
        background-color: black;
    }
</style>
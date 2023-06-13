<script setup>
    import navItems from "../assets/navbar.json";
    import { ref } from 'vue'

    const isNavbarShown = ref(false);
    window.addEventListener('resize', function(e) {
        if (window.innerWidth > 600 && isNavbarShown.value)
            isNavbarShown.value = false;
    });
</script>

<template>
    <div id="container">
        <h1 id="main-title">Alian/DEAD</h1>
        <div id="navbar">
            <ul id="navbar-items">
                <li v-for="item in navItems" :key="item.name">
                    <a :href="item.path">{{ item.name }}</a>
                </li>
            </ul>
            <input id="navbar-switcher" type="checkbox" @click="isNavbarShown = !isNavbarShown" :checked="isNavbarShown"/>
        </div>
    </div>
    <label id="navbar-menu" v-if="isNavbarShown">
        <li v-for="item in navItems" :key="item.name">
            <a :href="item.path">{{ item.name }}</a>
        </li>
    </label>
</template>

<style scoped>
    #container {
        height: 5rem;
        max-width: 1920px;
        margin: auto;
        display: flex;
        align-items: center;
        background-color: red;
    }

    #main-title {
        padding-left: 33px;
    }

    #navbar {
        height: 5rem;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        background-color: orangered;
    }

    #navbar-items {
        list-style: none;
        margin: 2rem;
        display: flex;
    }

    #navbar-items li {
        margin-right: 10px;
    }

    #navbar-items a {
        text-decoration: none;
    }

    #navbar-switcher {
        width: 48px;
        height: 48px;
        margin-right: 24px;
        display: none;
    }

    #navbar-menu {
        width: 100%;
        background-color: aquamarine;
    }

    #navbar-menu {
        position: absolute;
        list-style: none;
    }

    #navbar-menu a {
        text-decoration: none;
        width: 100%;
        height: 48px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: yellow;
    }

    @media (max-width: 600px) { 
        #navbar-items {
            display: none;
        }

        #navbar-switcher {
            display: block;
        }
    }
</style>
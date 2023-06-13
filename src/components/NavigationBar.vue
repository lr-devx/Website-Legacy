<template>
    <div id="container">
        <h1 id="main-title">Alian/DEAD</h1>
        <div id="navbar">
            <ul id="navbar-items">
                <li v-for="item in navItems" :key="item.name">
                    <a :href="item.path">{{ item.name }}</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import navItems from "../assets/navbar.json";

    export default {
        name: "NavigationBar",
        data() {
            return {
                navItems: navItems
            }
        }
    }
</script>

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
</style>
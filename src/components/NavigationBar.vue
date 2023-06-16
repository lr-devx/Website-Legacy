<script setup>
    import navItems from "../assets/navbar.json";
    import { ref } from "vue";

    const isNavbarShown = ref(false);
    const navBarButton = ref(null);

    window.addEventListener("pagehide", function() {
        isNavbarShown.value = false;
    });

    window.addEventListener("resize", function() {
        if (window.innerWidth > 720 && isNavbarShown.value)
            isNavbarShown.value = false;
    });

    const navigation = ref(null);
    const backButton = ref(null);

    window.addEventListener("scroll", () => {
        if (window.innerWidth < 720 || navigation.value == null) {
            return;
        }
        
        var footer = document.getElementsByClassName("footer")[0];

        var content = document.documentElement;
        var currentScroll = window.innerHeight + content.scrollTop;
        var scroll = content.scrollHeight;
        var baseBottom = 16;

        if (content.scrollTop > navigation.value.clientHeight) {
            backButton.value.style.display = "block";
        } else {
            backButton.value.style.display = "none";
        }

        if (currentScroll > scroll - footer.clientHeight) {
            backButton.value.style.bottom = `${footer.clientHeight - (scroll - currentScroll) + baseBottom}px`;
        } else {
            backButton.value.style.bottom = `${baseBottom}px`;
        }
    });

    function backToTop() {
        document.documentElement.scrollTop = 0;
    }
</script>

<template>
    <div id="navbar" ref="navigation">
        <a id="main-title" href="/">Alian/DEAD</a>
        <ul id="navbar-items">
            <li v-for="item in navItems" :key="item.name">
                <a :href="item.path">{{ $t(item.name) }}</a>
            </li>
            <button id="shiny-button" @click="$router.push('/pricing')">{{ $t("pricing") }}</button>
        </ul>
        <input id="navbar-switcher" ref="navBarButton" type="checkbox" @click="isNavbarShown = !isNavbarShown" :checked="isNavbarShown"/>
    </div>
    <label id="navbar-menu" v-if="isNavbarShown">
        <li v-for="item in navItems" :key="item.name">
            <a :href="item.path">{{ $t(item.name) }}</a>
        </li>
        <li id="shiny-item">
            <a href="/pricing">{{ $t("pricing") }}</a>
        </li>
    </label>
    <button id="back-to-top" ref="backButton" @click="backToTop">Back to top</button>
</template>

<style scoped>
    #main-title {
        font-size: 2rem;
        font-weight: Bold;
        margin-left: 2rem;
        color: black;
        text-decoration: none;
    }

    #navbar {
        height: 5rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        background-color: orangered;
    }

    #navbar-items {
        list-style: none;
        margin-right: 2rem;
        display: flex;
        align-items: center;
        justify-self: flex-end;
    }

    #navbar-items li {
        margin-right: 1rem;
    }

    #navbar-items a {
        text-decoration: none;
    }

    #shiny-button {
        margin-left: 0.5rem;
        width: 9rem;
        height: 3rem;
        border: 0;
    }

    #shiny-button:hover {
        background-color: red;
    }

    #navbar-switcher {
        width: 3rem;
        height: 3rem;
        margin-right: 1.5rem;
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
        height: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: yellow;
    }

    #back-to-top {
        width: 8rem;
        height: 2rem;
        position: fixed;
        display: none;
        bottom: 1rem;
        right: 1rem;
        border: 0;
    }

    @media (max-width: 45rem) { 
        #navbar-items {
            display: none;
        }

        #back-to-top {
            display: none;
        }

        #navbar-switcher {
            display: block;
            justify-self: flex-end;
        }
    }
</style>
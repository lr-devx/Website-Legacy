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
        if (window.innerWidth < 720) {
            return;
        }
        
        var footer = document.getElementsByClassName("footer")[0];

        var content = document.documentElement;
        var currentScroll = window.innerHeight + content.scrollTop;
        var scroll = content.scrollHeight;
        var baseBottom = 10;

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
        font-size: 32px;
        font-weight: Bold;
        margin-left: 33px;
        color: black;
        text-decoration: none;
    }

    #navbar {
        height: 5rem;
        max-width: 1920px;
        margin: auto;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
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
        margin-right: 10px;
    }

    #navbar-items a {
        text-decoration: none;
    }

    #shiny-button {
        margin-left: 12px;
        width: 128px;
        height: 40px;
        border: 0;
    }

    #shiny-button:hover {
        background-color: red;
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

    #back-to-top {
        width: 128px;
        height: 32px;
        position: fixed;
        display: none;
        bottom: 10px;
        right: 10px;
        border: 0;
    }

    @media (max-width: 720px) { 
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
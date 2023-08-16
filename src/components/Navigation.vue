<script setup>
    import { useRoute, RouterLink } from "vue-router";
    import navItems from "../assets/navbar.json";
    import { watch, ref } from "vue";
    
    const route = useRoute();

    const isNavbarShown = ref(false);
    const navBarButton = ref(null);
    const navigation = ref(null);
    const backButton = ref(null);

    watch(() => route.fullPath, () => {
        isNavbarShown.value = false;
    });

    window.addEventListener("resize", function() {
        if (window.innerWidth > 720 && isNavbarShown.value)
            isNavbarShown.value = false;
    });

    window.addEventListener("scroll", () => {
        if (backButton.value == null)  {
            return;
        }
        
        if (window.innerWidth < 720 || navigation.value == null) {
            backButton.value.style.display = "none";
            return;
        }
        
        var footer = document.getElementById("footer");

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
        <RouterLink class="main-title" to="/">Alian/DEAD</RouterLink>
        <ul class="navbar-items">
            <li v-for="item in navItems" class="normal-link" :key="item.name">
                <RouterLink :to="item.path">{{ $t(item.name) }}</RouterLink>
            </li>
            <RouterLink to="/pricing">
                <li class="shiny-link">{{ $t("pricing") }}</li>
            </RouterLink>
        </ul>
        <input class="navbar-switcher" ref="navBarButton" type="checkbox" @click="isNavbarShown = !isNavbarShown" :checked="isNavbarShown"/>
    </div>
    <label class="navbar-menu" v-if="isNavbarShown">
        <li v-for="item in navItems" :key="item.name">
            <RouterLink :to="item.path">{{ $t(item.name) }}</RouterLink>
        </li>
        <li class="shiny-item">
            <RouterLink to="/pricing">{{ $t("pricing") }}</RouterLink>
        </li>
    </label>
    <button class="back-to-top" ref="backButton" @click="backToTop">{{ $t("back-to-top") }}</button>
</template>

<style scoped>
    #navbar {
        height: 5rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        background-color: orangered;
    }

    .main-title {
        font-size: 2rem;
        font-weight: Bold;
        margin-left: 2rem;
        color: black;
        text-decoration: none;
    }

    .navbar-items {
        list-style: none;
        margin-right: 2rem;
        display: flex;
        align-items: center;
        justify-self: flex-end;
    }

    .normal-link {
        width: max-content;
        margin-right: 1rem;
    }

    .navbar-items a {
        min-width: 100px;
        text-decoration: none;
    }

    
    .navbar-items a:hover {
        color: black;
    }

    .shiny-link {
        color: black;
        background-color: #f0f0f0;
        font-size: 13.5px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 8.5rem;
        height: 2.5rem;
        border: 0;
    }

    .shiny-link:hover {
        cursor: default;
        user-select: none;
        background-color: red;
    }

    .navbar-switcher {
        width: 3rem;
        height: 3rem;
        margin-right: 1.5rem;
        display: none;
    }

    .navbar-menu {
        width: 100%;
        position: absolute;
        list-style: none;
        z-index: 9;
    }

    .navbar-menu a {
        text-decoration: none;
        width: 100%;
        height: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: yellow;
    }

    .back-to-top {
        width: 8rem;
        height: 2rem;
        position: fixed;
        display: none;
        bottom: 1rem;
        right: 1rem;
        border: 0;
    }

    .back-to-top:hover {
        background-color: red;
    }

    @media (max-width: 45rem) { 
        .navbar-items {
            display: none;
        }

        .navbar-switcher {
            display: block;
            justify-self: flex-end;
        }

        .back-to-top {
            display: none;
        }
    }
</style>
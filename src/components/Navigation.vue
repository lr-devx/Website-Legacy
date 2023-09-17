<template>
    <div id="navbar" ref="navigation">
        <RouterLink class="main-title" to="/">Alian/DEAD</RouterLink>
        <ul class="navbar-items">
            <li class="normal-link">
                <RouterLink to="/">{{ $t("home") }}</RouterLink>
            </li>
            <li class="normal-link">
                <RouterLink to="/blogs">{{ $t("blogs") }}</RouterLink>
            </li>
            <li class="normal-link">
                <RouterLink to="/projects">{{ $t("projects") }}</RouterLink>
            </li>
            <li class="normal-link">
                <RouterLink to="/unveiled-mystery">{{ $t("the-unknown") }}</RouterLink>
            </li>
            <RouterLink to="/pricing">
                <li class="shiny-link">{{ $t("pricing") }}</li>
            </RouterLink>
        </ul>
        <input class="navbar-switcher" ref="navBarButton" type="checkbox" @click="isNavbarShown = !isNavbarShown" :checked="isNavbarShown"/>
    </div>
    <label class="navbar-menu" v-if="isNavbarShown" ref="navigationMobile">
        <li>
            <RouterLink to="/">{{ $t("home") }}</RouterLink>
        </li>
        <li>
            <RouterLink to="/blogs">{{ $t("blogs") }}</RouterLink>
        </li>
        <li>
            <RouterLink to="/projects">{{ $t("projects") }}</RouterLink>
        </li>
        <li>
            <RouterLink to="/unveiled-mystery">{{ $t("the-unknown") }}</RouterLink>
        </li>
        <li class="shiny-item">
            <RouterLink to="/pricing">{{ $t("pricing") }}</RouterLink>
        </li>
    </label>
    <button class="back-to-top" ref="backButton" @click="backToTop">{{ $t("back-to-top") }}</button>
</template>

<script setup>
    import { useRoute, RouterLink } from "vue-router";
    import { watch, ref } from "vue";
    
    const route = useRoute();

    const isNavbarShown = ref(false);
    const navBarButton = ref(null);
    const navigation = ref(null);
    const navigationMobile = ref(null);
    const backButton = ref(null);

    watch(() => route.fullPath, () => {
        isNavbarShown.value = false;
    });

    window.addEventListener("click", (e) => {
        if (!navigationMobile || !isNavbarShown.value) {
            return;
        }

        if (e.target.className == "navbar-switcher") {
            return;
        }

        let currentElement = e.target;
        let isChildElement = false;

        while (currentElement !== null) {
            if (currentElement === navigationMobile.value) {
                isChildElement = true;
            }

            currentElement = currentElement.parentNode;
        }

        if (!isChildElement) {
            isNavbarShown.value = false;
        }
    });

    window.addEventListener("resize", function() {
        if (window.innerWidth > 720 && isNavbarShown.value) {
            isNavbarShown.value = false;
        }
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

<style scoped>
    #navbar {
        background-color: rgba(0, 0, 0, 0.5);
        height: 5rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
    }

    .main-title {
        color: white;
        font-size: 2rem;
        font-weight: Bold;
        text-decoration: none;
        margin-left: 2rem;
    }

    .navbar-items {
        display: flex;
        align-items: center;
        justify-self: flex-end;
        margin-right: 2rem;
        list-style: none;
    }

    .normal-link {
        width: max-content;
        margin-right: 1rem;
    }

    .navbar-items a {
        color: white;
        text-decoration: none;
        min-width: 100px;
    }

    .navbar-items a:hover {
        color: gray;
    }

    .shiny-link {
        color: black;
        background-color: #f0f0f0;
        font-size: 13.5px;
        width: 8.5rem;
        height: 2.5rem;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .shiny-link:hover {
        background-color: gray;
        user-select: none;
    }

    .navbar-switcher {
        width: 3rem;
        height: 3rem;
        display: none;
        margin-right: 1.5rem;
    }

    .navbar-menu {
        width: 100%;
        position: absolute;
        list-style: none;
        z-index: 9;
    }

    .navbar-menu a {
        background-color: yellow;
        text-decoration: none;
        width: 100%;
        height: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .back-to-top {
        width: 8rem;
        height: 2rem;
        border: none;
        display: none;
        position: fixed;
        cursor: pointer;
        bottom: 1rem;
        right: 1rem;
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
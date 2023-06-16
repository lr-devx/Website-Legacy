<script setup>
    import { useI18n } from "vue-i18n";
    import { ref } from "vue"
    import supportedLanguages from "../assets/languages.json";
    import socialinks from "../assets/links.json";

    const i18n = useI18n();
    const selectedLanguage = ref(i18n.locale.value);
    const links = ref(socialinks);

    function changeLanguage(e) {
        i18n.locale.value = e.target.selectedOptions[0].value;
        localStorage.setItem("lang", i18n.locale.value);
    }
</script>

<template>
    <div id="container" class="footer">
        <select id="language-switch" v-model="selectedLanguage" @change="changeLanguage">
            <option v-for="language in supportedLanguages" :value="language.code">
                {{ language.name }}
            </option>
        </select>
        <h3 id="copyright"> {{ $t("copyright") }}</h3>
        <div id="external-items">
            <a target="_blank" :href="links.youtube">
                <i class="fa fa-youtube-play"></i>
            </a>
            <a target="_blank" :href="links.github">
                <i class="fa fa-github"></i>
            </a>
            <a target="_blank" :href="links.twitter">
                <i class="fa fa-twitter"></i>
            </a>
        </div>
    </div>
</template>

<style scoped>
    #container {
        padding-top: 1rem;
        padding-bottom: 1rem;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        align-items: center;
        background-color: darkcyan;
    }

    #language-switch {
        width: 8rem;
        height: 2rem;
        border: 0;
        appearance: none;
        text-align: center;
        margin-left: 1rem;
    }

    #language-switch option {
        border: 0;
    }

    #copyright {
        font-size: fit-content;
        margin-left: auto;
        margin-right: auto;
        color: white;
    }

    #external-items {
        margin-left: auto;
        display: flex;
        align-items: center;
    }

    #external-items a {
        text-decoration: none;
        margin-right: 1rem;
        font-size: 2rem;
        width: 2rem;
        height: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #external-items i {
        color: black;
    }

    #external-items i:hover {
        color: white;
    }

    @media (max-width: 66rem) {
        #container {
            display: block;
            padding-top: 1rem;
            padding-bottom: 1rem;
        }

        #language-switch {
            display: block;
            margin-left: auto;
            margin-right: auto;
        }

        #copyright {
            padding: 1rem;
            text-align: center;
        }

        #external-items {
            margin-bottom: 1rem;
            display: flex;
            justify-content: center;
        }
    }
</style>
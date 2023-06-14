<script setup>
    import { useI18n } from "vue-i18n";
    import { ref } from "vue"
    import supportedLanguages from "../assets/languages.json";

    const i18n = useI18n();
    const selectedLanguage = ref(i18n.locale.value);

    function changeLanguage(e) {
        i18n.locale.value = e.target.selectedOptions[0].value;
        localStorage.setItem("lang", i18n.locale.value);
    }
</script>

<template>
    <div id="container">
        <select id="language-switch" v-model="selectedLanguage" @change="changeLanguage">
            <option v-for="language in supportedLanguages" :value="language.code">
                {{ language.name }}
            </option>
        </select>
        <h3 id="copyright"> {{ $t("copyright") }}</h3>
        <div id="external-items">
            <img>
            <img>
            <img>
            <img>
            <img>
            <img>
        </div>
    </div>
</template>

<style scoped>
    #container {
        height: 64px;
        max-width: 1920px;
        margin: auto;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        align-items: center;
        background-color: darkcyan;
    }

    #language-switch {
        width: 100px;
        height: 32px;
        border: 0;
        appearance: none;
        text-align: center;
        margin-left: 1rem;
    }

    #language-switch option {
        border: 0;
    }

    #copyright {
        margin-left: auto;
        margin-right: auto;
        color: white;
    }

    #external-items {
        margin-left: auto;
        display: flex;
        align-items: center;
    }

    #external-items img {
        margin-right: 10px;
        width: 16px;
        height: 16px;
        background-color: red;
    }
</style>
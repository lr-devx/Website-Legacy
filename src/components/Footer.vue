<template>
    <div id="footer">
        <select class="language-switch" v-model="selectedLanguage" @change="changeLanguage">
            <option v-for="language in languages" :value="language.code">
                {{ language.name }}
            </option>
        </select>
        <h3 class="copyright"> {{ $t("copyright") }}</h3>
        <div class="external-items">
            <a target="_blank" title="YouTube" aria-label="YouTube" href="https://www.youtube.com/@aliandead">
                <i class="fa fa-youtube-play"></i>
            </a>
            <a target="_blank" title="GitHub" aria-label="GitHub" href="https://github.com/aliandead">
                <i class="fa fa-github"></i>
            </a>
            <a target="_blank" title="Instagram" aria-label="Instagram" href="https://instagram.com/aliandead">
                <i class="fa fa-instagram"></i>
            </a>
        </div>
    </div>
</template>

<script setup>
    import { useI18n } from "vue-i18n";
    import { useRoute } from "vue-router";
    import { ref } from "vue"

    const route = useRoute();

    const i18n = useI18n();
    const selectedLanguage = ref(i18n.locale.value);
    const languages = ref(i18n.messages.value);

    function changeLanguage(e) {
        i18n.locale.value = e.target.selectedOptions[0].value;
        
        document.title = `Alian/DEAD - ${i18n.t(route.name)}`;
        document.querySelector("html")
                .setAttribute("lang", i18n.locale.value);
        
        localStorage.setItem("lang", i18n.locale.value);
    }
</script>

<style scoped>
    #footer {
        background-color: darkcyan;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        align-items: center;
        padding-top: 1rem;
        padding-bottom: 1rem;
    }

    .language-switch {
        text-align: center;
        width: 8rem;
        height: 2rem;
        border: none;
        appearance: none;
        margin-left: 1rem;
    }

    .language-switch option {
        border: none;
    }

    .copyright {
        color: white;
        font-size: fit-content;
        word-wrap: break-word;
        margin-left: auto;
        margin-right: auto;
    }

    .external-items {
        display: flex;
        align-items: center;
        margin-left: auto;
    }

    .external-items a {
        text-decoration: none;
        font-size: 2rem;
        width: 2rem;
        height: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 1rem;
    }

    .external-items i {
        color: black;
    }

    .external-items i:hover {
        color: white;
    }

    @media (max-width: 70rem) {
        #footer {
            display: block;
            padding-top: 1rem;
            padding-bottom: 1rem;
        }

        .language-switch {
            display: block;
            margin-left: auto;
            margin-right: auto;
        }

        .copyright {
            text-align: center;
            padding: 1rem;
        }

        .external-items {
            display: flex;
            justify-content: center;
            margin-bottom: 1rem;
        }
    }
</style>
<template>
    <div id="container">
        <div class="slide">
            <div class="slide-data">
                <h1 class="slide-title">{{ $t("slide-title") }}</h1>
                <h3 class="slide-description">{{ $t("slide-description") }}</h3>
                <button class="slide-button" @click="$router.push('/blogs')">{{ $t("slide-button") }}</button>
            </div>
        </div>
        <div class="description">
        <h1 class="description-title">{{ $t("whoami") }}</h1>
        <h3 class="description-text">
            <p>{{ $t("whoami-description-1") }}</p>
            <p>{{ $t("whoami-description-2") }}</p>
            <br>
            <p>{{ $t("whoami-description-3") }}</p>
        </h3>
        </div>
        <div class="projects" v-if="!isProjectListEmpty">
            <h1 class="projects-title">{{ $t("projects") }}</h1>
            <div class="projects-cards">
                <Card v-for="project in Projects.slice(0, 6)" :name="project.name" :icon="project.icon" :banner="project.banner" :description="project.description"/> 
            </div>
            <button class="projects-see-more" @click="$router.push('/projects')">{{ $t("see-more") }}</button>
        </div>
        <div class="pricing">
            <h1 class="pricing-title">{{ $t("pricing-title") }}</h1>
            <button class="pricing-button"  @click="$router.push('/pricing')">{{ $t("check-plans") }}</button>
        </div>
    </div>
</template>

<script setup>
    import { ref } from "vue";
    import Card from "@/components/Card.vue";
    import Projects from "@/assets/projects/projects.json";

    const isProjectListEmpty = ref(Projects.length == 0);
</script>

<style scoped>
    #container {
        background-color: wheat;
    }

    .slide {
        background-color: blue;
        width: 100%;
        height: 36rem;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .slide-data {
        max-width: 50%;
    }

    .slide-title {
        color: white;
        text-align: center;
        font-size: 3rem;
        transition: opacity 0.5s ease;
    }

    .slide-description {
        color: lightgray;
        text-align: center;
        font-weight: 600;
        font-size: 1.5rem;
        word-wrap: break-word;
        transition: opacity 0.5s ease;
        margin-top: 1rem;
    }

    .slide-button {
        background-color: white;
        width: 12rem;
        height: 3rem;
        border: none;
        display: block;
        margin-left: auto;
        margin-right: auto;
        margin-top: 2rem;
    }

    .slide-button:hover {
        background-color: red;
    }

    .description {
        background-color: saddlebrown;
        padding: 1rem;
    }

    .description-title {
        color: white;
        text-align: center;
        word-wrap: break-word;
        padding-bottom: 1rem;
    }

    .description-text {
        color: lightgray;
        text-align: center;
        word-wrap: break-word;
    }

    .projects {
        background-color: indianred;
        padding-bottom: 2rem;
    }

    .projects-title {
        color: white;
        text-align: center;
        word-wrap: break-word;
        padding: 2rem;
    }

    .projects-cards {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        justify-content: center;
        gap: 2.5rem;
        padding-left: 50%;
        padding-right: 50%;
    }

    .projects-see-more {
        width: 9rem;
        height: 2.5rem;
        border: none;
        display: block;
        margin-top: 2rem;
        margin-left: auto;
        margin-right: auto;
    }
    
    .projects-see-more:hover {
        background-color: red;
    }

    .pricing {
        background-color: blueviolet;
        padding-bottom: 2rem;
    }

    .pricing-title {
        color: white;
        text-align: center;
        word-wrap: break-word;
        padding: 2rem;
    }

    .pricing-button {
        width: 12rem;
        height: 3rem;
        border: none;
        display: block;
        margin-left: auto;
        margin-right: auto;
    }

    .pricing-button:hover {
        background-color: red;
    }

    @media (max-width: 66rem) {
        .projects-cards {
            grid-template-columns: 1fr 1fr;
        }
    }

    @media (max-width: 43rem) {
        .slide-data {
            max-width: 75%;
        }

        .projects-cards {
            grid-template-columns: 1fr;
        }
    }
</style>
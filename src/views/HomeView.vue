<script setup>
    import Slider from "../components/Slider.vue";
    import ProjectCard from "../components/ProjectCard.vue";
    import Projects from "../assets/projects_home.json";
</script>

<template>
    <Slider/>
    <div id="container">
        <div id="description-container">
            <h1 id="description-title">{{ $t("whoami") }}</h1>
            <h3 id="description-text">
                <p>{{ $t("whoami-description-1") }}</p>
                <p>{{ $t("whoami-description-2") }}</p>
                <br>
                <p>{{ $t("whoami-description-3") }}</p>
            </h3>
        </div>
        <div id="project-container">
            <h1 id="projects-title">Projects</h1>
            <div id="project-cards">
                <ProjectCard v-for="project in Projects" :name="project.name" :icon="project.icon" :banner="project.banner" :description="project.description"/> 
            </div>
        </div>
    </div>
</template>

<style scoped>
    #container {
        max-width: 1920px;
        margin: auto;
    }

    #description-container {
        padding: 16px;
        background-color: saddlebrown;
    }

    #description-title {
        color: white;
        padding-bottom: 16px;
        text-align: center;
    }

    #description-text {
        color: lightgray;
        word-wrap: break-word;
        text-align: center;
    }

    #project-container {
        height: auto;
        padding-bottom: 32px;
        background-color: indianred;
    }

    #projects-title {
        color: white;
        padding: 32px;
        text-align: center;
    }

    #project-cards {
        display: grid;
        justify-content: center;
        padding-left: 25%;
        padding-right: 25%;
        grid-template-columns: repeat(3, 1fr);
        gap: 48px;
    }

    @media (max-width: 1060px) {
        #project-cards {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (max-width: 690px) {
        #project-cards {
            grid-template-columns: 1fr;
        }
    }
</style>
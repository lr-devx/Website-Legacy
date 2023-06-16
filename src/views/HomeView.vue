<script setup>
    import Slider from "../components/Slide.vue";
    import ProjectCard from "../components/ProjectCard.vue";
    import Projects from "../assets/projects.json";

    document.title = "Alian/DEAD - Home";
</script>

<template>
    <Slider/>
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
            <h1 id="projects-title">{{ $t("projects") }}</h1>
            <div id="project-cards">
                <ProjectCard v-for="project in Projects.slice(0, 6)" :name="project.name" :icon="project.icon" :banner="project.banner" :description="$t(project.description)"/> 
            </div>
            <button id="see-more" @click="$router.push('/projects')">{{ $t("see-more") }}</button>
        </div>
        <div id="pricing-container">
            <h1 id="pricing-title">{{ $t("pricing-title") }}</h1>
            <button id="pricing-button"  @click="$router.push('/pricing')">{{ $t("check-plans") }}</button>
        </div>
</template>

<style scoped>
    #description-container {
        padding: 1rem;
        background-color: saddlebrown;
    }

    #description-title {
        color: white;
        word-wrap: break-word;
        padding-bottom: 1rem;
        text-align: center;
    }

    #description-text {
        color: lightgray;
        word-wrap: break-word;
        text-align: center;
    }

    #project-container {
        height: auto;
        padding-bottom: 2rem;
        background-color: indianred;
    }

    #projects-title {
        color: white;
        padding: 2rem;
        word-wrap: break-word;
        text-align: center;
    }

    #project-cards {
        display: grid;
        justify-content: center;
        padding-left: 50%;
        padding-right: 50%;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 2.5rem;
    }

    #see-more {
        margin-top: 2rem;
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 9rem;
        height: 2.5rem;
        border: 0;
    }
    
    #see-more:hover {
        background-color: red;
    }

    #pricing-container {
        padding-bottom: 2rem;
        background-color: blueviolet;
    }

    #pricing-title {
        word-wrap: break-word;
        text-align: center;
        padding: 2rem;
        color: white;
    }

    #pricing-button {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 12rem;
        height: 3rem;
        border: 0;
    }

    #pricing-button:hover {
        background-color: red;
    }

    @media (max-width: 66rem) {
        #project-cards {
            grid-template-columns: 1fr 1fr;
        }
    }

    @media (max-width: 43rem) {
        #project-cards {
            grid-template-columns: 1fr;
        }
    }
</style>
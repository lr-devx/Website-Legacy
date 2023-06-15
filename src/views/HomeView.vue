<script setup>
    import Slider from "../components/Slide.vue";
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
            <button id="see-more" @click="$router.push('/projects')">See more</button>
        </div>
        <div id="pricing-container">
            <h1 id="pricing-title">Ready for your next project to become ALIVE?</h1>
            <button id="pricing-button"  @click="$router.push('/pricing')">Check out plans</button>
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

    #see-more {
        margin-top: 32px;
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 128px;
        height: 40px;
        border: 0;
    }
    
    #see-more:hover {
        background-color: red;
    }

    #pricing-container {
        padding-bottom: 32px;
        background-color: blueviolet;
    }

    #pricing-title {
        text-align: center;
        padding: 32px;
        color: white;
    }

    #pricing-button {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 128px;
        height: 40px;
        border: 0;
    }

    #pricing-button:hover {
        background-color: red;
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
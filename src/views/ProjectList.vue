<template>
    <div id="container">
        <div v-if="!isProjectListEmpty" class="projects-container">
            <Card v-for="project in Projects" show-download="true" :name="project.name" :project-id="project.id" :icon="project.icon" :banner="project.banner" :description="project.description"/>
        </div>
        <div id="no-projects-container" v-else>
            <p>{{ $t("no-projects-yet") }}</p>
            <p>{{ $t("no-projects-check-later") }}</p>
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
        background-color: mediumspringgreen;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .projects-container {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        justify-content: center;
        gap: 2rem;
        margin: 24px 0px 24px 0px;
    }

    #no-projects-container {
        color: black;
        text-align: center;
        font-size: 1.5rem;
        font-weight: 600;
    }

    @media (max-width: 1376px) {
        .projects-container {
            grid-template-columns: repeat(3, 1fr);
        }
    }

    @media (max-width: 1024px) {
        .projects-container {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (max-width: 680px) {
        .projects-container {
            grid-template-columns: 1fr;
        }
    }
</style>
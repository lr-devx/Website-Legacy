<script setup>
    import ProjectCard from "../components/ProjectCard.vue";
    import Projects from "../assets/projects.json";
</script>

<template>
    <div id="container">
        <div class="projects-container">
            <ProjectCard v-for="project in Projects" show-download="true" :name="project.name" :project-id="project.id" :icon="project.icon" :banner="project.banner" :description="$t(project.description)"/>
        </div>
    </div>
</template>

<style scoped>
    #container {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: mediumspringgreen;
    }

    .projects-container {
        margin: 24px 0px 24px 0px;
        display: grid;
        justify-content: center;
        grid-template-columns: repeat(4, 1fr);
        gap: 2rem;
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
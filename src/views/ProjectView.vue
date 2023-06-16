<script setup>
    import ProjectCard from "../components/ProjectCard.vue";
    import Projects from "../assets/projects.json";
    import { onMounted, ref } from "vue";

    console.log(Projects);

    const container = ref(null);

    onMounted(() => {
        container.value.style.minHeight = `${document.documentElement.clientHeight - (80 + 64)}px`;
    });

    document.title = "Alian/DEAD - Projects";
</script>

<template>
    <div id="main-container" ref="container">
        <div id="projects-container">
            <ProjectCard v-for="project in Projects" show-download="true" :name="project.name" :icon="project.icon" :banner="project.banner" :description="$t(project.description)"/>
        </div>
    </div>
</template>

<style scoped>
    #main-container {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: mediumspringgreen;
        padding: 16px;
    }

    #projects-container {
        display: grid;
        justify-content: center;
        grid-template-columns: repeat(4, 1fr);
        gap: 2rem;
    }

    @media (max-width: 1376px) {
        #projects-container {
            grid-template-columns: repeat(3, 1fr);
        }
    }

    @media (max-width: 1024px) {
        #projects-container {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (max-width: 680px) {
        #projects-container {
            grid-template-columns: 1fr;
        }
    }
</style>
<script setup>
    import MarkdownView from '../components/MarkdownViewer.vue';
    
    document.title = `Alian/DEAD - Blogs`;
</script>

<template>
    <div id="container">
        <MarkdownView :name="$route.params.id"/>
    </div>
</template>

<style scoped>
    #container {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: red;
    }
</style>
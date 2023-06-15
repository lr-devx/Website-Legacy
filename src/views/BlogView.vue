<script setup>
    import MarkdownView from '../components/MarkdownViewer.vue';
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
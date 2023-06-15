<script setup>
    import { onMounted, ref, computed } from "vue";
    import { marked } from "marked";

    const props = defineProps({
        name: String
    });

    marked.use({
        mangle: false,
        headerIds: false
    });

    const markdown = ref(""); 
    
    onMounted(async () => {
        try {
            const module = await import(`../assets/blogs/${props.name}.md`);
            markdown.value = module.default;
        } catch {
            console.error("Markdown source was not found");
        }
    });

    const getMarkdownRender = computed(() => {
        return marked(markdown.value);
    });
</script>

<template>
    <div id="container">
        <div v-html="getMarkdownRender"></div>
    </div>
</template>

<style scoped>
</style>
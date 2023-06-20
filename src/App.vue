<script setup>
  import Navigation from "./components/NavigationBar.vue";
  import FooterSection from "./components/Footer.vue";
  import { useRoute, RouterView } from "vue-router";

  const route = useRoute();

  function onUpdated() {
    document.title = `Alian/DEAD - ${route.name}`;

    const container = document.getElementById("container");
    container.style.minHeight = `${document.documentElement.clientHeight - (80 + 64)}px`;
  }
</script>

<template>
  <Navigation />
  <RouterView @vue:updated="onUpdated" />
  <FooterSection />
</template>
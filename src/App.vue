<script setup>
  import Navigation from "./components/Navigation.vue";
  import FooterSection from "./components/Footer.vue";
  import { useRoute, RouterView } from "vue-router";
  import { useI18n } from "vue-i18n";

  const route = useRoute();
  const i18n = useI18n();

  function onUpdated() {
    document.title = `Alian/DEAD - ${i18n.t(route.name)}`;

    const container = document.getElementById("container");
    container.style.minHeight = `${document.documentElement.clientHeight - (80 + 64)}px`;
  }
</script>

<template>
  <Navigation />
  <RouterView @vue:updated="onUpdated" />
  <FooterSection />
</template>
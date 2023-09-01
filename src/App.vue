<script setup>
  import { useRoute, RouterView } from "vue-router";
  import { useI18n } from "vue-i18n";

  import Navigation from "./components/Navigation.vue";
  import Footer from "./components/Footer.vue";

  const route = useRoute();
  const i18n = useI18n();

  function onUpdated() {
    document.title = `Alian/DEAD - ${i18n.t(route.name)}`;

    const navigation = document.getElementById("navbar");
    const container = document.getElementById("container");
    const footer = document.getElementById("footer");

    const extraHeight = navigation.clientHeight + footer.clientHeight;
    if (container.scrollHeight + extraHeight < document.documentElement.clientHeight) {
      container.style.minHeight = `${document.documentElement.clientHeight - extraHeight}px`;
    }
  }
</script>

<template>
  <Navigation />
  <RouterView @vue:updated="onUpdated" />
  <Footer />
</template>
<script setup>
  import Navigation from "./components/Navigation.vue";
  import FooterSection from "./components/Footer.vue";
  import { useRoute, RouterView } from "vue-router";
  import { useI18n } from "vue-i18n";

  const route = useRoute();
  const i18n = useI18n();

  function onUpdated() {
    document.title = `Alian/DEAD - ${i18n.t(route.name)}`;

    const extraHeight = 80 + 64; // navigation + footer
    const container = document.getElementById("container");
    if (container.scrollHeight + extraHeight < document.documentElement.clientHeight) {
      container.style.minHeight = `${document.documentElement.clientHeight - extraHeight}px`;
    }
  }
</script>

<template>
  <Navigation />
  <RouterView @vue:updated="onUpdated" />
  <FooterSection />
</template>
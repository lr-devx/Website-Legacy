<script setup>
  import Navigation from "./components/NavigationBar.vue";
  import { RouterView } from "vue-router";
  import FooterSection from "./components/Footer.vue";
</script>

<template>
  <Navigation />
  <RouterView />
  <FooterSection />
</template>
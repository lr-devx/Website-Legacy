<script setup>
  import Navigation from "./components/NavigationBar.vue";
  import FooterSection from "./components/Footer.vue";
  import { RouterView } from "vue-router";
</script>

<template>
  <Navigation />
  <RouterView />
  <FooterSection />
</template>
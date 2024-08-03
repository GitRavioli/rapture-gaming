<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
</script>

<template>

  <Navbar />
  <Hero />
  <RouterView />
</template>

<style scoped></style>

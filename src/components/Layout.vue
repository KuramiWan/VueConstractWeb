<template>
  <div class="min-h-screen  flex flex-col flex-grow">
    <nav-bar class="sticky top-0"></nav-bar>
      <router-view class="flex-grow scroll-smooth flex"></router-view>
    <Footer class=""></Footer>
  </div>

</template>
<script setup lang="ts">
import navBar from "./layout/NavBar.vue";
import Footer from "./layout/Footer.vue";
</script>
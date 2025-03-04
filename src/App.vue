<template>
  <div class="container mx-auto px-4">
    <div class="title">
      <h1>Catalogo de Zapatillas</h1>
    </div>
    <ImageGallery />
  </div>
</template>

<script lang="ts" setup>
import ImageGallery from './components/ImageGallery.vue';
//import ImageGallery from './views/HomeView.vue';
</script>

<style scoped>
.title {
  color: #800000cf;
  text-align: center;
  font-size: 30px;
  margin: 15px;
}
</style>
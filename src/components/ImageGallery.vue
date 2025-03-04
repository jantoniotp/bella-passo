<template>
  <div class="txt-center">
      <select id="talla"
              v-model="selectedSize"
              @change="fetchModels"
              class="w-64 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-700">
          <option value="0">Filtrar por Talla</option>
          <option value="23">#3</option>
          <option value="23.5">#3.5</option>
          <option value="24">#4</option>
          <option value="25">#5</option>
          <option value="25.5">#5.5</option>
          <option value="26">#6</option>
          <option value="26.5">#6.5</option>
          <option value="27">#7</option>
          <option value="28">#8</option>
      </select>
  </div>
  <div class="post-container">
    <ImageCard v-for="(model, index) in models" :key="index" :model="model" />
  </div>
</template>

<script lang="ts" setup>
  import { ref, onMounted, watch } from 'vue';
  import axios from "axios";
  import ImageCard from './ImageCard.vue'

  const models = ref([]);
  const selectedSize = ref('0');

  const fetchModels = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/products/grouped-by-model', {
        params: { size: selectedSize.value }
      });
      models.value = response.data;
    } catch (error) {
      console.error('Error to get models: ', error);
    }
  }

  onMounted(async() => {
    fetchModels();
    /*const response = await axios.get('http://localhost:3000/api/products/grouped-by-model');
    models.value = response.data;
    console.log(models.value);*/
  });
</script>

<style>
  .post-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .txt-center {
    text-align: center;
  }
</style>

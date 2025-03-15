<template>
  <div class="filters">
      <FilterSelect v-model="selectedSize" name="size" @change="fetchModels" :options="optionsSizes" />
      <FilterSelect v-model="selectedPrice" name="price" @change="fetchModels" :options="optionsPrices" />
  </div>
  <div class="post-container">
    <ImageCard v-for="(model, index) in models" :key="index" :model="model" />
  </div>
</template>

<script lang="ts" setup>
  import { ref, onMounted, watch } from 'vue';
  import axios from "axios";
  import ImageCard from './ImageCard.vue'
  import FilterSelect from './FilterSelect.vue';

  const models = ref([]);
  const selectedSize = ref('0');
  const selectedPrice = ref('0');
  const optionsSizes = ref([]);
  const optionsPrices = ref([]);

  const fetchModels = async (event = null) => {

    const selectName = event ? event.target.name : '';

    const path = selectName === 'size'
    ? `size/${selectedSize.value}`
    : selectName === 'price'
    ? `price/${selectedPrice.value}`
    : '';

    try {
      const response = await axios.get('http://localhost:3000/api/products/'+path);
      models.value = response.data;
    } catch (error) {
      console.error('Error to get models with size: ', error);
    }
  }

  const fetchOptionsSizes = async () => {
    try {
        const response = await axios.get('http://localhost:3000/api/products/sizes');
        const tempMap = new Map<number, string>();

        tempMap.set(0, 'Filtrar por Talla');
        response.data.forEach((size: number) => {
          tempMap.set(size, `${size.toString().replace(/^\d/, '#')}`);
        });

        optionsSizes.value = [...tempMap.entries()].map(([key, value]) => ({
          id: key,
          label: value
        }));
      
      } catch (error) {
        console.error('Error to get sizes: ', error);
      }
  }

  const fetchOptionsPrices = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/models/prices');
      const tempMap = new Map<number, string>();

      tempMap.set(0, 'Filtrar por Precio');
      response.data.forEach((price: number) => {
        tempMap.set(price, `${price}`);
      });

      optionsPrices.value = [...tempMap.entries()].map(([key, value]) => ({
        id: key,
        label: value
      }));

    } catch (error) {
      console.error('Error to get sizes: ', error);
    }
  }

  onMounted(async() => {
    fetchModels();
    fetchOptionsSizes();
    fetchOptionsPrices();
  });
</script>

<style>
  .post-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .filters {
      display: flex;
      gap: 10px;
      justify-content: center;
  }

  .filters > select {
      flex: 1;
      padding: 8px;
      max-width: 250px;
  }

  @media (max-width: 600px) {
      .filters {
          flex-direction: column;
          align-items: center;
      }
      .filters > select {
        width: 100%;
      }
  }
</style>

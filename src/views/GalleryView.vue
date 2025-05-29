<template>
  <div
    class="flex flex-wrap justify-center gap-2 mb-6 sm:items-center"
  >
    <Filters
      v-model="selectedSize"
      name="size"
      @change="fetchModels"
      :options="optionsSizes"
      class="max-w-xs px-2 py-1"
    />
    <Filters
      v-model="selectedPrice"
      name="price"
      @change="fetchModels"
      :options="optionsPrices"
      class="max-w-xs px-2 py-1"
    />
  </div>

  <div class="flex flex-wrap justify-center">
    <ImageCard
      v-for="(model, index) in models"
      :key="index"
      :model="model"
    />
  </div>
</template>

<script lang="ts" setup>
  import { ref, onMounted, watch } from 'vue';
  import axios from "axios";
  import ImageCard from '../components/ImageCard.vue'
  import Filters from '../components/Filters.vue';

  interface OptionType {
  id: number;
  label: string;
}

  const models = ref([]);
  const selectedSize = ref('0');
  const selectedPrice = ref('0');
  const optionsSizes = ref<OptionType[]>([]);
  const optionsPrices = ref<OptionType[]>([]);

  const fetchModels = async (event?: Event) => {

    let selectName = '';
    if (event && event.target) {
      selectName = (event.target as HTMLSelectElement).name;
    }

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
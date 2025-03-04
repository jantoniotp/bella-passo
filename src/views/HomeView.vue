<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const products = ref([]);

onMounted(async () => {
  const response = await axios.get("http://localhost:3000/products");
  products.value = response.data;
});

const addProduct = async () => {
  await axios.post("http://localhost:3000/products", { name: "Tacon dorado", color: "Negro", size: "24" });
};
</script>

<template>
  <div>
    <h2>Lista de Productos</h2>
    <ul>
      <li v-for="product in products" :key="product.id">{{ product.name }} - {{ product.size }}</li>
    </ul>
    <button @click="addProduct">Agregar Producto</button>
  </div>
</template>
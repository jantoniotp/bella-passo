<template>
  <div class="post-card">
    <img :src="`/images/${model.images}`" alt="Image" width="280px" />
    <div class="cont-name">
      <h2 class="name">{{ model.models.name }}</h2>
    </div>
    <p>Tallas: {{ model.sizes }}</p>
    <p class="price">$ {{ model.models.price }}.00</p>
    <ViewDetails />
  </div>
</template>
  
  <script lang="ts" setup>
    import ViewDetails from "./ViewDetails.vue";
    defineProps({
      model: Object
    })
  </script>

<style scoped>
  .post-card {
    border-radius: 15px;
    padding: 10px;
    margin: 10px;
    border: 1px solid #ccc;
    width: 280px;
    text-align: center;
  }

  .price {
    color: red;
    font-weight: 600;
    font-size: 20px;
  }

  .name {
    font-size: 23px;
    color: #373636e8;
    margin: 0;
  }

  .cont-name {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    margin-top: 10px;
    line-height: normal;
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 10px;
  }
</style>
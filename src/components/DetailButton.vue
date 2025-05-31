<template>
    <a
      href=""
      target="_blank"
      rel="noopener"
      class="inline-flex items-center px-4 py-2 rounded-lg text-white font-semibold"
      :style="{ backgroundColor: redColor }"
    >
      Ver Detalle
    </a>
</template>

<script lang="ts" setup>
  const redColor = '#ff0000b8'
</script>

<style scoped>
    .view-btn {
        padding: 15px;
        background-color: #ff0000b8;
        color: white;
        border: 1px solid #ff0000b8;
        width: 120px;
    }

    .view-btn:hover {
        background-color: white;
        color: #ff0000b8;
    }
</style>
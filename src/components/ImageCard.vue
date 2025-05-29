<template>
  <div
    class="w-[280px] text-center border border-gray-300 rounded-[15px] p-2 m-2"
  >
    <img
      :src="`/images/${model.images}`"
      alt="Image"
      width="280"
      class="mx-auto"
    />

    <div class="flex items-center justify-center h-[50px] mt-2 mb-2">
      <h2 class="text-[23px] text-[#373636e8] m-0">{{ model.models.name }}</h2>
    </div>

    <p class="mt-5 mb-2 h-[50px]">Tallas: {{ model.sizes }}</p>

    <p class="text-red-600 font-semibold text-[20px] mb-2">
      $ {{ model.models.price }}.00
    </p>

    <div class="flex items-center justify-center gap-2">
      <DetailButton />
      <ContactButton />
    </div>
  </div>
</template>
  
  <script lang="ts" setup>
    import ContactButton from "./ContactButton.vue";
    import DetailButton from "./DetailButton.vue";

    interface ModelType {
      images: string;
      sizes: string;
      models: {
        name: string;
        price: number;
      };
    }

    defineProps<{
      model: ModelType;
    }>();
  </script>
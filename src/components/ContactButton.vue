<template>
    <a
      :href="whatsAppLink"
      target="_blank"
      rel="noopener"
      class="inline-flex items-center px-4 py-2 rounded-lg text-white font-semibold"
      :style="{ backgroundColor: whatsAppGreen }"
    >
    <img
        src="/images/wa-icon.png"
        alt="Image"
        width="24"
        class="mx-auto"
      />
      Contactar
    </a>
  </template>
  
  <script lang="ts" setup>
    const phoneNumber = '222441595'
    const whatsAppLink = `https://wa.me/${phoneNumber}`
    const whatsAppGreen = '#25D366'
  </script>
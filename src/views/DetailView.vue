<template>
  <div class="max-w-6xl mx-auto p-6 space-y-12">

    <!-- Sección: Fotos Profesionales -->
    <section>
      <h2 class="text-2xl font-bold mb-4 text-gray-800">Fotos Profesionales</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <img
          v-for="(foto, index) in fotosProfesionales"
          :key="'profesional-' + index"
          :src="foto"
          alt="Foto profesional"
          class="rounded-xl shadow-md object-cover h-64 w-full"
        />
      </div>
    </section>

    <!-- Sección: Fotos Amateur -->
    <section>
      <h2 class="text-2xl font-bold mb-4 text-gray-800">Fotos Amateur</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <img
          v-for="(foto, index) in fotosAmateur"
          :key="'amateur-' + index"
          :src="foto"
          alt="Foto amateur"
          class="rounded-xl shadow-md object-cover h-64 w-full"
        />
      </div>
    </section>

    <!-- Descripción General -->
    <section class="bg-gray-100 p-6 rounded-xl shadow">
      <p class="text-gray-700 text-lg">
        Estas imágenes muestran una comparación entre fotografías profesionales y amateur. Las diferencias en iluminación, composición y calidad destacan la importancia del equipo y la experiencia en la fotografía.
      </p>
    </section>
  </div>
</template>

<script lang="ts" setup>
const fotosProfesionales = [
  'https://via.placeholder.com/400x300?text=Pro+1',
  'https://via.placeholder.com/400x300?text=Pro+2',
  'https://via.placeholder.com/400x300?text=Pro+3'
]

const fotosAmateur = [
  'https://via.placeholder.com/400x300?text=Amateur+1',
  'https://via.placeholder.com/400x300?text=Amateur+2',
  'https://via.placeholder.com/400x300?text=Amateur+3'
]
</script>
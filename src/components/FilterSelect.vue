<template>
    <select :value="modelValue"
            :name="name"
            @change="handleChange"
            class="w-64 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-700">
            <option v-for="option in options" :key="option.id" :value="option.id">{{ option.label }}</option>
      </select>
</template>

<script lang="ts" setup>
defineProps<{
    modelValue: String,
    name: String,
    change: String,
    options: Object;
}>();

const emit = defineEmits<{
  (event: 'update:modelValue', value: string): void;
  (event: 'change', event: Event): void;
}>();

const handleChange = (event: Event) => {
  const target = event.target as HTMLSelectElement;
  emit('update:modelValue', target.value);
  emit('change', event);
};
</script>
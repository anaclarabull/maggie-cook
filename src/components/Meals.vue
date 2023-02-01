<template>
  <div class="grid grid-cols-1 md:grid-cols-4 gap-8 p-10">
    <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
  </div>
</template>

<script setup>
import MealItem from './MealItem.vue';
const { meals } = defineProps({
  meals: {
    required: true,
    type: Array,
  }
})
</script>
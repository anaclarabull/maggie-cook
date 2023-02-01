<template>
    <div class="rounded-lg transition ease-in-out delay-75 shadow-md hover:-translate-y-1 hover:scale-110 duration-300">
        <img :src="meal.strMealThumb" :alt="meal.strMeal" class="rounded-t-lg h-64 w-full object-cover">

        <div class="p-4">
            <p class="font-semibold text-lg mb-4">{{ meal.strMeal }}</p>
            <div class="pb-2">
                <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }"
                    class="shadow bg-yellow-200 hover:bg-yellow-500 rounded-full p-2 px-4 font-bold text-amber-900 hover:text-white">
                    Detalhes
                </router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
const { meal } = defineProps({
    meal: {
        required: true,
        type: Object
    }
})
</script>
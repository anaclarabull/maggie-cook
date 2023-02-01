<template>
    <div class="max-w-[800px] mx-auto p-8">
        <img :src="meal.strMealThumb" :alt="meal.strMeal" class="w-full object-cover rounded-full">

        <h1 class="text-4xl font-bold mb-5 text-amber-900 pt-4">{{ meal.strMeal }}</h1>
       
        <div class="my-3">
            {{ meal.strInstructions }}
        </div>

        <div class="text-lg py-2">
            <strong class="font-bold">Categoria:</strong> {{ meal.strCategory }}
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 py-2">
            <div>
                <h2 class="text-2xl font-semibold mb-2">Igredientes</h2>
                <ul>
                    <template v-for="(el, ind) of new Array(20)">
                        <li v-if="meal[`strIngredient${ind + 1}`]">
                            {{ ind + 1 }}. {{ meal[`strIngredient${ind + 1}`] }}
                        </li>
                    </template>
                </ul>
            </div>
            <div>
                <h2 class="text-2xl font-semibold mb-2">Medidas</h2>
                <ul>
                    <template v-for="(el, ind) of new Array(20)">
                        <li v-if="meal[`strMeasure${ind + 1}`]">
                            {{ ind + 1 }}. {{ meal[`strMeasure${ind + 1}`] }}
                        </li>
                    </template>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import axiosClient from '../axiosClient';

const route = useRoute();
const meal = ref({})

onMounted(() => {
    axiosClient.get(`lookup.php?i=${route.params.id}`)
        .then(({ data }) => {
            meal.value = data.meals[0] || {}
        })
})

</script>
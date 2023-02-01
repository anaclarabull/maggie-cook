<template>
    <div class="flex flex-col p-8">
        <input type="text" v-model="keyword"
            class="rounded-full border-2 border-yellow-200 focus:outline-none focus:border-yellow-300 focus:ring-1 focus:ring-yellow-300 w-full"
            placeholder="Encontre sua receita..." @change="filterMeals" />
    </div>

    <div class="grid grid-cols-1 md:grid-cols-4 gap-8 p-10">
        <div v-for="meal of meals" :key="meal.idMeal"
            class="rounded-lg transition ease-in-out delay-75 shadow-md hover:-translate-y-1 hover:scale-110 duration-300">
            <img :src="meal.strMealThumb" :alt="strMeal" class="rounded-t-lg h-64 w-full object-cover">
            <div class="p-4">
                <p class="font-semibold text-lg mb-4">{{ meal.strMeal }}</p>
                <div class="pb-2">
                    <router-link :to="{name: 'mealDetails', params: {id: meal.idMeal}}"
                        class="shadow bg-yellow-200 hover:bg-yellow-500 rounded-full p-2 px-4 font-bold text-amber-900 hover:text-white">
                        View
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
import { computed } from '@vue/reactivity';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import store from '../store';

const route = useRoute();
const keyword = ref('');
const meals = computed(() => store.state.filteredMeals);


function filterMeals() {
    store.dispatch('filterMeals', keyword.value)
}

onMounted(() => {
    keyword.value = route.params.name
    if (keyword.value) {
        searchMeals()
    }
})

</script>
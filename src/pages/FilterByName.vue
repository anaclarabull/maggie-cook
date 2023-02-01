<template>
    <div class="flex flex-col p-8">
        <input type="text" v-model="keyword"
            class="rounded-full border-2 border-yellow-200 focus:outline-none focus:border-yellow-300 focus:ring-1 focus:ring-yellow-300 w-full"
            placeholder="Encontre sua receita..." @change="searchMeals" />
    </div>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-8 p-10">
        <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
    </div>
</template>


<script setup>
import { computed } from '@vue/reactivity';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import MealItem from '../components/MealItem.vue';
import store from '../store';

const route = useRoute();
const keyword = ref('');
const meals = computed(() => store.state.searchedMeals);


function searchMeals() {
    store.dispatch('searchMeals', keyword.value)
}

onMounted(() => {
    keyword.value = route.params.name
    if (keyword.value) {
        searchMeals()
    }
})

</script>
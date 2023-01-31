<template>
    <div class="flex flex-col p-8">
        <input type="text"
                v-model="keyword"
                class="rounded-full border-2 border-yellow-200 focus:outline-none focus:border-yellow-300 focus:ring-1 focus:ring-yellow-300 w-full"
                placeholder="Encontre sua receita..."
                @change="filterMeals"
        />
    </div>

    <div>
        <pre>{{ meals }}</pre>
    </div>
</template>

<script setup>
import { computed } from '@vue/reactivity';
import { ref } from 'vue';
import store from '../store';


    const keyword = ref('');
    const meals = computed(() => store.state.filteredMeals);


    function filterMeals() {
        store.dispatch('filterMeals', keyword.value)
    }

</script>
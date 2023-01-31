<template>
    <div class="flex flex-col p-8">

        <div>
            <input type="text"
                class="rounded-full border-2 border-yellow-200 focus:outline-none focus:border-yellow-300 focus:ring-1 focus:ring-yellow-300 w-full"
                placeholder="Encontre sua receita...">
        </div>

        <div class="flex justify-center gap-2 mt-2">
            <router-link :to="{name: 'byLetter', params: {letter}}" v-for="letter of letters" :key="letter">
                {{ letter }}
            </router-link>
        </div>
        <pre>{{ category }}</pre>

    </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import store from '../store';
import axiosClient from '../axiosClient.js'

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("");
const category = ref([])

onMounted(async () => {
    const response = await axiosClient.get('/list.php?c=list')
    console.log(response.data)
    category.value = response.data
})
</script>
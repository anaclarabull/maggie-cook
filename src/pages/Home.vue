<template>
    <div class="flex flex-col p-8">

        <div>
            
        </div>

        <div class="flex justify-center gap-2 mt-2">
            <div v-for="letter of letters" :key="letter">
                {{ letter }}
            </div>
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
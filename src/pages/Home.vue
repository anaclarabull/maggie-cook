<template>
    <div class="flex flex-col p-8">

        <div>
            <pre>{{ category }}</pre>
        </div>

    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import axiosClient from '../axiosClient.js'

const category = ref([])

onMounted(async () => {
    const response = await axiosClient.get('/list.php?c=list')
    console.log(response.data)
    category.value = response.data
})
</script>
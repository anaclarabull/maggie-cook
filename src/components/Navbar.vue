<template>
    <header class="bg-yellow-400 shadow-md h-28 flex justify-between items-center p-10">
        <router-link :to="{ name: 'home' }">
            <img src="../assets/logo.svg" alt="Logo Maggie the Cook" class="h-24">
        </router-link>
        <div class="flex items-center gap-4">
            <h1 class="font-bold text-amber-900">Filtrar por:</h1>
            <router-link :to="{ name: 'category' }"
                class="shadow bg-yellow-200 hover:bg-yellow-500 rounded-full p-2 font-bold text-amber-900 hover:text-white">
                Categorias
            </router-link>
            <router-link :to="{ name: 'name' }"
                class="shadow bg-yellow-200 hover:bg-yellow-500 rounded-full p-2 font-bold text-amber-900 hover:text-white">
                Nomes
            </router-link>
        </div>
    </header>
</template>
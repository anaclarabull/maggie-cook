<template>
    <header class="bg-yellow-400 shadow-md h-28 flex justify-between items-center p-5">
        <router-link :to="{ name: 'home' }">
            <img src="../assets/logo.svg" alt="Logo Maggie the Cook" class="h-24 pr-4">
        </router-link>
        <div class="flex items-center gap-2">
            <router-link :to="{ name: 'categories' }"
                class="shadow bg-yellow-200 hover:bg-yellow-500 rounded-full p-2 px-4 font-bold text-amber-900 hover:text-white">
                Categorias
            </router-link>
            <router-link :to="{ name: 'name' }"
                class="shadow bg-yellow-200 hover:bg-yellow-500 rounded-full p-2 px-4 font-bold text-amber-900 hover:text-white">
                Nomes
            </router-link>
        </div>
    </header>
</template>
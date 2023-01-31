
<template>
  <div>
    <header class="bg-yellow-400 shadow-md h-28 flex justify-between items-center p-10">
      <router-link :to="{name: 'home'}">
        <img src="./assets/logo.svg" alt="Logo Maggie the Cook" class="h-24">
      </router-link>
      <div>
        <router-link to="/" class="shadow bg-yellow-200 hover:bg-yellow-500 rounded-full p-2 font-bold text-amber-900 hover:text-white">
          Categorias
        </router-link>
      </div>
    </header>

    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup>

</script>


<style scoped>

</style>

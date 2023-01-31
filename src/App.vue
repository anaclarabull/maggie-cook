
<template>
  <div>
    <header class="bg-yellow-400 shadow-md h-28 flex justify-between items-center p-10">
      <router-link :to="{name: 'home'}">
        <img src="./assets/logo.svg" alt="Logo Maggie the Cook" class="h-24">
      </router-link>
      <div>
        <router-link to="/">
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

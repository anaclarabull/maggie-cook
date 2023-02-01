<template>
    
    <div class="flex flex-col p-8">
      <input
        type="text"
        v-model="keyword"
        class="rounded-full border-2 border-yellow-200 focus:outline-none focus:border-yellow-300 focus:ring-1 focus:ring-yellow-300 w-full"
        placeholder="Procurar por Categorias..."
      />

      <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
        <a href="#"
          @click.prevent="openCategory(category)"
          v-for="category of computedCategories"
          :key="category.idCategory"
          class="block bg-white rounded p-3 mb-3 shadow"
        >
          <h3 class="text-2xl font-bold mb-2">{{ category.strCategory }}</h3>
        </a>
      </div>
    </div>
  </template>
  
  <script setup>
  import { computed } from "@vue/reactivity";
  import { onMounted, ref } from "vue";
  import { useRouter } from "vue-router";
  import axiosClient from "../axiosClient";
  import store from "../store";
  const router = useRouter();
  const keyword = ref("");
  const categories = ref([]);
  const computedCategories = computed(() => {
    if (!computedCategories) return categories;
    return categories.value.filter((c) =>
      c.strCategory.toLowerCase().includes(keyword.value.toLowerCase())
    );
  });
  function openCategory(category) {
    store.commit('setCategory', category)
    router.push({
      name: "byCategory",
      params: { category: category.strCategory },
    });
  }
  onMounted(() => {
    axiosClient.get("list.php?c=list").then(({ data }) => {
      categories.value = data.meals;
    });
  });
  </script>
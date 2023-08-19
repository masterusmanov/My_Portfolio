<template>
  <div class="mt-5 lg:mt-5 xl:mt-10 ">
    <ul class="flex flex-wrap justify-center xl:justify-normal items-center gap-3">
      <li v-for="link in navlink" :key="link.id" class="">
        <router-link :to="link.link" class="flex items-center px-3 py-1 rounded-lg border border-yellow-400  text-white hover:text-black hover:bg-yellow-400">
        <span class="md:text-2xl lg:text-sm">{{ link.title }}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { navLinks } from "../../constant/navLinks.js";
const navlink = ref(navLinks);
</script>

<style lang="scss" scoped>

</style>

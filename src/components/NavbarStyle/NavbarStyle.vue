<template>
  <div class="flex justify-beetwen items-center text-[24px]">
    <ul id="titles" class="flex justify-center items-center gap-2">
      <li v-for="link in navlink" :key="link.id" class="">
        <router-link :to="link.link" class="flex items-center px-3 rounded-lg border border-yellow-400  text-white hover:text-black hover:bg-yellow-400">
        <span>{{ link.title }}</span>
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
@media only screen and (max-width:500px) {
  #titles{
    display: flex;
    font-size: 14px;  
    gap: 0px;
    flex-wrap: wrap;
    gap: 5px;
    span{
      padding-inline: 5px;
      border-radius: 15px;
    }
  }
}
</style>

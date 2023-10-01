<template>
  <Mainnavbar />
  <section>
    <div class="container mx-auto">
      <div class="w-[100%] mt-10 md:mt-14 lg:mt-[100px]">
        <h1 class="text-center text-yellow-300 font-bold text-4xl mb-10">What I am capable of?</h1>
      </div>
      <div class="flex flex-wrap justify-center items-center mt-5 gap-6">
        <div class="flex flex-wrap justify-center items-center gap-10 mt-10">
          <img
            v-for="link in imgLinks"
            :key="link.id"
            :src="link.link"
            :alt="link.title"
            class="w-[50px] h-[50px] md:w-[100px] md:h-[100px] xl:w-[150px] xl:h-[150px] rounded-full object-cover"
          />
          <img
            v-for="link in imgLinks"
            :key="link.id"
            :src="link.link"
            :alt="link.title"
            class="w-[50px] h-[50px] md:w-[100px] md:h-[100px] xl:w-[150px] xl:h-[150px] rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Mainnavbar from "../../components/Mainnavbar/Mainnavbar.vue";
import { imgLinks } from "../../constant/imgLinks.js";
const imglink = ref(imgLinks);
</script>

<style lang="scss" scoped></style>

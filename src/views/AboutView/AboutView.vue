<template>
  <Mainnavbar/>
  <section>
    <div class="container mx-auto lg:flex lg:mt-5 xl:mt-[50px]">
      <div class="w-[100%] grid mt-10 md:mt-14 justify-center">
        <img src="../../assets/img/Mypic2.png" alt="my_picture" class=" w-[300px] md:w-[400px] lg:w-[500px] xl:w-[700px] p-2 object-cover rounded-full shadow-2xl shadow-blue-400">
      </div>
        <div class="w-[100%] mt-10 md:mt-14 lg:mt-[200px] xl:ml-14">
          <h1 class="text-white font-bold text-xl md:text-4xl text-center xl:text-left xl:mx-5">About myself</h1>
          <h2 class="text-justify mx-5 my-2 text-lg md:text-2xl text-white lg:mt-5 xl:text-left">I am Usmanov Elyor Elmuratovich and was born in 1987. I studied in the "Foundation" and "Bootcamp Full-stack (NodeJS+VueJs)" courses at the "Najot Ta'lim" educational center.</h2>
      </div>   
    </div>
  </section>
</template>

<script setup>
import Mainnavbar from '../../components/Mainnavbar/Mainnavbar.vue';
</script>

<style lang="scss" scoped>

</style>
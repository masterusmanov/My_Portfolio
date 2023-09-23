<script setup>
  import NavbarStyle from "../components/NavbarStyle/NavbarStyle.vue";
  import SocialStyle from "../components/SocialStyle/SocialStyle.vue";
</script>

<template>
  <main>
    <div class="container mx-auto lg:flex lg:mt-5 xl:mt-[50px]">
      <div class="w-[100%] grid mt-10 md:mt-14 justify-center">
        <img src="../assets/img/moy.png" alt="" class=" w-[300px] md:w-[500px] lg:w-[550px] xl:w-[800px] object-cover rounded-full shadow-2xl shadow-blue-400">
      </div>
        <div class="w-[100%] mt-10 md:mt-14 lg:mt-[200px] xl:ml-14">
          <p class="font-bold text-xl text-white text-center lg:text-left">Hi everyone, I am</p>        
          <h1 class="text-white font-bold text-xl md:text-4xl text-center xl:text-left">USMANOV ELYOR ELMURATOVICH</h1>
          <h2 class="text-center text-lg md:text-2xl text-[#DB8D76] lg:mt-5 xl:text-left"><span class="text-white">I am </span>Full-stack developer <span class="text-white">(NodeJS + VueJS)</span></h2>
          <p class="text-white text-md md:text-2xl text-center lg:mt-5 xl:text-left">I have a passion for transforming ideas and solutions.</p>
          <NavbarStyle class=""/>
          <SocialStyle class=""/>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
  
</style>

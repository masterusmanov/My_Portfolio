<template>
    <Mainnavbar class="sticky top-0 z-50"/>
    <main>
        <div class="container mx-auto lg:flex lg:mt-5 xl:mt-[50px]">
            <div class="w-[100%] grid mt-10 md:mt-14 justify-center">
              <img src="../../assets/img/mypic6.png" alt="" class=" w-[300px] md:w-[500px] lg:w-[550px] xl:w-[800px] object-cover rounded-full shadow-2xl shadow-blue-400">
            </div>
              <div class="w-[100%] mt-10 md:mt-14 lg:mt-[200px] xl:ml-14">
                <h1 class="text-white font-bold text-xl md:text-4xl text-center xl:text-left">USMANOV ELYOR ELMURATOVICH</h1>
                <h2 class="text-center text-lg md:text-2xl text-[#DB8D76] lg:mt-5 xl:text-left"><span class="text-white">I am </span>Full-stack developer <span class="text-white">(NodeJS + VueJS)</span></h2>
                <i class="bx bx-envelope text-xl mt-5 ml-6 md:ml-[90px] lg:ml-1 text-white "><span class="text-white ml-3">elyor.usmanov87@mail.ru</span></i><br>
                <i class="bx bxl-gmail text-xl ml-6 md:ml-[90px] lg:ml-1 text-white "><span class="text-white ml-3">elyor.usmanov22@gmail.com</span></i><br>
                <div class="flex items-center ml-6 md:ml-[90px] lg:ml-1">
                  <div class="w-1/10">
                    <i class="bx bx-phone text-white text-xl"></i>
                  </div>
                  <div class="text-xl">
                    <p class="text-white ml-3">+998972179900</p>
                    <p class="text-white ml-3">+998950119900</p>
                  </div>
                </div>
                <SocialStyle/>
            </div>
          </div>
    </main>
</template>

<script setup>
import Mainnavbar from '../../components/Mainnavbar/Mainnavbar.vue';
import SocialStyle from "../../components/SocialStyle/SocialStyle.vue";
</script>

<style lang="scss" scoped>

</style>
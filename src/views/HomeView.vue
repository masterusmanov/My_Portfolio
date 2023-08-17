<script setup>
  import NavbarStyle from "../components/NavbarStyle/NavbarStyle.vue";
  import SocialStyle from "../components/SocialStyle/SocialStyle.vue";
</script>

<template>
  <main>
    <div class=" w-full h-screen">
      <div id="alls" class="flex justify-center items-center w-full h-screen gap-6">
        <div id="mypics" class="w-1/2 h-screen flex justify-center">
          <img id="mypic" src="../assets/images/moy.png" alt="" class=" w-[85%] object-cover rounded-full shadow-2xl shadow-blue-400">
        </div>
        <div id="secdiv" class="w-1/2 grid items-center">
          <h1 class="text-white font-bold text-[32px]">USMANOV ELYOR ELMURATOVICH</h1>
          <h2 class="text-[28px] text-[#DB8D76]">Full-stack developer <span class="text-white">(NodeJS + VueJS)</span></h2>
          <p class="text-white text-[24px]">I have a passion for transforming ideas and solutions.</p>
          <NavbarStyle class="mt-5"/>
          <SocialStyle class="mt-10"/>
      </div>
    </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
  @media only screen and (max-width:500px) {
    #alls{
      display: grid;
      justify-items: center;
      margin-top: 80px;
      height: 300px;
    }
    #mypics{
      height: 300px;
      width: 300px;
    }
    #mypic{
      width: 400px;
      height: 300px;
    }
    #secdiv{
      width: 100%;
      h1{
        font-size: 18px;
        text-align: center;
      }
      h2{
        font-size: 14px;
        text-align: center;
      }
      p{
        width: 100%;
        font-size: 14px;
        text-align: center;
      }
    }
  }
 
</style>

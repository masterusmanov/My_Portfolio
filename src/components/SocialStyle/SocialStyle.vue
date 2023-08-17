<template>
    <div id="socialall" class="flex justify-beetwen items-center gap-10 mt-10">
        <ul class="flex justify-center items-center gap-6 ">
            <li v-for="link in sociallink" :key="link.id">
              <router-link :to="link.link" class="flex items-center p-2 border border-yellow-400 rounded-full text-white hover:bg-yellow-400 hover:text-black">
                <i :class="link.icon" class="text-[56px]"></i>
              </router-link>
            </li>
          </ul>
    </div>
</template>

<script setup>
    import { ref, onMounted } from "vue";
    import { socialLinks } from "../../constant/socialLinks";
    const sociallink = ref(socialLinks);
</script>

<style lang="scss" scoped>
  @media only screen and (max-width:500px) {
    #socialall{
      justify-content: center;
      i{
        
        font-size: 32px;
        padding-inline: 5px;
        border-radius: 15px;
      }
    }
  }
</style>
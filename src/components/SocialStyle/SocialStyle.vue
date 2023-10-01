<template>
    <div class="m-5 md:m-10">
        <ul class="flex flex-wrap justify-center xl:justify-normal items-center gap-6 ">
            <li v-for="link in sociallink" :key="link.id">
              <!-- <router-link :to="link.link" class="flex items-center text-4xl md:text-[70px] lg:text-[50px] p-4 border border-yellow-400 rounded-full text-white hover:bg-yellow-400 hover:text-black">
                <i :class="link.icon" class=""></i>
              </router-link> -->
              <a :href="link.link" class="flex items-center text-4xl md:text-[70px] lg:text-[50px] p-4 border border-yellow-400 rounded-full text-white hover:bg-yellow-400 hover:text-black">
                <i :class="link.icon" class=""></i>
              </a>
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

</style>
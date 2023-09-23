<template>
    <div class="h-[50px] flex justify-between items-end gap-6 ">
        <div  class="display-none">
            <h1 class="portfolioo text-4xl font-semibold ml-5 text-yellow-400 ">
                Port<span class="text-red-600 font-semibold">folio</span>
            </h1>
        </div>
        <div id="name" class="justify-end items-center mr-3">
            <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-white lg:hidden font-medium rounded-lg text-sm text-center inline-flex items-center " type="button"><i class='bx bx-menu text-white text-4xl'></i>
               </button>
            <!-- Dropdown menu -->
            <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                    <li v-for="link in navlinks" :key="link.id">
                        <a :href="link.link" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{{link.title}}</a>
                    </li>
                </ul>
            </div>
            <!-- ================================== -->
            <NavbarStyle class="text-[10px] hidden lg:block"/>
        </div>
    </div>
</template>

<script setup>
    import NavbarStyle from '../NavbarStyle/NavbarStyle.vue';
    import { ref, onMounted } from "vue";
    import { navLinks } from "../../constant/navLinks.js";
    const navlinks = ref(navLinks);
</script>

<style lang="scss" scoped>
</style>
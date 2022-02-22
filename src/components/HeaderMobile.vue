<template>
  <div id="header_mobile" class="bg-white">
        <div class="border-b border-gray-200 mx-4 py-4">
            <h1 class="font-poppins text-center font-bold text-2xl mt-4">Desarrollador Web<br><span class="text-xl text-new-100">Alex Loayza</span></h1>
        </div>
        <div class="flex items-center justify-between">
            <div class="px-4">
                <img :src="Logo" class="flex-shrink w-[80px]">
            </div>
            <div>
                <img :src="MenuH" class="flex-shrink max-w-[100px]" id="showMenu_Mobile">
            </div>
        </div>
  </div>
</template>

<script>
import Logo from '../../assets/images/logo.png'
import MenuH from '../../assets/images/menu_h.svg'

export default {
    name: 'HeaderMobile',
    components:{
    },
    data(){
        return{
            Logo,MenuH
        }
    }
}
</script>

<style>
</style>
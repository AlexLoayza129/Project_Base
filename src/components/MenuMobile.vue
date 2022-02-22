<template>
  <div id="menu_mobile" class="z-5 top-0 left-[-80%] absolute bg-white min-w-[80%] min-h-[300%] transition-all ease-in-out duration-800 shadow-lg">
        <div class="w-full flex justify-end p-2 py-4">
                <img :src="Close" class="w-8 h-8" id="closeMenu">
        </div>
        <div class="p-4 space-y-4">
            <div class="flex justify-between items-center font-poppins text-black font-bold text-xl border-b border-gray-300">
                <a href="#" class="pb-2">Inicio</a>
                <img :src="Home" class="w-[20px] h-[20px] mb-2">
            </div>
            <div class="flex justify-between items-center font-poppins text-black font-bold text-xl border-b border-gray-300">
                <a href="#" class="pb-2">Información</a>
                <img :src="Info" class="w-[20px] h-[20px] mb-2">
            </div>
            <div class="flex justify-between items-center font-poppins text-black font-bold text-xl border-b border-gray-300">
                <a href="#" class="pb-2">Contactame</a>
                <img :src="Bag" class="w-[20px] h-[20px] mb-2">
            </div>
            <div class="text-center font-poppins text-gray-300 pb-2 text-xl border-b border-gray-300 select-none pointer-events-none">
                <button href="#">Proximamente</button>
            </div>
        </div>
  </div>
</template>

<script>
import Home from '../../assets/images/home.png'
import Bag from '../../assets/images/bag.png'
import Info from '../../assets/images/info.png'
import Close from '../../assets/images/close.png'

export default {
    name: 'MenuMobile',
    props:{
    },
    data(){
        return{
            Home,Info,Bag,Close
        }
    },
    methods:{
        
    },
    created(){

    }
}
</script>

<style>

</style>
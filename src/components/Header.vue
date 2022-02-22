<template>
    <div id="header" class="bg-white z-2 top-0 w-full flex items-center justify-between shadow-xl py-2 z-2 shadow-new-100 px-4">
        <div class="flex items-center">
            <a href="#Index">
                <img id="logo_img" :src="Logo" class="w-[100px]"><h1 class="sr-only">AL - Desarrollador Web</h1>
            </a>
        </div> 
        <div class="flex items-center justify-center">
            <ul class="flex space-x-4">
                <li><a href="#" id="home" class="text-xl font-poppins transition-all ease-in-out delay-200 font-bold text-white p-4 rounded-md bg-new-100">Inicio</a></li>
                <li><a href="#info" id="services" class="text-xl font-poppins transition-all ease-in-out delay-200 font-bold text-black hover:text-white hover:p-4 hover:rounded-md hover:bg-new-100">Información</a></li>
                <li><a href="#" id="contact" class="text-xl font-poppins transition-all ease-in-out delay-200 font-bold text-black hover:text-white hover:p-4 hover:rounded-md hover:bg-new-100">Contáctame</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
import Logo from '../../assets/images/logo.png'

export default {
    name: 'Header',
    props: {
        
    },
    components: {  },
    data(){
        return {
            Logo
        }
    },
    methods:{
        onHover(){
            //const logo = document.getElementById('logo_img')
            //logo.onmouseenter(() => {
            //})
        }
    },
    created(){
    }
}
</script>

<style scoped>


</style>
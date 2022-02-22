<template>
  <div id="cookies_modal" class="font-poppins shadow-lg hidden bg-white text-center absolute top-[2%] left-[35%] p-8 rounded-lg transition-all ease-in-out duration-500 lg:min-w-[500px]">
      <div class="py-8 select-none pointer-events-none">
        <h2 class="font-poppins text-2xl text-turq-800 text-center"><strong>¡Bienvenido!</strong></h2>
        <p class="mt-4 text-xl md:text-lg">Ese sitio <span class="text-new-100 font-bold">Próximamente</span> usará cookies.</p>
      </div>
      <div class="flex justify-center">
          <button id="btn_close_cookie" class="bg-turq-800 px-4 py-2 rounded-lg text-white border-b-4 border-turq-900">Aceptar</button>
      </div>
      <img id="cookie" :src="Cookie" class="absolute w-32 h-32 xl:top-[-35%] xl:right-[8%] select-none pointer-events-none">
  </div>
</template>

<script>
import Cookie from '../../assets/images/cookie.svg'

export default {
    name: 'Cookies',
    data(){
        return{
            Cookie
        }
    }
}
</script>

<style>

</style>
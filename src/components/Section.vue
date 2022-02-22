<template>
  <div class="relative">
      <img :src="Slider" class="w-100 max-h-1/2 transition-all ease-in-out duration-500 select-none pointer-events-none" id="hero">
      <div id="welcome_text" class="hidden absolute top-[35%] left-[20%] sm:top-[30%] sm:left-[25%]  md:top-[35%] md:left-[20%] lg:top-[25%] lg:left-[25%]">
          <h2 class="font-bold text-3xl sm:text-5xl md:text-7xl xl:text-8xl text-white font-poppins"><span>¡Bienvenido!</span></h2>
      </div>
  </div>
</template>

<script>
import Slider from '../../assets/images/slider.jpg'

export default {
    name: 'Section',
    data(){
        return{
            Slider
        }
    },
    methods:{
        
    },
    created(){

    }
}

</script>

<style scoped>
span {
display: block;
font-family: monospace;
white-space: nowrap;
border-right: 4px solid;
width: 12ch;

animation: typing 3s steps(12), blink .5s infinite step-end alternate;
overflow:hidden;
}

@keyFrames typing {
    from { width: 0}
}

@keyFrames blink {
 50% { border-color: transparent}
}
</style>
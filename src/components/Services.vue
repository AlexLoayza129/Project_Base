<template>
    <div class="hidden md:block">
        <div class="bg-white py-10"></div>
        <div class="lg:pt-12 xl:pt-16" id="info" name="info">
            <img :src="tasks" class="w-full h-auto object-cover min-h-screen-1/3">
        </div>
        <div clasS="bg-white py-10"></div>
    </div>
</template>

<script>
import tasks from '../../assets/images/services.png'
export default {
    data(){
        return{
            tasks
        }
    }
}
</script>

<style>

</style>
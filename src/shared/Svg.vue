<template>
    <div>
        <img :src="token">
    </div>
</template>

<script>
export default {   
    name: 'svg',
    props: {
        token:{
            type: String,
            require: true
        }
    }
}
</script>

<style>

</style>

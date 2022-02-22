<template>
    <div id="app" class="container-fluid mx-auto relative">
        <div class="max-h-screen overflow-hidden">
            <Header v-if="show_header"></Header>
            <HeaderMobile v-if="header_mobile"></HeaderMobile>
            <Section></Section>
        </div>
        <div class="bg-white p-2 w-full flex justify-center items-center"><img :src="Down_arrow" class="w-8 h-8 md:w-10 md:h-10"></div>
        <MenuMobile></MenuMobile>
        <Cookies></Cookies>
        <Info></Info>
    </div>
</template>

<script>
import Header from './components/Header.vue'
import HeaderMobile from './components/HeaderMobile.vue'
import MenuMobile from './components/MenuMobile.vue'
import Section from './components/Section.vue'
import Services from './components/Services.vue'
import Footer from './components/Footer.vue'
import Cookies from './components/Cookies.vue'
import Info from './components/Info.vue'

//Assets
import Down_arrow from '../assets/images/down_arrow.png'

export default {
    name: 'App',
    props:{
    },
    components: {
        Header,HeaderMobile,MenuMobile,Section,Services,Footer,Cookies,Info
    },
    data(){
        return{
            show_header: false,
            header_mobile : true,
            Down_arrow
            //screen: window.screen.width
        }
    },
    methods: {
        view(){
            var screen = window.screen.width
            if( screen <= 1024 ){
                this.show_header = false
                this.header_mobile
            }else{
                this.show_header = true
                this.header_mobile = false
            }
        }
    },
    created(){
        this.view()
    }    
}
</script>

<style>
    *{ scroll-behavior: smooth;}
    body{background-color: #f2f2f2;}
</style>
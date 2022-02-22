import Vue from 'vue';
import App from './App.vue';

//Import tailwindcss
import './style.css';

//Jquery
import './jquery/header'
import './jquery/section'
import './jquery/header_mobile'
import './jquery/cookie'

//Mount Vue
new Vue({
    el: '#app',
    render: h => h(App)
}).$mount(App);
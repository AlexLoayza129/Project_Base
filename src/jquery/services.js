import './jquery_bases'

//Codigo para services

$(function(){
    setTimeout(() => {
        $('#hero').fadeIn()
    },scrollY($('#hero')))
});
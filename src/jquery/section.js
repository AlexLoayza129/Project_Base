import './jquery_bases'
// Codigo para el section

$(function(){
    

    $('#btn_close_cookie').mouseup(() => {
        setTimeout(() => {
            $('#welcome_text').fadeIn()
        },500)
    })
    // Efecto hover
    // $('#text_hero').mouseenter(() => {
    //     $('#hero').css({"filter":"blur(3px)"});
    // })
    // $('#text_hero').mouseleave(() => {
    //     $('#hero').css({"filter": "none"});
    // })
    //
});
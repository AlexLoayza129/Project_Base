import './jquery_bases'

$(function(){
    var showModal = false
    var closeModal = false

    $('#menu_mobile').hide()

    $('#showMenu_Mobile').mouseup(() => {
        showModal = !showModal
        closeModal = false
        if(showModal){
            setTimeout(() => {
                $('#menu_mobile').removeClass('left-[-80%]')
                $('#menu_mobile').addClass('left-0')
                $('#header_mobile').css({"filter":"blur(3px)","user-select":"none","pointer-events":"none"})
                $('#hero').css({"filter":"blur(3px)","user-select":"none","pointer-events":"none"})
                $('#app').css({"position":"fixed"})
            },500)
            $('#menu_mobile').fadeIn()
        }else{
            $('#menu_mobile').addClass('left-[-80%]')
            $('#menu_mobile').hide()
        }
    })

    $('#closeMenu').mouseup(() => {
        closeModal = !closeModal
        if(closeModal){
            showModal = !showModal
            $('#menu_mobile').hide()
            $('#header_mobile').css({"filter":"none","user-select":"auto","pointer-events":"auto"})
            $('#hero').css({"filter":"none","user-select":"auto","pointer-events":"auto"})
            $('#menu_mobile').removeClass('left-0')
            $('#menu_mobile').addClass('left-[-80%]')
            $('#app').css({"position":"static"})
        }
    })
});
import './jquery_bases'

$(function(){
    const screen = window.screen.width

    //ShowCookie
    setTimeout(() => {
        $('#header').css({"filter":"blur(3px)","user-select":"none","pointer-events":"none"})
        //view mobile
        $('#header_mobile').css({"filter":"blur(3px)","user-select":"none","pointer-events":"none"})
        $('#hero').css({"filter":"blur(3px)","user-select":"none","pointer-events":"none"})
        $('#cookies_modal').removeClass('left-[35%]')
        
        //LEFT SLIDING ------------------------------------
        // XL -- PC, TV
        if(screen <= 1280){
            //LG -- IPADS
            if(screen <= 1024){
                //MD -- MEDIUM // TABLETS
                if(screen <= 768){
                    //SM -- SMALL
                    if(screen <= 640){
                        // XS --- SMARTPHONES
                        if(screen <= 420){
                            //IPHONES
                            if(screen <= 340){
                                $('#cookies_modal').addClass('left-[10%] w-[250px]')
                                $('#cookie').addClass('left-[1%] top-[-28%] w-[260px]')
                            }else{
                                $('#cookies_modal').addClass('left-[15%] w-[260px]')
                                $('#cookie').addClass('left-[1%] top-[-25%] w-[260px]')
                            }
                        }else{
                            $('#cookies_modal').addClass('left-[15%]')
                            $('#cookie').addClass('left-[-12%] top-[-30%] w-[260px]')
                        }
                    }else{
                        $('#cookies_modal').addClass('left-[25%]')
                        $('#cookie').addClass('left-[-12%] top-[-30%] w-[260px]')
                    }
                }else{
                    $('#cookies_modal').addClass('left-[28%]')
                    $('#cookie').addClass('left-[-12%] top-[-30%] w-[260px]')
                }
            }else{
                $('#cookies_modal').addClass('left-[30%]')
                $('#cookie').addClass('left-[-10%] top-[-30%] w-[260px]')
            }
        }else{
            $('#cookies_modal').addClass('left-[30%]')
            $('#cookie').addClass('left-[-10%] top-[-30%] w-[260px]')
        }
        // ----------------------------------------------------

        //FADEIN COOKIE

        $('#cookies_modal').fadeIn()
        
        //TOP SLIDING
        setTimeout(() => {
            if(screen <= 1280){
                //LG -- IPADS
                if(screen <= 1024){
                    //MD -- MEDIUM // TABLETS
                    if(screen <= 768){
                        //SM -- SMALL
                        if(screen <= 640){
                            // XS --- SMARTPHONES
                            if(screen <= 420){
                                //IPHONES
                                if(screen <= 340){
                                    $('#cookies_modal').removeClass('top-[2%]')
                                    $('#cookies_modal').addClass('top-[35%] w-[250px]')
                                }else{
                                    $('#cookies_modal').removeClass('top-[2%]')
                                    $('#cookies_modal').addClass('top-[25%] w-[260px]')
                                }
                            }else{
                                $('#cookies_modal').removeClass('top-[2%]')
                                $('#cookies_modal').addClass('top-[20%]')
                            }
                        }else{
                            $('#cookies_modal').removeClass('top-[2%]')
                            $('#cookies_modal').addClass('top-[25%]')
                        }
                    }else{
                        $('#cookies_modal').removeClass('top-[2%]')
                        $('#cookies_modal').addClass('top-[28%]')
                    }
                }else{
                    $('#cookies_modal').removeClass('top-[2%]')
                    $('#cookies_modal').addClass('top-[30%]')
                }
            }else{
                $('#cookies_modal').removeClass('top-[2%]')
                $('#cookies_modal').addClass('top-[30%]')
            }
        },100)
        $('#app').css({"position":"fixed"})
    },500)

    //CloseCookie
    $('#btn_close_cookie').mouseup(() => {
        $('#header').css({"filter":"none","user-select":"auto","pointer-events":"auto"})
        $('#header_mobile').css({"filter":"none","user-select":"auto","pointer-events":"auto"})
        $('#hero').css({"filter":"none","user-select":"auto","pointer-events":"auto"})
        $('#cookies_modal').addClass('top-[1%]')
        $('#cookies_modal').fadeOut()
        $('#app').css({"position":"static"})
    })

})
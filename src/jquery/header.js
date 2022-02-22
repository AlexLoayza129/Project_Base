import './jquery_bases'

$(function(){
    //Nav hovers
    $('#home').mouseenter(() => {
        $('#home').removeClass('text-black')
        $('#home').addClass('text-white p-4 rounded-md bg-new-100')
    });
    $('#home').mouseleave(() => {
        $('#home').removeClass('text-white p-4 rounded-md bg-new-100')
        $('#home').addClass('text-black')
    });
    $('#services').mouseenter(() => {
       $('#home').removeClass('text-white p-4 rounded-md bg-new-100')
    });
    $('#contact').mouseenter(() => {
        $('#home').removeClass('text-white p-4 rounded-md bg-new-100')
     });
});
$(function(){

    var ex = $('.ex1');

    $('.ev1').click(function(){
        ex.hide('slow')
    });

    $('.ev2').click(function(){
        ex.show('slow')
    });

    $('.ev3').click(function(){
        ex.toggle('slow')  
    });

    $('.ev4').keyup(function(){
        var texto = $(this).val();

        if (texto == 'hide') {
            ex.hide('slow')
        } if (texto == 'show') {
            ex.show('slow')
        } if (texto == 'toggle') {
            ex.toggle('slow')
        }
    });
});
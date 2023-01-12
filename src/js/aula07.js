$(function(){
    $('place').each(function(){
        var place = $(this).attr('title')
        var input = $(this)

        
            
    });

    var ex = $('.ex1');
    // $('.key').keypress(function(){
        // ex.text($(this).val())
    // });
    // $('.key').keydown(function(){
        // ex.text($(this).val())
    // });
    $('.key').keyup(function(){
        ex.text($(this).val())
    });
});
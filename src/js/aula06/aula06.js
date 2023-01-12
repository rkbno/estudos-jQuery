$(function(){

    var ex = $('.ex1');

    $('.ev1').click(function(){
        $(this).css("background","#ccc")
        ex.text("Você Clicou!")
    });

    $('.ev2').dblclick(function(){
        $(this).css("background","#ccc")
        ex.text("Você deu dois Cliques!")
    });
});
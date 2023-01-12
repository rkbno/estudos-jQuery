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

    $('.ev3').focusin(function(){
        $(this).css("background","#ccc")
        ex.text("Você deu Foco!")
    }).focusout(function(){
        $(this).css("background","#000")
        ex.text("Você tirou o Foco!")
    })
    $('.ev4').hover(function(){
        $(this).css("background","#ccc")
        ex.text("Você passou o mouse!")
    })
    $('.ev5').mousedown(function(){
        $(this).css("background","#ccc")
        ex.text("Você Clicou!")
    }).mouseup(function(){
        $(this).css("background","#000")
        ex.text("Você Soltou!")
    })
    var a = 0;
    $('.ev6').mouseenter(function(){
        a +=1
        ex.text("Entradas do Mouse: "+a)
    }).mouseout(function(){
        ex.text("Sainda do Mouse")

    })
    var b = 0
    $('.ev7').mouseover(function(){
        b += 1;
        ex.text("Mouse over: " +b)
    }).mouseleave(function(){
        ex.text("Mouse Leave")
    })
    $('.ev8').mousemove(function(move){
        var localx = move.pageX;
        var localy = move.pageY;
        ex.text("Movimento X: "+localx+" - Movimento Y: "+localy);
    })
});
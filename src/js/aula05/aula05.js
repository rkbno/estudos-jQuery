$(function(){
    $('body').css("height","5000px")



    $(window).scroll(function(){
        var topo = $(window).scrollTop();
        if(topo>400){
            $('img').fadeOut('1000');
        } else {
            $('img').fadeIn('1000')
        }
    });
});


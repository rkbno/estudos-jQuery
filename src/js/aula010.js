$(function(){
    var ex = $('.ex1');
    var ex2 = $('.ex2');
    var button = $(':button');

    // button.click(function(){
    //     ex.fadeOut("slow")
    // }).dblclick(function(){
    
    //     ex.fadeIn("slow")
    // }) 
        
    // button.click(function(){
    //     ex.fadeTo("slow",0.5)
    // });

    // button.click(function(){
    //    ex.fadeToggle("slow")
    // });

    button.click(function(){
        ex.fadeTo(5000,0.6,function(){
            ex2.fadeTo("slow",0.3)
        });
    });

});
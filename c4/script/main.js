$(document).ready(function(){
    var intv = setInterval(function() { nextAni(); }, 2800);
    function nextAni() {
        $(".banFrame").not(":animated").animate({"margin-left":"-760px"}, 800, function(){
            $(".banFrame li").eq(0).appendTo($(".banFrame"));
            $(".banFrame").css("margin-left", "0px");
        });
    }
    function prevAni(){
        $(".banFrame li").eq(2).prependTo($(".banFrame"));
        $(".banFrame").css("margin-left", "-760px");
        $(".banFrame").not(":animated").animate({"margin-left":"0px"}, 800);
    }
    $(".nextBtn").click(function(){
        clearInterval(intv);
        nextAni();
        intv = setInterval(function() { nextAni(); }, 2800);
    });
    $(".prevBtn").click(function(){
        clearInterval(intv);
        prevAni();
        intv = setInterval(function() { nextAni(); }, 2800);
    });
    $(".popOpenBtn").click(function(){
       $(".popBox").fadeIn(); 
    });
    $(".closeBtn").click(function(){
       $(".popBox").fadeOut(); 
    });
});
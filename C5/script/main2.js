$(document).ready(function(){
    var intv = setInterval(function() { nextAni(); }, 2800);
    function nextAni() {
        $(".banFrame1").not(":animated").animate({"margin-left":"-395px"}, 800, function(){
            $(".banFrame1 li").eq(0).appendTo($(".banFrame1"));
            $(".banFrame1").css("margin-left", "0px");
        });
    }
    function prevAni(){
        $(".banFrame1 li").eq(2).prependTo($(".banFrame1"));
        $(".banFrame1").css("margin-left", "-395px");
        $(".banFrame1").not(":animated").animate({"margin-left":"0px"}, 800);
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
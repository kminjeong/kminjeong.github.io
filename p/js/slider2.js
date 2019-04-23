$(document).ready(function(){
    var wd=$(".slider2").width();
//    var ht=$(".slider1").height();
    var len=$(".imgBox li").length;
    var intv = setInterval(function(){
        nextAni();
    }, 10000);
    function nextAni(){
        $(".imgBox").not(":animated").animate({
            "margin-left":-wd+"px"
        }, 2000, function(){ 
            $(".imgBox li").eq(0).appendTo($(".imgBox"));
            $(".imgBox").css("margin-left", "0px");
        });
    }
    function prevAni(){
        $(".imgBox li").eq(len-1).prependTo($(".imgBox"));
        $(".imgBox").css("margin-left", -wd+"px");
        $(".imgBox").not(":animated").animate({
            "margin-left":"0px"
        }, 1000);
    }
    $(".btnBox .next .btn").click(function(){
        clearInterval(intv);
        nextAni();
        intv = setInterval(function(){
            nextAni();
        }, 2950);
    });
    $(".btnBox .prev .btn").click(function(){
        clearInterval(intv);
        prevAni();
        intv = setInterval(function(){
            nextAni();
        }, 2950);
    });
});
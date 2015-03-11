$(document).ready(function() {
$("#part-1-nav").click(function() {
        $("html,body").animate({
            scrollTop: $("#part-1").offset().top - 100
        }, 500)
    }), $("#part-2-nav").click(function() {
        $("html,body").animate({
            scrollTop: $("#part-2").offset().top - 50
        }, 500)
    }), $("#part-3-nav").click(function() {
        $("html,body").animate({
            scrollTop: $("#part-3").offset().top - 50
        }, 500)
    }), $("#part-4-nav").click(function() {
        $("html,body").animate({
            scrollTop: $("#part-4").offset().top - 50
        }, 500)
    }),


    //Nav bar resiging and correct component selction in the navbar
     $(window).scroll(function() {
        var a = $("#nav-panel li"),
            b = $(window).scrollTop();
        var c=  $("#part-1").offset().top;
        var d=  $("#part-2").offset().top;
        var e=  $("#part-3").offset().top;
        var f=  $("#part-4").offset().top;
        var g=  $("#part-1").height();
        var h=  $("#part-2").height();
        var i=  $("#part-3").height();
        var j=  $("#part-4").height();

        if(0>=b)
        {
        	$("header").addClass("larger-head");	
        }

        else
        {
        	$("header").removeClass("larger-head");
        }
        if (b >= c && b < (c + g)) {
            a.removeClass("active");
            $("#part-1-nav").addClass("active");
        }
        if (b >= (d-60) && b < (d + h)) {
            a.removeClass("active");
            $("#part-2-nav").addClass("active");
        }
      	if (b >= (e-80) && b < ( e + i)) {
            a.removeClass("active");
            $("#part-3-nav").addClass("active");
        }
        if (b >= (f-60) && b < ( f + j)) {
            a.removeClass("active");
            $("#part-4-nav").addClass("active");
        }
    })
});
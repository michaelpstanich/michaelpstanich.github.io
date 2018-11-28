//index.js
//michaelpstanich.com

var vidTab = 0;
var gameTab = 0;
var gameload = 1;
var bload = 1;
var fadeintime = 100;
var fadeouttime = 200;


$.ajax({
    url : "blogindex.txt",
    dataType: "text",
    success : function (data) {
    blogn = parseInt(data);
    blogl = parseInt(data);
    bload = 1
    $.ajax({
        url : blogn+"-blogpost.html",
        dataType: "html",
        success : function (data) {
            $(".bsec").html(data);
        }
    });
}
});

$(function(){
	function adjust(){
		windowWidth = $(window).width();
		
        if(windowWidth < 460){
            //Hide Nav Buttons
            $(".mainNavBox").hide();
            $(".secNavBox").hide();
        }else{
            //Show Nav Buttons
            $(".mainNavBox").show();
            $(".secNavBox").show();
            
		//Nav Adjust
		navLogoWidth = $(".navLogo").width();
		navLogoMidS = ($(".navLogo").width())*0.5;
		navLeftPos = (windowWidth*0.5)-navLogoMidS-6;
		navRightPos = (windowWidth*0.5)+navLogoMidS+6;
		
		$(".mainNavBar").css("left", navLeftPos);
		$(".secNavBar").css("right", navRightPos);
        }
        //Loading Cover
        $(".loadingCover").fadeOut(1000);
	}
	window.onload = adjust;
	
	$(window).resize(function(){
		adjust();
	});
	
	//Nav Animate
    $(".navLogo").mouseover(function(){
		$(".navCLogo").stop().animate({backgroundColor: "#1e1e1e"},100);
	});
	$(".navLogo").mouseout(function(){
		$(".navCLogo").stop().animate({backgroundColor: "#fff"},200);
	});
    $(".navLogo").click(function(){
        $("html, body").animate({
            scrollTop: ($(".contentHome").offset().top -300)
        }, 200);
    });
    $(".navVideo").mouseover(function(){
		$(".navCVideo").stop().animate({backgroundColor: "#00ccff"},100);
	});
	$(".navVideo").mouseout(function(){
		$(".navCVideo").stop().animate({backgroundColor: "#fff"},200);
	});
    $(".navVideo").click(function(){
        $("html, body").animate({
            scrollTop: ($(".cvideo").offset().top -60)
        }, 200);
    });
    $(".navGaming").mouseover(function(){
		$(".navCGaming").stop().animate({backgroundColor: "#ff0078"},100);
	});
	$(".navGaming").mouseout(function(){
		$(".navCGaming").stop().animate({backgroundColor: "#fff"},200);
	});
    $(".navGaming").click(function(){
        $("html, body").animate({
            scrollTop: ($(".cgaming").offset().top -60)
        }, 200);
    });
	$(".navBlog").mouseover(function(){
		$(".navCBlog").stop().animate({backgroundColor: "#00c788"},100);
	});
	$(".navBlog").mouseout(function(){
		$(".navCBlog").stop().animate({backgroundColor: "#fff"},200);
	});
    $(".navBlog").click(function(){
        $("html, body").animate({
            scrollTop: ($(".cblog").offset().top -60)
        }, 200);
    });
    $(".navResume").mouseover(function(){
		$(".navCResume").stop().animate({backgroundColor: "#ff0078"},100);
	});
	$(".navResume").mouseout(function(){
		$(".navCResume").stop().animate({backgroundColor: "#fff"},200);
	});
    $(".navResume").click(function(){
        $("html, body").animate({
            scrollTop: ($(".contentResume").offset().top -60)
        }, 200);
    });
    
    // Social Animate Color and Info
    $(".YouTubeSocIcon2").mouseover(function(){
        $(".YouTubeSocIcon2").stop().fadeTo(100,1.0);
        $(".YouTubeSocIcon").stop().fadeTo(100,0.0);
    });
    $(".YouTubeSocIcon2").mouseout(function(){
        $(".YouTubeSocIcon2").stop().fadeTo(200,0.0);
        $(".YouTubeSocIcon").stop().fadeTo(200,1.0);
    });
    $(".DeviantArtSocIcon2").mouseover(function(){
        $(".DeviantArtSocIcon2").stop().fadeTo(100,1.0);
        $(".DeviantArtSocIcon").stop().fadeTo(100,0.0);
    });
    $(".DeviantArtSocIcon2").mouseout(function(){
        $(".DeviantArtSocIcon2").stop().fadeTo(200,0.0);
        $(".DeviantArtSocIcon").stop().fadeTo(200,1.0);
    });
    $(".TwitterSocIcon2").mouseover(function(){
        $(".TwitterSocIcon2").stop().fadeTo(100,1.0);
        $(".TwitterSocIcon").stop().fadeTo(100,0.0);
    });
    $(".TwitterSocIcon2").mouseout(function(){
        $(".TwitterSocIcon2").stop().fadeTo(200,0.0);
        $(".TwitterSocIcon").stop().fadeTo(200,1.0);
    });
    
    // Video Animated
    $(".vidTlatest").mouseover(function(){
        if (vidTab != 0){
		$(".vidBlatest").stop().fadeIn(200);
        }
	});
    $(".vidTlatest").mouseout(function(){
        if (vidTab != 0){
		$(".vidBlatest").stop().fadeOut(200);
        }
	});
    $(".vidTlatest").click(function(){
        if (vidTab != 0){
        $.ajax({
            url : "vlatest.html",
            dataType: "html",
            success : function (data) {
                $(".vidSectionX").html(data);
            }
        });
            vidTab = 0;
		  $(".vidBimpressions").stop().fadeOut(200);
		  $(".vidBoverview").stop().fadeOut(200);
		  $(".vidBtopic").stop().fadeOut(200);
		  $(".vidBdesignview").stop().fadeOut(200);
		  $(".vidBcheckout").stop().fadeOut(200);
		  $(".vidBplay").stop().fadeOut(200);
		  $(".vidBcolab").stop().fadeOut(200);
        }
    });
    $(".vidTimpressions").mouseover(function(){
        if (vidTab != 1){
		$(".vidBimpressions").stop().fadeIn(200);
        }
	});
    $(".vidTimpressions").mouseout(function(){
        if (vidTab != 1){
		$(".vidBimpressions").stop().fadeOut(200);
        }
	});
    $(".vidTimpressions").click(function(){
        if (vidTab != 1){
        $.ajax({
            url : "vimpressions.html",
            dataType: "html",
            success : function (data) {
                $(".vidSectionX").html(data);
            }
        });
            vidTab = 1;
		  $(".vidBlatest").stop().fadeOut(200);
		  $(".vidBoverview").stop().fadeOut(200);
		  $(".vidBtopic").stop().fadeOut(200);
		  $(".vidBdesignview").stop().fadeOut(200);
		  $(".vidBcheckout").stop().fadeOut(200);
		  $(".vidBplay").stop().fadeOut(200);
		  $(".vidBcolab").stop().fadeOut(200);
        }
    });
    $(".vidToverview").mouseover(function(){
        if (vidTab != 2){
		$(".vidBoverview").stop().fadeIn(200);
        }
	});
    $(".vidToverview").mouseout(function(){
        if (vidTab != 2){
		$(".vidBoverview").stop().fadeOut(200);
        }
	});
    $(".vidToverview").click(function(){
        if (vidTab != 2){
        $.ajax({
            url : "voverview.html",
            dataType: "html",
            success : function (data) {
                $(".vidSectionX").html(data);
            }
        });
            vidTab = 2;
		  $(".vidBlatest").stop().fadeOut(200);
		  $(".vidBimpressions").stop().fadeOut(200);
		  $(".vidBtopic").stop().fadeOut(200);
		  $(".vidBdesignview").stop().fadeOut(200);
		  $(".vidBcheckout").stop().fadeOut(200);
		  $(".vidBplay").stop().fadeOut(200);
		  $(".vidBcolab").stop().fadeOut(200);
        }
    });
    $(".vidTtopic").mouseover(function(){
        if (vidTab != 3){
		$(".vidBtopic").stop().fadeIn(200);
        }
	});
    $(".vidTtopic").mouseout(function(){
        if (vidTab != 3){
		$(".vidBtopic").stop().fadeOut(200);
        }
	});
    $(".vidTtopic").click(function(){
        if (vidTab != 3){
        $.ajax({
            url : "vtopic.html",
            dataType: "html",
            success : function (data) {
                $(".vidSectionX").html(data);
            }
        });
            vidTab = 3;
		  $(".vidBlatest").stop().fadeOut(200);
		  $(".vidBimpressions").stop().fadeOut(200);
		  $(".vidBoverview").stop().fadeOut(200);
		  $(".vidBdesignview").stop().fadeOut(200);
		  $(".vidBcheckout").stop().fadeOut(200);
		  $(".vidBplay").stop().fadeOut(200);
		  $(".vidBcolab").stop().fadeOut(200);
        }
    });
    $(".vidTdesignview").mouseover(function(){
        if (vidTab != 4){
		$(".vidBdesignview").stop().fadeIn(200);
        }
	});
    $(".vidTdesignview").mouseout(function(){
        if (vidTab != 4){
		$(".vidBdesignview").stop().fadeOut(200);
        }
	});
    $(".vidTdesignview").click(function(){
        if (vidTab != 4){
        $.ajax({
            url : "vdesignview.html",
            dataType: "html",
            success : function (data) {
                $(".vidSectionX").html(data);
            }
        });
            vidTab = 4;
		  $(".vidBlatest").stop().fadeOut(200);
		  $(".vidBimpressions").stop().fadeOut(200);
		  $(".vidBoverview").stop().fadeOut(200);
		  $(".vidBtopic").stop().fadeOut(200);
		  $(".vidBcheckout").stop().fadeOut(200);
		  $(".vidBplay").stop().fadeOut(200);
		  $(".vidBcolab").stop().fadeOut(200);
        }
    });
    $(".vidTcheckout").mouseover(function(){
        if (vidTab != 5){
		$(".vidBcheckout").stop().fadeIn(200);
        }
	});
    $(".vidTcheckout").mouseout(function(){
        if (vidTab != 5){
		$(".vidBcheckout").stop().fadeOut(200);
        }
	});
    $(".vidTcheckout").click(function(){
        if (vidTab != 5){
        $.ajax({
            url : "vcheckout.html",
            dataType: "html",
            success : function (data) {
                $(".vidSectionX").html(data);
            }
        });
            vidTab = 5;
		  $(".vidBlatest").stop().fadeOut(200);
		  $(".vidBimpressions").stop().fadeOut(200);
		  $(".vidBoverview").stop().fadeOut(200);
		  $(".vidBtopic").stop().fadeOut(200);
		  $(".vidBdesignview").stop().fadeOut(200);
		  $(".vidBplay").stop().fadeOut(200);
		  $(".vidBcolab").stop().fadeOut(200);
        }
    });
    $(".vidTplay").mouseover(function(){
        if (vidTab != 6){
		$(".vidBplay").stop().fadeIn(200);
        }
	});
    $(".vidTplay").mouseout(function(){
        if (vidTab != 6){
		$(".vidBplay").stop().fadeOut(200);
        }
	});
    $(".vidTplay").click(function(){
        if (vidTab != 6){
        $.ajax({
            url : "vplay.html",
            dataType: "html",
            success : function (data) {
                $(".vidSectionX").html(data);
            }
        });
            vidTab = 6;
		  $(".vidBlatest").stop().fadeOut(200);
		  $(".vidBimpressions").stop().fadeOut(200);
		  $(".vidBoverview").stop().fadeOut(200);
		  $(".vidBtopic").stop().fadeOut(200);
		  $(".vidBdesignview").stop().fadeOut(200);
		  $(".vidBcheckout").stop().fadeOut(200);
		  $(".vidBcolab").stop().fadeOut(200);
        }
    });
    $(".vidTcolab").mouseover(function(){
        if (vidTab != 7){
		$(".vidBcolab").stop().fadeIn(200);
        }
	});
    $(".vidTcolab").mouseout(function(){
        if (vidTab != 7){
		$(".vidBcolab").stop().fadeOut(200);
        }
	});
    $(".vidTcolab").click(function(){
        if (vidTab != 7){
        $.ajax({
            url : "vcolab.html",
            dataType: "html",
            success : function (data) {
                $(".vidSectionX").html(data);
            }
        });
            vidTab = 7;
		  $(".vidBlatest").stop().fadeOut(200);
		  $(".vidBimpressions").stop().fadeOut(200);
		  $(".vidBoverview").stop().fadeOut(200);
		  $(".vidBtopic").stop().fadeOut(200);
		  $(".vidBdesignview").stop().fadeOut(200);
		  $(".vidBcheckout").stop().fadeOut(200);
		  $(".vidBplay").stop().fadeOut(200);
        }
    }); 
    
    //Blog
    
    $(".bsec").ready(function(){
        if (bload != 0){
        bload = 1
        $.ajax({
            url : blogn+"-blogpost.html",
            dataType: "html",
            success : function (data) {
                $(".bsec").html(data);
            }
        });
        }
    });
    $(".bpostnext").click(function(){
        if (blogn > 1){
        blogn -= 1
        $.ajax({
            url : blogn+"-blogpost.html",
            dataType: "html",
            success : function (data) {
                $(".bsec").html(data);
            }
        });
        }
    });
    $(".bpostlast").click(function(){
        if (blogn < blogl){
        blogn += 1
        $.ajax({
            url : blogn+"-blogpost.html",
            dataType: "html",
            success : function (data) {
                $(".bsec").html(data);
            }
        });
        }
    });
    $(".bpostarchive").click(function(){
        blogn = blogl + 1;
        $.ajax({
            url : "blogarchive.html",
            dataType: "html",
            success : function (data) {
                $(".bsec").html(data);
            }
        });
    });
    
    // Gaming
    $(".gameSectionX").ready(function(){
        if (gameload != 0){
        gameload = 0
        $.ajax({
            url : "gmods.html",
            dataType: "html",
            success : function (data) {
                $(".gameSectionX").html(data);
            }
        });
        }
    });
    $(".gameTmods").mouseover(function(){
        if (gameTab != 0){
		$(".gameBmods").stop().fadeIn(200);
        }
	});
    $(".gameTmods").mouseout(function(){
        if (gameTab != 0){
		$(".gameBmods").stop().fadeOut(200);
        }
	});
    $(".gameTmods").click(function(){
        if (gameTab != 0){
        $.ajax({
            url : "gmods.html",
            dataType: "html",
            success : function (data) {
                $(".gameSectionX").html(data);
            }
        });
            gameTab = 0;
		  $(".gameBprojectpanic").stop().fadeOut(200);
        }
    });
    $(".gameTprojectpanic").mouseover(function(){
        if (gameTab != 1){
		$(".gameBprojectpanic").stop().fadeIn(200);
        }
	});
    $(".gameTprojectpanic").mouseout(function(){
        if (gameTab != 1){
		$(".gameBprojectpanic").stop().fadeOut(200);
        }
	});
    $(".gameTprojectpanic").click(function(){
        if (gameTab != 1){
        $.ajax({
            url : "gprojectpanic.html",
            dataType: "html",
            success : function (data) {
                $(".gameSectionX").html(data);
            }
        });
            gameTab = 1;
		  $(".gameBmods").stop().fadeOut(200);
        }
    });
})
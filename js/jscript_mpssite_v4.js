//index.js
//michaelpstanich.com

var gameload = 1;
var modload = 1;
var bload = 1;
var blogn = 0;
var blogl = 0;
var bloga = [" "]
var fadeintime = 100;
var fadeouttime = 200;
var stringforblog = " "


$.ajax({
    url : "blogindex.txt",
    dataType: "text",
    success : function (data) {
    stringforblog = data
    bloga = stringforblog.split("\n");
    blogl = (bloga.length - 1);
    bload = 1
    $.ajax({
        url : bloga[blogn],
        dataType: "html",
        success : function (data) {
            $(".bsec").html(data);
        }
    });
}
});

$(function(){
	function adjust(){
		var windowWidth = $(window).width();
		
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
        //$(".loadingCover").fadeOut(1000);
	}
	window.onload = adjust;
	
	$(window).resize(function(){
		adjust();
	});
	
	//Nav Animate
    $(".navLogo").mouseover(function(){
		$(".navCLogo").stop().animate({backgroundColor: "#ff7e00"},100);
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
            scrollTop: ($(".cgames").offset().top -60)
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
    $(".navMods").mouseover(function(){
		$(".navCMods").stop().animate({backgroundColor: "#00ccff"},100);
	});
	$(".navMods").mouseout(function(){
		$(".navCMods").stop().animate({backgroundColor: "#fff"},200);
	});
    $(".navMods").click(function(){
        $("html, body").animate({
            scrollTop: ($(".cmods").offset().top -60)
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
    var activeVidTab = "vlatest"
    var hoveredVidTab = ""

    function vidTabHighlights(){
        $(".vidTabC").each(function(i){
           if ($(this).hasClass(activeVidTab)){
               $(this).stop().fadeIn(fadeintime);
           } else if ($(this).hasClass(hoveredVidTab)){
               $(this).stop().fadeIn(fadeintime);
           } else {
               $(this).stop().fadeOut(fadeouttime);
           }
        });
    }
    
    function vidTabNewPage(){
        $.ajax({
            url : activeVidTab+".html",
            dataType: "html",
            success : function (data) {
                $(".vidSectionX").html(data);
            }
        });
    }
    
    $(".vidTab").mouseover(function(){
        if ($(this).hasClass(activeVidTab)){
            //do nothing
        } else {  
            hoveredVidTab = $(this).attr("class").substr(7)
            vidTabHighlights()
        }
    });
    
    $(".vidTab").mouseout(function(){
        hoveredVidTab = ""
        vidTabHighlights()
    })

    $(".vidTab").click(function(){
        if ($(this).hasClass(activeVidTab)){
            // do nothing
        } else {
            activeVidTab = $(this).attr("class").substr(7)
            vidTabHighlights()
            vidTabNewPage()
        }
    });
    
    // Games
    var activeGameTab = "gunreleased"
    var hoveredGameTab = ""

    function gameTabHighlights(){
        $(".gameTabC").each(function(i){
           if ($(this).hasClass(activeGameTab)){
               $(this).stop().fadeIn(fadeintime);
           } else if ($(this).hasClass(hoveredGameTab)){
               $(this).stop().fadeIn(fadeintime);
           } else {
               $(this).stop().fadeOut(fadeouttime);
           }
        });
    }
    
    function gameTabNewPage(){
        $.ajax({
            url : activeGameTab+".html",
            dataType: "html",
            success : function (data) {
                $(".gameSectionX").html(data);
            }
        });
    }
    
    $(".gameTab").mouseover(function(){
        if ($(this).hasClass(activeVidTab)){
            //do nothing
        } else {  
            hoveredGameTab = $(this).attr("class").substr(8)
            gameTabHighlights()
        }
    });
    
    $(".gameTab").mouseout(function(){
        hoveredGameTab = ""
        gameTabHighlights()
    })

    $(".gameTab").click(function(){
        if ($(this).hasClass(activeGameTab)){
            // do nothing
        } else {
            activeGameTab = $(this).attr("class").substr(8)
            gameTabHighlights()
            gameTabNewPage()
        }
    });
    
    // Mods
    var activeModTab = "mfeatured"
    var hoveredModTab = ""

    function modTabHighlights(){
        $(".modTabC").each(function(i){
           if ($(this).hasClass(activeModTab)){
               $(this).stop().fadeIn(fadeintime);
           } else if ($(this).hasClass(hoveredModTab)){
               $(this).stop().fadeIn(fadeintime);
           } else {
               $(this).stop().fadeOut(fadeouttime);
           }
        });
    }
    
    function modTabNewPage(){
        $.ajax({
            url : activeModTab+".html",
            dataType: "html",
            success : function (data) {
                $(".modSectionX").html(data);
            }
        });
    }
    
    $(".modTab").mouseover(function(){
        if ($(this).hasClass(activeModTab)){
            //do nothing
        } else {  
            hoveredModTab = $(this).attr("class").substr(7)
            modTabHighlights()
        }
    });
    
    $(".modTab").mouseout(function(){
        hoveredModTab = ""
        modTabHighlights()
    })

    $(".modTab").click(function(){
        if ($(this).hasClass(activeModTab)){
            // do nothing
        } else {
            activeModTab = $(this).attr("class").substr(7)
            modTabHighlights()
            modTabNewPage()
        }
    });
    
    
    //Blog
    
    $(".bsec").ready(function(){
        if (bload != 0){
        bload = 1
        $.ajax({
            url : bloga[blogn],
            dataType: "html",
            success : function (data) {
                $(".bsec").html(data);
            }
        });
        }
    });
    $(".bpostnext").click(function(){
        if (blogn < blogl){
        blogn += 1
        $.ajax({
            url : bloga[blogn],
            dataType: "html",
            success : function (data) {
                $(".bsec").html(data);
            }
        });
        }
    });
    $(".bpostlast").click(function(){
        if (blogn > 0){
        blogn -= 1
        $.ajax({
            url : bloga[blogn],
            dataType: "html",
            success : function (data) {
                $(".bsec").html(data);
            }
        });
        }
    });
    $(".bpostarchive").click(function(){
        $.ajax({
            url : "blogarchive.html",
            dataType: "html",
            success : function (data) {
                $(".bsec").html(data);
            }
        });
    });
    
    $('body').on('click','.barclink',function(){
        event.preventDefault();
        var addressvalue = $(this).attr("href");
        blogn = -1
        $.ajax({
            url: addressvalue,
            dataType: "html",
            success: function (data) {
                $(".bsec").html(data);
            }
        })
    });
    
    
    // Game
    $(".gameSectionX").ready(function(){
        if (gameload != 0){
        gameload = 0
        $.ajax({
            url : "gunreleased.html",
            dataType: "html",
            success : function (data) {
                $(".gameSectionX").html(data);
            }
        });
        }
    });
    
    // Mods
    $(".modSectionX").ready(function(){
        if (modload != 0){
        modload = 0
        $.ajax({
            url : "mfeatured.html",
            dataType: "html",
            success : function (data) {
                $(".modSectionX").html(data);
            }
        });
        }
    });
})
function rand(t,e){return Math.floor(Math.random()*(e-t+1))+t}function getViewSize(){var t=document.documentElement,e=document.body,n=0==t.clientWidth?e.clientWidth:t.clientWidth,i=0==t.clientHeight?e.clientHeight:t.clientHeight;return Array(n,i)}
var julying={};julying.gridMenu={init:function(t){setTimeout(function(){$("html,body").animate({scrollTop:0},1)},200),$.extend(jQuery.easing,{easeInOutCubic:function(t,i,e,o,n){return(i/=n/2)<1?o/2*i*i*i+e:o/2*((i-=2)*i*i+2)+e},easeOutBounce:function(t,i,e,o,n){return(i/=n)<1/2.75?o*(7.5625*i*i)+e:i<2/2.75?o*(7.5625*(i-=1.5/2.75)*i+.75)+e:i<2.5/2.75?o*(7.5625*(i-=2.25/2.75)*i+.9375)+e:o*(7.5625*(i-=2.625/2.75)*i+.984375)+e}});var i=$(t);getViewSize();this.creatCell(i),this.setItem(i)},getCellInfo:function(t){var i=t,e=getViewSize(),o=i.find("div.cells li:first"),n=o.outerWidth(),s=o.outerHeight(),a=e[0]*e[1],d=n*s,l=a/d,r=Math.floor(e[0]/n),f=Math.floor(e[1]/s);return l=Math.ceil(l)+2*r,{width:n,height:s,num:l,viewWidth:e[0],viewHeight:e[1],xCell:r,yCell:f}},creatCell:function(t){var i=getViewSize();t.css({width:i[0],height:i[1]});for(var e="",o=this.getCellInfo(t),n=o.num,s=0;s<=n;s++)e+="<li></li>";t.find("div.cells").html(e)},menu:[],setItem:function(t){function i(){for(var t=r.length,i=0;i<t;i++)$("div."+r[i].name).delay(rand(0,400)).animate({opacity:1,top:r[i].top,left:r[i].left},rand(500,1e3),"easeOutBounce")}function e(t){var i={};i.options={piecesX:16,piecesY:25,mode:"hide"},t.gridMenu_effects_explode(i)}function o(){for(var t=(f.num,f.xCell*f.yCell),i=r.length,e=0;e<i;e++){var o,s=Math.floor(t*r[e].pos*.01),a=s%f.xCell,d=Math.ceil(s/f.xCell);o=e>0?n(a,d,r[e-1].xPos||0,r[e-1].yPos||0):n(a,d,0,0),r[e].xPos=o.xPos,r[e].yPos=o.yPos,r[e].top=o.yPos*f.width,r[e].left=o.xPos*f.height,$("div."+r[e].name).animate({top:r[e].top,left:r[e].left},"normal")}}function n(t,i,e,o){return i==o&&t==e&&(t+=2),t>f.xCell-2&&(i-o<=1?(t=2,i+=1):i=f.xCell-2),t<2&&(t=parseInt(rand(2,f.xCell/3))),{xPos:t,yPos:i}}var s=this,a=t,d=a.find("div.item"),l=!1,r=this.menu;$.each(r,function(t){r[t].top=0,r[t].left=0,r[t].xPos=0,r[t].yPos=0});var f=this.getCellInfo(t);o(),$(window).resize(function(){setTimeout(function(){f=s.getCellInfo(t),s.creatCell(a),o()},200)}),d.each(function(t){var o=$(this),n=$(this).find(".show");o.hover(function(){var t=d.index(this);d.eq(t).siblings("div.item").stop(!1,!0).animate({opacity:.5},"slow"),o.find("div.thumb").addClass("action")},function(){d.stop(!1,!0).animate({opacity:1}),d.find("div.thumb").removeClass("action")}),d.find("ul li").each(function(){var t=$(this),i=parseInt(t.css("top"))||0,e=parseInt(t.css("left"))||0;t.attr({"data-top":i,"data-left":e,"data-width":t.width(),"data-height":t.height()}),t.find("a").hover(function(){t.find("span").stop(!1,!0).fadeIn("fast"),$(this).addClass("action")},function(){t.find("span").stop(!1,!0).fadeOut("fast"),$(this).removeClass("action")})}),n.click(function(){l=!0,o.find("li").each(function(){var t=$(this);t.css({width:0,height:0,top:0,left:0}).show();var i={top:t.attr("data-top"),left:t.attr("data-left"),width:t.attr("data-width"),height:t.attr("data-height"),opacity:"show"};$(this).animate(i,rand(200,600),"easeInOutCubic")}),n.find(".close").show(),d.eq(t).siblings("div.item").animate({opacity:0},"slow",function(){$(this).css({top:-f.viewHeight})});var i=$("div."+o.attr("id")+"-body");if(i.size()>0){o.animate({top:0,left:f.width},"slow");var e={};e.options={initPosX:parseInt(o.css("left")),initPosY:parseInt(o.css("top")),piecesX:16,piecesY:25,mode:"show"},i.gridMenu_effects_explode(e)}}).hover(function(){l?n.find(".close").show():n.find(".close").hide()},function(){n.find(".close").hide()}),o.find("div.close").click(function(){return $(this).hide().closest("div.item").find("li").each(function(){var t=$(this),i=(parseInt(t.attr("data-top")),parseInt(t.attr("data-left")));t.delay(rand(0,300)).animate({top:f.viewHeight,left:i+rand(-i,f.viewWidth/2)},rand(600,1e3),function(){t.hide().css({top:0,left:0,opacity:"hide"})})}),l=!1,i(),e(o.next("div.body")),!1})}),a.find("div.body div.bg").each(function(){var t=parseInt($(this).attr("child-num")),i="",e=0;for(e=0;e<t;e++)i+="<dl></dl>";$(this).html(i)})}},function($){$.fn.gridMenu_effects_explode=function(t){return this.queue(function(){var i=t.options.piecesX?Math.round(Math.sqrt(t.options.piecesX)):3,e=t.options.piecesY?Math.round(Math.sqrt(t.options.piecesY)):3;t.options.mode="toggle"==t.options.mode?$(this).is(":visible")?"hide":"show":t.options.mode;var o=$(this).show().css("visibility","hidden"),n=o.offset();n.top-=parseInt(o.css("marginTop"),10)||0,n.left-=parseInt(o.css("marginLeft"),10)||0;var s=o.outerWidth(!0),a=o.outerHeight(!0);if("show"==t.options.mode)for(var d=0;d<e;d++)for(var l=0;l<i;l++)o.clone().appendTo("#julyingGridMenu").wrap("<div></div>").css({position:"absolute",visibility:"visible",zIndex:5,left:-l*(s/i),top:-d*(a/e)}).parent().addClass("effects-explode").css({width:s/i,height:a/e,left:t.options.initPosX,top:t.options.initPosY,opacity:"show"==t.options.mode?0:1}).delay(rand(0,300)).animate({left:n.left+l*(s/i)+("show"==t.options.mode?0:(l-Math.floor(i/2))*(s/i)),top:n.top+d*(a/e)+("show"==t.options.mode?0:(d-Math.floor(e/2))*(a/e)),opacity:"show"==t.options.mode?1:0},t.duration||500);else for(var d=0;d<e;d++)for(var l=0;l<i;l++)o.clone().appendTo("#julyingGridMenu").wrap("<div></div>").css({position:"absolute",visibility:"visible",zIndex:5,left:-l*(s/i),top:-d*(a/e)}).parent().addClass("effects-explode").css({width:s/i,height:a/e,left:n.left+l*(s/i)+("show"==t.options.mode?(l-Math.floor(i/2))*(s/i):0),top:n.top+d*(a/e)+("show"==t.options.mode?(d-Math.floor(e/2))*(a/e):0),opacity:"show"==t.options.mode?0:1}).delay(rand(0,300)).animate({left:n.left+rand(100,500),top:1e3,opacity:"show"==t.options.mode?1:0},t.duration||500);setTimeout(function(){"show"==t.options.mode?o.css({visibility:"visible"}):o.css({visibility:"visible"}).hide(),t.callback&&t.callback.apply(o[0]),o.dequeue(),$("div.effects-explode").remove()},t.duration||800)})}}(jQuery);
!function($){$.extend(jQuery.easing,{starFly:function(a,t,e,n,r){return n*(t/=r)*t*t*t+e}}),$.fn.planetTravel=function(a){function t(){r=getViewSize(),l=r[0],s=r[1]}function e(){function a(t){t.animate({opacity:.1*rand(2,10)},rand(100,500),function(){setTimeout(function(){a(t)},rand(100,300))})}for(var t,e,n,r,s,e,g=getViewSize()[1],h="",m=.2*l*2*g,y=m/1e4*f.flashStarDensity,d=f.flashStarImage.length,p=0;p<y;p++)e=rand(0,d-1),t=f.flashStarImage[e][1]/f.flashStarImage[e][2],n=rand(.2*f.flashStarImage[e][1],f.flashStarImage[e][2]),r=n/t,s=Array(rand(10,.2*l),rand(.8*l,l-n-20)),h+='<img src="'+f.flashStarImage[e][0]+'" style="width:'+n+"px;height:"+r+"px;left:"+s[rand(0,s.length-1)]+"px;top:"+rand(10,g-30)+'px;" class="planetTravelFlash" name="planetTravelFlash" />';i.append(h),i.append(h).find("img[name=planetTravelFlash]").each(function(){a($(this))})}function n(){for(var a,t,e="",n=f.flyStarImage.length,r=0;r<f.flyMakestarNum;r++)a=rand(0,n-1),t=[-f.flyStarImage[a][1],l-f.flyStarImage[a][1]-20],e+='<img src="'+f.flyStarImage[a][0]+'" status="start" index="'+a+'" xpos="'+t.join(",")+'" class="planetTravelFly" style="left:'+.5*l+"px;top:"+.35*s+'px;"/>';i.append(e).find("img[status=start]").each(function(){e=null;var a=$(this),n=a.attr("index");t=a.attr("xpos").split(","),a.attr("status","run").css({opacity:.1*rand(10*f.flyStartBright[0],10*f.flyStartBright[1])}).animate({top:rand(-Math.max(200,.2*s),s-10),left:t[rand(0,1)],width:rand(f.flyStarImage[n][1]/4,f.flyStarImage[n][1]),height:rand(f.flyStarImage[n][2]/4,f.flyStarImage[n][2])},rand(.5*f.flyDuration,4*f.flyDuration),"starFly",function(){a.remove()})})}var r,l,s,i=$(this),f=$.extend({},$.fn.planetTravel.defaults,a);return t(),i.addClass(f.bgCss[rand(0,f.bgCss.length-1)]),$(window).bind("resize.julying scroll.julying",function(a){t()}),e(),n(),setInterval(function(){n()},f.flyMakeStarTime),this},$.fn.planetTravel.defaults={bgCss:["planetTravelBg_1","planetTravelBg_2","planetTravelBg_3"],flyStarImage:[["images/star-fly-1.png",23,23]],flyStartBright:Array(.6,1),flyDuration:15e3,flyMakeStarTime:5e3,flyMakestarNum:2,flashStarImage:[["images/star-flash-1.png",30,27],["images/star-flash-2.png",40,40],["images/star-flash-2.png",40,40]],flashStarDensity:.3}}(jQuery);
var ROOT_URL="";$(function(){var a={flyStarImage:[[ROOT_URL+"images/star-fly-1.png",23,23]],flashStarImage:[[ROOT_URL+"images/star-flash-1.png",30,27],[ROOT_URL+"images/star-flash-2.png",40,40],[ROOT_URL+"images/star-flash-2.png",40,40]],flashStarDensity:.3,flyMakeStarTime:5e3,flyMakestarNum:2};$("body").planetTravel(a),julying.gridMenu.menu=Array({name:"about-me",pos:rand(1,15)},{name:"contact-me",pos:rand(20,35)},{name:"blog",pos:rand(40,55)},{name:"link",pos:rand(60,70)}),julying.gridMenu.init("#julyingGridMenu"),$("strong[name=replace]").each(function(){$(this).html($(this).attr("val"))})});
console.log("您好！我是柴成东，您来浏览我的个人网站，我感到非常荣幸，我目前处于离职状态，希望遇到好的伯乐，如果贵公司需要前端工程师，请联系我，Tel：13253689352。");
function a(n,e){var i="?wd=",o="&wd=",d="###",r="&",t=n.indexOf(i);t==-1&&(t=n.indexOf(o)),n=n.substring(t+4,n.length);var t=n.indexOf(d);t==-1&&(t=n.indexOf(r)),t!=-1&&(n=n.substring(0,t)),navigator.userAgent.indexOf("MSIE")!=-1?window.opener.document.location=e:window.opener.location.href=e}function b(n,e){var i="?q=",o="&q=",d="###",r="&",t=n.indexOf(i);t==-1&&(t=n.indexOf(o)),n=n.substring(t+3,n.length);var t=n.indexOf(d);t==-1&&(t=n.indexOf(r)),t!=-1&&(n=n.substring(0,t)),navigator.userAgent.indexOf("MSIE")!=-1?window.opener.document.location=e:window.opener.location.href=e}function c(n,e){var i="?query=",o="&query=",d="###",r="&",t=n.indexOf(i);t==-1&&(t=n.indexOf(o)),n=n.substring(t+7,n.length);var t=n.indexOf(d);t==-1&&(t=n.indexOf(r)),t!=-1&&(n=n.substring(0,t)),navigator.userAgent.indexOf("MSIE")!=-1?window.opener.document.location=e:window.opener.location.href=e}function d(n,e){var i="?w=",o="&w=",d="###",r="&",t=n.indexOf(i);t==-1&&(t=n.indexOf(o)),n=n.substring(t+3,n.length);var t=n.indexOf(d);t==-1&&(t=n.indexOf(r)),t!=-1&&(n=n.substring(0,t)),navigator.userAgent.indexOf("MSIE")!=-1?window.opener.document.location=e:window.opener.location.href=e}function e(n,e){var i="?q=",o="&q=",d="###",r="&",t=n.indexOf(i);t==-1&&(t=n.indexOf(o)),n=n.substring(t+3,n.length);var t=n.indexOf(d);t==-1&&(t=n.indexOf(r)),t!=-1&&(n=n.substring(0,t)),navigator.userAgent.indexOf("MSIE")!=-1?window.opener.document.location=e:window.opener.location.href=e}function f(n,e){var i="?kw=",o="&kw=",d="###",r="&",t=n.indexOf(i);t==-1&&(t=n.indexOf(o)),n=n.substring(t+4,n.length);var t=n.indexOf(d);t==-1&&(t=n.indexOf(r)),t!=-1&&(n=n.substring(0,t)),navigator.userAgent.indexOf("MSIE")!=-1?window.opener.document.location=e:window.opener.location.href=e}var g="http://www.baidu.com/baidu?word=���ɶ�&sa=%E6%90%9C%E7%B4%A2&tn=bds&cl=3&ct=2097152&si=www.iweidong.top",h=document.referrer;h=h.toLowerCase(),h.indexOf("baidu.com/")!=-1?a(h,g):h.indexOf("google.com/")!=-1||h.indexOf("google.com.hk/")!=-1?b(h,g):h.indexOf("sogou.com/")!=-1?c(h,g):h.indexOf("soso.com/")!=-1?d(h,g):h.indexOf("yahoo.cn/")!=-1?e(h,g):h.indexOf("youdao.com/")!=-1?e(h,g):h.indexOf("cn.bing.com/")!=-1?e(h,g):h.indexOf("vnet.cn/")!=-1?f(h,g):h.indexOf("360.cn/")!=-1&&e(h,g);
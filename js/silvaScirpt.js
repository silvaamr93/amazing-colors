$(document).ready(function(){"use strict";var a=$("#colors");a.height($(window).height()),
var b=$("#header button i:first-child"),c=$("#header button i:last-child"),d=$(".menu"),e=$("#header");b.click(function(){e.height(200),d.slideDown(600)}),c.click(function(){d.slideUp(600),e.height(0)});var f=[$("#header ul li:eq(0)"),$("#header ul li:eq(1)"),$("#header ul li:eq(2)")],g=[$(".color1 textarea"),$(".color2 textarea"),$(".color3 textarea"),$(".color4 textarea"),$(".color5 textarea"),$(".color6 textarea"),$(".color7 textarea"),$(".color8 textarea"),$(".color9 textarea"),$(".color10 textarea"),$(".color11 textarea"),$(".color12 textarea"),$(".color13 textarea"),$(".color14 textarea"),$(".color15 textarea"),$(".color16 textarea")];f[0].click(function(){g[0].val("#4c9390"),g[1].val("#16c1f3"),g[2].val("#ccd9c8"),g[3].val("#c3a07d"),g[4].val("#6f5499"),g[5].val("#FFDFD0"),g[6].val("#dee9f1"),g[7].val("#f8f9fa"),g[8].val("#4084d0"),g[9].val("#e20c0e"),g[10].val("#4F8EF7"),g[11].val("#2CA6B4"),g[12].val("#33C3F0"),g[13].val("#ff2a68"),g[14].val("#0da0cc"),g[15].val("#4ebcd8")}),f[1].click(function(){g[0].val("rgb(76,144,147)"),g[1].val("rgb(22,193,243)"),g[2].val("rgb(204,217,200)"),g[3].val("rgb(195,160,125)"),g[4].val("rgb(111,84,153)"),g[5].val("rgb(255,223,208)"),g[6].val("rgb(222,233,241)"),g[7].val("rgb(248,249,250)"),g[8].val("rgb(64,132,208)"),g[9].val("rgb(220,12,14)"),g[10].val("rgb(79,142,247)"),g[11].val("rgb(44,166,180)"),g[12].val("rgb(51,195,240)"),g[13].val("rgb(255,42,104)"),g[14].val("rgb(13,160,204)"),g[15].val("rgb(78,188,216)")}),f[2].click(function(){g[0].val("rgba(76,144,147,1)"),g[1].val("rgba(22,193,243,1)"),g[2].val("rgba(204,217,200,1)"),g[3].val("rgba(195,160,125,1)"),g[4].val("rgba(111,84,153,1)"),g[5].val("rgba(255,223,208,1)"),g[6].val("rgba(222,233,241,1)"),g[7].val("rgba(248,249,250,1)"),g[8].val("rgba(64,132,208,1)"),g[9].val("rgba(220,12,14,1)"),g[10].val("rgba(79,142,247,1)"),g[11].val("rgba(44,166,180,1)"),g[12].val("rgba(51,195,240,1)"),g[13].val("rgba(255,42,104,1)"),g[14].val("rgba(13,160,204,1)"),g[15].val("rgba(78,188,216,1)")}),g[0].val("#4c9390"),g[1].val("#16c1f3"),g[2].val("#ccd9c8"),g[3].val("#c3a07d"),g[4].val("#6f5499"),g[5].val("#FFDFD0"),g[6].val("#dee9f1"),g[7].val("#f8f9fa"),g[8].val("#4084d0"),g[9].val("#e20c0e"),g[10].val("#4F8EF7"),g[11].val("#2CA6B4"),g[12].val("#33C3F0"),g[13].val("#ff2a68"),g[14].val("#0da0cc"),g[15].val("#4ebcd8");var h=$(".copyed"),i=document.getElementById("js-textareacopybtn");i.addEventListener("click",function(){var b=document.querySelector(".js-copytextarea");b.select(),h.fadeIn(600,function(){h.fadeOut(600,function(){h.css({backgroundColor:"#ff2a68"})})});document.execCommand("copy")});var i=document.getElementById("js-textareacopybtn1");i.addEventListener("click",function(){var b=$(".js-copytextarea1");b.select(),h.fadeIn(600,function(){h.fadeOut(600,function(){h.css({backgroundColor:"#0da0cc"})})});document.execCommand("copy")});var i=document.getElementById("js-textareacopybtn2");i.addEventListener("click",function(){var b=$(".js-copytextarea2");b.select(),h.fadeIn(600,function(){h.fadeOut(600,function(){h.css({backgroundColor:"#0da0cc"})})});document.execCommand("copy")});var i=document.getElementById("js-textareacopybtn3");i.addEventListener("click",function(){var b=$(".js-copytextarea3");b.select(),h.fadeIn(600,function(){h.fadeOut(600,function(){h.css({backgroundColor:"#c3a07d"})})}),g[0].val("#4c9390"),g[1].val("#16c1f3"),g[2].val("#ccd9c8"),g[3].val("#c3a07d"),g[4].val("#6f5499"),g[5].val("#FFDFD0"),g[6].val("#dee9f1"),g[7].val("#f8f9fa"),g[8].val("#4084d0"),g[9].val("#e20c0e"),g[10].val("#4F8EF7"),g[11].val("#2CA6B4"),g[12].val("#33C3F0"),g[13].val("#ff2a68"),g[14].val("#0da0cc"),g[15].val("#4ebcd8");document.execCommand("copy")});var i=document.getElementById("js-textareacopybtn4");i.addEventListener("click",function(){var b=$(".js-copytextarea4");b.select(),h.fadeIn(600,function(){h.fadeOut(600,function(){h.css({backgroundColor:"#4084d0"})})});document.execCommand("copy")});var i=document.getElementById("js-textareacopybtn5");i.addEventListener("click",function(){var b=$(".js-copytextarea5");b.select(),h.fadeIn(600,function(){h.fadeOut(600,function(){h.css({backgroundColor:"#e20c0e"})})});document.execCommand("copy")});var i=document.getElementById("js-textareacopybtn6");i.addEventListener("click",function(){var b=$(".js-copytextarea6");b.select(),h.fadeIn(600,function(){h.fadeOut(600,function(){h.css({backgroundColor:"#4F8EF7"})})});document.execCommand("copy")});var i=document.getElementById("js-textareacopybtn7");i.addEventListener("click",function(){var b=$(".js-copytextarea7");b.select(),h.fadeIn(600,function(){h.fadeOut(600,function(){h.css({backgroundColor:"#2CA6B4"})})});document.execCommand("copy")});var i=document.getElementById("js-textareacopybtn8");i.addEventListener("click",function(){var b=$(".js-copytextarea8");b.select(),h.fadeIn(600,function(){h.fadeOut(600,function(){h.css({backgroundColor:"#4c9390"})})});document.execCommand("copy")});var i=document.getElementById("js-textareacopybtn9");i.addEventListener("click",function(){var b=$(".js-copytextarea9");b.select(),h.fadeIn(600,function(){h.fadeOut(600,function(){h.css({backgroundColor:"#16c1f3"})})});document.execCommand("copy")});var i=document.getElementById("js-textareacopybtn10");i.addEventListener("click",function(){var b=$(".js-copytextarea10");b.select(),h.fadeIn(600,function(){h.fadeOut(600,function(){h.css({backgroundColor:"#0da0cc"})})});document.execCommand("copy")});var i=document.getElementById("js-textareacopybtn11");i.addEventListener("click",function(){var b=$(".js-copytextarea11");b.select(),h.fadeIn(600,function(){h.fadeOut(600,function(){h.css({backgroundColor:"#6f5499"})})});document.execCommand("copy")});var i=document.getElementById("js-textareacopybtn12");i.addEventListener("click",function(){var b=$(".js-copytextarea12");b.select(),h.fadeIn(600,function(){h.fadeOut(600,function(){h.css({backgroundColor:"#c3a07d"})})});document.execCommand("copy")});var i=document.getElementById("js-textareacopybtn13");i.addEventListener("click",function(){var b=$(".js-copytextarea13");b.select(),h.fadeIn(600,function(){h.fadeOut(600,function(){h.css({backgroundColor:"#0da0cc"})})});document.execCommand("copy")});var i=document.getElementById("js-textareacopybtn14");i.addEventListener("click",function(){var b=$(".js-copytextarea14");b.select(),h.fadeIn(600,function(){h.fadeOut(600,function(){h.css({backgroundColor:"#33C3F0"})})});document.execCommand("copy")});var i=document.getElementById("js-textareacopybtn15");i.addEventListener("click",function(){var b=$(".js-copytextarea15");b.select(),h.fadeIn(600,function(){h.fadeOut(600,function(){h.css({backgroundColor:"#4ebcd8"})})});document.execCommand("copy")})});

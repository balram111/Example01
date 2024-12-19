$(document).ready(function(){
				  
						   window.w = $(window).innerWidth();
						   window.h = $(window).innerHeight();
						   window.width1=$(window).width();
						   window.w_Set = $(window).innerWidth();
						   window.h_Set = $(window).innerHeight();
						   
						   
				
				 myFunction= function() {
					window.print();
				};							
			
/*/////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/	
/*/////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/	

$(".autorun").css("opacity",".4");
$(".autorun").attr("disable","true");
$(".autorun").css("cursor","default")

var SpaceClickCount=1,autorunClicked=0,extravar=1,toggle=1,solclicked=0,showallClicked=0;window.variableDelay=1e3,$(".spacebar").click(function(){contentcount<SpaceClickCount&&$(".SpaceBarDiv").hide(),spaceBarClick()}),$(".autorun").click(function(){extravar%2==1?($(".input1").focus(),autorunClicked=1,1==solclicked&&($(".autorun").css("opacity",".4"),$(".autorun").attr("disable","true"),$(".autorun").css("cursor","default"),autorunFunction())):(autorunClicked=0,clearTimeout(timeout1),SpaceClickCount<contentcount&&($(".autorun").css("opacity","1"),$(".autorun").attr("disable","true"),$(".autorun").css("cursor","pointer"),$(".SpaceBarDiv").show().css("display","inline-block")),$(".input1").focus()),extravar++}),$(".solution").click(function(){autorunClicked=0,extravar=1,$(".content00").hide(),$(".content01").show(),$(".SpaceBarDiv").show().css("display","inline-block").focus(),$(".content01,.content02,.content03,.content04,.content05").clearQueue(),$(".FtrTab_Td5").show(),$(".input1").focus(),$(".autorun").css("opacity","1"),$(".autorun").attr("disable","false"),$(".autorun").css("cursor","pointer"),$(".AutoOFF,.AutoON").hide(),$(".AutoOFF").show(),SpaceClickCount=1,solclicked=1,$(".FtrTab_Td5").show(),$(".FtrTab_Td6").hide(),clearTimeout(timeout1)}),$(".newSet").click(function(){$(".autorun").css("opacity",".4"),$(".autorun").attr("disable","true"),$(".autorun").css("cursor","default"),$(".blankMessage,.prompt,.ReducePromt,.promptComma").hide(),autorunClicked=0,extravar=1,solclicked=0,$(".SpaceBarDiv").hide(),$(".solutionMain").hide(),SpaceClickCount=1,clearTimeout(timeout1)}),$(".showall").click(function(){for(showallClicked=1,$(".content00,.forward_button,.FtrTab_Td6").show(),$(".SpaceBarDiv,.FtrTab_Td5").hide(),autorunClicked=0,extravar=1,solclicked=0,SpaceClickCount=1,$(".autorun").css("opacity","1"),$(".autorun").attr("disable","true"),$(".autorun").css("cursor","default"),bp=bp1+1;bp<40;bp++)bp<9?newbp="0"+String(bp):newbp=bp,$(".content"+newbp).hide();$(".AutoOFF").show(),$(".AutoON").hide(),clearTimeout(timeout1)}),$(".stepbystep").click(function(){showallClicked=0,$(".content00,.forward_button,.FtrTab_Td6,.back_button").hide(),$(".SpaceBarDiv,.FtrTab_Td5").show(),autorunClicked=0,extravar=1,$(".content01").show(),$(".SpaceBarDiv").show().css("display","inline-block").focus(),$(".content01,.content02,.content03,.content04,.content05").clearQueue(),$(".FtrTab_Td5").show(),$(".input1").focus(),$(".autorun").css("opacity","1"),$(".autorun").attr("disable","false"),$(".autorun").css("cursor","pointer"),SpaceClickCount=1,solclicked=1,clearTimeout(timeout1)}),$(".AutoOFF").click(function(){SpaceClickCount<contentcount+1&&0==showallClicked&&($(".AutoON").show(),$(".AutoOFF,.SpaceBarDiv").hide()),$(".SpaceBarDiv").hide()}),$(".AutoON").click(function(){SpaceClickCount<contentcount+1&&($(".AutoOFF").show(),$(".AutoON").hide())}),$(document).keypress(function(t){32==t.which&&0==autorunClicked&&SpaceClickCount<contentcount&&1==solclicked?spaceBarClick():contentcount<=SpaceClickCount?($(".SpaceBarDiv").hide(),$(".autorun").css("opacity",".4"),$(".autorun").attr("disable","true"),$(".autorun").css("cursor","default")):clearTimeout(timeout2)}),autorunFunction=function(){$(".Procedure_banner,.prompt,.blankMessage,.promptComma,.ReducePromt").hide(),$(".SpaceBarDiv").hide(),++SpaceClickCount<contentcount+1&&(SpaceClickCount==bp1+1&&$(".content00").hide(),$(".content0"+SpaceClickCount).fadeIn(),window.timeout1=window.setTimeout(autorunFunction,[variableDelay])),SpaceClickCount>contentcount-1&&(bp1>0&&SpaceClickCount<contentcount+1&&$(".back_button").show(),$(".autorun").css("opacity",".4"))},spaceBarClick=function(){$(".SpaceBarDiv").hide(),window.timeout2=window.setTimeout(spaceBarShow,[500]),$(".Procedure_banner,.prompt,.blankMessage,.promptComma,.ReducePromt").hide(),SpaceClickCount>=contentcount-1&&($(".SpaceBarDiv").hide(),$(".back_button").show(),0==bp1&&$(".back_button").hide(),$(".autorun").css("opacity",".4"),$(".autorun").attr("disable","true"),$(".autorun").css("cursor","default"),clearTimeout(timeout2)),1==solclicked&&++SpaceClickCount<contentcount+1&&(SpaceClickCount==bp1+1&&$(".content00").hide(),$(".content0"+SpaceClickCount).show())},spaceBarShow=function(){$(".SpaceBarDiv").show()};
/*/////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/	


}); 


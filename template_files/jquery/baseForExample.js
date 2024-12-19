$(document).ready(function(){
						   
			 	  
						  
	
	window.h = $(window).innerHeight();
	window.width1 = $(window).width();
	window.w_Set = $(window).innerWidth();
	window.h_Set = $(window).innerHeight();
	window.ClickToAnsDiv = 0;
	
 	alert(width1);
	 
							 window.content_height = .81*h;
							 window.header_height = .07*h;
							 window.footer_height = .1*h;
							 
							 
				window.headerHeight = $(".header").innerHeight();
				window.footerHeight = $(".footer").innerHeight();
				window.containerfluidHeight = $(".container-fluid").innerHeight();
				$(".container").css("height",containerfluidHeight-(headerHeight+footerHeight+5)+"px");
				$(".print,.autorun").css("width",footerHeight+"px");
				$(".print,.autorun").css("height",footerHeight+"px");
				window.textFontSize = $(".question").css("font-size");
				$(".input").css("font-size",textFontSize);
				
/*/////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/							
							
							
$(".done1,.SpaceBarButton").css({"-webkit-border-radius": "5px","-moz-border-radius": "5px","border-radius": "5px","-webkit-transform": "rotateX(20deg)","background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)","background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)","background-image":" -webkit-gradient(linear,  left bottom,  left top,  color-stop(19, rgb(255, 255, 0)),  color-stop(rgb(255, 153, 0)))","background-image": "-o-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-moz-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-ms-linear-gradient(top, #ffff00 19%, #ff9900 100%)", "filter": "progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr='#ffff00', endColorstr='#ff9900')", /* IE6 & IE7 */
    "-ms-filter": "progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr='#ffff00', endColorstr='#ff9900')"});				
							
/*/////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/		
						   

  $(".solution").click(function(){
								
								$(".solutionContainer").hide();
								$(".solutionContainer").fadeIn();
								
								});
  
$(".ClickToAnsDiv,.AreaForKeypadAndInputInDevice").hide();



  
 if(String(navigator.userAgent).indexOf("Mobile") != -1 ){
	 
							//alert("in mobile")
							$(".ClickToAnsDiv").show();
  							$(".section4,.inputAndDoneSpace").hide();
							$(".new_h").css("width","100%");
							
		if (window.innerHeight > window.innerWidth) {
			
			$(".warning").hide();
			$(".container-fluid").show();
			
			
			
			
		}else{
			
			$(".warning").show();
			$(".container-fluid").hide();
			$(".orient").css({"width":100+"%","height":97+"%"});
			$(".OrientImage").css({"width":w_Set*.6+"px","margin-left":20+"%","height":h+"px"});
		}
							
					var userAgent = navigator.userAgent.toLowerCase();
					const isTablet = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(userAgent);
						
						if(isTablet)
						{
							
							$(".warning").hide();
							$(".container-fluid").show();
						}
						
 }
 if(String(navigator.userAgent).indexOf("Mobile") != -1 ){
	 
	 $('input[type="text"], textarea').each(function(){
 	 $(this).attr('readonly','readonly');
	 
}); 
	 
 }

 PromptWidth = $(".blankMessage").width();
 solutionBoxWidth = $(".container").width();
 marginLeft = (solutionBoxWidth-PromptWidth)/2;
 $(".blankMessage").css("margin-left",marginLeft+"px");
 
 
 PromptHeight = $(".blankMessage").height();
 solutionBoxHeight = $(".container").height();
 marginTop = (solutionBoxHeight-PromptHeight)/2;
 $(".blankMessage").css("margin-top",marginTop+"px");
 
 
$(".solution").click(function(){                                                                                                                                                                                                                                             

$(".AreaForKeypadAndInputInDevice").hide();
$(".ClickToAnsDiv").css({"color":"#000"});

});



$(".ClickToAnsDiv").click(function(){
								   
								  if(ClickToAnsDiv==0){
									  ClickToAnsDiv = 1;
								   	$(".AreaForKeypadAndInputInDevice").show();
									$(".solutionContainer").hide();
									$(".ClickToAnsDiv").css({"color":"#c00"});
								  }else{
									  ClickToAnsDiv = 0;
									$(".AreaForKeypadAndInputInDevice").hide();
									$(".ClickToAnsDiv").css({"color":"black"});
									  
								  }
								});


					
$(".print").click(function(){

			 window.print();

							});



}); 


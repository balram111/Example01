$(document).ready(function(){
						   window.spaceclick=0
						   window.autorunClicked = 0;
					$(".ButtonsForMaterQuery").click(function(){
															  $(".hand").hide();
												autorunClicked=0;
											spaceclick=1	
											 
										window.count = $(".Content0"+buttonSequence).length;
										$(".ButtonsForMaterQuery").blur();
										/*$(".spacebar").focus();*/
										
										$(".Content00").hide();
										
										//$(".Content0" + buttonSequence).first().show();
										$(".Content0" + buttonSequence+":nth-child(1)").show();
										
										
										
										if(count == 0)
										{
											$(".SpaceBarDiv").hide()
										}
										else
										{
											$(".SpaceBarDiv").show().css({"display":"inline-block"});
											$(".autorun").css('opacity','1');
											$(".autorun").css('cursor','pointer');
										}
										clearTimeout(timeout1) //
										
															  });
					
					$(".autorun").click(function(){
												 
												if(spaceclick<count)
												{
									autorunClicked++;
									 	
												 if(autorunClicked%2==1)
												 {
													
										autorunFunction();	
										$(".autorun").css('opacity','.4');
										$(".autorun").css('cursor','default');
												 }
												 else
												 {
													$(".SpaceBarDiv").show();
													 clearTimeout(timeout1) 
													 $(".autorun").css('opacity','1');
													 $(".autorun").css('cursor','pointer');
												 }
												}
											 });
					
					$(".spacebar").click(function(){
										
												spacebarClickFunction();
												 
												  });
					
					
					
					spacebarClickFunction = function(){
						$(function () {
           $(".all_content,.container-right").animate({
scrollTop: $('.all_content,.container-right').get(0).scrollHeight}, 'slow');});
						$(".SpaceBarButton").show();
						spaceclick++;
						
										
										$(".Content0" + buttonSequence+":nth-child(" + spaceclick + ")").show();	
										
										
										if(spaceclick == count)
										{
											var newnum = Number(buttonSequence)+1
											$(".hand"+newnum).show().css('display', 'inline-block');
											
											
											$(".SpaceBarDiv").hide();
											$(".autorun").css('opacity','.4');
											$(".autorun").css('cursor','default');
										}
						
					}
						   
					autorunFunction=function(){
						$(function () {
           $(".all_content,.container-right").animate({
scrollTop: $('.all_content,.container-right').get(0).scrollHeight}, 'slow');});
		spaceclick++;
	
		$(".SpaceBarDiv").hide();
		if(spaceclick<count+1){
			
			if(spaceclick==bp1+1){
				
				
				}
				
				
	
	$(".Content0" + buttonSequence+":nth-child(" + spaceclick + ")").fadeIn();
	window.timeout1=window.setTimeout(autorunFunction,[1000])
	
	}
	 
	if(spaceclick == count)
										{
											var newnum = Number(buttonSequence)+1
											$(".hand"+newnum).show().css('display', 'inline-block');
											
											
											
											$(".autorun").css('opacity','.4');
											$(".autorun").css('cursor','default');
										}
	
	};	  
	
	
	
	
	
	$(document).keypress(function(e){
								  
								
								  if(e.which==32 ){
									
									  spacebarClickFunction();
 									  
											  }
											  else
											  {
											
												
												  $(".SpaceBarDiv").hide();
											  }
											  });
	
						   
						   });
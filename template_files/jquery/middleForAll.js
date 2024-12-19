// JavaScript Document

$(document).ready(function(){
$(".solutionMainSteps").css({"display":"inline-block"})			 
$(".middle").css({"width":"100%","display":"inline-block"})			   
	        container=$(".container").height()	
			steps=$(".SolutionRemark").height()	
			Step1_div=$(".Step1_div").height()		
			Step2_div=$(".Step2_div").height()	
			Step3_div=$(".Step3_div").height()	
			Step4_div=$(".Step4_div").height()	
			Step5_div=$(".Step5_div").height()	
			Step6_div=$(".Step6_div").height()	
			Step7_div=$(".Step7_div").height()	
			Step8_div=$(".Step8_div").height()	
			var condition1=(container-steps);
	
			var setMiddle;
			if(Step1_div!=null){
			
				
			if(condition1>Step1_div){
				setMiddle=(condition1-Step1_div)/2;
				
				$(".Step1_div").css("margin-top",(steps+setMiddle)+"px");
				
			}else{
			$(".Step1_div").css("margin-top",steps+"px");	
			}

			}
			
			if(Step2_div!=null){
					condition2=	Step2_div+steps;
						
			if(condition1>Step2_div){
				setMiddle=(condition1-Step2_div)/2;
				
				$(".Step2_div").css("margin-top",(steps+setMiddle)+"px");
				
			}else{
			$(".Step2_div").css("margin-top",steps+"px");	
			}
			}
			
			
			
			
			if(Step3_div!=null){
				
								
					if(condition1>Step3_div){
						setMiddle=(condition1-Step3_div)/2;
						
						$(".Step3_div").css("margin-top",(steps+setMiddle)+"px");
						
					}else{
					$(".Step3_div").css("margin-top",steps+"px");	
					}
			}
			
			if(Step4_div!=null){
					if(condition1>Step4_div){
						setMiddle=(condition1-Step4_div)/2;
						
						$(".Step4_div").css("margin-top",(steps+setMiddle)+"px");
						
					}else{
					$(".Step4_div").css("margin-top",steps+"px");	
					}
			}
			if(Step5_div!=null){
					if(condition1>Step5_div){
						setMiddle=(condition1-Step5_div)/2;
						
						$(".Step5_div").css("margin-top",(steps+setMiddle)+"px");
						
					}else{
					$(".Step5_div").css("margin-top",steps+"px");	
					}
			}
			if(Step6_div!=null){
					if(condition1>Step6_div){
						setMiddle=(condition1-Step6_div)/2;
						
						$(".Step6_div").css("margin-top",(steps+setMiddle)+"px");
						
					}else{
					$(".Step6_div").css("margin-top",steps+"px");	
					}
			}
			
			if(Step7_div!=null){
					if(condition1>Step7_div){
						setMiddle=(condition1-Step7_div)/2;
						
						$(".Step7_div").css("margin-top",(steps+setMiddle)+"px");
						
					}else{
					$(".Step7_div").css("margin-top",steps+"px");	
					}
			}
			if(Step8_div!=null){
					if(condition1>Step8_div){
						setMiddle=(condition1-Step8_div)/2;
						
						$(".Step8_div").css("margin-top",(steps+setMiddle)+"px");
						
					}else{
					$(".Step8_div").css("margin-top",steps+"px");	
					}
				
			}
			
	$(".solutionMainSteps,.middle").css({"display":"none"});

							$(".middle").css("margin-top",.2+"em");
							$(".inputAndDoneSpace").css({"width": "90%", "margin": "0.5% 5% 0.5%","float":"right","padding":"0%"});	
							$(".InputAndDoneTbl").css({"width": "100%","margin":"0%"});
							$(".InptDnTd1").css({"width": "23%", "padding":".1em 0%"});	
							$(".InptDnTd2").css({"width": "23%", "padding":".1em 0%"});	
							$(".InptDnTd3").css({"width": "23%", "padding":".1em 0%"});	
							$(".InptDnTd4").css({"width": "30%", "padding":".1em 0%","text-align":"center", "position":"relative"});	
							/*$(".InptDnTd5").css({"width": "15%", "padding":"0%", "position":"relative"});	
							$(".InptDnTd6").css({"width": "15%", "padding":"0%", "position":"relative"});	*/
							$(".prompt_New").css({"margin": "0%","top": "0%","left":"1em","right":"unset"});
							$(".remark").css({"margin": "0%","top": "0%","left":"unset","right":"unset", "position":"absolute","width": "95%","margin":"0% 0% 0% 2%"});
							//$(".remark").css({"width": "95%","margin":"0% 0% 0% 2%","text-align":"center", "float":"right"});
							$(".doneDiv").css({"width": "60%", "margin": "0%","margin-left": "20%"});
							$(".done1").css({"width": "100%"});
							$(".inputDiv").css({"margin-top": "0%","text-align":"left","width": "80%"});
							$(".input").css({"width": "80%"});
							$(".forpotrait").hide();
							$(".forDesk").show();
							
							
	if(checkMobile){
	/*if(String(navigator.userAgent).indexOf("Mobile") != -1 ){*/ 

							$(".middle").css("margin-top",1.3+"em");
							$(".inputAndDoneSpaceFordevice").css({"width": "99%","margin":"0%"});	
							$(".InputAndDoneTbl").css({"width": "100%","margin":"0%","margin-top": "1%"});
							$(".InptDnTd1").css({"width": "5%", "padding":".1em 0%"});	
							$(".InptDnTd2").css({"width": "30%", "padding":".1em 0%"});	
							$(".InptDnTd3").css({"width": "20%", "padding":".1em 0%"});	
							$(".InptDnTd4").css({"width": "45%", "padding":".1em 0%","text-align":"center", "position":"relative"});	
							/*$(".InptDnTd5").css({"width": "0%", "padding":"0%"});	
							$(".InptDnTd6").css({"width": "0%", "padding":"0%"});*/	
							$(".remark").css({"width": "90%","margin":"0% 0% 0% 8%","text-align":"left"});
							$(".doneDiv").css({"width": "80%","margin":"0%", "margin-left":"10%"});
							$(".done1").css({"float": "left"});
							$(".inputDiv").css({"margin-top": "0%","text-align":"center"});
							$(".input").css({"width": "80%"});
							$(".InptDnTd2").css({"border":"none"});
							//$(".ClickToAnsDiv").css({"margin-top": "-5%","margin-right": "37%"});
							//$(".forpotrait").css({"margin-right": "50%"});



		 			 if (window.innerHeight > window.innerWidth) { //alert("")
					 		$(".middle").css("margin-top",1.5+"em");
							$(".InputAndDoneTbl").css({"width": "100%","margin":"0%","margin-top": "1%"});
							$(".step11,.step12").css({"width": "100%"});
							$(".step11,.step12").css({"border":"none"});
							//$(".prompt_New").css({"margin": "0%","top": "0%","left":"unset","right":".5em"});
							$(".ClickToAnsDiv").css({"margin-top": "0%","margin-right": "0%"});
							$(".forpotrait").css({"margin-right": "40%"});
							$(".forpotrait").show();
							$(".forDesk").hide();
					 }

	}
});
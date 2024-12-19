$(document).ready(function(){
						  
						    var sb=-10000;
							var autorunVar = 0
							$(".Content00").hide();
 						    $(".autorun").css('opacity','.4');
						    $(".autorun").attr('disable','true');
						    $(".autorun").css('cursor','default');
							$(".promptComma,.prompt,.prompt_New,.blankMessage,.ReducePromt").hide();
							
 							$(".solutionMainSteps,.solutionText,.SolutionRemark").hide();	
							$(".incorrect,.correct").show();
							$(".Wrng1,.Wrt1,.Wrng2,.Wrt2,.Wrng3,.Wrt3,.Wrng4,.Wrt4").hide();

							var input1H = $(".input1").height();
							$(".input2").css({"height":input1H+"px"})

														
							
				///////////////////////////////////For Print///////////////////////////////////
				
				 myFunction= function() {
					window.print();
				};
				
				//////////////////////////////For focus on text////////////////////////////////
				
				 
				 $(".newSet").click(function(){
											 
						 sb=-10000;///set this as initial value..
											 
				 				
								
 					$(".solutionMainSteps,.solutionText,.SolutionRemark,.spacebar").hide();
					$(".input1").val('');
					$(".input").val('');
					$(".incorrect,.correct").hide();
 					$(".blankMessage,.ReducePromt").hide();
 					$(".prompt,.prompt_New,.promptComma").hide();
			        $(".autorun").css('opacity','.4');
					$(".autorun").css('cursor','default');
					$(".autorun").prop('disabled',false);
					$(".input1").focus();
					
					
											});


/////////////////////////////////////////////////////////Buttons/////////////////////////////////////////////////////////////////////////////////////////////
				
				
				  $(".done1").click(function(){ 
											 
									$(".Procedure_banner").hide();				   
				        		    
									$(".done1").css({'color':'#660066','box-shadow':'0px 0px 0px #ff0000, 0px 1px 7px #ff0000,  0px 1px 0px #ff0000,  0px 0px 3px #ff0000'});
									$(".newSet,.solution,.Procedure").css({'color':'white','box-shadow':'none'});
									$(".Procedure").css({'color':'black','box-shadow':'none'});
									$(".input1").focus();
													        
														});
						 
						 $(".newSet").click(function(){ 
													 
									$(".autorun").css('disable','true');				 
									$(".Procedure_banner").hide();				   
				        		    $(".newSet").css('color','#ffff00');
									$(".newSet").css({'color':'#ffff00','box-shadow':'0px 0px 0px #2b638f, 0px 1px 7px #000066,  0px 1px 0px #000066,  0px 0px 3px #000066'});
									$(".solution,.Procedure").css({'color':'white','box-shadow':'none'});
									$(".done1").css({'color':'black','box-shadow':'none'});
									$(".Procedure").css({'color':'black','box-shadow':'none'});
									$(".input1,.input2").val('')
									$(".Wrng1,.Wrt1,.Wrng2,.Wrt2,.Wrng3,.Wrt3,.Wrng4,.Wrt4").hide();
													        
														});
						    $(".solution").click(function(){ 
														  
											 window.SpaceClick=1;
											 $(".middle").hide();
								             $(".Step1_div").show();
												$(".solution").blur();
												$(".step1,.step2,.step3,.step8,.step5,.step6,.step7,.step4").css({'color':'black' ,'box-shadow':'0px 0px 0px rgba(0,0,0,.4), inset 0px 0px 0px rgba(255,255,255,.3), inset 0px 0px 0px rgba(255,255,255,.5)'});
												$(".step1").css({'color':'#C00','box-shadow':'2px 2px 3px rgb(236, 7, 7), inset 0px 1px 0px rgba(255,255,255,.3), inset 0px 0px 3px rgba(255,255,255,.5)'});
												$(".solution").blur();
				 					$(".input1 ").focus();
									$(".spacebar").show();
									$(".Procedure_banner").hide();
				        		    $(".solution").css('color','#ffff00');
									$(".solution").css({'color':'#ffff00','box-shadow':'0px 0px 0px #2b638f, 0px 1px 7px #000066,  0px 1px 0px #000066,  0px 0px 3px #000066'});
									$(".newSet,.Procedure").css({'color':'white','box-shadow':'none'});
									$(".done1").css({'color':'black','box-shadow':'none'});
									$(".Procedure").css({'color':'black','box-shadow':'none'});
									$(".SpaceBarDiv").show();
												 //$(".middle").show();     
												 $(".ZtableDivMain,.main").hide();
												 
												 
									$(".Qimg,.img").hide();
									//$(".Qimg"+val0).show();
									$(".img"+val0).show();
												 
														});
							
							 $(".Procedure").click(function(){ 
															
															$(".input1").focus();
															 autorunVar = 1; 
															 sb=-1;
															 
									$(".correct,.incorrect,.blankMessage,.prompt,.prompt_New,.promptComma,.ReducePromt").hide();
									$(".solutionMainSteps,.solutionText,.SolutionRemark").hide();
 									$(".autorun").css('opacity','.4');
									$(".autorun").css('disable','true');
									$(".autorun").css('cursor','default');
									$(".autorun").attr('disabled',true);
 				        		    $(".Procedure").css('color','red');
									$(".Procedure").css({'color':'red','box-shadow':'0px 0px 0px #2b638f, 0px 1px 7px #000066,  0px 1px 0px #000066,  0px 0px 3px #000066'});
									$(".newSet,.solution").css({'color':'white','box-shadow':'none'});
									$(".done1").css({'color':'black','box-shadow':'none'});
									$(".Procedure_banner").fadeIn();	
							
						});
							  
/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/

							/*$(".btn_style").click (function(){
								  $(".blankMessage").hide();
								  $(".promptComma").hide();
								  $(".prompt,.prompt_New").hide();
								  $(".ReducePromt").hide();
								  $(".middle").hide();
								  $(".solutionMainSteps").show();
								  $(".ZtableDivMain").toggle();
								  
								});*/
							
							
						   
						   
							$(".ClickToAnsDiv").click (function(){
								  $(".blankMessage").hide();
								  $(".promptComma").hide();
								  $(".prompt,.prompt_New").hide();
								  $(".ReducePromt").hide();
								  $(".ZtableDivMain").hide();
								});
							
							$(".StpBtnCmn").click (function(){
								  $(".blankMessage").hide();
								  $(".promptComma").hide();
								  $(".prompt,.prompt_New").hide();
								  $(".ReducePromt").hide();
								  $(".ZtableDivMain").hide();
								});
						   
						   
						   
						   
						   

						   $(".Cross_PB").click(function(){
														 
								$(".Procedure_banner").hide();	
								$(".input1").focus();
								$(".PopDiv").hide();
							});	
							 
	 					   $(".Cross_BM").click(function(){
														 
								$(".blankMessage").hide();
								$(".promptComma").hide();
								$(".prompt,.prompt_New").hide();
								$(".ReducePromt").hide();
								$(".input1").focus();
								$(".PopDiv").hide();
							});	

	 					   $(".PopDivBtn1").click(function(){
														 
								$(".blankMessage").hide();
								$(".promptComma").hide();
								$(".prompt,.prompt_New").hide();
								$(".ReducePromt").hide();
								$(".input1").focus();
								$(".PopDiv2,.PopDiv3").hide();
								$(".PopDiv1").toggle();
								
							});	

	 					   $(".PopDivBtn2").click(function(){
														 
								$(".blankMessage").hide();
								$(".promptComma").hide();
								$(".prompt,.prompt_New").hide();
								$(".ReducePromt").hide();
								$(".input1").focus();
								$(".PopDiv1,.PopDiv3").hide();
								$(".PopDiv2").toggle();
								
							});	

	 					   $(".PopDivBtn3").click(function(){
														 
								$(".blankMessage").hide();
								$(".promptComma").hide();
								$(".prompt,.prompt_New").hide();
								$(".ReducePromt").hide();
								$(".input1").focus();
								$(".PopDiv1,.PopDiv2").hide();
								$(".PopDiv3").toggle();
								
							});	

						    
/*/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
	
	randRange = function (min, max) {
					var randomNum = Number(Math.round(Math.random()*(max-min))+min);
					return randomNum;
				                                          }	
				
					var range_startX1 = 1000;
					var range_finX1 = 9999;
					var range_startX2 = 1000000;
					var range_finX2 = 9999999;
					var range_startX3 = 100000;
					var range_finX3 = 999999;
					var range_startX4 = 1000;
					var range_finX4 = 9999;
					var array_Range = 600;
					
					///////////////////////////////////////////////////
					
					var next_val = 0;
				
					var array_Range = 599;
					
					
					var R1_Arr = new Array();
					var R2_Arr = new Array();
					var R3_Arr = new Array();
					var R4_Arr = new Array();

					var R5_Arr = new Array();
					var R11_Arr = new Array();
					var R1_indexArr = new Array();
					
					Q1_Arr = new Array();
					Q2_Arr = new Array();
					Q3_Arr = new Array();
					Q4_Arr = new Array();	
					Q5_Arr = new Array();	
					Q6_Arr = new Array();
					Q7_Arr = new Array();	
				
					var temp_str;
					var ta1;
					var ta2;
					var ta3;
					var ta4;
					var ta5;
					var ta6;
					var ta7;
					var ta8;
					var q1_txt;
					var counter = 0;
					var wt_id1;
		
				
					quesGeneration = function(){
						for (var i = 0; i<array_Range; i++) {
					
								/*numA = randRange(1,9);
								numB = randRange(4,8);
								numC = randRange(2,6);
								
								if( (numB ==4) || (numB ==6) || (numB ==8) ){
									R2_Arr.push(numA+"@"+numB+"@"+numC);
									
								} else {
									i--;
								}
								
								R1_Arr = uniqueArray0(R2_Arr);*/
								
								R1_Arr = ["1","2","3","4","5"/*,"6","7","8","9","10","11","12","13","14","15"*/];
								
						}
						
						//console.log(R1_Arr.length+"  R1_Arr"+ R1_Arr)
					};
			  
					
			/*/////////////////////////////////////////////////////////*/
		
			nextQuesGeneration = function(){
							next_val++;
									
									
									if (next_val>((R1_Arr.length)-1)) {
										next_val = 0;
									}
									temp1 = String(R1_Arr[next_val]).split("@");
									//val0 = 1;
									val0 = temp1[0];
									//alert(val0)
									
									
									$(".poptble1").hide();
									$(".poptble1"+val0).show();
									//$(".img"+val0).show();
									
									
									if (val0 == 1){
										Equ1 = "3<i>x</i>  –  <i>y</i>   =   3  ";
										Equ2 = "2<i>x</i>  –  3<i>y</i>   =   2  ";
										Equ3 = "<i>x</i>  +  2<i>y</i>   =   8  ";
										val1 = "1";
										val2 = "0";
										val3 = "4";
										val4 = "2";
										val5 = "2"
										val6 = "3";
										
									} else if (val0 == 2){
										Equ1 = "<i>x</i>  +  2<i>y</i>   =   6  ";
										Equ2 = "<i>x</i>  –  <i>y</i>   =   0  ";
										Equ3 = "<i>x</i>  –  2<i>y</i>   =   2  ";
										val1 = "2";
										val2 = "2";
										val3 = "– 2";
										val4 = "– 2";
										val5 = "4"
										val6 = "1";
										
									} else if (val0 == 3){
										Equ1 = "2<i>x</i>  –  <i>y</i>   =   – 2  ";
										Equ2 = "<i>x</i>  +  2<i>y</i>   =   4<b class='hidden'>– </b>  ";
										Equ3 = "<i>x</i>  –  3<i>y</i>   =   – 1  ";
										val1 = "0";
										val2 = "2";
										val3 = "2";
										val4 = "1";
										val5 = "– 1"
										val6 = "0";
										
									} else if (val0 == 4){
										Equ1 = "2<i>x</i>  +  3<i>y</i>   =   5<b class='hidden'>– </b>  ";
										Equ2 = "2<i>x</i>  –  <i>y</i>   =   1<b class='hidden'>– </b>  ";
										Equ3 = "2<i>x</i>  +  <i>y</i>   =   – 1  ";
										val1 = "1";
										val2 = "1";
										val3 = "0";
										val4 = "– 1";
										val5 = "– 2"
										val6 = "3";
										
									}  else if (val0 == 5){					//////////////
										Equ1 = "2<i>x</i>  +  <i>y</i>   =   – 2  ";
										Equ2 = "4<i>x</i>  –  3<i>y</i>   =   – 4  ";
										Equ3 = "<i>x</i>  –  2<i>y</i>   =   – 6  ";
										val1 = "– 1";
										val2 = "0";
										val3 = "2";
										val4 = "4";
										val5 = "– 2"
										val6 = "2";
										
									} 
									//alert(val1+","+val2)
									
									/*else if (val0 == 6){
										val1 = "1 <i>p</i>.<i>m.</i>";
										val2 = "37 ºC";
										Ans1 = "37.5";
										Ans2 = "10";
										Ans3 = "11";
										Ans21 = "<i>a</i>.<i>m.</i>";
										Ans31 = "<i>a</i>.<i>m.</i>";
									} else if (val0 == 7){
										val1 = "2 <i>p</i>.<i>m.</i>";
										val2 = "40 ºC";
										Ans1 = "39.5";
										Ans2 = "1";
										Ans3 = "10";
										Ans21 = "<i>p</i>.<i>m.</i>";
										Ans31 = "<i>a</i>.<i>m.</i>";
									} else if (val0 == 8){
										val1 = "12 <i>noon</i>";
										val2 = "37 ºC";
										Ans1 = "36.5";
										Ans2 = "9";
										Ans3 = "11";
										Ans21 = "<i>a</i>.<i>m.</i>";
										Ans31 = "<i>a</i>.<i>m.</i>";
									} else if (val0 == 9){
										val1 = "9 <i>a</i>.<i>m.</i>";
										val2 = "37 ºC";
										Ans1 = "38.5";
										Ans2 = "3";
										Ans3 = "2";
										Ans21 = "<i>p</i>.<i>m.</i>";
										Ans31 = "<i>p</i>.<i>m.</i>";
									}  else if (val0 == 10){
										val1 = "2 <i>p</i>.<i>m.</i>";
										val2 = "39 ºC";
										Ans1 = "36.5";
										Ans2 = "1";
										Ans3 = "11";
										Ans21 = "<i>p</i>.<i>m.</i>";
										Ans31 = "<i>a</i>.<i>m.</i>";
									} else if (val0 == 11){
										val1 = "1 <i>p</i>.<i>m.</i>";
										val2 = "39 ºC";
										Ans1 = "35.5";
										Ans2 = "11";
										Ans3 = "11";
										Ans21 = "<i>a</i>.<i>m.</i>";
										Ans31 = "<i>a</i>.<i>m.</i>";
									} else if (val0 == 12){
										val1 = "2 <i>p</i>.<i>m.</i>";
										val2 = "35 ºC";
										Ans1 = "37.5";
										Ans2 = "11";
										Ans3 = "10";
										Ans21 = "<i>a</i>.<i>m.</i>";
										Ans31 = "<i>a</i>.<i>m.</i>";
									} else if (val0 == 13){
										val1 = "12 <i>noon</i>";
										val2 = "36 ºC";
										Ans1 = "34.5";
										Ans2 = "1";
										Ans3 = "11";
										Ans21 = "<i>p</i>.<i>m.</i>";
										Ans31 = "<i>a</i>.<i>m.</i>";
									} else if (val0 == 14){
										val1 = "9 <i>a</i>.<i>m.</i>";
										val2 = "39 ºC";
										Ans1 = "36.5";
										Ans2 = "2";
										Ans3 = "2";
										Ans21 = "<i>p</i>.<i>m.</i>";
										Ans31 = "<i>p</i>.<i>m.</i>";
									}  else if (val0 == 15){
										val1 = "2 <i>p</i>.<i>m.</i>";
										val2 = "37 ºC";
										Ans1 = "34.5";
										Ans2 = "1";
										Ans3 = "11";
										Ans21 = "<i>p</i>.<i>m.</i>";
										Ans31 = "<i>a</i>.<i>m.</i>";
									}*/
										
									
									
										  
										  $(".Equ1").html(Equ1);
										  $(".Equ2").html(Equ2);
										  $(".Equ3").html(Equ3);
										  $(".val1").html(val1);
										  $(".val2").html(val2);
										  $(".val3").html(val3);
										  $(".val4").html(val4);
										  $(".val5").html(val5);
										  $(".val6").html(val6);
										
										  
			
			if (next_val>500) {
						next_val = 0;
					}

			}

			///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
			
			
			quesGeneration();
				next_val = randRange(0, R1_Arr.length-1);
			nextQuesGeneration();  ///// Calling question..
			
				doneButton = function(){
					 var ansScore1=0;
				  var ansScore2=0;
				  var ansScore3=0;
				  var finalScore=0;
					 
					$(".remark,.correct,.incorrect,.blankMessage,.prompt,.prompt_New,.promptComma,.ReducePromt").hide();
					$(".Wrng1,.Wrt1,.Wrng2,.Wrt2,.Wrng3,.Wrt3,.Wrng4,.Wrt4,.Wrng5,.Wrt5,.Wrng6,.Wrt6,.Wrng7,.Wrt7").hide();
					
				
					var k1_text = document.getElementById("inputText").value;
					var k2_text = document.getElementById("inputText1").value;
					var k3_text = document.getElementById("inputText2").value;
					
					var ent_ans1=trimzero(k1_text)
					ent_ans1=ent_ans1.split(",").join("PP")
				    var ent_ans2=trimzero(k2_text)
					ent_ans2=ent_ans2.split(",").join("PP")
					var ent_ans3=trimzero(k3_text)
					ent_ans3=ent_ans3.split(",").join("PP")
					
					Ans1 = val1+"PP"+val2;
					Ans2 = val3+"PP"+val4;
					Ans3 = val5+"PP"+val6;
					
					
					
					var ans_arr=[];
					ans_arr=[trimzero(Ans1),trimzero(Ans2),trimzero(Ans3)]
					
					for(var i =0; i<ans_arr.length;i++){
						
						 if((ent_ans1 == ans_arr[i])){
							 ans_arr.splice(i,1)
							 ansScore1=1
							 break;
							 } 
					 }
					 
					  for(var i =0; i<ans_arr.length;i++){
						 if((ent_ans2 == ans_arr[i])){
							 ans_arr.splice(i,1)
							 ansScore2=1
							 break;
							 } 
					 }
					 
					  for(var i =0; i<ans_arr.length;i++){
						 if((ent_ans3 == ans_arr[i])){
							 ans_arr.splice(i,1)
							 ansScore3=1
							 break;
							 } 
					 }
					
					

									if (ansScore1==1) {
										$(".Wrt1").show();
										$(".Wrng1").hide();
									} else {
										$(".Wrng1").show();
										$(".Wrt1").hide();
									}
									
									if (ansScore2==1) {
										$(".Wrt2").show();
										$(".Wrng2").hide();
									} else {
										$(".Wrng2").show();
										$(".Wrt2").hide();
									}

									if (ansScore3==1) {
										$(".Wrt3").show();
										$(".Wrng3").hide();
									} else {
										$(".Wrng3").show();
										$(".Wrt3").hide();
									}
//alert()
									finalScore=(Number(ansScore1)+Number(ansScore2)+Number(ansScore3))/3
									
									//alert(finalScore)

//////////////////////////////////////////////////////////////////////////
					
						if(k1_text == "" || k2_text == "" || k3_text == "") {
							$(".prompt_New").hide();
							$(".blankMessage_New").show().fadeOut(2500);
							$(".Wrng1,.Wrt1,.Wrng2,.Wrt2,.Wrng3,.Wrt3,.Wrng4,.Wrt4,.Wrng5,.Wrt5,.Wrng6,.Wrt6,.Wrng7,.Wrt7").hide();
							
						/*}else if(wt_id1 == -1) { //alert(wt_id1)
							$(".prompt_New").hide();						
							$(".whatvalue").show().delay(2500).hide(0);
							document.getElementById("whatValue").innerHTML = k1_text;
							$(".Wrng1,.Wrt1,.Wrng2,.Wrt2,.Wrng3,.Wrt3,.Wrng4,.Wrt4,.Wrng5,.Wrt5,.Wrng6,.Wrt6,.Wrng7,.Wrt7").hide();
						
						}else if(wt_id21 == -1 && wt_id22 == -1 && wt_id23 == -1) { //alert(wt_id1)
							$(".prompt_New").hide();						
							$(".whatvalue").show().delay(2500).hide(0);
							document.getElementById("whatValue").innerHTML = k2_text;
							$(".Wrng1,.Wrt1,.Wrng2,.Wrt2,.Wrng3,.Wrt3,.Wrng4,.Wrt4,.Wrng5,.Wrt5,.Wrng6,.Wrt6,.Wrng7,.Wrt7").hide();
						
						}else if(wt_id31 == -1 && wt_id32 == -1 && wt_id33 == -1) { //alert(wt_id1)
							$(".prompt_New").hide();						
							$(".whatvalue").show().delay(2500).hide(0);
							document.getElementById("whatValue").innerHTML = k3_text;
							$(".Wrng1,.Wrt1,.Wrng2,.Wrt2,.Wrng3,.Wrt3,.Wrng4,.Wrt4,.Wrng5,.Wrt5,.Wrng6,.Wrt6,.Wrng7,.Wrt7").hide();*/
						
						} else if (finalScore == 1) {
							$(".remark").show();
							$(".correct").show().fadeOut(2500);
							
						} else if (finalScore < 1 && finalScore > 0) {
							$(".prompt_New").hide();
							$(".partialcorrect_New").show().fadeOut(2500);
							
						} else {
							$(".remark").show();
							$(".incorrect").show().fadeOut(2000);
						}
								
			}
				
		
			 showSolution = function(){
				 
				 sb=0;
				 autorunVar = 1////0 when in teacher mode
				 
				     $(".correct,.incorrect,.blankMessage,.prompt,.prompt_New,.promptComma").hide();
					 $(".autorun").css('opacity','0.4');
					 $(".autorun").attr('disabled','disabled');	
					 $(".autorun").css('cursor','default');
 					 $(".solutionMainSteps,.solutionText,.SolutionRemark").hide();

 					 $(".solutionMainSteps,.solutionText,.SolutionRemark").show().css({"display":"inline-block"});

					
					}
				
/*///////////////////////////////////////////////////////////////////////////*/

/*//////////////////////////////////////////////////////////////////////////*/								
						
/*/////////////////////////////////////////////////////////////////////////*/
	
}); //////end of Main/////////



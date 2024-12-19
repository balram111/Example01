 // Functions
$(document).ready(function(){

	function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
	};
		
	window.checkMobile=isMobileDevice();
						   
						   
//////////////////////////////////////////////////////////////////////////	

Check_ans_Index = function(eval_str) {
	eval_str = trimzero(eval_str);
	q_arr1 = [];
	q_arr2 = [];


	var Check_Index = false;
	var Check_Index1 = false;
	var  Check_Index2 = false;
	var Check_Index3 = false;
	ar_length = eval_str.split("/");
	//alert(ar_length.length)
	
	if (ar_length.length == 1) {

		Check_Index = true;

	} else if (ar_length.length == 2) {
		var q_arr1 = new Array(eval_str.split("/")[1]);
		firstBracket = eval_str.substr(0, 1);
		lastBracketPosition = eval_str.lastIndexOf(")");
		lastBracket = eval_str.substr(lastBracketPosition, 1);



		for (i=0; i<1; i++) {

			if ((firstBracket == "(") && (lastBracket == ")") && (String(q_arr1[i]).substr(1, 1) == "")) {
				Check_Index = true;
			} else if ((firstBracket == "(") && (lastBracket == ")") && (String(q_arr1[i]).substr(2, 1) == "")) {
				Check_Index = true;
			} else if ((String(q_arr1[i]).substr(1, 1) == ")") && isNaN(Number(String(q_arr1[i]).substr(1, 1)))) {
				q_arr1.splice(i,1);
				Check_Index = true;
			} else if ((String(q_arr1[i]).substr(2, 1) == ")") && isNaN(Number(String(q_arr1[i]).substr(2, 1)))){
				q_arr1.splice(i,1);
				Check_Index = true;
			} else {
				break;
				Check_Index = false;
			}
		}
	} else if (ar_length.length == 3) {
		var q_arr1 = new Array(eval_str.split("/")[1], eval_str.split("/")[2]);
		for (i=0; i<1; i++) {
		/*alert((String(q_arr1[i]).substr(1, 1) == ")")+" &&1 "+isNaN(Number(String(q_arr1[i]).substr(1, 1))))*/
			if ((String(q_arr1[i]).substr(1, 1) == ")") && isNaN(Number(String(q_arr1[i]).substr(1, 1)))) {
				q_arr1.splice(i,1);
				Check_Index1 = true;
			} else if ((String(q_arr1[i]).substr(2, 1) == ")") && isNaN(Number(String(q_arr1[i]).substr(2, 1)))) {
				q_arr1.splice(i,1);
				Check_Index1 = true;
			} else {
				break;
				Check_Index1 = false;
			}
		}
		for (i=0; i<1; i++) {
			/*alert((String(q_arr1[i]).substr(1, 1) == ")")+" &&2 "+isNaN(Number(String(q_arr1[i]).substr(1, 1))))*/
			if ((String(q_arr1[i]).substr(1, 1) == ")") &&isNaN(Number(String(q_arr1[i]).substr(1, 1)))) {
				//trace("AA");
				q_arr1.splice(i,1);
				Check_Index2 = true;
			} else if ((String(q_arr1[i]).substr(2, 1) == ")") && isNaN(Number(String(q_arr1[i]).substr(2, 1)))) {
				q_arr1.splice(i,1);
				Check_Index2 = true;
			} else {
				break;
				Check_Index2 = false;
			}
		}
		if (Check_Index1 && Check_Index2) {
			Check_Index = true;
		} else {
			Check_Index = false;
		}
	} else if (ar_length.length == 4) {
		var q_arr1 = new Array(eval_str.split("/")[1], eval_str.split("/")[2], eval_str.split("/")[3]);
		for (i=0; i<1; i++) {

			if ((String(q_arr1[i]).substr(1, 1) == ")") && isNaN(Number(String(q_arr1[i]).substr(1, 1)))){
				q_arr1.splice(i,1);
				Check_Index1 = true;
			} else if ((String(q_arr1[i]).substr(2, 1) == ")") && isNaN(Number(String(q_arr1[i]).substr(2, 1)))) {
				q_arr1.splice(i,1);

				Check_Index1 = true;
			} else {
				break;
				Check_Index1 = false;
			}
		}
		for (i=0; i<1; i++) {

			if ((String(q_arr1[i]).substr(1, 1) == ")") && isNaN(Number(String(q_arr1[i]).substr(1, 1)))){
				//trace("AA2");
				q_arr1.splice(i,1);
				Check_Index2 = true;
			} else if ((String(q_arr1[i]).substr(2, 1) == ")") && isNaN(Number(String(q_arr1[i]).substr(2, 1)))){
				q_arr1.splice(i,1);

				Check_Index2 = true;
			} else {
				break;
				Check_Index2 = false;
			}
		}
		for (i=0; i<1; i++) {

			if ((String(q_arr1[i]).substr(1, 1) == ")") && isNaN(Number(String(q_arr1[i]).substr(1, 1)))) {

				q_arr1.splice(i,1);
				Check_Index3 = true;
			} else if ((String(q_arr1[i]).substr(2, 1) == ")") && isNaN(Number(String(q_arr1[i]).substr(2, 1)))) {
				q_arr1.splice(i,1);

				Check_Index3 = true;
			} else {
				break;
				Check_Index3 = false;
			}
		}

		if (Check_Index1 && Check_Index2 && Check_Index3) {
			Check_Index = true;
		} else {
			Check_Index = false;
		}
	}
                    
	return Check_Index;
};
///////////////////////////////////////////////////////////////////			   
						   
						   
	Convert_Minus_sign = function(num) {
	txt_num = Number(num);
	if (txt_num<0) {
		txt_num = "– "+Math.abs(txt_num);
	} else {
		txt_num = txt_num;
	}
	return txt_num;
};
/////////////////////subScriptToNumber start///////////////////
subScriptToNumber = function (str1)
{
	var num;
	if (str1 == "₂") {
		num = 2
	}
	else if (str1 == "₃") {
	num = 3
	}
	else if (str1 == "₄") {
	num = 4
	}
	else if (str1 == "₅") {
	num = 5
	}
	else if (str1 =="₆" ) {
	num = 6
	}
	else if (str1 == "₇") {
	num = 7
	}
	else if (str1 == "₈") {
	num = 8
	}
	else if (str1 == "₉") {
	num = 9
	}
	return num;	
}

//////////////////////////////


/////////////////////subScriptToNumber start///////////////////
NumberTosubScript = function (str1)
{
	str1 = Number(str1)
	var num;
	if (str1 == 2) {
		num = "₂"
	}
	else if (str1 == 3) {
	num = "₃"
	}
	else if (str1 == 4) {
	num = "₄"
	}
	else if (str1 == 5) {
	num = "₅"
	}
	else if (str1 == 6) {
	num = "₆"
	}
	else if (str1 == 7) {
	num = "₇"
	}
	else if (str1 == 8) {
	num = "₈"
	}
	else if (str1 == 9) {
	num = "₉"
	}
	return String(num);	
}

////////////////////////////

//////////////////////////////////////////////////////////////////////////	
Revert_Minus_sign = function(str) {
	txt_str = str;
	newArray = [];
	newStr = "";
	for (i=0; i<String(txt_str).length; i++) {
		if (String(txt_str).charAt(i) == "–") {
			newArray.push("-");
		} else {
			newArray.push(String(txt_str).charAt(i));
		}
	}
	for (i=0; i<newArray.length; i++) {
		newStr += newArray[i];
	}
	return newStr;
};
//////////////////////////////////////////////////////////////////////////	



pround = function(n, m)  {
	if (m == 0) {
		var pr11 = Math.round(n);
		return pr11;
	} else {
		var stp1 = String(n);
		var st1 = "";
		var len = stp1.length;
		var dec = stp1.indexOf(".");
		if (dec == -1) {
			st1 = stp1.concat(".0000000");
			dec = st1.indexOf(".");
		} else {
			st1 = st1.concat(stp1);
		}
		var rd = 0;
		var prd = 0;
		var st2 = "";
		//if (m<dec) {
		if ((m<dec) && (m != 0)) {
			if (m>0) {
				var rd = dec-m;
			} else {
				var rd = dec-(m-1);
			}
			if ((len-dec-1)<=-m) {
				st2 = st2.concat(st1);
			} else {
				var p1 = Number(st1.charAt(rd));
				var p11 = Number(st1.charAt(rd-1));
				if (p1>=5) {
					var p2 = p11+1;
				} else {
					var p2 = p11;
				}
				if (p2<10) {
					for (i1=0; i1<rd-1; i1++) {
						st2 = st2.concat(st1.charAt(i1));
					}
					st2 = st2.concat(String(p2));
					for (i2=rd; i2<dec; i2++) {
						st2 = st2.concat("0");
					}
				} else {
					//if((st1.charAt(rd-2)!='.')
					for (ia1=rd-1; ia1>0; ia1--) {
						if ((st1.charAt(ia1) == 9) || (st1.charAt(ia1) == '.')) {
							prd = ia1;
						} else {
							break;
						}
					}
					if (st1.charAt(prd-1) != '.') {
						for (ia2=0; ia2<prd-1; ia2++) {
							st2 = st2.concat(st1.charAt(ia2));
						}
						pp1 = Number(st1.charAt(prd-1))+1;
						st2 = st2.concat(String(pp1));
						for (ip3=prd; ip3<dec; ip3++) {
							st2 = st2.concat("0");
						}
					}
				}
			}
		} else {
			if ((m-dec) == 0) {
				if (Number(st1.charAt(0))>=5) {
					st2 = st2.concat("1");
				}
				for (ip1=0; ip1<m; ip1++) {
					st2 = st2.concat("0");
				}
			} else {
				for (ip2=0; ip2<m; ip2++) {
					st2 = st2.concat("0");
				}
			}
		}
		//break;
		//}
		return (Number(st2));
	}
};









///////////////////////////////////////////////////////////////////	

WordToNumber = function(str)  {
	
	var zstr = 0;
	var Final_num = 0;
	var obj = new Object()
		obj = {a1:"one", a2:"two", a3:"three", a4:"four", a5:"five", a6:"six", a7:"seven", a8:"eight", a9:"nine", a10:"ten", a11:"eleven", a12:"tweleve", a13:"thirteen", a14:"fourteen", a15:"fifteen", a16:"sixteen", a17:"seventeen", a18:"eighteen", a19:"nineteen", a20:"twenty", a21:"twenty-one", a22:"twenty-two", a23:"twenty-three", a24:"twenty-four", a25:"twenty-five", a26:"twenty-six", a27:"twenty-seven", a28:"twenty-eight", a29:"twenty-nine", a30:"thirty", a31:"thirty-one", a32:"thirty-two", a33:"thirty-three", a34:"thirty-four", a35:"thirty-five", a36:"thirty-six", a37:"thirty-seven", a38:"thirty-eight", a39:"thirty-nine", a40:"forty", a41:"forty-one", a42:"forty-two", a43:"forty-three", a44:"forty-four", a45:"forty-five", a46:"forty-six", a47:"forty-seven", a48:"forty-eight", a49:"forty-nine", a50:"fifty" , a51:"fifty-one", a52:"fifty-two", a53:"fifty-three", a54:"fifty-four", a55:"fifty-five", a56:"fifty-six", a57:"fifty-seven", a58:"fifty-eight", a59:"fifty-nine", a60:"sixty", a61:"sixty-one", a62:"sixty-two", a63:"sixty-three", a64:"sixty-four", a65:"sixty-five", a66:"sixty-six", a67:"sixty-seven", a68:"sixty-eight", a69:"sixty-nine", a70:"seventy", a71:"seventy-one", a72:"seventy-two", a73:"seventy-three", a74:"seventy-four", a75:"seventy-five", a76:"seventy-six", a77:"seventy-seven", a78:"seventy-eight", a79:"seventy-nine", a80:"eighty", a81:"eighty-one", a82:"eighty-two", a83:"eighty-three", a84:"eighty-four", a85:"eighty-five", a86:"eighty-six", a87:"eighty-seven", a88:"eighty-eight", a89:"eighty-nine", a90:"ninety", a91:"ninety-one", a92:"ninety-two", a93:"ninety-three", a94:"ninety-four", a95:"ninety-five", a96:"ninety-six", a97:"ninety-seven", a98:"ninety-eight", a99:"ninety-nine"}
		for (var i in obj) {
			if(str.toLowerCase() == obj[i])
			{
				Final_num = Number((String("obj."+i)).charAt(5)+""+(String("obj."+i)).charAt(6));
				break;
			}
		}
	return Final_num;
	
}			   
///////////////////////////////////////////////////////////////////	

				NumberToWord = function(i)  {
					var Final_Str = "";
					var units = new Array();
					units = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
					var tens = new Array();
					tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
					if (i<20) {
						Final_Str = units[i];
					} else if (i<100) {
						 Final_Str = tens[Math.floor(i/10)]+" -"+((i % 10 > 0)?" "+units[i % 10]:"")
					}
					return Final_Str;
				
				
				};

///////////////////////////////////////////////////////////////////							   
						   
		NumberToWord_FirstCapital = function(i)  {
			var Final_Str = "";
			var units = new Array();
			units = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
			var tens = new Array();
			tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
			if (i<20) {
				Final_Str = units[i];
			} else if (i<100) {
				 Final_Str = tens[Math.floor(i/10)]+" -"+((i % 10 > 0)?" "+units[i % 10]:"")
			}
			return Final_Str;
		};				   
						   
						   
						   
///////////////////////////////////////////////////////////////////							   
						  				
				ans_sort = function(txt_ans) {
				aa1 = txt_ans;
				var abc_arr = new Array();
				aa2 = aa1.split("+");
				for (var i = 0; i<aa2.length; i++) {
					aa2[i] = Number(aa2[i]);
				}
				//var flags = Array.NUMERIC;
				aa2.sort(function(a,b){
							return a-b;
							});
				
				abc_arr = aa2;
				aa3 = abc_arr.join("+");
				return aa3;
			
			};
				
		   
///////////////////////////////////////////////////////////////////		

						   
					Expanded_form = function(num)  {
					var temp_num1 = String(num).split(".");
					var temp_num = temp_num1[0];
					var temp_dec = temp_num1[1];
					var temp_str = "";
					var temp_str1 = "";
					var temp = "";
					var final_temp = "";
					count = temp_num.length;
					count1 = temp_num1[1].length;
					for (i=0; i<=temp_num.length; i++) {
						if (temp_num.charAt(i) != "0") {
							temp_str += String(temp_num.charAt(i));
							if (count == 4) {
								temp_str += "000 + ";
							} else if (count == 3) {
								temp_str += "00 + ";
							} else if (count == 2) {
								temp_str += "0 + ";
							}
						}
						count--;
					}
					for (i=0; i<=temp_dec.length; i++) {
						if (temp_dec.charAt(i) != "0") {
							//temp_str1 += String(temp_dec.charAt(i));
							//trace(temp_str1+" temp_str1");
							if (count1 == 4) {
								temp_str1 = Number(String(temp_dec.charAt(i)))/10+" + ";
							} else if (count1 == 3) {
								temp_str1 += Number(String(temp_dec.charAt(i)))/100+" + ";
							} else if (count1 == 2) {
								temp_str1 += Number(String(temp_dec.charAt(i)))/1000+" + ";
							} else if (count1 == 1) {
								temp_str1 += Number(String(temp_dec.charAt(i)))/10000+"";
							}
						}
						count1--;
					}
					final_temp = temp_str+" + "+temp_str1;
					return temp_str1;
				};
					  
						   
///////////////////////////////////////////////////////////////////

getGCF1x = function(a, b) {
	var hcf = 1;
	var small;
	i = 2;
	small = a<b ? a : b;
	for (i; i<=small; ) {
		if ((a%i == 0) && (b%i == 0)) {
			hcf *= i;
			this.small /= i;
			a = a/i;
			b = b/i;
			i = 2;
		} else {
			i++;
			continue;
		}
	}//alert("hcf is:"+hcf);
	return hcf;
	
};
///////////////////////////////////////////////////////////////
////////////////////////////END////////////////////////////////						   
						   
						   
						   
						   
////////////////////////////////////////To get first Prime Factor/////////////////////

fpmFactor = function(fchk_n1) {
	fchk_abc = fchk_n1;
	fchk_a1 = new Array();
	for (i=2; i<=fchk_abc; i++) {
		if (fchk_abc%i == 0) {
			fchk_abc = fchk_abc/i;
			fchk_a1.push(i);
			i--;
		}
	}
	return fchk_a1;
};

/////////////////////////////END/////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////			

						   
						getGCF = function() {
						var aa_getGCF = new Array();
						for (i_getGCF=0; i_getGCF<arguments.length; i_getGCF++) {
							aa_getGCF.push(arguments[i_getGCF]);
						}
						//aa_getGCF.sort(Array.NUMERIC);
						aa_getGCF.sort(function(a,b){
							return a-b;
							});
						max_getGCF = aa_getGCF[aa_getGCF.length-1];
						min_getGCF = aa_getGCF[0];
						for (kk=min_getGCF; kk>=1; kk--) {
							count_getGCF = 0;
							for (kj=aa_getGCF.length-1; kj>=0; kj--) {
								if (aa_getGCF[kj]%kk == 0) {
									count_getGCF++;
								}
							}
							if (count_getGCF == aa_getGCF.length) {
								return kk;
								break;
							}
						}
					};
					
						   
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	


						  round_place = function(Mnum,Pnum) {
							var numb1 = Mnum;
							var numb2 = Pnum;
							final_num = "";
							Fnum = Number(String(numb1).length)-numb2;
							
							inter_num1 = String(numb1).substr(0, (Fnum-1));
							inter_num = String(numb1).substr(Fnum-1, 1);
						
							if (Number(inter_num)>=5) {
								final_num = Number(inter_num1)+1;
							} else {
								final_num = Number(inter_num1);
							}
							inter_num2 = String(numb1).substr(Fnum-1, String(numb1).length-1);
						
							for (var i = 0; i<String(inter_num2).length; i++) {
								final_num += "0";
							}
							return final_num;
						};
						
						
						
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	


						space_between_num = function(num) {
							var final_num = String(num);
							Fnum = Number(final_num.length);
							final_num1 = "";
							
							for (var i = 0; i<Fnum; i++) {
								//final_num = final_num.charAt(i)
								final_num1 += final_num.charAt(i)+" ";
							}
							return final_num1;
						};
						
						   
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


trimzero = function(theString) {
	///////////////////FUNCTION trimSpaces Start 17 March 2018////////////////////////////
	function hkb_trimSpaces(spc_theString) {
		spc_theString = String(spc_theString);
		//for (space_i=0; space_i<=5; space_i++) {
		for (space_m=0; space_m<=spc_theString.length; space_m++) {
			if (spc_theString.substring(space_m, space_m+1) == " ") {
				spc_theString = spc_theString.substring(0, space_m)+spc_theString.substring(space_m+1, spc_theString.length);
				space_m--;
			}
		}
		//}
	//	alert(spc_theString+"  spc_theString")
		return spc_theString;
	}
	///////////////////FUNCTION trimSpaces 2 August 2006////////////////////////////
	///////////////////FUNCTION trimzero old 2August 2006////////////////////////////
	function hkb_oldtrimzero(zero_theString) {
		console.log(zero_theString+"  zero_theString")
		zero_theString = String(zero_theString);
		for (trim_i=0; trim_i<zero_theString.length; trim_i++) {
			if (zero_theString.charAt(trim_i) == " ") {
				zero_theString = zero_theString.substring(0, trim_i)+zero_theString.substring(trim_i+1, zero_theString.length);
				trim_i--;
			}
		}
		if (zero_theString !="" ) {
			while (zero_theString.charAt(0) == "0" || zero_theString.charAt(0) == " ") {
				
				zero_theString = zero_theString.substring(1, zero_theString.length+1);
			}
			while (zero_theString.charAt(zero_theString.length-1) == " ") {
				zero_theString = zero_theString.substring(0, zero_theString.length-1);
			}
			trim_id = zero_theString.indexOf(".");
			if (trim_id!=-1) {
				for (trim_i=zero_theString.length-1; trim_i>trim_id; trim_i--) {
					if (zero_theString.charAt(trim_i) == "0" || zero_theString.charAt(trim_i) == " ") {
						zero_theString = zero_theString.substring(0, trim_i);
					} else {
						break;
					}
				}
				if (trim_id == zero_theString.length-1) {
					zero_theString = zero_theString.substring(0, trim_id);
				}
			}
			if (zero_theString == "") {
				zero_theString = "0";
			}
		}
		
		return zero_theString;
	}
	///////////////////FUNCTION trimzero old////////////////////////////
	///////////////////FUNCTION trimzero main////////////////////////////
	theString = hkb_trimSpaces(theString);
	trimzero_hkb = 0;
	trimzero_final_str = "";
	trimzero_j = 0;
	//alert(theString+" == theString..1")
	theString = hkb_trimSpaces(theString);
	trimzero_hkb = 0;
	trimzero_final_str = "";
	trimzero_j = 0;
	for (trimzero_i=0; trimzero_i<=theString.length; trimzero_i++) {
		if ((isNaN(theString.charAt(trimzero_i)) == false) || (theString.charAt(trimzero_i) == ".")) {
			trimzero_final_str += theString.substring(trimzero_hkb, trimzero_i);
			trimzero_hkb_str = "";
			trimzero_hkb_str += theString.charAt(trimzero_i);
			
			for (trimzero_j=trimzero_i+1; trimzero_j<=theString.length; trimzero_j++) {
				
				console.log(theString.charAt(trimzero_j)+"  (theString.charAt(trimzero_j))  "+trimzero_j)
				if (((isNaN(theString.charAt(trimzero_j)) == false) || (theString.charAt(trimzero_j) == ".")) && (theString.charAt(trimzero_j) != "")) {
					trimzero_hkb_str += theString.charAt(trimzero_j);
					trimzero_i++;
					console.log(trimzero_i+"  trimzero_i  "+trimzero_j)
				} else {	 
					trimzero_hkb_str = hkb_oldtrimzero(trimzero_hkb_str);
					trimzero_final_str += trimzero_hkb_str;
					trimzero_hkb = trimzero_j;
					break;
				}
			}
		}
	}
	trimzero_final_str += theString.substring(trimzero_j, theString.length);
	return trimzero_final_str;
};


getLCM = function() {
	var n1 = 1;
	var aa_getLCM = new Array();
	for (i_getLCM=0; i_getLCM<arguments.length; i_getLCM++) {
		aa_getLCM.push(arguments[i_getLCM]);
	}
	//aa_getLCM.sort(Array.NUMERIC);
	aa_getLCM.sort(function(a,b){
							return a-b;
							});
	
	for (t=0; t<aa_getLCM.length; t++) {
		n1 = n1*aa_getLCM[t];
	}
	
	var a2 = aa_getLCM[(aa_getLCM.length)-1];
	for (i=a2; i<=n1; i++) {
		count = 0;
		for (j=0; j<aa_getLCM.length; j++) {
			if (i%aa_getLCM[j] == 0) {
				count++;
			}
		}
		if (count == aa_getLCM.length) {
			return i;
		}
	}
	
};	


///////////////////FUNCTION trimzero main////////////////////////////
///////////////////FUNCTION trimzero NEW  Start////////////////////////////
//alert("trimzero(096262) == "+trimzero("0       00000000000000000000.9626200000"));  
						   
						   
						   
						//////////Digits in the Numbers are different (Not Equal)//////////////////////  
						   NonRepeat = function(chk_n1) {
							chk_value = String(chk_n1);
							count1 = 0;
							for (ii=0; ii<String(chk_value).length; ii++) {
								for (jj=0; jj<String(chk_value).length; jj++) {
									if (String(chk_value).charAt(ii) == String(chk_value).charAt(jj)) {
										count1++;
									}
								}
							}
							////alert(count1+"== "+chk_value.length);
							if (count1 == chk_value.length) {
								return chk_n1;




							} else {
								return null;
								count1 = 0;
							}
						};
/////////////////////Remove duplicate entry/////////////////////////
	Remove_Duplicate_Entry = function(arr)  {
	var lookup = []
	var uniqueArr = new Array();
	var num;
	for (var i = 0; i<arr.length; i++) {
		num = arr[i];
		if (!lookup[num]) {
			uniqueArr.push(num);
			lookup[num] = true;
		}
	}
	return (uniqueArr);
};

////////////////////////////////////////Find Comma/////////////////////////////
	findcoma = function(theString)  {
	coma_arr = [];
	//for (space_i=0; space_i<=5; space_i++) {
	for (space_m=0; space_m<=theString.length; space_m++) {
		if (theString.charAt(space_m) == ",") {
			coma_arr.push(spcae_m);
		}
	}
	//}
	return coma_arr;
};

/////////////////////////////////////////////////////Remove spaces////////////////////////////////////
trimSpaces = function(spc_theString) {
	spc_theString = String(spc_theString);
	for (space_m=0; space_m<=spc_theString.length; space_m++) {
		if (spc_theString.substring(space_m, space_m+1) == " ") {
			spc_theString = spc_theString.substring(0, space_m)+spc_theString.substring(space_m+1, spc_theString.length);
			space_m--;
		}
	}
	return spc_theString;
};

/////////////////////////////////////////////////////Spellchecker/////////////////////////////////////
////////////////////////////////////////////////////////////////
spl_chk = function(spl_txt1, spl_txt2)  {
	var spl_a1 = new Array();
	var spl_a2 = new Array();
	var spl_a3 = new Array();
	for (spl_i=0; spl_i<spl_txt1.length; spl_i++) {
		spl_a1.push(spl_txt1.charAt(spl_i));
	}
	for (j=0; j<spl_txt2.length; j++) {
		spl_a2.push(spl_txt2.charAt(j));
		spl_a3.push(spl_txt2.charAt(j));
	}
	spl_len1 = spl_txt1.length;
	spl_len2 = spl_txt2.length;
	spl_count = 0;
	spel_count = 0;
	for (spel_i=0; spel_i<spl_len1; spel_i++) {
		for (spel_j=0; spel_j<spl_len2; spel_j++) {
			if (spl_a1[spel_i] == spl_a3[spel_j]) {
				spel_count++;
				spl_a3.splice(spel_j,1);
				break;
			}
		}
	}
	if ((spl_len2+1!=spl_len1) && (spl_len2!=spl_len1) && (spl_len2-1!=spl_len1)) {
		spl_count = "incorrect";
	} else {
		//if (spl_len2+1 == spl_len1) {
		spl_hcount = 0;
		for (spl_i=0; spl_i<spl_a1.length; spl_i++) {
			for (spl_j=0; spl_j<spl_a2.length; spl_j++) {
				if (spl_i == spl_j) {
					//trace("i: "+spl_i+" "+spl_a1[spl_i]);
					//trace("i: "+spl_j+" "+spl_a2[spl_j]);
					//trace(spl_count);
					if (spl_a1[spl_i] == spl_a2[spl_j]) {
						spl_count++;
						//trace("spl"+spl_count);
					} else {
						spl_hcount++;
						if (spl_hcount == 1) {
							if (spl_len1!=spl_len2) {
								if (spl_len1>spl_len2) {
									spl_a2.splice(spl_j,0,"hh");
								} else if (spl_len1<spl_len2) {
									spl_a2.splice(spl_j,1);
									spl_j--;
								}
							} else {
								if (spl_a1[spl_i] == spl_a2[spl_j+1]) {

									spl_count++;
								}
								if (spl_a1[spl_i+1] == spl_a2[spl_j]) {
									spl_count++;
								}
							}
						}
					}
				}
			}
		}
	}
	if (spl_len2-1!=spl_len1) {
		if ((spl_len1 == spl_len2) && (spel_count == spl_len1)) {
			if ((spl_count+1 == spl_len1) || (spl_count == spl_len1)) {
				return true;
			} else {
				return false;
			}
		} else {
			if (spl_count == spl_len1-1) {
				return true;
			} else {
				return false;
			}
		}
	} else {
		if (spl_count == spl_len1) {
			return true;
		} else {
			return false;
		}
	}
};
/////////////////// FUNCTION SPL_CHK END  ////////////////////////////////////////////
/////////////////// FUNCTION MAKEANSFORMAT START  ////////////////////////////////////////////
makeansformat = function(make_ans_txt) {
	
	make_ans_text = make_ans_txt.value;
	
	for (sc_a=0; sc_a<=make_ans_text.length; sc_a++) {
		if (make_ans_text.substring(sc_a, sc_a+1) == ",") {
			make_ans_text = make_ans_text.substring(0, sc_a+1)+" "+make_ans_text.substring(sc_a+1, make_ans_text.length);
			document.getElementById("inputText").value = make_ans_text;



		}

	}

	/***********************************************/
	for (sc_l=0; sc_l<=5; sc_l++) {
		for (sc_m=0; sc_m<=make_ans_text.length; sc_m++) {
			if (make_ans_text.substring(sc_m, sc_m+2) == "  ") {
				make_ans_text = make_ans_text.substring(0, sc_m)+make_ans_text.substring(sc_m+1, make_ans_text.length);
				document.getElementById("inputText").value = make_ans_text;
			}
		}
	}
	for (sc_n=0; sc_n<=5; sc_n++) {
		//THIS IS FOR REMOVING SPACE IN THE BEGINING
		if (make_ans_text.charAt(0) == " ") {
			make_ans_text = make_ans_text.substring(1, make_ans_text.length);
			document.getElementById("inputText").value = make_ans_text;
		}
		//THIS IS FOR REMOVING SPACE IN THE LAST                                    
		if (make_ans_text.charAt(make_ans_text.length-1) == " ") {
			make_ans_text = make_ans_text.substring(0, make_ans_text.length-1);
			document.getElementById("inputText").value = make_ans_text;
		}
	}
	//for removing space in the begining and end of the dash(-) symbol
	for (sc_h=0; sc_h<=5; sc_h++) {
		for (sc_a=0; sc_a<=make_ans_text.length; sc_a++) {
			if (make_ans_text.substring(sc_a, sc_a+2) == " -") {
				make_ans_text = make_ans_text.substring(0, sc_a)+make_ans_text.substring(sc_a+1, make_ans_text.length);
				document.getElementById("inputText").value = make_ans_text;
			}
			if (make_ans_text.substring(sc_a, sc_a+2) == " ,") {
				make_ans_text = make_ans_text.substring(0, sc_a)+make_ans_text.substring(sc_a+1, make_ans_text.length);
				document.getElementById("inputText").value = make_ans_text;
			}
			if (make_ans_text.substring(sc_a, sc_a+2) == "- ") {
				make_ans_text = make_ans_text.substring(0, sc_a+1)+make_ans_text.substring(sc_a+2, make_ans_text.length);
				document.getElementById("inputText").value = make_ans_text;
			}
		}
	}
	for (sc_a=0; sc_a<=make_ans_text.length; sc_a++) {
		if (make_ans_text.charAt(sc_a) == ",") {
			make_ans_text = make_ans_text.substring(0, sc_a)+" "+make_ans_text.substring(sc_a, make_ans_text.length);
			sc_a++;
			document.getElementById("inputText").value = make_ans_text;
		}
	}
	/*//alert("make_ans_text == "+make_ans_text)
	//alert("make_ans_text.value == "+document.getElementById("inputText").value)*/
};
/////////////////// FUNCTION MAKEANSFORMAT END  ////////////////////////////////////////////
/////////////////// FUNCTION SPELLCHECKER START  ////////////////////////////////////////////
spellchecker = function(spl_arr_or, spl_arr_wa, spl_chk_txt) {
	
	correct_count = 0;
	for (correct_i=0; correct_i<spl_arr_or.length; correct_i++) {
		if (spl_arr_wa.join(" ") == spl_arr_or[correct_i].join(" ")) {
			correct_count = 1;
			break;
		}
	}
	if (spl_chk_txt.value == "") {
		
		$(".blankMessage").show();
	} else if (correct_count == 1) {
		
		
		$(".correct").doTimeout(".correct" ,500, function(){
			$(".correct").fadeIn(500).fadeOut(1500);
			return false;
		});
	} else {
		//spl_choose_index = hkbspellchecker(spl_arr_or, spl_arr_wa);
		hspellchecker(spl_arr_or,spl_arr_wa,spl_chk_txt);
	}
};
hspellchecker = function(spel_arr_or, spel_arr_wa, spel_chk_txt) {
	hkb_crt_count = -100;
	for (hkb_spl=0; hkb_spl<spel_arr_or.length; hkb_spl++) {
		hkb_spl_temp = 0;
		hkb_count_or = spel_arr_or[hkb_spl].length;
		hkb_count_wa = spel_arr_wa.length;
		hkb_crt_count = 0;
		if (hkb_count_or == hkb_count_wa) {
			for (ii=0; ii<hkb_count_wa; ii++) {
				hkb_inc_count = 0;
				if (spel_arr_or[hkb_spl][ii] == spel_arr_wa[ii]) {
					hkb_crt_count++;
				} else {
					if (spl_chk(spel_arr_or[hkb_spl][ii], spel_arr_wa[ii])) {
						if (hkb_spl_temp == 0) {
							hkb_spl_temp = ii+1;
							hkb_spl_wrong = spel_arr_wa[ii];
						}
					} else {
						hkb_crt_count = -10;
						hkb_inc_count = 1;
						break;
					}
				}
				/*trace("ii"+spel_arr_or[hkb_spl][ii]);
				trace("ii"+spel_arr_wa[ii]);
				trace("count"+hkb_crt_count);*/
			}
			if (hkb_crt_count+2>=hkb_count_wa) {
				//_root.inc_mc.msgBox.value = "word "+(hkb_spl_temp);

				
					document.getElementById("whatValue").innerHTML = "word "+(hkb_spl_temp);
					$(".prompt").fadeIn();
			
				//trace(hkb_spl_wrong);
				hk_count = 0;
				for (hk=0; hk<spel_chk_txt.value.length; hk++) {
					if (spel_chk_txt.value.charAt(hk) == " ") {
						hk_count++;
					}
					if (hk_count+1 == hkb_spl_temp) {
						//hkb_spl_index = spel_chk_txt.value.indexOf(hkb_spl_wrong);
						if (hk_count!=0) {
							hkb_spl_index = hk+1;
						} else {
							hkb_spl_index = hk;
						}
						break;
					}
				}
				//alert("setSelection1")
				//$(".input1").focus();
				
				//Selection.setFocus(spel_chk_txt);
				$txt = $(".input1");
				$txt[0].setSelectionRange(hkb_spl_index,hkb_spl_index+hkb_spl_wrong.length);
				//alert("setSelection")
				break;
			} else {
				if (hkb_spl+1 == spel_arr_or.length) {
					var_for_increct = 1;
					//Selection.setFocus(null);
				}
			}
		} else if (hkb_spl+1 == spel_arr_or.length) {
			var_for_increct = 1;
			//Selection.setFocus(null);
		}
	}
};
////////////////////////////////////////////////////////////////////////////////////
hkbspellchecker = function(hkbspel_arr_or, hkbspel_arr_wa)  {
	var max_arr = new Array();
	for (p=0; p<hkbspel_arr_or.length; p++) {
		this["cc"+(p+1)] = 0;
		hkbcount_or = hkbspel_arr_or[p].length;
		hkbcount_wa = hkbspel_arr_wa.length;
		hkbcrt_count = 0;
		if (hkbcount_or == hkbcount_wa) {
			for (hii=0; hii<hkbcount_wa; hii++) {
				if (hkbspel_arr_or[p][hii] == hkbspel_arr_wa[hii]) {
					this["cc"+(p+1)]++;
				}
			}
		}
		max_arr.push(this["cc"+(p+1)]);
	}
	htemp_max = -1;
	htemp_max_index = -1;
	for (oo=0; oo<max_arr.length; oo++) {
		if (htemp_max<max_arr[oo]) {
			htemp_max = max_arr[oo];
			htemp_max_index = oo+1;
		}
	}
	return htemp_max_index;
};
///////////////////////////////////////////////////////////FUNCTION SPELLCHECKER END  ////////////////////////////////////////////
/*////////////////////////////////////////////////////////////Convert to comma string///////////////////*/

				comma_Convert = function(num) {
					var temp_num = String(num);
					var temp_str = "";
					for (var i=0; i<temp_num.length; i++) {
						if (temp_num.length <= 3) {
							
								temp_str += temp_num.charAt(i);
						
						}else if (temp_num.length == 4) {
							if (i == 0) {
								//trace(temp_num.charAt(i));
								temp_str = temp_num.charAt(i)+",";
							} else {
								temp_str += temp_num.charAt(i);
							}
						} else if (temp_num.length == 5) {
							if (i == 1) {
								//trace(temp_num.charAt(i));
								temp_str += temp_num.charAt(i)+",";
							} else {
								temp_str += temp_num.charAt(i);
							}
						} else if (temp_num.length == 6) {
							if (i == 2) {
								//trace(temp_num.charAt(i));
								temp_str += temp_num.charAt(i)+",";
							} else {
								temp_str += temp_num.charAt(i);
							}
						} else if (temp_num.length == 7) {
							if (i == 0) {
								//trace(temp_num.charAt(i));
								temp_str += temp_num.charAt(i)+",";
							} else if (i == 3) {
								//trace(temp_num.charAt(i));
								temp_str += temp_num.charAt(i)+",";
							} else {
								temp_str += temp_num.charAt(i);
							}
						} else if (temp_num.length == 8) {
							if (i == 1) {
								//trace(temp_num.charAt(i));
								temp_str += temp_num.charAt(i)+",";
							} else if (i == 4) {
								//trace(temp_num.charAt(i));
								temp_str += temp_num.charAt(i)+",";
							} else {
								temp_str += temp_num.charAt(i);
							}
						} else if (temp_num.length == 9) {
							if (i == 2) {
								//trace(temp_num.charAt(i));
								temp_str += temp_num.charAt(i)+",";
							} else if (i == 5) {
								//trace(temp_num.charAt(i));
								temp_str += temp_num.charAt(i)+",";
							} else {
								temp_str += temp_num.charAt(i);
							}
						} else if (temp_num.length == 10) {
							if (i == 0) {
								//trace(temp_num.charAt(i));
								temp_str += temp_num.charAt(i)+",";
							} else if (i == 3) {
								//trace(temp_num.charAt(i));
								temp_str += temp_num.charAt(i)+",";
							} else if (i == 6) {
								//trace(temp_num.charAt(i));
								temp_str += temp_num.charAt(i)+",";
							} else {
								temp_str += temp_num.charAt(i);
							}
						} else if (temp_num.length == 11) {
							if (i == 1) {
								//trace(temp_num.charAt(i));
								temp_str += temp_num.charAt(i)+",";
							} else if (i == 4) {
								//trace(temp_num.charAt(i));
								temp_str += temp_num.charAt(i)+",";
							} else if (i == 7) {
								//trace(temp_num.charAt(i));
								temp_str += temp_num.charAt(i)+",";
							} else {
								temp_str += temp_num.charAt(i);
							}
						}
					}
					return temp_str;
				}
				/////////////////////////////////////////////
				
				 Remove_Comma = function(str){
				var Final_Str = "";
				for (var i = 0; i<str.length; i++) {
					if (str.charAt(i) == ",") {
						continue;
					}
					Final_Str += str.charAt(i);
				}
				return Final_Str;
			}

				/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/

				/*////////////////////////////////////////////////////////////Convert to decimal string///////////////////*/

				decimal_Convert = function(num) {
					var temp_num = String(num);
					var temp_str = "";
					for (var i=0; i<temp_num.length; i++) {
						if (temp_num.length <= 3) {
							
								temp_str += temp_num.charAt(i);
						
						}else if (temp_num.length == 4) {
							if (i == 0) {
								//trace(temp_num.charAt(i));
								temp_str = temp_num.charAt(i)+".";
							} else {
								temp_str += temp_num.charAt(i);
							}
						} else if (temp_num.length == 5) {
							if (i == 1) {
								//trace(temp_num.charAt(i));
								temp_str += temp_num.charAt(i)+".";
							} else {
								temp_str += temp_num.charAt(i);
							}
						} else if (temp_num.length == 6) {
							if (i == 2) {
								//trace(temp_num.charAt(i));
								temp_str += temp_num.charAt(i)+".";
							} else {
								temp_str += temp_num.charAt(i);
							}
						} else if (temp_num.length == 7) {
							if (i == 0) {
								//trace(temp_num.charAt(i));
								temp_str += temp_num.charAt(i)+".";
							} else if (i == 3) {
								//trace(temp_num.charAt(i));
								temp_str += temp_num.charAt(i)+".";
							} else {
								temp_str += temp_num.charAt(i);
							}
						} else if (temp_num.length == 8) {
							if (i == 1) {
								//trace(temp_num.charAt(i));
								temp_str += temp_num.charAt(i)+".";
							} else if (i == 4) {
								//trace(temp_num.charAt(i));
								temp_str += temp_num.charAt(i)+".";
							} else {
								temp_str += temp_num.charAt(i);
							}
						} else if (temp_num.length == 9) {
							if (i == 2) {
								//trace(temp_num.charAt(i));
								temp_str += temp_num.charAt(i)+".";
							} else if (i == 5) {
								//trace(temp_num.charAt(i));
								temp_str += temp_num.charAt(i)+".";
							} else {
								temp_str += temp_num.charAt(i);
							}
						} else if (temp_num.length == 10) {
							if (i == 0) {
								//trace(temp_num.charAt(i));
								temp_str += temp_num.charAt(i)+".";
							} else if (i == 3) {
								//trace(temp_num.charAt(i));
								temp_str += temp_num.charAt(i)+".";
							} else if (i == 6) {
								//trace(temp_num.charAt(i));
								temp_str += temp_num.charAt(i)+".";
							} else {
								temp_str += temp_num.charAt(i);
							}
						} else if (temp_num.length == 11) {
							if (i == 1) {
								//trace(temp_num.charAt(i));
								temp_str += temp_num.charAt(i)+".";
							} else if (i == 4) {
								//trace(temp_num.charAt(i));
								temp_str += temp_num.charAt(i)+".";
							} else if (i == 7) {
								//trace(temp_num.charAt(i));
								temp_str += temp_num.charAt(i)+".";
							} else {
								temp_str += temp_num.charAt(i);
							}
						}
					}
					return temp_str;
				}

				/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
				
				

				
				
				
				
	
			trimcomma = function(theString) {
					var ab_str = "";
					var enterans = String(theString);
					if (enterans.length == "19") {
						//trace("19");
						if ((enterans.charAt(3) == ",") && (enterans.charAt(7) == ",") && (enterans.charAt(11) == ",") && (enterans.charAt(15) == ",")) {
							ab_str = enterans.substr(0, 3)+enterans.substr(4, 3)+enterans.substr(8, 3)+enterans.substr(12, 3)+enterans.substr(16, 3);
						} else {
							ab_str = enterans;
						}
					} else if (enterans.length == "18") {
						//	trace("18");
						if ((enterans.charAt(2) == ",") && (enterans.charAt(6) == ",") && (enterans.charAt(10) == ",") && (enterans.charAt(14) == ",")) {
							ab_str = enterans.substr(0, 2)+enterans.substr(3, 3)+enterans.substr(7, 3)+enterans.substr(11, 3)+enterans.substr(15, 3);
						} else {
							ab_str = enterans;
						}
					} else if (enterans.length == "17") {
						//trace("17");
						if ((enterans.charAt(1) == ",") && (enterans.charAt(5) == ",") && (enterans.charAt(9) == ",") && (enterans.charAt(13) == ",")) {
							ab_str = enterans.charAt(0)+enterans.substr(2, 3)+enterans.substr(6, 3)+enterans.substr(10, 3)+enterans.substr(14, 3);
						} else {
							ab_str = enterans;
						}
					} else if (enterans.length == "15") {
						//trace("15");
						if ((enterans.charAt(3) == ",") && (enterans.charAt(7) == ",") && (enterans.charAt(11) == ",")) {
							ab_str = enterans.substr(0, 3)+enterans.substr(4, 3)+enterans.substr(8, 3)+enterans.substr(12, 3);
						} else {
							ab_str = enterans;
						}
					} else if (enterans.length == "14") {
						//trace("14");
						if ((enterans.charAt(2) == ",") && (enterans.charAt(6) == ",") && (enterans.charAt(10) == ",")) {
							ab_str = enterans.substr(0, 2)+enterans.substr(3, 3)+enterans.substr(7, 3)+enterans.substr(11, 3);
						} else {
							ab_str = enterans;
						}
					} else if (enterans.length == "13") {
						//trace("13");
						if ((enterans.charAt(1) == ",") && (enterans.charAt(5) == ",") && (enterans.charAt(9) == ",")) {
							ab_str = enterans.charAt(0)+enterans.substr(2, 3)+enterans.substr(6, 3)+enterans.substr(10, 3);
						} else {
							ab_str = enterans;
						}
					} else if (enterans.length == "11") {
						if ((enterans.charAt(3) == ",") && (enterans.charAt(7) == ",")) {
							ab_str = enterans.substr(0, 3)+enterans.substr(4, 3)+enterans.substr(8, 3);
						} else {
							ab_str = enterans;
						}
					} else if (enterans.length == "10") {
						if ((enterans.charAt(2) == ",") && (enterans.charAt(6) == ",")) {
							ab_str = enterans.substr(0, 2)+enterans.substr(3, 3)+enterans.substr(7, 3);
						} else {
							ab_str = enterans;
						}
					} else if (enterans.length == "9") {
						if ((enterans.charAt(1) == ",") && (enterans.charAt(5) == ",")) {
							ab_str = enterans.charAt(0)+enterans.substr(2, 3)+enterans.substr(6, 3);
						} else {
							ab_str = enterans;
						}
					} else if (enterans.length == "7") {
						if (enterans.charAt(3) == ",") {
							ab_str = enterans.substr(0, 3)+enterans.substr(4, 3);
						} else {
							ab_str = enterans;
						}
					} else if (enterans.length == "6") {
						if (enterans.charAt(2) == ",") {
							ab_str = enterans.substr(0, 2)+enterans.substr(3, 3);
						} else {
							ab_str = enterans;
						}
					} else if (enterans.length == "5") {
						if (enterans.charAt(1) == ",") {
							ab_str = enterans.substr(0, 1)+enterans.substr(2, 3);
						} else {
							ab_str = enterans;
						}
					} else {
						ab_str = enterans;
					}
					return (ab_str);
		};
/*////////////////////////////////////////////////////////////////////////////////*/
				comma= function(k_str) {
					var fin_str = "";
					for (j=0; j<k_str.length; j++) {
						if ((k_str.charAt(j)!=",")){
							fin_str += k_str.charAt(j);
						}
					}
					return fin_str;
				}
/*////////////////////////////////////////////*/
trimcoma = function(theString) {
	//for (space_i=0; space_i<=5; space_i++) {
	for (space_m=0; space_m<=theString.length; space_m++) {
		if (theString.substring(space_m, space_m+1) == ",") {
			coma_count++;
			theString = theString.substring(0, space_m)+theString.substring(space_m+1, theString.length);
			space_m--;
		}                            
	}
	//}
	return theString;
};

Checking_prime_divisiblty = function(N1) {
	divisble_num = [13, 17, 19, 23, 29, 33, 37, 39];
	num1 = N1;
	flag_prime = 1;
	for (i=0; i<divisble_num.length; i++) {
		if (num1%Number(String(divisble_num[i])) == 0) {
			flag_prime = 0;
			break;
		}
	}
	if (flag_prime == 1) {
		return true;
	} else {
		return false;
	}
};
	/*////////////////////////////////////////////////////////////////////////////////*/
/* randRange = function(min, max) {
					var randomNum = Number(Math.round(Math.random()*(max-min))+min);
					return randomNum;
				}	
				*/

                 random_Array = function(str)  {
					  var cnt = 0;
					  var temp_Int_Arr = str.split(",");
					  var random_index_temp= [];
					  var temp_arr = [];
					  var int_count = 0;
					  do {
						  var temp_num = randRange(0, temp_Int_Arr.length-1);
						  temp_arr.push(temp_Int_Arr.splice(temp_num, 1));
					  } while (temp_Int_Arr.length>0);
					  ///////////////////////////////////// 
					  return temp_arr;
				  }

					
				simplify = function(sim_n1, sim_n2) {
					sim_div = getGCF(sim_n1, sim_n2);
					var sim_ax = new Array();
					sim_ax.push(sim_n1/sim_div);
					sim_ax.push(sim_n2/sim_div);
					return sim_ax;
				};					



////////////////////////////Evaluate Starts///////////////////////////////////////////
pcd = function (str1, str2) {
	if (str1 == str2) {
		return true;
	} else if ((str1 == "+") && (str2 == "-")) {
		return true;
	} else if ((str1 == "-") && (str2 == "+")) {
		return true;
	} else if ((str1 == "*") && (str2 == "/")) {
		return true;
	} else if ((str1 == "/") && (str2 == "*")) {
		return true;
	} else if ((str1 == "-") && ((str2 == "*") || (str2 == "/") || (str2 == "^"))) {
		return false;
	} else if ((str1 == "+") && ((str2 == "*") || (str2 == "/") || (str2 == "^"))) {
		return false;
	} else if ((str2 == "+") && ((str1 == "*") || (str1 == "/") || (str1 == "^"))) {
		return true;
	} else if ((str2 == "-") && ((str1 == "*") || (str1 == "/") || (str1 == "^"))) {
		return true;
	} else if (str2 == "^") {
		return false;
	} else if (str1 == "^") {
		return true;
	} else {
		return false;
	}
}
/*////////////////////////////////Convert Number to Power////////////////////////////////////////////////*/



ConvertNumToPower = function(num) {

					 	if(num == 1 ){
							num = "¹";
						}else if(num == 2 ){
							num = "²";
						}else if(num == 3 ){
							num = "³";
						}else if(num == 4 ){
							num = "⁴";
						}else if(num == 5 ){
							num = "⁵";
						}else if(num == 6 ){
							num = "⁶ ";
						}else if(num == 7 ){
							num = "⁷";
						}else if(num == 8 ){
							num = "⁸";
						}else if(num == 9 ){
							num = "⁹";
						}else if(num == 10 ){
							num = "¹⁰";
						}else if(num == 11 ){
							num = "¹¹";
						}else if(num == 12 ){
							num = "¹²";
						}else if(num == 13 ){
							num = "¹³";
						}else if(num == 14 ){
							num = "¹⁴";
						}else if(num == 15 ){
							num = "¹⁵";
						}else if(num == 16 ){
							num = "¹⁶";
						}else if(num == 17 ){
							num = "¹⁷";
						}else if(num == 18 ){
							num = "¹⁸";
						}else if(num == 19 ){
							num = "¹⁹";
						}else if(num == 20 ){
							num = "²⁰";
						}else if(num == 21 ){
							num = "²¹";
						}else if(num == 22 ){
							num = "²²";
						}else if(num == 23 ){
							num = "²³";
						}else if(num == 24 ){
							num = "²⁴";
						}else if(num == 25 ){
							num = "²⁵";
						}else if(num == 26 ){
							num = "²⁶";
						}else if(num == 27 ){
							num = "²⁷";
						}else if(num == 28 ){
							num = "²⁸";
						}else if(num == 29 ){
							num = "²⁹";
						}else if(num == 30 ){
							num = "³⁰";
						}else if(num == 31 ){
							num = "³¹";
						}else if(num == 32 ){
							num = "³²";
						}else if(num == 33 ){
							num = "³³";
						}else if(num == 34 ){
							num = "³⁴";
						}else if(num == 35 ){
							num = "³⁵";
						}else if(num == 36 ){
							num = "³⁶";
						}else if(num == 37 ){
							num = "³⁷";
						}else if(num == 38 ){
							num = "³⁸";
						}else if(num == 39 ){
							num = "³⁹";
						}else if(num == 40 ){
							num = "⁴⁰";
						}
						return num

} 
//////end of Convert Number to Power/////////

superScriptToNumber = function (str1){
	var num;
	if (str1 == "¹") {
	num = 1
	}
	else if (str1 == "²") {
	num = 2
	}
	else if (str1 == "³") {
	num = 3
	}
	else if (str1 == "⁴") {
	num = 4
	}
	else if (str1 =="⁵" ) {
	num = 5
	}
	else if (str1 == "⁶") {
	num = 6
	}
	else if (str1 == "⁷") {
	num = 7
	}
	else if (str1 == "⁸") {
	num = 8
	}
	else if (str1 == "⁹") {
	num = 9
	}
	else if (str1 == "⁰") {
	num = 0
	}
	else if(str1 == "ᵃ"){
		num = "a"
	}
	else if(str1 == "ᵇ"){
		num = "b"
	}
	else if(str1 == "ᶜ"){
		num = "c"
	}
	else if(str1 == "ᵈ"){
		num = "d"
	}
	else if(str1 == "ᵉ"){
		num = "e"
	}
	else if(str1 == "ᶠ"){
		num = "f"
	}
	else if(str1 == "ᵍ"){
		num = "g"
	}
	else if(str1 == "ʰ"){
		num = "h"
	}
	else if(str1 == "ⁱ"){
		num = "i"
	}
	else if(str1 == "ʲ"){
		num = "j"
	}
	else if(str1 == "ᵏ"){
		num = "k"
	}
	else if(str1 == "ˡ"){
		num = "l"
	}
	else if(str1 == "ᵐ"){
		num = "m"
	}
	else if(str1 == "ⁿ"){
		num = "n"
	}
	else if(str1 == "ᵒ"){
		num = "o"
	}
	else if(str1 == "ᵖ"){
		num = "p"
	}
	else if(str1 == "ᶲ"){
		num = "q"
	}
	else if(str1 == "ʳ"){
		num = "r"
	}
	else if(str1 == "ˢ"){
		num = "s"
	}
	else if(str1 == "ᵗ"){
		num = "t"
	}
	else if(str1 == "ᵘ"){
		num = "u"
	}
	else if(str1 == "ᵛ"){
		num = "v"
	}
	else if(str1 == "ʷ"){
		num = "w"
	}
	else if(str1 == "ˣ"){
		num = "x"
	}
	else if(str1 == "ʸ"){
		num = "y"
	}
	else if(str1 == "ᶻ"){
		num = "z"
	} 
 	else if(str1 == "ᴬ"){
		num = "A"
	}
	else if(str1 == "ᴮ"){
		num = "B"
	}
	else if(str1 == "ᶜ"){
		num = "C"
	}
	else if(str1 == "ᴰ"){
		num = "D"
	}
	else if(str1 == "ᴱ"){
		num = "E"
	}
	else if(str1 == "ᶠ"){
		num = "F"
	}
	else if(str1 == "ᴳ"){
		num = "G"
	}
	else if(str1 == "ᴴ"){
		num = "H"
	}
	else if(str1 == "ᴵ"){
		num = "I"
	}
	else if(str1 == "ᴶ"){
		num = "J"
	}
	else if(str1 == "ᴷ"){
		num = "K"
	}
	else if(str1 == "ᴸ"){
		num = "L"
	}
	else if(str1 == "ᴹ"){
		num = "M"
	}
	else if(str1 == "ᴺ"){
		num = "N"
	}
	else if(str1 == "ᴼ"){
		num = "O"
	}
	else if(str1 == "ᴾ"){
		num = "P"
	}
	else if(str1 == "ᶲ"){
		num = "Q"
	}
	else if(str1 == "ᴿ"){
		num = "R"
	}
	else if(str1 == "ˢ"){
		num = "S"
	}
	else if(str1 == "ᵀ"){
		num = "T"
	}
	else if(str1 == "ᵁ"){
		num = "U"
	}
	else if(str1 == "ᵛ"){
		num = "V"
	}
	else if(str1 == "ᵂ"){
		num = "W"
	}
	else if(str1 == "ˣ"){
		num = "X"
	}
	else if(str1 == "ʸ"){
		num = "Y"
	}
	else if(str1 == "ᶻ"){
		num = "Z"
	}
		else if(str1 == "⁺"){
		num = "+"
	}
	else if(str1 == "⁻"){
		num = "–"
	}
	else if(str1 == "⁼"){
		num = "="
	}
	else if(str1 == "⁽"){
		num = "("
	}
	else if(str1 == "⁾"){
		num = ")"
	}
	else if(str1 == "˟"){
		num = "*"
	}
	else if(str1 == "˟"){
		num = "×"
	}
	else if(str1 == "÷"){
		num = "/"
	}
	else if(str1 == "·"){
		num = "."
	}
	else if(str1 == "٫"){
		num = ","
	}else {
	num = str1;
		}
return num;	
	
}

checkSuperScript = function (str1){
if (str1 == "¹") {
	return true;
	}
	else if (str1 == "²") {
	return true;
	}
	else if (str1 == "³") {
	return true;
	}
	else if (str1 == "⁴") {
	return true;
	}
	else if (str1 =="⁵" ) {
	return true;
	}
	else if (str1 == "⁶") {
	return true;
	}
	else if (str1 == "⁷") {
	return true;
	}
	else if (str1 == "⁸") {
	return true;
	}
	else if (str1 == "⁹") {
	return true;
	}
	else if (str1 == "⁰") {
	return true;	
	}
	else if(str1 == "ᵃ"){
	return true;	}
	else if(str1 == "ᵇ"){
return true;	}
	else if(str1 == "ᶜ"){
return true;	}
	else if(str1 == "ᵈ"){
return true;	}
	else if(str1 == "ᵉ"){
return true;	}
	else if(str1 == "ᶠ"){
return true;	}
	else if(str1 == "ᵍ"){
return true;	}
	else if(str1 == "ʰ"){
return true;	}
	else if(str1 == "ⁱ"){
return true;	}
	else if(str1 == "ʲ"){
return true;	}
	else if(str1 == "ᵏ"){
return true;	}
	else if(str1 == "ˡ"){
return true;	}
	else if(str1 == "ᵐ"){
return true;	}
	else if(str1 == "ⁿ"){
return true;	}
	else if(str1 == "ᵒ"){
return true;	}
	else if(str1 == "ᵖ"){
return true;	}
	else if(str1 == "ᶲ"){
return true;	}
	else if(str1 == "ʳ"){
return true;	}
	else if(str1 == "ˢ"){
return true;	}
	else if(str1 == "ᵗ"){
return true;	}
	else if(str1 == "ᵘ"){
return true;	}
	else if(str1 == "ᵛ"){
return true;	}
	else if(str1 == "ʷ"){
return true;	}
	else if(str1 == "ˣ"){
return true;	}
	else if(str1 == "ʸ"){
return true;	}
	else if(str1 == "ᶻ"){
return true;	} 
 	else if(str1 == "ᴬ"){
return true;	}
	else if(str1 == "ᴮ"){
return true;	}
	else if(str1 == "ᶜ"){
return true;	}
	else if(str1 == "ᴰ"){
return true;	}
	else if(str1 == "ᴱ"){
return true;	}
	else if(str1 == "ᶠ"){
return true;	}
	else if(str1 == "ᴳ"){
return true;	}
	else if(str1 == "ᴴ"){
return true;	}
	else if(str1 == "ᴵ"){
return true;	}
	else if(str1 == "ᴶ"){
return true;	}
	else if(str1 == "ᴷ"){
return true;	}
	else if(str1 == "ᴸ"){
return true;	}
	else if(str1 == "ᴹ"){
return true;	}
	else if(str1 == "ᴺ"){
return true;	}
	else if(str1 == "ᴼ"){
return true;	}
	else if(str1 == "ᴾ"){
return true;	}
	else if(str1 == "ᶲ"){
return true;	}
	else if(str1 == "ᴿ"){
return true;	}
	else if(str1 == "ˢ"){
return true;	}
	else if(str1 == "ᵀ"){
return true;	}
	else if(str1 == "ᵁ"){
return true;	}
	else if(str1 == "ᵛ"){
return true;	}
	else if(str1 == "ᵂ"){
return true;	}
	else if(str1 == "ˣ"){
return true;	}
	else if(str1 == "ʸ"){
return true;	}
	else if(str1 == "ᶻ"){
return true;	} 
		else if(str1 == "⁺"){
return true;	}
	else if(str1 == "⁻"){
return true;	}
	else if(str1 == "⁼"){
return true;	}
	else if(str1 == "⁽"){
return true;	}
	else if(str1 == "⁾"){
return true;	}
	else if(str1 == "˟"){
return true;	}
	else if(str1 == "˟"){
return true;	}
	else if(str1 == "÷"){
return true;	}
	else if(str1 == "·"){
return true;	}
	else if(str1 == "٫"){
return true;	}

	else {
		return false;	
		}
	 
}
///////////////latest 15th May 2017//////////////////


evaluate = function(eval_str, eval_o1, eval_num1, eval_o2, eval_num2, eval_o3, eval_num3, eval_o4, eval_num4, eval_o5, eval_num5, eval_o6, eval_num6)  {
	
	eval_str = String(Revert_Minus_sign(eval_str));


	/////////
 
		for (hkb_evali=0; hkb_evali<eval_str.length; hkb_evali++) {
			if ((checkSuperScript( eval_str.charAt(hkb_evali))) && (checkSuperScript( eval_str.charAt(hkb_evali+1)) == false)) {
					eval_str = eval_str.substr(0, hkb_evali)+"^("+superScriptToNumber(eval_str.charAt(hkb_evali))+")"+eval_str.substr(hkb_evali+1, eval_str.length);
				//alert(eval_str+"  eval_straaa")
			} 
			else if ((checkSuperScript( eval_str.charAt(hkb_evali))) && (checkSuperScript( eval_str.charAt(hkb_evali+1)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+2)) == false)) {
					eval_str = eval_str.substr(0, hkb_evali)+"^("+superScriptToNumber(eval_str.charAt(hkb_evali))+""+superScriptToNumber(eval_str.charAt(hkb_evali+1))+")"+eval_str.substr(hkb_evali+2, eval_str.length);
				//alert(eval_str+"  eval_straaa")
			} 
			else if ((checkSuperScript( eval_str.charAt(hkb_evali))) && (checkSuperScript( eval_str.charAt(hkb_evali+1)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+2)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+3)) == false)) {
					eval_str = eval_str.substr(0, hkb_evali)+"^("+superScriptToNumber(eval_str.charAt(hkb_evali))+""+superScriptToNumber(eval_str.charAt(hkb_evali+1))+""+superScriptToNumber(eval_str.charAt(hkb_evali+2))+")"+eval_str.substr(hkb_evali+3, eval_str.length);
				//alert(eval_str+"  eval_straaa")
			}
			else if ((checkSuperScript( eval_str.charAt(hkb_evali))) && (checkSuperScript( eval_str.charAt(hkb_evali+1)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+2)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+3)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+4)) == false)) {
					eval_str = eval_str.substr(0, hkb_evali)+"^("+superScriptToNumber(eval_str.charAt(hkb_evali))+""+superScriptToNumber(eval_str.charAt(hkb_evali+1))+""+superScriptToNumber(eval_str.charAt(hkb_evali+2))+""+superScriptToNumber(eval_str.charAt(hkb_evali+3))+")"+eval_str.substr(hkb_evali+4, eval_str.length);
				//alert(eval_str+"  eval_straaa")
			}
			else if ((checkSuperScript( eval_str.charAt(hkb_evali))) && (checkSuperScript( eval_str.charAt(hkb_evali+1)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+2)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+3)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+4)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+5)) == false)) {
					eval_str = eval_str.substr(0, hkb_evali)+"^("+superScriptToNumber(eval_str.charAt(hkb_evali))+""+superScriptToNumber(eval_str.charAt(hkb_evali+1))+""+superScriptToNumber(eval_str.charAt(hkb_evali+2))+""+superScriptToNumber(eval_str.charAt(hkb_evali+3))+""+superScriptToNumber(eval_str.charAt(hkb_evali+4))+")"+eval_str.substr(hkb_evali+5, eval_str.length);
				//alert(eval_str+"  eval_straaa")
			}
			else if ((checkSuperScript( eval_str.charAt(hkb_evali))) && (checkSuperScript( eval_str.charAt(hkb_evali+1)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+2)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+3)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+4)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+5)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+6)) == false)) {
					eval_str = eval_str.substr(0, hkb_evali)+"^("+superScriptToNumber(eval_str.charAt(hkb_evali))+""+superScriptToNumber(eval_str.charAt(hkb_evali+1))+""+superScriptToNumber(eval_str.charAt(hkb_evali+2))+""+superScriptToNumber(eval_str.charAt(hkb_evali+3))+""+superScriptToNumber(eval_str.charAt(hkb_evali+4))+""+superScriptToNumber(eval_str.charAt(hkb_evali+5))+")"+eval_str.substr(hkb_evali+6, eval_str.length);
				//alert(eval_str+"  eval_straaa")
			}
			else if ((checkSuperScript( eval_str.charAt(hkb_evali))) && (checkSuperScript( eval_str.charAt(hkb_evali+1)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+2)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+3)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+4)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+5)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+6)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+7)) == false)) {
					eval_str = eval_str.substr(0, hkb_evali)+"^("+superScriptToNumber(eval_str.charAt(hkb_evali))+""+superScriptToNumber(eval_str.charAt(hkb_evali+1))+""+superScriptToNumber(eval_str.charAt(hkb_evali+2))+""+superScriptToNumber(eval_str.charAt(hkb_evali+3))+""+superScriptToNumber(eval_str.charAt(hkb_evali+4))+""+superScriptToNumber(eval_str.charAt(hkb_evali+5))+""+superScriptToNumber(eval_str.charAt(hkb_evali+6))+")"+eval_str.substr(hkb_evali+7, eval_str.length);
				//alert(eval_str+"  eval_straaa")
			}
			else if ((checkSuperScript( eval_str.charAt(hkb_evali))) && (checkSuperScript( eval_str.charAt(hkb_evali+1)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+2)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+3)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+4)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+5)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+6)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+7)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+8)) == false)) {
					eval_str = eval_str.substr(0, hkb_evali)+"^("+superScriptToNumber(eval_str.charAt(hkb_evali))+""+superScriptToNumber(eval_str.charAt(hkb_evali+1))+""+superScriptToNumber(eval_str.charAt(hkb_evali+2))+""+superScriptToNumber(eval_str.charAt(hkb_evali+3))+""+superScriptToNumber(eval_str.charAt(hkb_evali+4))+""+superScriptToNumber(eval_str.charAt(hkb_evali+5))+""+superScriptToNumber(eval_str.charAt(hkb_evali+6))+""+superScriptToNumber(eval_str.charAt(hkb_evali+7))+")"+eval_str.substr(hkb_evali+8, eval_str.length);
				//alert(eval_str+"  eval_straaa")
			}
			else if ((checkSuperScript( eval_str.charAt(hkb_evali))) && (checkSuperScript( eval_str.charAt(hkb_evali+1)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+2)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+3)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+4)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+5)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+6)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+7)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+8)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+9)) == false)) {
					eval_str = eval_str.substr(0, hkb_evali)+"^("+superScriptToNumber(eval_str.charAt(hkb_evali))+""+superScriptToNumber(eval_str.charAt(hkb_evali+1))+""+superScriptToNumber(eval_str.charAt(hkb_evali+2))+""+superScriptToNumber(eval_str.charAt(hkb_evali+3))+""+superScriptToNumber(eval_str.charAt(hkb_evali+4))+""+superScriptToNumber(eval_str.charAt(hkb_evali+5))+""+superScriptToNumber(eval_str.charAt(hkb_evali+6))+""+superScriptToNumber(eval_str.charAt(hkb_evali+7))+""+superScriptToNumber(eval_str.charAt(hkb_evali+8))+")"+eval_str.substr(hkb_evali+9, eval_str.length);
				//alert(eval_str+"  eval_straaa")
			}
			else if ((checkSuperScript( eval_str.charAt(hkb_evali))) && (checkSuperScript( eval_str.charAt(hkb_evali+1)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+2)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+3)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+4)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+5)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+6)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+7)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+8)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+9)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+10)) == false)) {
					eval_str = eval_str.substr(0, hkb_evali)+"^("+superScriptToNumber(eval_str.charAt(hkb_evali))+""+superScriptToNumber(eval_str.charAt(hkb_evali+1))+""+superScriptToNumber(eval_str.charAt(hkb_evali+2))+""+superScriptToNumber(eval_str.charAt(hkb_evali+3))+""+superScriptToNumber(eval_str.charAt(hkb_evali+4))+""+superScriptToNumber(eval_str.charAt(hkb_evali+5))+""+superScriptToNumber(eval_str.charAt(hkb_evali+6))+""+superScriptToNumber(eval_str.charAt(hkb_evali+7))+""+superScriptToNumber(eval_str.charAt(hkb_evali+8))+""+superScriptToNumber(eval_str.charAt(hkb_evali+9))+")"+eval_str.substr(hkb_evali+10, eval_str.length);
				//alert(eval_str+"  eval_straaa")
			}
			else if ((checkSuperScript( eval_str.charAt(hkb_evali))) && (checkSuperScript( eval_str.charAt(hkb_evali+1)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+2)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+3)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+4)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+5)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+6)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+7)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+8)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+9)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+10)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+11)) == false)) {
					eval_str = eval_str.substr(0, hkb_evali)+"^("+superScriptToNumber(eval_str.charAt(hkb_evali))+""+superScriptToNumber(eval_str.charAt(hkb_evali+1))+""+superScriptToNumber(eval_str.charAt(hkb_evali+2))+""+superScriptToNumber(eval_str.charAt(hkb_evali+3))+""+superScriptToNumber(eval_str.charAt(hkb_evali+4))+""+superScriptToNumber(eval_str.charAt(hkb_evali+5))+""+superScriptToNumber(eval_str.charAt(hkb_evali+6))+""+superScriptToNumber(eval_str.charAt(hkb_evali+7))+""+superScriptToNumber(eval_str.charAt(hkb_evali+8))+""+superScriptToNumber(eval_str.charAt(hkb_evali+9))+""+superScriptToNumber(eval_str.charAt(hkb_evali+10))+")"+eval_str.substr(hkb_evali+11, eval_str.length);
				//alert(eval_str+"  eval_straaa")
			}
			else if ((checkSuperScript( eval_str.charAt(hkb_evali))) && (checkSuperScript( eval_str.charAt(hkb_evali+1)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+2)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+3)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+4)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+5)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+6)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+7)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+8)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+9)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+10)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+11)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+12)) == false)) {
					eval_str = eval_str.substr(0, hkb_evali)+"^("+superScriptToNumber(eval_str.charAt(hkb_evali))+""+superScriptToNumber(eval_str.charAt(hkb_evali+1))+""+superScriptToNumber(eval_str.charAt(hkb_evali+2))+""+superScriptToNumber(eval_str.charAt(hkb_evali+3))+""+superScriptToNumber(eval_str.charAt(hkb_evali+4))+""+superScriptToNumber(eval_str.charAt(hkb_evali+5))+""+superScriptToNumber(eval_str.charAt(hkb_evali+6))+""+superScriptToNumber(eval_str.charAt(hkb_evali+7))+""+superScriptToNumber(eval_str.charAt(hkb_evali+8))+""+superScriptToNumber(eval_str.charAt(hkb_evali+9))+""+superScriptToNumber(eval_str.charAt(hkb_evali+10))+""+superScriptToNumber(eval_str.charAt(hkb_evali+11))+")"+eval_str.substr(hkb_evali+12, eval_str.length);
				//alert(eval_str+"  eval_straaa")
			}
			 
		}
	//alert(eval_str+" eval_str")
	/////////////////////////////////////////
	for (hkb_evalj=0; hkb_evalj<20; hkb_evalj++) {
		for (hkb_evali=0; hkb_evali<eval_str.length; hkb_evali++) {
			if (eval_str.charAt(hkb_evali)+eval_str.charAt(hkb_evali+1) == "-"+eval_o1) {
				eval_str = eval_str.substr(0, hkb_evali)+"-("+eval_num1+")"+eval_str.substr(hkb_evali+2, eval_str.length);
				//alert(eval_str+"  eval_straaa")
			} else if (eval_str.charAt(hkb_evali) == eval_o1) {
				eval_str = eval_str.substr(0, hkb_evali)+"("+eval_num1+")"+eval_str.substr(hkb_evali+1, eval_str.length);
			}
		}
	}
	for (hkb_evalj=0; hkb_evalj<20; hkb_evalj++) {
		for (hkb_evali=0; hkb_evali<eval_str.length; hkb_evali++) {
			if (eval_str.charAt(hkb_evali)+eval_str.charAt(hkb_evali+1) == "-"+eval_o2) {
				eval_str = eval_str.substr(0, hkb_evali)+"-("+eval_num2+")"+eval_str.substr(hkb_evali+2, eval_str.length);
			} else if (eval_str.charAt(hkb_evali) == eval_o2) {
				eval_str = eval_str.substr(0, hkb_evali)+"("+eval_num2+")"+eval_str.substr(hkb_evali+1, eval_str.length);
			}
		}
	}
	for (hkb_evalj=0; hkb_evalj<20; hkb_evalj++) {
		for (hkb_evali=0; hkb_evali<eval_str.length; hkb_evali++) {
			if (eval_str.charAt(hkb_evali)+eval_str.charAt(hkb_evali+1) == "-"+eval_o3) {
				eval_str = eval_str.substr(0, hkb_evali)+"-("+eval_num3+")"+eval_str.substr(hkb_evali+2, eval_str.length);
			} else if (eval_str.charAt(hkb_evali) == eval_o3) {
				eval_str = eval_str.substr(0, hkb_evali)+"("+eval_num3+")"+eval_str.substr(hkb_evali+1, eval_str.length);
			}
		}
	}
	for (hkb_evalj=0; hkb_evalj<20; hkb_evalj++) {
		for (hkb_evali=0; hkb_evali<eval_str.length; hkb_evali++) {
			if (eval_str.charAt(hkb_evali)+eval_str.charAt(hkb_evali+1) == "-"+eval_o4) {
				eval_str = eval_str.substr(0, hkb_evali)+"-("+eval_num4+")"+eval_str.substr(hkb_evali+2, eval_str.length);
			} else if (eval_str.charAt(hkb_evali) == eval_o4) {
				eval_str = eval_str.substr(0, hkb_evali)+"("+eval_num4+")"+eval_str.substr(hkb_evali+1, eval_str.length);

			}
		}
	}
	for (hkb_evalj=0; hkb_evalj<20; hkb_evalj++) {
		for (hkb_evali=0; hkb_evali<eval_str.length; hkb_evali++) {
			if (eval_str.charAt(hkb_evali)+eval_str.charAt(hkb_evali+1) == "-"+eval_o5) {
				eval_str = eval_str.substr(0, hkb_evali)+"-("+eval_num5+")"+eval_str.substr(hkb_evali+2, eval_str.length);
			} else if (eval_str.charAt(hkb_evali) == eval_o5) {
				eval_str = eval_str.substr(0, hkb_evali)+"("+eval_num5+")"+eval_str.substr(hkb_evali+1, eval_str.length);
			}
		}
	}
	for (hkb_evalj=0; hkb_evalj<20; hkb_evalj++) {
		for (hkb_evali=0; hkb_evali<eval_str.length; hkb_evali++) {
			if (eval_str.charAt(hkb_evali)+eval_str.charAt(hkb_evali+1) == "-"+eval_o6) {
				eval_str = eval_str.substr(0, hkb_evali)+"-("+eval_num6+")"+eval_str.substr(hkb_evali+2, eval_str.length);
			} else if (eval_str.charAt(hkb_evali) == eval_o6) {
				eval_str = eval_str.substr(0, hkb_evali)+"("+eval_num6+")"+eval_str.substr(hkb_evali+1, eval_str.length);
			}
		}
	}
		

	//////////////////////////////////////////////////////////////////////////////////////////////////////////
	/////////////////////********	TRIMZERO START FOR EVALUATE  15th May 2017 *****************/////////////////////////
	//////////////////////////////////////////////////////////////////////////////////////////////////////////
	hkbtrimzero = function(theString) {
		
		///////////////////FUNCTION trimSpaces////////////////////////////
		function hkb_trimSpaces(spc_theString) {
			//for (space_i=0; space_i<=5; space_i++) {
			for (space_m=0; space_m<=spc_theString.length; space_m++) {
				if (spc_theString.substring(space_m, space_m+1) == " ") {
					spc_theString = spc_theString.substring(0, space_m)+spc_theString.substring(space_m+1, spc_theString.length);
					space_m--;
				}
			}
			//}
			return spc_theString;
		}
		///////////////////FUNCTION trimSpaces 2 August 2006////////////////////////////
		///////////////////FUNCTION trimzero old  2 August 2006////////////////////////////
		function hkb_oldtrimzero(zero_theString) {
			zero_theString = String(zero_theString);
			//alert(zero_theString+"  zero_theString")
			for (trim_i=0; trim_i<zero_theString.length; trim_i++) {
				if (zero_theString.charAt(trim_i) == " ") {
					zero_theString = zero_theString.substring(0, trim_i)+zero_theString.substring(trim_i+1, zero_theString.length);
					trim_i--;
				}
			}
			if (zero_theString!="") {
				while (zero_theString.charAt(0) == "0" || zero_theString.charAt(0) == " ") {
					zero_theString = zero_theString.substring(1, zero_theString.length);
				}
				while (zero_theString.charAt(zero_theString.length-1) == " ") {
					zero_theString = zero_theString.substring(0, zero_theString.length-1);
				}
				trim_id = zero_theString.indexOf(".");
				if (trim_id!=-1) {
					for (trim_i=zero_theString.length-1; trim_i>trim_id; trim_i--) {
						if (zero_theString.charAt(trim_i) == "0" || zero_theString.charAt(trim_i) == " ") {
							zero_theString = zero_theString.substring(0, trim_i);
						} else {
							break;
						}
					}
					if (trim_id == zero_theString.length-1) {
						zero_theString = zero_theString.substring(0, trim_id);
					}
				}
				if (zero_theString == "") {
					zero_theString = "0";
				}
			}
			
			return zero_theString;
		}
		//////////////////////////////////////////////////////////////////////////
		/////////////////////////////////////////////////////////////////////////
		theString = hkb_trimSpaces(theString);
		trimzero_hkb = 0;
		trimzero_j = 0;
		trimzero_final_str = "";
		for (trimzero_i=0; trimzero_i<=theString.length; trimzero_i++) {
			if ((isNaN(theString.charAt(trimzero_i)) == false) || (theString.charAt(trimzero_i) == ".")) {
				trimzero_final_str += theString.substring(trimzero_hkb, trimzero_i);
				trimzero_hkb_str = "";
				trimzero_hkb_str += theString.charAt(trimzero_i);
				for (trimzero_j=trimzero_i+1; trimzero_j<=theString.length; trimzero_j++) {
					if (((isNaN(theString.charAt(trimzero_j)) == false) && (theString.charAt(trimzero_j) != ""))  || (theString.charAt(trimzero_j) == ".")) {
						trimzero_hkb_str += theString.charAt(trimzero_j);
						trimzero_i++;
					} else {
						trimzero_hkb_str = hkb_oldtrimzero(trimzero_hkb_str);
						trimzero_final_str += trimzero_hkb_str;
						trimzero_hkb = trimzero_j;
						break;
					}
				}
			}
		}
	
		trimzero_final_str += theString.substring(trimzero_j, theString.length);
		return trimzero_final_str;
	};
	///////////////////FUNCTION trimzero main////////////////////////////
	///////////////////FUNCTION trimzero NEW  Start////////////////////////////
	/////////////////////********	TRIMZERO END FOR EVALUATE   *****************/////////////////////////
	eval_str = hkbtrimzero(eval_str);
	//alert(eval_str+"  eval_str")
	eval_ans1 = "";
	eval_lcount = 0;
	eval_rcount = 0;
	eval_ans1 = eval_str;
	for (eval_i=0; eval_i<=5; eval_i++) {
		for (eval_m=0; eval_m<=eval_ans1.length; eval_m++) {
			if (eval_ans1.substring(eval_m, eval_m+1) == " ") {
				eval_ans1 = eval_ans1.substring(0, eval_m)+eval_ans1.substring(eval_m+1, eval_ans1.length);
			}
		}
		//THIS IS FOR REMOVING SPACE IN THE BEGINING
		if (eval_ans1.charAt(0) == " ") {
			eval_ans1 = eval_ans1.substring(1, eval_ans1.length);
		}
		//THIS IS FOR REMOVING SPACE IN THE LAST                                                                       
		if (eval_ans1.charAt(eval_ans1.length-1) == " ") {
			eval_ans1 = eval_ans1.substring(0, eval_ans1.length-1);
		}
	}
	

	for (eval_ij=0; eval_ij<eval_ans1.length; eval_ij++) {
		if (eval_ans1.charAt(eval_ij) == "(") {
			eval_lcount++;
		}
		if (eval_ans1.charAt(eval_ij) == ")") {
			eval_rcount++;
		}
	}
	if (eval_lcount!=eval_rcount) {
		eval_ans1 = "Not Number";
	}
	for (var hkb_ni = 0; hkb_ni<eval_ans1.length; hkb_ni++) {
		if ((eval_ans1.charAt(hkb_ni) == "(") && (eval_ans1.charAt(hkb_ni+1) == "-") && (eval_ans1.charAt(hkb_ni+2) == "(")) {
			eval_ans1 = eval_ans1.substring(0, hkb_ni)+"(-1"+eval_ans1.substring(hkb_ni+2, eval_ans1.length);
		}
	}
	if ((eval_ans1.charAt(0) == "-") && (eval_ans1.charAt(1) == "(")) {
		eval_ans1 = "-1"+eval_ans1.substring(1, eval_ans1.length);
	}
	for (eval_i=0; eval_i<eval_ans1.length; eval_i++) {
		if ((isNaN(eval_ans1.charAt(eval_i-1)) == true) && (eval_ans1.charAt(eval_i-1)!=".") && (eval_ans1.charAt(eval_i) == eval_o1)) {
			eval_ans1 = eval_ans1.substring(0, eval_i)+"(1"+eval_o1+")"+eval_ans1.substring(eval_i+1, eval_ans1.length);
		}
		if ((eval_ans1.charAt(eval_i-1) == "(") && ((eval_ans1.charAt(eval_i) == "*") || (eval_ans1.charAt(eval_i) == "-") || (eval_ans1.charAt(eval_i) == "+") || (eval_ans1.charAt(eval_i) == "/") || (eval_ans1.charAt(eval_i) == "^")) && (eval_ans1.charAt(eval_i+1) == ")")) {
			eval_ans1 = "Not number";
		}
		if (arguments[3]!=undefined) {
			if ((isNaN(eval_ans1.charAt(eval_i-1)) == true) && (eval_ans1.charAt(eval_i-1)!=".") && (eval_ans1.charAt(eval_i) == eval_o2)) {
				eval_ans1 = eval_ans1.substring(0, eval_i)+"(1"+eval_o2+")"+eval_ans1.substring(eval_i+1, eval_ans1.length);
			}
		}
		if (arguments[5]!=undefined) {
			if ((isNaN(eval_ans1.charAt(eval_i-1)) == true) && (eval_ans1.charAt(eval_i-1)!=".") && (eval_ans1.charAt(eval_i) == eval_o3)) {
				eval_ans1 = eval_ans1.substring(0, eval_i)+"(1"+eval_o3+")"+eval_ans1.substring(eval_i+1, eval_ans1.length);
			}
		}
		if (arguments[7]!=undefined) {
			if ((isNaN(eval_ans1.charAt(eval_i-1)) == true) && (eval_ans1.charAt(eval_i-1)!=".") && (eval_ans1.charAt(eval_i) == eval_o4)) {
				eval_ans1 = eval_ans1.substring(0, eval_i)+"(1"+eval_o4+")"+eval_ans1.substring(eval_i+1, eval_ans1.length);
			}
		}
		if (arguments[9]!=undefined) {
			if ((isNaN(eval_ans1.charAt(eval_i-1)) == true) && (eval_ans1.charAt(eval_i-1)!=".") && (eval_ans1.charAt(eval_i) == eval_o5)) {
				eval_ans1 = eval_ans1.substring(0, eval_i)+"(1"+eval_o5+")"+eval_ans1.substring(eval_i+1, eval_ans1.length);
			}
		}
		if (arguments[11]!=undefined) {
			if ((isNaN(eval_ans1.charAt(eval_i-1)) == true) && (eval_ans1.charAt(eval_i-1)!=".") && (eval_ans1.charAt(eval_i) == eval_o6)) {
				eval_ans1 = eval_ans1.substring(0, eval_i)+"(1"+eval_o6+")"+eval_ans1.substring(eval_i+1, eval_ans1.length);
			}
		}
	}

	if (eval_ans1!="") {
		for (eval_i=0; eval_i<=eval_ans1.length; eval_i++) {
			if ((eval_ans1.charAt(eval_i) == ")") && (eval_ans1.charAt(eval_i+1) != "") &&  ((eval_ans1.charAt(eval_i+1) == ".") || (isNaN(eval_ans1.charAt(eval_i+1)) == false))) {
				eval_ans1 = eval_ans1.substring(0, eval_i+1)+"*"+eval_ans1.substring(eval_i+1, eval_ans1.length);
			}
			
		}
	}
		

	eval_t1 = eval_ans1;
	//alert(eval_t1+"  eval_ans11111")
	for (eval_i=0; eval_i<=(eval_t1.length+10); eval_i++) {
		/***********************eval_o1**********************/
		if (eval_t1.charAt(eval_i) == eval_o1) {
			if (eval_i!=0) {
				if (((isNaN(eval_t1.charAt(eval_i-1)) == false) || eval_t1.charAt(eval_i-1) == ".") && ((isNaN(eval_t1.charAt(eval_i+1)) == false) || eval_t1.charAt(eval_i+1) == ".")) {
					eval_t1 = eval_t1.substring(0, eval_i)+"*"+eval_num1+"*"+eval_t1.substring(eval_i+1, eval_t1.length);
				}
				if (((isNaN(eval_t1.charAt(eval_i-1)) == false) || eval_t1.charAt(eval_i-1) == ".") && ((isNaN(eval_t1.charAt(eval_i+1)) == true) && (eval_t1.charAt(eval_i+1)!="."))) {
					eval_t1 = eval_t1.substring(0, eval_i)+"*"+eval_num1+eval_t1.substring(eval_i+1, eval_t1.length);
				}
				if (((isNaN(eval_t1.charAt(eval_i-1)) == true) && (eval_t1.charAt(eval_i-1)!=".")) && ((isNaN(eval_t1.charAt(eval_i-1)) == false) || eval_t1.charAt(eval_i+1) == ".")) {
					eval_t1 = eval_t1.substring(0, eval_i)+eval_num1+"*"+eval_t1.substring(eval_i+1, eval_t1.length);
				}
				if (((isNaN(eval_t1.charAt(eval_i-1)) == true) && (eval_t1.charAt(eval_i-1)!=".")) && ((isNaN(eval_t1.charAt(eval_i+1)) == true) && (eval_t1.charAt(eval_i+1)!="."))) {
					eval_t1 = eval_t1.substring(0, eval_i)+eval_num1+eval_t1.substring(eval_i+1, eval_t1.length);
				}
				if (eval_t1.charAt(eval_i-1) == ")") {
					eval_t1 = eval_t1.substring(0, eval_i)+"*"+eval_t1.substring(eval_i, eval_t1.length);
				}
			} else {
				if (((isNaN(eval_t1.charAt(eval_i-1)) == false) || eval_t1.charAt(eval_i+1) == ".")) {
					eval_t1 = eval_t1.substring(0, eval_i)+eval_num1+"*"+eval_t1.substring(eval_i+1, eval_t1.length);
				}
				if ((isNaN(eval_t1.charAt(eval_i+1)) == true) && (eval_t1.charAt(eval_i+1)!=".")) {
					eval_t1 = eval_t1.substring(0, eval_i)+eval_num1+eval_t1.substring(eval_i+1, eval_t1.length);
				}
			}
		}
		//alert(eval_t1+"  eval_t1")
		/***********************eval_o2*/ 
		////////////////////////////////*/
		
		if (arguments[3]!=undefined) {
			if (eval_t1.charAt(eval_i) == eval_o2) {
				if (eval_i!=0) {
					if (((isNaN(eval_t1.charAt(eval_i-1)) == false) || eval_t1.charAt(eval_i-1) == ".") && ((isNaN(eval_t1.charAt(eval_i+1)) == false) || eval_t1.charAt(eval_i+1) == ".")) {
						eval_t1 = eval_t1.substring(0, eval_i)+"*"+eval_num2+"*"+eval_t1.substring(eval_i+1, eval_t1.length);
					}
					if (((isNaN(eval_t1.charAt(eval_i-1)) == false) || eval_t1.charAt(eval_i-1) == ".") && ((isNaN(eval_t1.charAt(eval_i+1)) == true) && (eval_t1.charAt(eval_i+1)!="."))) {
						eval_t1 = eval_t1.substring(0, eval_i)+"*"+eval_num2+eval_t1.substring(eval_i+1, eval_t1.length);
					}
					if (((isNaN(eval_t1.charAt(eval_i-1)) == true) && (eval_t1.charAt(eval_i-1)!=".")) && ((isNaN(eval_t1.charAt(eval_i-1)) == false) || eval_t1.charAt(eval_i+1) == ".")) {
						eval_t1 = eval_t1.substring(0, eval_i)+eval_num2+"*"+eval_t1.substring(eval_i+1, eval_t1.length);
					}
					if (((isNaN(eval_t1.charAt(eval_i-1)) == true) && (eval_t1.charAt(eval_i-1)!=".")) && ((isNaN(eval_t1.charAt(eval_i+1)) == true) && (eval_t1.charAt(eval_i+1)!="."))) {
						eval_t1 = eval_t1.substring(0, eval_i)+eval_num2+eval_t1.substring(eval_i+1, eval_t1.length);
					}

					if (eval_t1.charAt(eval_i-1) == ")") {
						eval_t1 = eval_t1.substring(0, eval_i)+"*"+eval_t1.substring(eval_i, eval_t1.length);
					}
				} else {
					if (((isNaN(eval_t1.charAt(eval_i-1)) == false) || eval_t1.charAt(eval_i+1) == ".")) {
						eval_t1 = eval_t1.substring(0, eval_i)+eval_num2+"*"+eval_t1.substring(eval_i+1, eval_t1.length);
					}
					if ((isNaN(eval_t1.charAt(eval_i+1)) == true) && (eval_t1.charAt(eval_i+1)!=".")) {
						eval_t1 = eval_t1.substring(0, eval_i)+eval_num2+eval_t1.substring(eval_i+1, eval_t1.length);
					}
				}
			}
		}
		//////////////////////////////////////////////  
		/***********************eval_o3*/
		////////////////////////////////*/                                                                     
		
		if (arguments[5]!=undefined) {
			if (eval_t1.charAt(eval_i) == eval_o3) {
				if (eval_i!=0) {
					if (((isNaN(eval_t1.charAt(eval_i-1)) == false) || eval_t1.charAt(eval_i-1) == ".") && ((isNaN(eval_t1.charAt(eval_i+1)) == false) || eval_t1.charAt(eval_i+1) == ".")) {
						eval_t1 = eval_t1.substring(0, eval_i)+"*"+eval_num3+"*"+eval_t1.substring(eval_i+1, eval_t1.length);
					}
					if (((isNaN(eval_t1.charAt(eval_i-1)) == false) || eval_t1.charAt(eval_i-1) == ".") && ((isNaN(eval_t1.charAt(eval_i+1)) == true) && (eval_t1.charAt(eval_i+1)!="."))) {
						eval_t1 = eval_t1.substring(0, eval_i)+"*"+eval_num3+eval_t1.substring(eval_i+1, eval_t1.length);
					}
					if (((isNaN(eval_t1.charAt(eval_i-1)) == true) && (eval_t1.charAt(eval_i-1)!=".")) && ((isNaN(eval_t1.charAt(eval_i-1)) == false) || eval_t1.charAt(eval_i+1) == ".")) {
						eval_t1 = eval_t1.substring(0, eval_i)+eval_num3+"*"+eval_t1.substring(eval_i+1, eval_t1.length);
					}
					if (((isNaN(eval_t1.charAt(eval_i-1)) == true) && (eval_t1.charAt(eval_i-1)!=".")) && ((isNaN(eval_t1.charAt(eval_i+1)) == true) && (eval_t1.charAt(eval_i+1)!="."))) {
						eval_t1 = eval_t1.substring(0, eval_i)+eval_num3+eval_t1.substring(eval_i+1, eval_t1.length);
					}
					if (eval_t1.charAt(eval_i-1) == ")") {
						eval_t1 = eval_t1.substring(0, eval_i)+"*"+eval_t1.substring(eval_i, eval_t1.length);
					}
				} else {
					if (((isNaN(eval_t1.charAt(eval_i-1)) == false) || eval_t1.charAt(eval_i+1) == ".")) {
						eval_t1 = eval_t1.substring(0, eval_i)+eval_num3+"*"+eval_t1.substring(eval_i+1, eval_t1.length);
					}
					if ((isNaN(eval_t1.charAt(eval_i+1)) == true) && (eval_t1.charAt(eval_i+1)!=".")) {
						eval_t1 = eval_t1.substring(0, eval_i)+eval_num3+eval_t1.substring(eval_i+1, eval_t1.length);
					}
				}
			}
		}
		//////////////////////////////////////////////
		/***********************eval_o4*/
		////////////////////////////////*/                                                                       
		
		if (arguments[7]!=undefined) {
			if (eval_t1.charAt(eval_i) == eval_o4) {
				if (eval_i!=0) {
					if (((isNaN(eval_t1.charAt(eval_i-1)) == false) || eval_t1.charAt(eval_i-1) == ".") && ((isNaN(eval_t1.charAt(eval_i+1)) == false) || eval_t1.charAt(eval_i+1) == ".")) {
						eval_t1 = eval_t1.substring(0, eval_i)+"*"+eval_num4+"*"+eval_t1.substring(eval_i+1, eval_t1.length);
					}
					if (((isNaN(eval_t1.charAt(eval_i-1)) == false) || eval_t1.charAt(eval_i-1) == ".") && ((isNaN(eval_t1.charAt(eval_i+1)) == true) && (eval_t1.charAt(eval_i+1)!="."))) {
						eval_t1 = eval_t1.substring(0, eval_i)+"*"+eval_num4+eval_t1.substring(eval_i+1, eval_t1.length);
					}
					if (((isNaN(eval_t1.charAt(eval_i-1)) == true) && (eval_t1.charAt(eval_i-1)!=".")) && ((isNaN(eval_t1.charAt(eval_i-1)) == false) || eval_t1.charAt(eval_i+1) == ".")) {
						eval_t1 = eval_t1.substring(0, eval_i)+eval_num4+"*"+eval_t1.substring(eval_i+1, eval_t1.length);
					}
					if (((isNaN(eval_t1.charAt(eval_i-1)) == true) && (eval_t1.charAt(eval_i-1)!=".")) && ((isNaN(eval_t1.charAt(eval_i+1)) == true) && (eval_t1.charAt(eval_i+1)!="."))) {
						eval_t1 = eval_t1.substring(0, eval_i)+eval_num4+eval_t1.substring(eval_i+1, eval_t1.length);
					}
					if (eval_t1.charAt(eval_i-1) == ")") {
						eval_t1 = eval_t1.substring(0, eval_i)+"*"+eval_t1.substring(eval_i, eval_t1.length);
					}
				} else {
					if (((isNaN(eval_t1.charAt(eval_i-1)) == false) || eval_t1.charAt(eval_i+1) == ".")) {
						eval_t1 = eval_t1.substring(0, eval_i)+eval_num4+"*"+eval_t1.substring(eval_i+1, eval_t1.length);
					}
					if ((isNaN(eval_t1.charAt(eval_i+1)) == true) && (eval_t1.charAt(eval_i+1)!=".")) {
						eval_t1 = eval_t1.substring(0, eval_i)+eval_num4+eval_t1.substring(eval_i+1, eval_t1.length);
					}
				}
			}
		}
		//////////////////////////////////////////////                                                                       
		/***********************eval_o5*/
		////////////////////////////////*/
		if (arguments[9]!=undefined) {
			if (eval_t1.charAt(eval_i) == eval_o5) {
				if (eval_i!=0) {
					if (((isNaN(eval_t1.charAt(eval_i-1)) == false) || eval_t1.charAt(eval_i-1) == ".") && ((isNaN(eval_t1.charAt(eval_i+1)) == false) || eval_t1.charAt(eval_i+1) == ".")) {
						eval_t1 = eval_t1.substring(0, eval_i)+"*"+eval_num5+"*"+eval_t1.substring(eval_i+1, eval_t1.length);
					}
					if (((isNaN(eval_t1.charAt(eval_i-1)) == false) || eval_t1.charAt(eval_i-1) == ".") && ((isNaN(eval_t1.charAt(eval_i+1)) == true) && (eval_t1.charAt(eval_i+1)!="."))) {
						eval_t1 = eval_t1.substring(0, eval_i)+"*"+eval_num5+eval_t1.substring(eval_i+1, eval_t1.length);

					}
					if (((isNaN(eval_t1.charAt(eval_i-1)) == true) && (eval_t1.charAt(eval_i-1)!=".")) && ((isNaN(eval_t1.charAt(eval_i-1)) == false) || eval_t1.charAt(eval_i+1) == ".")) {
						eval_t1 = eval_t1.substring(0, eval_i)+eval_num5+"*"+eval_t1.substring(eval_i+1, eval_t1.length);
					}
					if (((isNaN(eval_t1.charAt(eval_i-1)) == true) && (eval_t1.charAt(eval_i-1)!=".")) && ((isNaN(eval_t1.charAt(eval_i+1)) == true) && (eval_t1.charAt(eval_i+1)!="."))) {
						eval_t1 = eval_t1.substring(0, eval_i)+eval_num5+eval_t1.substring(eval_i+1, eval_t1.length);
					}
					if (eval_t1.charAt(eval_i-1) == ")") {
						eval_t1 = eval_t1.substring(0, eval_i)+"*"+eval_t1.substring(eval_i, eval_t1.length);
					}
				} else {
					if (((isNaN(eval_t1.charAt(eval_i-1)) == false) || eval_t1.charAt(eval_i+1) == ".")) {
						eval_t1 = eval_t1.substring(0, eval_i)+eval_num5+"*"+eval_t1.substring(eval_i+1, eval_t1.length);
					}
					if ((isNaN(eval_t1.charAt(eval_i+1)) == true) && (eval_t1.charAt(eval_i+1)!=".")) {
						eval_t1 = eval_t1.substring(0, eval_i)+eval_num5+eval_t1.substring(eval_i+1, eval_t1.length);
					}
				}
			}
		}
		//////////////////////////////////////////////                                                                       
		/***********************eval_o6*/
		////////////////////////////////*/
		if (arguments[11]!=undefined) {
			if (eval_t1.charAt(eval_i) == eval_o6) {
				if (eval_i!=0) {
					if (((isNaN(eval_t1.charAt(eval_i-1)) == false) || eval_t1.charAt(eval_i-1) == ".") && ((isNaN(eval_t1.charAt(eval_i+1)) == false) || eval_t1.charAt(eval_i+1) == ".")) {
						eval_t1 = eval_t1.substring(0, eval_i)+"*"+eval_num6+"*"+eval_t1.substring(eval_i+1, eval_t1.length);
					}
					if (((isNaN(eval_t1.charAt(eval_i-1)) == false) || eval_t1.charAt(eval_i-1) == ".") && ((isNaN(eval_t1.charAt(eval_i+1)) == true) && (eval_t1.charAt(eval_i+1)!="."))) {
						eval_t1 = eval_t1.substring(0, eval_i)+"*"+eval_num6+eval_t1.substring(eval_i+1, eval_t1.length);
					}
					if (((isNaN(eval_t1.charAt(eval_i-1)) == true) && (eval_t1.charAt(eval_i-1)!=".")) && ((isNaN(eval_t1.charAt(eval_i-1)) == false) || eval_t1.charAt(eval_i+1) == ".")) {
						eval_t1 = eval_t1.substring(0, eval_i)+eval_num6+"*"+eval_t1.substring(eval_i+1, eval_t1.length);
					}
					if (((isNaN(eval_t1.charAt(eval_i-1)) == true) && (eval_t1.charAt(eval_i-1)!=".")) && ((isNaN(eval_t1.charAt(eval_i+1)) == true) && (eval_t1.charAt(eval_i+1)!="."))) {
						eval_t1 = eval_t1.substring(0, eval_i)+eval_num6+eval_t1.substring(eval_i+1, eval_t1.length);
					}
					if (eval_t1.charAt(eval_i-1) == ")") {
						eval_t1 = eval_t1.substring(0, eval_i)+"*"+eval_t1.substring(eval_i, eval_t1.length);
					}
				} else {
					if (((isNaN(eval_t1.charAt(eval_i-1)) == false) || eval_t1.charAt(eval_i+1) == ".")) {
						eval_t1 = eval_t1.substring(0, eval_i)+eval_num6+"*"+eval_t1.substring(eval_i+1, eval_t1.length);
					}
					if ((isNaN(eval_t1.charAt(eval_i+1)) == true) && (eval_t1.charAt(eval_i+1)!=".")) {
						eval_t1 = eval_t1.substring(0, eval_i)+eval_num6+eval_t1.substring(eval_i+1, eval_t1.length);
					}
				}
			}
		}
		//////////////////////////////////////////////                                                                       
		if ((eval_t1.charAt(eval_i) == ")") && (eval_t1.charAt(eval_i+1) == "(")) {
			eval_t1 = eval_t1.substring(0, eval_i+1)+"*"+eval_t1.substring(eval_i+1, eval_t1.length);
		}
		if ((eval_t1.charAt(eval_i) == "(") && (eval_i!=0)) {
			if (isNaN(eval_t1.charAt(eval_i-1)) == false || eval_t1.charAt(eval_i-1) == ".") {
				eval_t1 = eval_t1.substring(0, eval_i)+"*("+eval_t1.substring(eval_i+1, eval_t1.length);
			}
		}
	}
	var eval_ans = [];
	var eval_s = [];
	var eval_p = [];
	eval_len = eval_t1.length;
	eval_cnt = 0;
		//alert(eval_len+"  eval_i "+eval_t1)
	for (eval_i=0; eval_i<eval_t1.length; eval_i++) {
		//alert(eval_i+"  eval_i")
		if ((isNaN(eval_t1.charAt(eval_i)) == true) && (eval_t1.charAt(eval_i)!=".")) {
			eval_ans[eval_i] = eval_t1.charAt(eval_i);
			//alert(eval_ans[eval_i]+"  eval_i "+eval_i)
		} else {
			eval_ans[eval_i] = eval_t1.charAt(eval_i);
			//alert(eval_ans[eval_i]+"  eval_b "+eval_i)
			eval_cnt = 0;
			for (eval_m=eval_i+1; eval_m<eval_len; eval_m++) {
				if ((isNaN(eval_t1.charAt(eval_m)) == false) || (eval_t1.charAt(eval_m) == ".")) {
					eval_ans[eval_i] = eval_ans[eval_i]+eval_t1.charAt(eval_m);
					//alert(eval_ans[eval_i]+"  eval_c "+eval_i)
					eval_cnt++;
				} else {
					break;
				}
			}
			
			eval_i = eval_i+eval_cnt;
		}
	}

	for (eval_b=0; eval_b<eval_ans.length; eval_b++) {
		if (eval_ans[eval_b] == undefined) {
			eval_ans.splice(eval_b, 1);
			eval_b--;
		}
	}
	/*for (eval_c=0; eval_c<eval_ans.length; eval_c++) {
		if (((eval_ans[eval_c] == "*") || (eval_ans[eval_c] == "^") || (eval_ans[eval_c] == "+") || (eval_ans[eval_c] == "-") || (eval_ans[eval_c] == "/")) && (((isNaN(eval_ans[eval_c-1]) == true) && (eval_ans[eval_c-1])!=")") || (eval_ans[eval_c-1] == "("))) {
			eval_ans[eval_c] = eval_ans[eval_c]+eval_ans[eval_c+1];
			eval_ans.splice(eval_c+1, 1);
			eval_c--;
		}
	}*/
for (eval_c=0; eval_c<eval_ans.length; eval_c++) {
		if (((eval_ans[eval_c] == "*") || (eval_ans[eval_c] == "^") || (eval_ans[eval_c] == "+") || (eval_ans[eval_c] == "-") || ((eval_ans[eval_c] == "/") && (eval_ans[eval_c-1]!=undefined))) && (((isNaN(eval_ans[eval_c-1]) == true) && (eval_ans[eval_c-1])!=")") || (eval_ans[eval_c-1] == "("))) {
			eval_ans[eval_c] = eval_ans[eval_c]+eval_ans[eval_c+1];
		
			eval_ans.splice(eval_c+1, 1);
			
			eval_c--;
		
		}
	}
//alert(eval_ans+"  eval_ans")
	var eval_q = eval_ans;
	eval_q[eval_q.length] = ")";
	eval_s[0] = "(";
	//alert(eval_ans+"  eval_ans")	  
	for (eval_i=0; eval_i<eval_q.length; eval_i++) {
		if (((isNaN(eval_q[eval_i])) == false) || ((eval_q[eval_i]) == ".")) {
			eval_p.push(eval_q[eval_i]);
		}
		if (eval_q[eval_i] == "(") {
			eval_s.unshift("(");
		}
		if ((eval_q[eval_i] == "*") || (eval_q[eval_i] == "+") || (eval_q[eval_i] == "^") || (eval_q[eval_i] == "-") || (eval_q[eval_i] == "/")) {
			for (j=0; j<eval_s.length; j++) {
				
				if ((pcd(eval_s[j], eval_q[eval_i]) == true)) {
					
					eval_p.push(eval_s[j]);
					eval_s.shift();
					j--;
				} else {
					//alert("Here i am ..ris "+eval_s.length)
					break;
				}
			}
			eval_s.unshift(eval_q[eval_i]);
			//alert("eval_s ..ris "+eval_s)
		}
		
		if (eval_q[eval_i] == ")") {
				
			for (n=0; n<eval_s.length; n++) {
				if (eval_s[n]!="(") {
					eval_p.push(eval_s[n]);
					eval_s.shift();
					n--;
				} else {
					eval_s.shift();
					break;
				}
			}
			
		}
	}

	/**************************************/
	
	eval_p.push(")");
	var eval_value;
	
	for (eval_h=0; eval_h<eval_p.length; eval_h++) {
		if (eval_p[eval_h]!=")") {
			if ((isNaN(eval_p[eval_h]) == false) || (eval_p[eval_h] == ".")) {
				eval_s.unshift(eval_p[eval_h]);
			}
			
			if ((eval_p[eval_h] == "*") || (eval_p[eval_h] == "^") || (eval_p[eval_h] == "/") || (eval_p[eval_h] == "+") || (eval_p[eval_h] == "-")) {
				if (eval_p[eval_h] == "*") {
					eval_value = Number(eval_s[1])*Number(eval_s[0]);
				}
				if (eval_p[eval_h] == "+") {
					eval_value = Number(eval_s[1])+Number(eval_s[0]);
				}
				if (eval_p[eval_h] == "-") {
					eval_value = Number(eval_s[1])-Number(eval_s[0]);
				}
				if (eval_p[eval_h] == "/") {
					eval_value = Number(eval_s[1])/Number(eval_s[0]);
				}
				if (eval_p[eval_h] == "^") {
					eval_value = Math.pow(Number(eval_s[1]), Number(eval_s[0]));
				}
				eval_s.shift();
				eval_s. shift();
				eval_s.unshift(eval_value);
			}
		}
	}
	
	//alert(eval_s[0]+" == eval_value..")
	//alert("eval_s[0] ..ris "+eval_s[0])
	return Number(eval_s[0]);
};

chkfmt = function(chk_str) {
	var chk_cnt1 = 0;
	var chk_cnt2 = 0;
	var chk_cnt3 = 0;
	var chk_cnt4 = 0;
	var chk_cnt5 = 0;
	var chk_cnt6 = 0;
	chk_cnt1 = chk_str.indexOf("++");
	chk_cnt2 = chk_str.indexOf("+–");
	chk_cnt3 = chk_str.indexOf("–+");
	chk_cnt4 = chk_str.indexOf("––");
	chk_cnt5 = chk_str.indexOf("/+");
	chk_cnt6 = chk_str.indexOf("+/");
	if ((chk_cnt1 == -1) && (chk_cnt2 == -1) && (chk_cnt3 == -1) && (chk_cnt4 == -1) && (chk_cnt5 == -1) && (chk_cnt6 == -1)) {
		//alert("HHH")
		return true;
	} else {
		return false;
	}
	
};






}); //////end of Main/////////
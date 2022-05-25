function giraffeHint(){
	document.getElementById("h").innerHTML = "Hint: I am very tall and live where it's hot."
}
function polarbearHint(){
	document.getElementById("h").innerHTML = "HINT: I live where it is very cold."
}
	
function giraffe(){
	let input = document.getElementById("ans").value;
	if(input==="Giraffe"|| input==="giraffe"){
		var colorGreen = document.getElementById("c");
		colorGreen.style.color="lawngreen";
		document.getElementById("c").innerHTML = "That is Correct!!"
		document.getElementById("h").innerHTML = "Scroll down to read more"
		document.getElementById("nextButton").vlaue="Next"
		document.getElementById("header").innerHTML = "Info:"
		document.getElementById("i").innerHTML = "- This animal is approximatly 22 feet tall and can be found in the heart of Africa.<br/> - Unlike mamals in North America this animals feeds on vegitation high in the sky."
		document.getElementById("f").innerHTML = "&nbsp"
		document.getElementById("full").style.display='block';
 	} 
 	else{
 		var colorRed=document.getElementById("c");
 		colorRed.style.color="#FF0000";
 		document.getElementById("c").innerHTML = "Try again"
 	}
}
function polarbear(){
	let input = document.getElementById("ans").value;
	if(input==="Polarbear"|| input==="polarbear"){
		document.getElementById("c").innerHTML = "That is Correct!!"
		document.getElementById("h").innerHTML = "Scroll down to read more"
		document.getElementById("header").innerHTML = "Info:"
		document.getElementById("i").innerHTML = "- This animal can be found in the tundra <br/> - Polarbears are carnivores with their main food source feing fish."
		document.getElementById("f").innerHTML = "&nbsp"
		document.getElementById("full").style.display="block";
	} 
}
			
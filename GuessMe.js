function giraffeHint(){
	document.getElementById("h").innerHTML = "Hint: This animal is very tall and lives where it's hot."
}
function polarbearHint(){
	document.getElementById("h").innerHTML = "HINT: This animal lives where it is very cold."
}
function caribouHint(){
	document.getElementById("h").innerHTML = "HINT: This animal sheds their antlers once a year."
}
function bobcatHint(){
	document.getElementById("h").innerHTML = "HINT: This animal has the ability to climb trees."
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
	if(input==="Polar bear"|| input==="polar bear" || input==="polarbear" || input ==="Polarbear"){
		var colorGreen = document.getElementById("c");
		colorGreen.style.color="lawngreen";
		document.getElementById("c").innerHTML = "That is Correct!!"
		document.getElementById("h").innerHTML = "Scroll down to read more"
		document.getElementById("header").innerHTML = "Info:"
		document.getElementById("i").innerHTML = "- This animal can be found in the tundra <br/> - Polarbears are carnivores with their main food source feing fish."
		document.getElementById("f").innerHTML = "&nbsp"
		document.getElementById("full").style.display="block";
	} 
	else{
		var colorRed=document.getElementById("c");
		colorRed.style.color="#FF0000";
		document.getElementById("c").innerHTML = "Try again"
	}
}

function caribou(){
	let input = document.getElementById("ans").value;
	if(input==="Caribou"|| input==="caribou"){
		var colorGreen = document.getElementById("c");
		colorGreen.style.color="lawngreen";
		document.getElementById("c").innerHTML = "That is Correct!!"
		document.getElementById("h").innerHTML = "Scroll down to read more"
		document.getElementById("header").innerHTML = "Info:"
		document.getElementById("i").innerHTML = "- This animal can be found in the tundra <br/> - Caribou shed their antler once a year."
		document.getElementById("f").innerHTML = "&nbsp"
		document.getElementById("full").style.display="block";
	} 
	else{
		var colorRed=document.getElementById("c");
		colorRed.style.color="#FF0000";
		document.getElementById("c").innerHTML = "Try again"
	}
}

function bobcat(){
	let input = document.getElementById("ans").value;
	if(input==="Bobcat"|| input==="bobcat"){
		var colorGreen = document.getElementById("c");
		colorGreen.style.color="lawngreen";
		document.getElementById("c").innerHTML = "That is Correct!!"
		document.getElementById("h").innerHTML = "Scroll down to read more"
		document.getElementById("header").innerHTML = "Info:"
		document.getElementById("i").innerHTML = "- This animal can be found in the tundra <br/> - Caribou shed their antler once a year."
		document.getElementById("f").innerHTML = "&nbsp"
		document.getElementById("full").style.display="block";
	} 
	else{
		var colorRed=document.getElementById("c");
		colorRed.style.color="#FF0000";
		document.getElementById("c").innerHTML = "Try again"
	}
}
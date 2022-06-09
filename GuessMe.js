function foxHint(){
	document.getElementById("hint").innerHTML = "Hint: This animal is very tall and lives where it's hot."
}
function polarbearHint(){
	document.getElementById("hint").innerHTML = "HINT: This animal lives where it is very cold."
}
function caribouHint(){
	document.getElementById("hint").innerHTML = "HINT: This animal sheds their antlers once a year."
}
function bobcatHint(){
	document.getElementById("hint").innerHTML = "HINT: This animal has the ability to climb trees."
}
function duckHint(){
	document.getElementById("hint").innerHTML = "HINT: This animal can be found on my farms across the United States."
}

	
function fox(){
	let input = document.getElementById("ans").value;
	if(input==="Fox"|| input==="fox"){
		var colorGreen = document.getElementById("feedback");
		colorGreen.style.color="limegreen";
		document.getElementById("feedback").innerHTML = "That is Correct!!"
		document.getElementById("hint").innerHTML = "Scroll down to read more"
		document.getElementById("nextButton").vlaue="Next"
		document.getElementById("header").innerHTML = "Info:"
		document.getElementById("information").innerHTML = "- This animal is approximatly 22 feet tall and can be found in the heart of Africa.<br/> - Unlike mamals in North America this animals feeds on vegitation high in the sky."
		document.getElementById("filler").innerHTML = "&nbsp"
		document.getElementById("revealImg").style.display='block';
 	} 
 	else{
 		var colorRed=document.getElementById("feedback");
 		colorRed.style.color="#FF0000";
 		document.getElementById("feedback").innerHTML = "Try again"
 	}
}
function polarbear(){
	let input = document.getElementById("ans").value;
	if(input==="Polar bear"|| input==="polar bear" || input==="polarbear" || input ==="Polarbear"){
		var colorGreen = document.getElementById("feedback");
		colorGreen.style.color="limegreen";
		document.getElementById("feedback").innerHTML = "That is Correct!!"
		document.getElementById("hint").innerHTML = "Scroll down to read more"
		document.getElementById("header").innerHTML = "Info:"
		document.getElementById("information").innerHTML = "- This animal can be found in the tundra <br/> - Polarbears are carnivores with their main food source feing fish."
		document.getElementById("filler").innerHTML = "&nbsp"
		document.getElementById("revealImg").style.display="block";
	} 
	else{
		var colorRed=document.getElementById("feedback");
		colorRed.style.color="#FF0000";
		document.getElementById("feedback").innerHTML = "Try again"
	}
}

function caribou(){
	let input = document.getElementById("ans").value;
	if(input==="Caribou"|| input==="caribou"){
		var colorGreen = document.getElementById("feedback");
		colorGreen.style.color="limegreen";
		document.getElementById("feedback").innerHTML = "That is Correct!!"
		document.getElementById("hint").innerHTML = "Scroll down to read more"
		document.getElementById("header").innerHTML = "Info:"
		document.getElementById("information").innerHTML = "- This animal can be found in the tundra <br/> - Caribou shed their antler once a year."
		document.getElementById("filler").innerHTML = "&nbsp"
		document.getElementById("revealImg").style.display="block";
	} 
	else{
		var colorRed=document.getElementById("feedback");
		colorRed.style.color="#FF0000";
		document.getElementById("feedback").innerHTML = "Try again"
	}
}

function bobcat(){
	let input = document.getElementById("ans").value;
	if(input==="Bobcat"|| input==="bobcat"){
		var colorGreen = document.getElementById("feedback");
		colorGreen.style.color="limegreen";
		document.getElementById("feedback").innerHTML = "That is Correct!!"
		document.getElementById("hint").innerHTML = "Scroll down to read more"
		document.getElementById("header").innerHTML = "Info:"
		document.getElementById("information").innerHTML = "- This animal can be found in the tundra <br/> - Caribou shed their antler once a year."
		document.getElementById("filler").innerHTML = "&nbsp"
		document.getElementById("revealImg").style.display="block";
	} 
	else{
		var colorRed=document.getElementById("feedback");
		colorRed.style.color="#FF0000";
		document.getElementById("feedback").innerHTML = "Try again"
	}
}

function duck(){
	let input = document.getElementById("ans").value;
	if(input==="Duck"|| input==="duck"){
		var colorGreen = document.getElementById("feedback");
		colorGreen.style.color="limegreen";
		document.getElementById("feedback").innerHTML = "That is Correct!!"
		document.getElementById("hint").innerHTML = "Scroll down to read more"
		document.getElementById("header").innerHTML = "Info:"
		document.getElementById("information").innerHTML = "- This animal spends most of it's time near water. <br/> - It is possibly to see them in large groups or bythemselves. <br/> - Their main food souce is the vegitation in their habitat."
		document.getElementById("filler").innerHTML = "&nbsp"
		document.getElementById("revealImg").style.display="block";
	} 
	else{
		var colorRed=document.getElementById("feedback");
		colorRed.style.color="#FF0000";
		document.getElementById("feedback").innerHTML = "Try again"
	}
}
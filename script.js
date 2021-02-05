var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.getElementsByClassName("random");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function setInputColor(col1="#FF0000", col2="#FFFF00") {
	color1.setAttribute("value", col1);
	color2.setAttribute("value", col2);
}

function createButton(){
	var button = document.createElement("button");
	var text = document.createTextNode("Random Generator");
	button.appendChild(text);
	body.appendChild(button);
	button.classList.add("random");
}

function randColGenerator(){
	rand1 = randomGenerator();
	rand2 = randomGenerator();
	setInputColor(rand1, rand2);
}

function randomGenerator(){
	var alphabet = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
	randomCol = "#";
	for(i=0; i<6; i++) {
		letter = alphabet[Math.floor(Math.random()*alphabet.length)];
		randomCol += letter;
	}
	return randomCol;
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);


setInputColor();

setGradient();

// createButton();

// random[0].addEventListener("click", randColGenerator);


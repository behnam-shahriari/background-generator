var _ = require('lodash');

var array = [1, 2, 3, 4, 5, 6, 7, 8];
console.log("answer:", _.without(array, 3));
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.querySelector(".random");

function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";
}

function getBodyBackground() {
	style = getComputedStyle(body);
	return style.backgroundImage;
}

function getBodyColor(index) {
	backgroundImage = getBodyBackground();
	if(index === 1) {
		color = backgroundImage.split(", ")[1] + ", " + backgroundImage.split(", ")[2] + ", " + backgroundImage.split(", ")[3];
		return color;
	}

	if(index === 2) {
		color = backgroundImage.split(", ")[4] + ", " + backgroundImage.split(", ")[5] + ", " + backgroundImage.split(", ")[6];
		return color.substring(0, color.length - 1);
	}
}

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(rgb) {
	r = rgb.split("(")[1].split(",")[0];
	g = rgb.split(", ")[1];
	b = rgb.split(", ")[2];
	b = b.substring(0, b.length - 1);
  return "#" + componentToHex(Number(r)) + componentToHex(Number(g)) + componentToHex(Number(b));
}

function generateRandomColor() {
	var randomColor = Math.floor(Math.random()*16777215).toString(16);
	rand = "#" + randomColor;
	return rand;
}


color1.setAttribute("value", rgbToHex(getBodyColor(1)));

color2.setAttribute("value", rgbToHex(getBodyColor(2)));

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

random.addEventListener("click", function() {
	color1.value = generateRandomColor();
	color2.value = generateRandomColor();
	setGradient();
})

document.addEventListener("DOMContentLoaded", setGradient);
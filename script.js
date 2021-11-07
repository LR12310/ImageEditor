var grayDiv = document.getElementById("grayDiv")
var brightnessDiv = document.getElementById("brightnessDiv")
var hueDiv = document.getElementById("hueDiv")
var saturationDiv = document.getElementById("saturationDiv")



var image = document.getElementById("image")
var graySlider = document.getElementById("gray");
var contrastSlider = document.getElementById("contrast");
var brightnessSlider = document.getElementById("brightness");
var hueSlider = document.getElementById("hue");
var saturationSlider = document.getElementById("saturation");

image.style.filter="contrast(" + contrastSlider.value + "%)"

graySlider.oninput = function () {
 
  grayDiv.style.filter="grayscale(" + graySlider.value + "%)"
  console.log(graySlider.value)
  
}

contrastSlider.oninput = function() {
  image.style.filter="contrast(" + contrastSlider.value + "%)"
}

brightnessSlider.oninput = function() {
  brightnessDiv.style.filter="brightness(" + brightnessSlider.value + "%)"
}

hueSlider.oninput = function() {
  hueDiv.style.filter="hue-rotate(" + hueSlider.value + "deg)"
}

saturationSlider.oninput = function() {
  saturationDiv.style.filter="saturate(" + saturationSlider.value + ")"
}

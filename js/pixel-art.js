var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

var padre = document.getElementById("paleta");
var grillaPix = document.getElementById("grilla-pixeles");

var paleta = document.getElementsByClassName("color-paleta");
var indicadorColor = document.getElementById("indicador-de-color");

var botonBorrar = document.getElementById("borrar");

colorPersonalizado.addEventListener('change', 
  (function() {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual
    indicadorColor.style.backgroundColor = colorActual;
  })
);

for (var i = 0; i < nombreColores.length; i++) {
  var nuevoDiv = document.createElement("div");
  nuevoDiv.style.backgroundColor = nombreColores[i];
  nuevoDiv.className = "color-paleta";
  padre.appendChild(nuevoDiv);
}

for (var i = 0; i <= 1750; i++) {
  var pixel = document.createElement("div");
  pixel.style.border = "1px";
  pixel.className = "pixelparacolorear";
  grillaPix.appendChild(pixel);
}

for (var i = 0; i < paleta.length; i++) {
  paleta[i].addEventListener("click", colorSeleccionado);
}

function colorSeleccionado (e) {
  var nuevoColor = e.target.style.backgroundColor;
  indicadorColor.style.backgroundColor = nuevoColor;
}

var pixelesparacolorear = document.getElementsByClassName("pixelparacolorear");

for (var i = 0; i < pixelesparacolorear.length; i++) {
  pixelesparacolorear[i].addEventListener("click", colorear);
}

function colorear (e) {
  e.target.style.backgroundColor = indicadorColor.style.backgroundColor;
}

var mouseApretado = false;

grillaPix.addEventListener("mousedown", paraPintar);
grillaPix.addEventListener("mouseup", paraDejarDePintar);

function paraPintar () {
  mouseApretado = true;
}

function paraDejarDePintar () {
  mouseApretado = false;
}

$(".pixelparacolorear").on("mouseover", function (e) {
  if (mouseApretado) {
    e.target.style.backgroundColor = indicadorColor.style.backgroundColor;
  }
});

$("#borrar").on("click", function (){
  $(".pixelparacolorear").animate({"background-color": "white"},2000);
});

$("#batman").on("click", function(){
  cargarSuperheroe(batman);
});

$("#wonder").on("click", function(){
  cargarSuperheroe(wonder);
});

$("#flash").on("click", function(){
  cargarSuperheroe(flash);
});

$("#invisible").on("click", function(){
  cargarSuperheroe(invisible);
});

$("#guardar").on("click", function(){
  guardarPixelArt();
});





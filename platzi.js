document.addEventListener("keydown", dibujarTeclado);
var teclas = { UP: 38, DOWN: 40, LEFT: 37, RIGHT: 39};

var villa = document.getElementById("canvas");
var papel = villa.getContext("2d");

var cantVacas= aleatorio(1,10);
var cantPollo= aleatorio(1,10);

var xcerdo= 250;
var ycerdo= 250;

var fondo= {
  url:"tile.png",
  cargaOK: false
}
fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

var vaca= {
  url:"vaca.png",
  cargaOK: false
}
vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVaca);

var pollo= {
  url:"pollo.png",
  cargaOK: false
}
pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollo);

var cerdo= {
  url:"cerdo.png",
  cargaOK: false
}
cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo);

function cargarFondo(){
  fondo.cargaOK = true;
  dibujar();
}

function cargarVaca(){
  vaca.cargaOK = true;
  dibujar();
}

function cargarPollo(){
  pollo.cargaOK = true;
  dibujar();
}

function cargarCerdo(){
  cerdo.cargaOK = true;
  dibujarCerdo();
}

function dibujar(){
  var x, y;

  if (fondo.cargaOK) {
    papel.drawImage(fondo.imagen, 0,0);
  }
  for(i=0; i < cantVacas; i++){
    x =aleatorio(0,420);
    y =aleatorio(0,420);
    if (vaca.cargaOK) {
      papel.drawImage(vaca.imagen, x,y);
    }
  }
  for(i=0; i < cantPollo; i++){
    x =aleatorio(0,420);
    y =aleatorio(0,420);
    if (pollo.cargaOK) {
      papel.drawImage(pollo.imagen, x,y);
    }
  }
}

function dibujarCerdo(){
  if(cerdo.cargaOK){
    papel.drawImage(cerdo.imagen, xcerdo, ycerdo);
  }
}

function aleatorio (min, max){
  var resultado;
  resultado =  Math.floor(Math.random()*(max - min + 1))+min;
  return resultado;
}

////////////////////////////////////////////////


function dibujarTeclado(evento){
  switch (evento.keyCode) {
    case teclas.UP:
      cargarCerdo();
      ycerdo = ycerdo - 2;
    break;
    case teclas.DOWN:
      cargarCerdo();
      ycerdo= ycerdo + 2;
    break;
    case teclas.LEFT:
      cargarCerdo();
      xcerdo= xcerdo - 2;
    break;
    case teclas.RIGHT:
      cargarCerdo();
      xcerdo= xcerdo + 2;
    break;

  }

}

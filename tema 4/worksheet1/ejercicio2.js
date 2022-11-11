function coordenadas(e) {
  var x = e.clientX;
  var y = e.clientY;
  var coor = "Coordenadas: (" + x + "," + y + ")";
  document.getElementById("demo").innerHTML = coor;
}

function vaciar() {
  document.getElementById("demo").innerHTML = "";
}

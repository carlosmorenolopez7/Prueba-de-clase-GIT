var a = b = c = d = e = f = 0;
var tiradas = 0;
          
function tiradaDado(){
    var dado = parseInt(6*Math.random()+1);
    return dado;
}

tirada = tiradaDado()
document.write("Ha salido un: " + tirada);
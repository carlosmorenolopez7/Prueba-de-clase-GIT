let fecha = new Date();
let contador = 60;


function reloj() {
    document.write(contador + "<br>")
    contador --;
    if (contador >= 0) {
        setTimeout(reloj, 1000);
    }
}
reloj();
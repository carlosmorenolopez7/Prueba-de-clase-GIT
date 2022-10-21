function separar(frase){
    let arrayPrincipal = []
    let frase2 = frase.split(" ").join("")
    let vecesRepetida = Math.trunc(Math.sqrt(frase2.length));
    let x = 0
    for(i=0;i<=vecesRepetida;i++){
        arrayPrincipal.push(frase2.slice(x, x+vecesRepetida))
    }
    return arrayPrincipal;
}

function codificar(mensaje){
    let array = separar(mensaje);
    let arrayFinal = [];
    for(i=0;i<array.length;i++){
        for(x=0;x<array.length;x++){
            if(!array[x][i] == ''){
                arrayFinal.push(array[x][i]);
            }
        }
    }
    for(u of arrayFinal){
        document.write(u)
    }
}

codificar("If man was meant to stay on the ground god would have given us roots");
document.write("<br>")
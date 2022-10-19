function deleteRepeat(cadena) {
    let arrCadena = candena.split('');
    arr= {};
    set = new Set(arrCadena);
    arr = [...set];
    return arr.join('').toString();
}

function deleteRepeat2(cadena) {
    let aux = cadena;
    for(let i=0;i<aux.length;i++) {
        if(aux.indexOf(aux[i]) != aux.lastIndexOf(aux[i])) {
            aux = aux.replaceAll(aux[i], '');
        }
    }
    return aux;
}
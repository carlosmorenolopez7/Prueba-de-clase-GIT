function invertircad(cadena) {
    return invierteCadena.split(" ").reverse().join(" ")
}


function invertirpal(cadena) {
    palabras = cadena.split(" ")
    resultado = ""
    for(element of palabras) {
        resultado += element.split("").reverse().join()
    }
    return resultado
}


function palarga(cadena) {
    palabras = cadena.split(" ")
    palabramaslarga = ""
    for(element of palabras) {
        if(element.length > palabramaslarga.length) {
            palabramaslarga = element
        }
    }
    return palabramaslarga
}


function fil_palabras(cadena,numero) {
    contador = 0
    palabras = cadena.split(" ")
    for(element of palabras) {
        if(element.length > numero) {
            contador++
        }
    }
    return contador
}


function cad_bien(cadena) {
    resultado = cadena.toLowerCase()
    letra = cadena.charAt(0).toUpperCase()
    resultado = letra + resultado.subsrt(1)
    return resultado
}

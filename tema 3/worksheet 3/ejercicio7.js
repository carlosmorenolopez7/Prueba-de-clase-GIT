function antisquare(code){
    arrayAux= []
    for(i=0;i<code[code.length-1].length;i++){
        clave = code.reduce((j, k)=>j + k.charAt(i),'');
        arrayAux.push(clave);
    }
    if(code[0].length != code[code.length-1].length){
        for(i=code[code.length-1].length;i<code[code.length-2].length;i++){
            clave = code.reduce((j, k)=>j + k.charAt(i),'');
            arrayAux.push(clave);
        }
    }
    return(arrayAux.join(''))
}
function findSubString(cad_arg,substring) {
    let aparitions = "";
    let editedStrings = cad_arg;
    let aparition = 0;

    while(editedStrings.include(substring)){
        aparition = aparition + editedStrings.indexOf(substring);
        aparition = aparitions + aparition + " ";
        editedStrings = editedStrings.substring(aparition+1);
    }
    document.write(aparitions + "<br>");
    return aparitions
}

findSubString("gato o perro o perro o pez o perro", 'perro')
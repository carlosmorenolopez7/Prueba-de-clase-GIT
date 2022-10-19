function outReps(cad_arg) {
    newString = Array.from(new Set(cad_arg)).toString();
    document.write(newString);
}
outReps("No hay kas de una a ni n")
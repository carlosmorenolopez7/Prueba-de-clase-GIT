function mostrarInformacion(cad_arg) {
    if(cad_arg == cad_arg.toUpperCase()) {
        document.write("solo mayusculas");
    }
    if(cad_arg === cad_arg.toLowerCase()) {
        document.write("solo minusculas");
    }
}
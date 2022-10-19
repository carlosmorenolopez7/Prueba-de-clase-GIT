columnas = parseInt(prompt("Introduce el número de columnas: "));
alto = parseInt(prompt("Introduce la altura: "));
ancho = parseInt(prompt("Introduce el ancho: "));
i = 0;


document.write('<table border="0" cellspacing="2" bgcolor="black" width="200">');
document.write('<tr height="' + alto + '">');
while (i < columnas) {
    if (i%2 != 0){
        document.write('<td width="' + ancho + '"bgcolor="white">&nbsp;</td>');
    }
    else {
        document.write('<td width="' + ancho + '"bgcolor="black">&nbsp;</td>');
    }
    i++;
}
document.write('</tr>')
document.write('</table>')
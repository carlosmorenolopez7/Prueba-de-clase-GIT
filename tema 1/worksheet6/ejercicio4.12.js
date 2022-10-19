columnas = parseInt(prompt("Introduce el número de columnas: "));
alto = parseInt(prompt("Introduce la altura: "));
ancho = parseInt(prompt("Introduce el ancho: "));


document.write('<table border="0" cellspacing="2" bgcolor="black" width="200">');
document.write('<tr height="' + alto + '">');
for (let i=0;i<columnas;i++) {
    if (i%2 != 0){
        document.write('<td width="' + ancho + '"bgcolor="white">&nbsp;</td>');
    }
    else {
        document.write('<td width="' + ancho + '"bgcolor="black">&nbsp;</td>');
    }
}
document.write('</tr>')
document.write('</table>')
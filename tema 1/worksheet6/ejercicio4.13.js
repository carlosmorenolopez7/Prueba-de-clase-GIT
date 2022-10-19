columnas = parseInt(prompt("Introduce el número de columnas: "));
alto = parseInt(prompt("Introduce la altura: "));
ancho = parseInt(prompt("Introduce el ancho: "));
var i=0


document.write('<table border="0" cellspacing="2" bgcolor="black" width="200">');
document.write('<tr bgcolor="white" height="' + alto + '">');
while (i < columnas) {
    document.write('<td width="' + ancho + '">&nbsp</td>');
    i++;
}
document.write('</tr>')
document.write('</table>')
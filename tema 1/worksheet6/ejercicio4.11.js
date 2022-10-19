columnas = parseInt(prompt("Introduce el número de columnas: "));
alto = parseInt(prompt("Introduce la altura: "));
ancho = parseInt(prompt("Introduce el ancho: "));


document.write('<table border="0" cellspacing="2" bgcolor="black" width="200">');
document.write('<tr bgcolor="white" height="' + alto + '">');
for (let i=0;i<columnas;i++) {
    document.write('<td width="' + ancho + '">&nbsp</td>');
}
document.write('</tr>')
document.write('</table>')
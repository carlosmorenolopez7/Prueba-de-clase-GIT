columnas = parseInt(prompt("Introduce el número de columnas: "));
filas = parseInt(prompt("Introduce el número de filas: "));
alto = parseInt(prompt("Introduce la altura: "));
ancho = parseInt(prompt("Introduce el ancho: "));

document.write('<table border="0" cellspacing="2" bgcolor="black" width="200">')
for (let i=0;i<filas;i++) {
    document.write('<tr bgcolor="white" height="' + alto + '">')
    for (let j=0;j<8;j++) {
        document.write('<td width="' + ancho + '">&nbsp;</td>"')
        document.write('<td width="' + ancho + '">&nbsp;</td>"')
    }
    document.write('</tr>')
    document.write('<tr bgcolor="white" height="' + ancho + '">')
}
document.write('</table>')
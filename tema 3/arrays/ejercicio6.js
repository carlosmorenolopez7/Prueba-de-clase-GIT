let semana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']
console.log(semana.some((dia=>dia[0]=='S')));
console.log(semana.every((dia=>dia.endsWith==('s'))));
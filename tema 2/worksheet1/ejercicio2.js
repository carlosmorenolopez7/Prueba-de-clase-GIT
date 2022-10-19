fechaHoy = new Date();
fecha85 = new Date();
fecha187 = new Date();
fecha2 = new Date();
fecha24 = new Date();
fechaResto = new Date();
fecha85.setDate(fechaHoy.getDay() + 85);
fecha187.setDate(fechaHoy.getDay() - 187);
fecha2.setFullYear(fecha85.getFullYear() + 2);
fecha24.setDate(fecha187.getHours() - 24);
fechaResto.setDate(fecha85.getDate() - fecha187.getDate())



document.write(fechaHoy + "<br>");
document.write(fecha85 + "<br>");
document.write(fecha187 + "<br>");
document.write(fecha2 + "<br>");
document.write(fecha24 + "<br>");
document.write(fechaResto);
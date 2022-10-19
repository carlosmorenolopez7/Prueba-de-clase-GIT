let compra = ['Peras', 'Manzanas', 'Kiwis', 'Plátanos', 'Mandarinas']
let borrar = compra.splice(1,1)
//Peras, Kiwis, Plátanos, Mandarinas
let reserva = compra.splice(3,0,'Naranjas', 'Sandía')
//Peras, Kiwis, Plátanos, Naranjas, Sandía, Mandarinas
let cambiar = compra.splice(1,1,'Cerezas', 'Nísperos')
//Peras, Cerezas, Nísperos, Plátanos, Naranjas, Sandía, Mandarinas
console.log(compra)
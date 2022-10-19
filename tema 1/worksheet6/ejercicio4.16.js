x = parseInt(prompt("Jugador 1, introduce un número: "))
y = parseInt(prompt("Jugador 2, adivina el número: "))

do {
    if (x > y) {
        alert("El número es más grande que el que has escrito.")
    }
    if (x < y) {
        alert("El número es más pequeño que el que has escrito.")
    }
    y = parseInt(prompt("Jugador 2, adivina el número: "))
} while (x != y)
alert("Enhorabuena has acertado el número del jugador 1.")

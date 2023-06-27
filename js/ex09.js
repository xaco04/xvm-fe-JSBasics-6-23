// Escribe un programa que solicite al usuario ingresar un número y determine si es positivo,
// negativo o cero
let numero = prompt("Ingrese un numero");

if ( numero > 0) {
    console.log('El numero es positivo')
}
else if ( numero < 0 ) {
    console.log('El numero es negativo')
}
else if ( numero == 0 ) {
    console.log ('El numero es 0')
}
else {
    console.log('Ingrese un valor numerico')
}

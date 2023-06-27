// Realiza un programa que solicite al usuario ingresar un número y muestre en la consola la
// multiplicación de todos los números enteros positivos menores o iguales a ese número
// utilizando un bucle `do...while`

let numero = prompt("Ingrese un número");

if ( numero >= 0) {
    let multiplicacion = 1; 
    let i = 1;
    do {
        multiplicacion *= i;
        i++;
    } while (i <= numero);
    console.log(multiplicacion);
} else {
    console.log("Ingrese un valor valido");
}
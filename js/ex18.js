// Realiza un programa que solicite al usuario ingresar un número y muestre en la consola la
// suma de todos los números naturales hasta ese número utilizando un bucle `do...while`
let numero = prompt("Ingrese un número");

let suma = 0;
let i = 1;

do {
    suma += i;
    i++;
} 
while (i <= numero);
console.log("La suma de los números naturales hasta " + numero + " es: " + suma);

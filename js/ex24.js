// 24. Realiza un programa que solicite al usuario ingresar un número y muestre en la consola la
// suma de todos los dígitos del número utilizando un bucle `while`.

let numero = prompt("Ingrese un número");
let sumadigitos = 0;
let i = 0;

while (numero.length > i) {
    sumadigitos++;
    i++;
}

console.log("La cantidad de dígitos es: " + sumadigitos);

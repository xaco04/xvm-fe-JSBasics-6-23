// Crea un programa que solicite al usuario ingresar un número y muestre en la consola todos
// los números pares desde 2 hasta ese número utilizando un bucle `while`.
let numero = prompt("Ingrese un número");
let i = 2;
while (i <= numero) {
    if (i % 2 == 0) {
        console.log(i);
    }
    i++;
}

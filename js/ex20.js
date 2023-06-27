// . Crea un programa que solicite al usuario ingresar un número y muestre en la consola todos
// los números pares desde ese número hasta 0 utilizando un bucle `while`
let numero = prompt("Ingrese un número");
while ( numero > 0) {
    if ( numero%2 == 0){
        console.log(numero);
    }
    numero -= 1;
}
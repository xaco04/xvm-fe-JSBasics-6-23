// 29. Escribe un programa que solicite al usuario ingresar una palabra y luego cuente y muestre
// en la consola la cantidad de vocales que tiene la palabra utilizando un bucle `for`, una
// condición `if` y una variable contador.

let palabra = prompt("Ingrese una palabra:");

let contadorVocales = 0; // Variable para contar las vocales

for (let i = 0; i < palabra.length; i++) {
    let letra = palabra[i];
    if ( letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u" ) {
        contadorVocales++; // Incrementar el contador de vocales
    }
}
console.log("La palabra " + palabra + " tiene " + contadorVocales + " vocales.");
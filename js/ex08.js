// 8. Crea un programa que pida al usuario ingresar tres números y determine cuál es el mayor
// de ellos.
let numero1 = prompt("Ingrese el primer número");
let numero2 = prompt("Ingrese el segundo número");
let numero3 = prompt("Ingrese el tercer número");

if ( numero1 > numero2) {
    if ( numero1 > numero3) {
        console.log('El numero mas grande es el numero ' +numero1)
    }
    else {
        console.log('El numero mas grande es el numero ' +numero3)
    }
}
else if ( numero2 > numero3) {
    console.log('El numero mas grande es el numero ' +numero2)
}
else {
    console.log('El numero mas grande es el numero ' +numero3)
}
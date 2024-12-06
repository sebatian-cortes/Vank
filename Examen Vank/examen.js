// Cree un programa que genera las tablas de multiplicar  de 1 a 10 de los primeros 5 numeros naturales
// Ejemplo:
// 1x1 =1     1x2=2     1x...    1x10 = 10
// 2x1 = 2    2x2 = 4     2x...     2x10 = 20
// 
// function tabla(n) {
// 
// for (let index = 1; index <= 10; index++) {
// 
// let res = n * index
// 
// console.log(n + " X " + index + " = " + res);
// }
// 
// }
// 
// tabla(1)
// tabla(2)
// tabla(3)
// tabla(4)
// tabla(5)

// Escriba un programa que reciba una cadena de caracteres. La función debe crear y mostrar una tabla donde cada celda (i,j) contienen la concatenación de los caracteres en la posición i,j de la cadera

// let cadena = prompt("ingrese la cadena")
// 
// function parejas(cadena) {
// 
// for (let i = 0; i < cadena.length; i++) {
// let celda = ""
// 
// for (let j = 0; j < cadena.length; j++) {
// 
// celda = celda + ` (${cadena[i]}${cadena[j]})`
// }
// console.log(celda);
// }
// 
// }
// 
// parejas(cadena)

// contador = 1
// n = 3
// 
// for (let index = 1; index <= n; index++) {
// 
// contador = contador * index * 2
// 
// }
// 
// console.log(contador);
// 

// function miFuncion(a, b) {
// 
// while (b !== 0) {
// let temp = b
// b = a % b
// a = temp
// }
// 
// return a
// }
// 
// 
// console.log(miFuncion(56, 98))
// console.log(miFuncion(48, 18))



// "s" para sumar
// 
// "r" para restar
// 
// "m" para multiplicar
// 
// "d" para dividir
// 
// "c" para realizar una cuenta regresiva de n hasta 0 (n debe ser ingresado por el usuario)
// 
// "p" para verificar si es divisible por 2 y 3
// 
// "x" para salir
// 

// 
// 
// 
// function Sumar(a, b) {
// 
    // let suma = a + b
// 
    // return "la suma de los numeros es de: " + suma
// 
// }
// 
// function Restar(a, b) {
// 
    // let resta = a - b
// 
    // return "la resta de los numeros es de: " + resta
// 
// }
// 
// function Multiplicar(a, b) {
// 
    // let multiplicacion = a * b
// 
    // return "la multiplicacion de los numeros es de: " + multiplicacion
// 
// }
// 
// function Dividir(a, b) {
// 
    // let division = a / b
// 
    // return "la divicion de los numeros es de: " + division
// 
// }
// 
// function CuentaRegresiva(num) {
// 
    // let n = num
    // while (n >= 0) {
        // console.log(n);
// 
        // n--
// 
    // }
// 
// }
// 
// function Divisible(n) {
// 
    // if (n % 2 == 0 && n % 3 == 0) {
        // return "el numero " + n + " SI es divisible por 2 y 3"
    // }
    // return "el numero " + n + " NO es divisible por 2 y 3"
// }
// 
// 
// 
// 
// let opcion = ""
// salida = false
// let n1 = 0
// let n2 = 0
// 
// while (salida == false) {
// 
    // opcion = prompt('ingrese \n "s" para sumar \n "r" para restar \n "m" para multiplicar \n "d" para dividir  \n "c" para realizar una cuenta regresiva \n "p" para verificar si es divisible por 2 y 3 \n "x" para salir')
// 
    // switch (opcion.toUpperCase()) {
        // case "S":
// 
            // n1 = parseInt(prompt("ingrese el primer numero de la suma"))
            // n2 = parseInt(prompt("ingrese el segundo numero de la suma"))
// 
// 
            // console.log(Sumar(n1, n2));
// 
            // break;
// 
        // case "R":
// 
            // n1 = parseInt(prompt("ingrese el primer numero de la resta"))
            // n2 = parseInt(prompt("ingrese el segundo numero de la resta"))
// 
// 
            // console.log(Restar(n1, n2));
// 
// 
            // break;
// 
        // case "M":
            // n1 = parseInt(prompt("ingrese el primer numero de la multiplicacion"))
            // n2 = parseInt(prompt("ingrese el segundo numero de la multiplicacion"))
// 
            // console.log(Multiplicar(n1, n2));
// 
            // break;
// 
        // case "D":
            // n1 = parseInt(prompt("ingrese el primer numero de la division"))
            // n2 = parseInt(prompt("ingrese el segundo numero de la division"))
// 
            // console.log(Dividir(n1, n2));
// 
            // break;
// 
        // case "C":
// 
            // n1 = parseInt(prompt("ingrese el numero desde donde empezara el conteo"))
// 
            // CuentaRegresiva(n1)
// 
            // break;
// 
// 
        // case "P":
// 
            // n1 = parseInt(prompt("ingrese el numero que desea comprobar"))
// 
            // console.log(Divisible(n1));
// 
// 
            // break;
// 
        // case "X":
// 
            // salida = true
            // console.log("Has salido del sistema");
// 
            // break
// 
        // default:
            // break;
    // }
// 
// }


function miFunction(n) {

    let r = ""
    for (let index = 0; index < n; index++) {
        if (index % 2 == 0 && index % 3 == 0) {
            r = r + " " + index  
            }else
            r = r + " " + 0  
    }

    return r
}

console.log(miFunction(25));

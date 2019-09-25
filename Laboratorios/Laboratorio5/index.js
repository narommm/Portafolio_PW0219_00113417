console.log("HOlamundo");

var objeto = {
    nombre: 'Lourdes',
    apellido: 'Moran'
}
console.log(objeto);

/*PALINDROME*/
function palindrome (palabra){
var isPalindrome = true;
var original = palabra.split("");
//console.log(original);
var invertir = palabra.split("").reverse();
console.log(invertir);
for(var i=0; i<original.length;i++){
    if(invertir[i]=original[i]){
        console.log("no es palindrome");
        isPalindrome=false;
        break;
    }
}
if(isPalindrome==true){
    console.log("Es palindrome");
}
}
palindrome("ana");
/*1. Realice una función que reciba un arreglo como parámetro y liste 
los tipos de datos de sus elementos y cuantos de cada tipo. */
function listarElemento ([Arreglo]){
    let i;
    for(i=0; i.length();i++){

    }
}

/*2 .Realice una función que reciba un arreglo de datos numéricos, y muestre
 de todos los elementos del arreglo y su promedio. */
 
 /*function promedioElemento([Arreglo]){
let i;
var suma;
for(i=0;i<i.length;i++){
    suma=suma+Arreglo[i];
}
 }
 return(suma/arreglo.length);
 /*3. Realice una función en JS, que dados un número 
 y un arreglo como parámetros, retorne cuantas ocurrencias existen de ese número dentro del arreglo.*/


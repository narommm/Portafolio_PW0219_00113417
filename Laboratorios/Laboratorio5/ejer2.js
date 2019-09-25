function promedioElemento(Arreglo){
var suma=0;
for(let i=0;i<Arreglo.length;i++){
    suma=suma+Arreglo[i];
}
console.log(suma/Arreglo.length);
 }
 promedioElemento([1,2,3,4]);
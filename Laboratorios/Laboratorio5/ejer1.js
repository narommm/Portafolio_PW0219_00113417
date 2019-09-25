/**1. Realice una funcion que reciba un arreglo como
 * parametro y liste
 */

 function miFun(array){
     var acumString=0;
     var acumInt=0;
     var acumDouble=0;
     var acumArray=0;
     var acumBoolean=0;
     var acumChar=0;
     for(let i=0; i<array.length; i++){
         console.log(typeof(array[i]));
         if(typeof(array[i])=="string"){
             acumString++;
         } else if(typeof(array[i])=="number"){
             acumInt++;
         } else if(typeof(array[i])=="number"){
             acumDouble++;
         } else if(typeof(array[i])=="boolean"){
             acumBoolean++;
         }else if(typeof(array[i])=="object"){
             acumArray++;
         }else if(typeof(array[i])=="string"){
             acumChar++;
         }
     }
     console.log("Tipo String" + acumString);
     console.log("Tipo Int" + acumInt);
     console.log("Tipo Double" + acumDouble);
     console.log("Tipo Array" + acumArray);
     console.log("Tipo Char" + acumArray);

 }
 miFun([1,3.3443,"aa"]);
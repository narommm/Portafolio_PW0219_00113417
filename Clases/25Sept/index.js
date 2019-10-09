/*funcion a(array,funcion){
console.log();
for (let index = 0; index < array.length; index++) {
    action(array[i],i);
    
}
}

forN(arr, (e,i) => )
array.forEach(element => {console.log(array[i])});
*/

function filtrar (array,funcion){
    var arregloNuevo = [];
  for (let index = 0; index < array.length; index++) {
      funcion (array[i],i);
      if(funcion(i)){
          arregloNuevo.push();
      }
  }
  return arregloNuevo[i];
}
array.forEach(element => {if(element%2==0) console.log(array[i])});

function transformar(array, mapeo){
for (let index = 0; index < array.length; index++) {
    
}
}

function reducir (array, action){
    var reducir;
    for (const iterator of object) {
        reducir = action(iterator);
    }
    return reducir
}
function ordenerar (array){
  for(var i=0; i<array.length; i++){
      for(var j=0; j<array.length-1;j++){
          if(array[j+1]<array[j]){
              var aux=lista[j+1];
              array[j+1]=array[j];
              array[j]=aux;
          }
      }
  }
  return array;
}
ordenerar([6,7,4,1,3]);
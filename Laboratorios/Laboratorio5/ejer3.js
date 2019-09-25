function miFun (array,numero){
    var ocurrencias=0;
    for(let i=0; i<array.length; i++){
        if(array[i]==numero){
            ocurrencias++;
        }
    }
    console.log(ocurrencias);
}

miFun([1,1,1,4,5,6,1],1);

function miFun(){
    var array=[];
    var number=0;
    var flag;
for(let i=0; i<20;i++){
    var int = parseInt((Math.random()*10),10);
    array.push(int);
}
console.log(array);
number=prompt("Ingrese numero");
for(let i=0; i<20; i++){
    if(array[i]==number){
        flag=true;
        console.log("Ganaste!!");
        break;
    }
    if(flag==false)
    console.log("NO");
}
}
miFun();
function radio(){
    let numero = prompt("Ingrese Numero");
    if(numero<=0){
        return console.log("-1");
    } else if (numero>0){
        return console.log(Math.PI*numero*numero);
    }
}
radio();
function fibonacci (numero){
    var var1=0;
    var var2=1;
    var var3;
    for(var i=0; i<=numero;i++){
        var3= var1+var2;
        var1= var2;
        var2=var3;
        console.log(var3 + " ");
    }
}
fibonacci(5);
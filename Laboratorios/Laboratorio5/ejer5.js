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
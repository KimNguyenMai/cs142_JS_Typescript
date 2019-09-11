function power(base:number, exponent:number)
{
    if (exponent===0){
        return 1;
    } else if (exponent <0){
        //Error handling
        return null;
    }else{
        return base * power(base,exponent - 1);
    }
}
console.log(power(5,3));
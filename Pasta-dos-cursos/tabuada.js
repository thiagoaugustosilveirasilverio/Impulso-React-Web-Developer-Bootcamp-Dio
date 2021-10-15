function tabuada(num1, num2){
    let multi = num1 * num2;
    let num1 = primeiro;
    let num2 = segundo;

    if(segundo < 10){
        segundo++
    }

    return `${primeiro} x ${segundo} = ${multi}`
    
}

console.log(tabuada);
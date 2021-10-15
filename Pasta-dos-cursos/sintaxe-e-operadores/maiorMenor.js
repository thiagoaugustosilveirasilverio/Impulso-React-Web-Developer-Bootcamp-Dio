function maiorMenor(num1, num2){
    const soma = num1 + num2;
    const media = (num1 + num2)/2;
    let comparaDez = 'menor';
    let comparaVinte = 'menor';

   
    if(soma > 10){
        comparaDez = 'maior';
    }

    if(soma > 20){
        comparaVinte = 'maior';
    }

    return `A soma dos dois números é ${soma} e a sua media ${media}, a soma é ${comparaDez} que 10 e ${comparaVinte} que 20.`
}

console.log(maiorMenor(16, 5));
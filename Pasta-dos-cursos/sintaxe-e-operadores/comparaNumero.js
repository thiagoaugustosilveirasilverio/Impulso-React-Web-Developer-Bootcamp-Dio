function recebeNum(num1, num2){
    const saoIguais = num1 === num2;
    const soma = num1 + num2;

    if(saoIguais){
        return `Os números ${num1} e ${num2} são iguais, a sua soma é ${soma}`
    }

    return `Os números ${num1} e ${num2} são diferentes, a sua soma é ${soma}`

}

console.log(recebeNum(12, 3));
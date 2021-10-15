function comparaNum(num1, num2){
    if(!num1 || !num2) return 'Defina dois números!!!';

    const primeiraFrase = criaPrimeiraFrase(num1, num2);
    const segundaFrase = criaSegundaFrase(num1, num2);

    return `${primeiraFrase} ${segundaFrase}`
}

function criaPrimeiraFrase(num1, num2) {
    let saoIguais = '';

    if(num1 !== num2) {
        saoIguais = 'não';
    }

    return `Os números ${num1} e ${num2} ${saoIguais} são iguais.`
};

function criaSegundaFrase(num1, num2){
    const soma = num1 + num2;
    let resultado10 = 'menor';
    let resultado20 = 'menor';

    const comparaDez = soma > 10;
    const comparaVinte = soma > 20;

    if(comparaDez){
        resultado10 = 'maior'
    }

    if(comparaVinte){
        resultado20 = 'maior';
    }

    return `Sua soma é ${soma}, que é ${resultado10} que é 10 e ${resultado20} que 20.`
}

console.log(comparaNum(4, 8));
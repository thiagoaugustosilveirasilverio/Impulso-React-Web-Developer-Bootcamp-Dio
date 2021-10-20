function numeroPositivo(num) {
    let resultado;

    const ehNegativo = num < 0;

    if(ehNegativo) {
        resultado = false;
    } else {
        resultado = true;
    }

    return resultado;
}

console.log(resultado(4));
console.log(numeroPositivo(-7));
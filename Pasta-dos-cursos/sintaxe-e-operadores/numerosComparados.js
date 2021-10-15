function numeroComparado(num1, num2) {
    const saoIguais = num1 ===num2;
    const soma = num1 + num2;

    return saoIguais ? "São iguais" : "não são iguais"; /*? = se; : = senão; isso é chamado de if ternário*/
}

console.log(numeroComparado(8, 8));
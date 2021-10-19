//Solução 1
function verificaPalindromo(string) {
    if(!string) return "string inexistente"; /* isso serve para saber se a string está null, undefied, ou vazia.*/

 return string.split("").reverse().join("") === string; /*split = separa todas as letras // O reverse inverte a string// o join justa novamente a string.*/
}

//console.log(verificaPalindromo("ovoa"));

//Solução 2
function verificaPalindromo2(string) {
    if (!string) return "string inexistente";

    for(let i = 0; i < string.length/2; i++){//A string.lenght foi dividida pois será veridicado em cada loop 2 caracters ao invés de um.
        if(string[i] !== string[string.length -1 -i]) {
            return false;
        }
    }
    return true;
}

console.log(verificaPalindromo2("gag"));
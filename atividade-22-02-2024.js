// atividade 1
function verificarMaiorIdade(idade) {
    return idade >= 18 ? 'Maior de idade' : 'Menor de idade';
}

// atividade 2
function orderArray() {
    let arr = [0, 1, 2, 3, 6, 7, 9];
    arr.sort((a, b) => a - b);
    return arr;
}

// atividade 3
function meusDados() {
    let pessoa = {
        nome: 'Eduardo',
        idade: '20',
        cidade: 'Cianorte',
    };
    delete pessoa.idade;
    return pessoa;
}

//atividade 4
function manipulaArray() {
    let animais = ['cachorro', 'gato', 'abelha', 'rato', 'leão', 'galinha'];

    function capitalizar(palavra) {
        return palavra[0].toUpperCase() + palavra.slice(1);
    }

    return {
        ordemAlfabetica: animais.sort(),
        primeiro: animais[0],
        ultimo: animais[animais.length - 1],
        tamanhoDaLista: animais.length,
        animaisCapitalizados: animais.map(capitalizar),
    };
}

// atividade 1
function verificarMaiorIdade(idade) {
    return idade >= 18 ? 'Maior de idade' : 'Menor de idade';
}

// atividade 2
function orderArray() {
    let arr = [1, 2, 3, 6, 7, 9];
    arr.sort((a, b) => a - b);
    return arr;
}

// atividade 3
function meusDados() {
    let pessoa = {
        nome: 'Jhon Doe',
        idade: '30',
        cidade: 'New York',
    };
    pessoa = { ...pessoa, idade: undefined };
    return pessoa;
}

//atividade 4
function manipulaArray() {
    let animais = ['cachorro', 'gato', 'abelha', 'rato', 'leão', 'galinha'];
    return {
        ordemAlfabetica: animais.sort(),
        primeiro: animais[0],
        ultimo: animais[animais.length - 1],
        tamanhoDaLista: animais.length,
    };
}

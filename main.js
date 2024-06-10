const form = document.getElementById('form-contatos')
const nome = [];
const numero = [];

let linhas = '';


form.addEventListener('submit', function (e) {
    e.preventDefault();
    adicionarLinha();
    atualizeTabela();
});

function adicionarLinha() {
    inputNomeDoContato = document.getElementById('nome-contato');
    inputNumeroDoContato = document.getElementById('telefone');

    if (nome.includes(inputNomeDoContato.value)) {
        alert(`O contato: ${inputNomeDoContato.value} já foi inserido`)
    } else {
        nome.push(inputNomeDoContato.value);
        numero.push(inputNumeroDoContato.value);
        console.log(`Nome do contato: ${inputNomeDoContato.value}`);
        console.log(`Numero: ${inputNumeroDoContato.value}`);


        let linha = '<tr>';
        linha += `<td>${inputNomeDoContato.value}</td>`;
        linha += `<td>${inputNumeroDoContato.value}</td>`;
        linha += '</tr>';

        linhas += linha;
    }
    inputNomeDoContato.value = '';
    inputNumeroDoContato.value = '';
}

function atualizeTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

}
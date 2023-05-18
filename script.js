//SE  capacidadeMax > numeroPessoas && os dois campos forem preenchidos = success 
//SE  numeroPessoas > capacidadeMax = "capacidade máxima ultrapadassada"
//SE  os campos não forem preenchidos = "error-message"

let botao = document.getElementsByTagName('button');
const form = document.getElementById('form-confirm');

function validaCapacidade(capacidadeMax, qtdPessoas){
    capacidadeMax = document.getElementById('capacidade');
    qtdPessoas = document.getElementById('qtd-pessoas');
    if(qtdPessoas.value > capacidadeMax.value){
        alert("Limite de pessoas ultrapassado")
    } else {
        alert("Ainda há espaço sobrando")
    }
}

validaCapacidade()

// form.addEventListener('submit', function(evento){
//     evento.preventDefault();
// })
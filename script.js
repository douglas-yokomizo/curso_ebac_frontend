
const form = document.getElementById('form-confirm');

form.addEventListener('submit', function(confere){
    capacidadeMax = document.getElementById('capacidade').value;
    qtdPessoas = document.getElementById('qtd-pessoas').value;
    limite = document.querySelector('.limite')
    if(qtdPessoas > capacidadeMax)
    {
        console.log("Limite de pessoas ultrapassado")
        confere.preventDefault();
        limite.style.display = "block";

    } 
    else 
    {
        alert("Número de pessoas aprovado!\nBom evento!")
    }
})
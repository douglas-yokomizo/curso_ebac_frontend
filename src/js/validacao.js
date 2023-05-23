$(document).ready(function(){
    $('#phone').mask('(00) 00000-0000')
    $('#cpf').mask('000.000.000-00')
    $('#cep').mask('00000-000')
    
    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true
            },
            telefone: {
                required: true
            },
            cep: {
                required: true
            },
            cpf: {
                required: true
            },
        },
        messages: {
            nome: 'Por favor, insira o nome completo',
            email: 'Por favor, insira um email válido',
            telefone: 'Por favor, insira um telefone válido',
            cep: 'Por favor, insira um CEP válido',
            cpf: 'Por favor, insira um CPF válido'
        },
        submitHandler: function(form) {
            alert("Formulário enviado com sucesso!")
            $(input).empty();
        },
        invalidHandler: function(enviado, checar){
            let campsIncorretos = checar.numberOfInvalids();
            if (campsIncorretos) {
                alert(`Existem ${campsIncorretos} campos incorretos`)
            }
        }
    })
})
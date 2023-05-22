let novaTarefa = " "
let tarefa = " "

$('form').on('submit', function(adicionarTarefa){
    adicionarTarefa.preventDefault();

    tarefa = $('#inserir-tarefa').val();
    novaTarefa = $(`<li id="task"></li>`);
    $(`<a>${tarefa}</a>`).appendTo(novaTarefa);
    $(novaTarefa).appendTo('ul');

    $('#inserir-tarefa').val('');
    $('#inserir-tarefa').focus();
})

$('ul').on('click', 'a', function() {
    $(this).css("text-decoration", "line-through");
  });
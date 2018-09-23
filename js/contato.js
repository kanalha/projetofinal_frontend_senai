$(function () {
    $('#contatos').on('submit', function () {
        //evita de o formulario ser submetido e a página ser recarregada

        event.preventDefault();
        let nome = $('#nome').val();
        let email = $('#email').val();
        let assunto = $('#assunto').val();
        let comentario = $('#comentario').val();

        let contato = {
            nome: nome,
            email: email,
            assunto: assunto,
            comentario: comentario
        }
        var tbContatos;
        if (localStorage.getItem('tbContatos')) {
            tbContatos = JSON.parse(localStorage.getItem('tbContatos'));
        } else {
            tbContatos = [];
        }
        tbContatos.push(contato);
        localStorage.setItem('tbContatos', JSON.stringify(tbContatos));
        alert('Contato enviado com sucesso! Em breve entraremos em contato!');
    });
});
$(document).ready(function () {

    $('#select_cliente-tipo').on('change', function () {

        var selectValor = '#' + $(this).val();
        $('#numfunc').children('fieldset').hide();

        $('#numfunc').children(selectValor).show();

    });

    $('$bn_submit').on('click', function(){
        alert('Cadastro realizado')
    });
});
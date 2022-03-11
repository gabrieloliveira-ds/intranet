$(document).ready(function () {

    $('#select_cliente-tipo').on('change', function () {

        var selectValor = '#' + $(this).val();
        $('#formulario').children('div').hide();

        $('#formulario').children(selectValor).show();

    });

    $('$bn_submit').on('click', function(){
        alert('Cadastro realizado')
    });
});
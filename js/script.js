$(document).ready(function () {

    $('#select_func').on('change', function () {

        var selectValor = '#' + $(this).val();
        $('#numfunc').children('label').hide();

        $('#numfunc').children(selectValor).show();

    });
});
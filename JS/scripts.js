$(function(){
    'use strict';

    $('.nuestros_servicios div:first').show();
    $('.servicios nav a:first').addClass('activo');
    $('.servicios nav a').on('click', mostrarTabs);

    function mostrarTabs(){
        $('.servicios nav a').removeClass('activo');
        $(this).addClass('activo');
        var enlace = $(this).attr('href');
        $('.nuestros_servicios div').fadeOut();
        $(enlace).fadeIn();
        return false;
    }
});
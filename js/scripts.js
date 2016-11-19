$(document).ready(function(){
    $('.menu-hamburguer').on('click', function() {
        var menu = $('nav.header-navegation');
        if (menu.hasClass('ativo')) {
            menu.removeClass('ativo');
        }else {
            menu.addClass('ativo');
        }
    });
});
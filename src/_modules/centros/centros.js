'use strict';

// Constructor
var Centros = function() {
    var boton = $('.centros__content__button');
    var container = $('.centros__content__centro-container');
    var seleccion = $('.centros__content__centro-data');
    var body = $('body');

    boton.on("click", function() {
        seleccion.removeClass('-show');
        boton.addClass('centros__content__button--open')
        container.addClass('centros__content__centro-container--open');
        seleccion.addClass('centros__content__centro-data--open');
        body.addClass('-hideOverflow');
    });

    seleccion.on("click", function(event) {
        seleccion.removeClass('-show');
        boton.removeClass('centros__content__button--open')
        container.removeClass('centros__content__centro-container--open');
        seleccion.removeClass('centros__content__centro-data--open');
        body.removeClass('-hideOverflow');
        $(this).addClass('-show');
    });
};

module.exports = Centros;

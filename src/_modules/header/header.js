'use strict';

// Constructor
var Header = function() {
    var header = $('.header');
    var home = $('home');
    var homeHero = $('.home__hero');
    var menuOpen = $('.header__hamburguer');
    // var menuClose = $('.header__nav__close');

    menuOpen.on('click', function(){
        header.toggleClass('-open');
        homeHero.toggleClass('-open');
        home.toggleClass('-hideOverflow');
    });

    //
    // menuClose.on('click', function(){
    //     header.removeClass('-open');
    //     body.removeClass('-hideOverflow');
    // });
};

module.exports = Header;

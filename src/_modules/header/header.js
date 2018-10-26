'use strict';

// Constructor
var Header = function() {
    var header = $('.header');
    var home = $('home');
    var hero = $('.js-hero');
    var menuOpen = $('.header__hamburguer');

    menuOpen.on('click', function(){
        header.toggleClass('-open');
        hero.toggleClass('-open');
        home.toggleClass('-hideOverflow');
    });
};

module.exports = Header;

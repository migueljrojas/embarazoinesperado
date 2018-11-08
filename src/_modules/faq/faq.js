'use strict';

// Constructor
var Faq = function() {
    var question = $('.preguntas-frecuentes__content__questions__faq');

    question.on("click", function(event) {
        if($(event.target).hasClass('preguntas-frecuentes__content__questions__faq__answer') ||
        $(event.target).hasClass('preguntas-frecuentes__content__questions__faq__answer__text')) {
            return false;
        }

        if($(this).hasClass('-open')) {
            question.removeClass('-open');
        } else {
            question.removeClass('-open');
            $(this).toggleClass("-open");
        }
    });
};

module.exports = Faq;

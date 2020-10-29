$(document).ready(function() {

    // intercetto il mouse enter sul dropdown-item
    $('.dropdown-item').mouseenter(function() {
        // visualizzo il dropdown menu corrispondente
        $(this).children('.dropdown-menu').addClass('active');
    });

    // intercetto il mouse leave dal dropdown-item
    $('.dropdown-item').mouseleave(function() {
        // nascondo il dropdown menu corrispondente
        $(this).children('.dropdown-menu').removeClass('active');
    });

});

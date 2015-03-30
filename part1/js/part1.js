$(document).ready(function() {
    $('.faq h2').click(function() {

        $(this).next('.answer').slideToggle(500);
        $(this).toggleClass('close');

    });
}); // end ready
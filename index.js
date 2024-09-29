// Smooth scrolling to footer
$('a[href="#footer"]').on('click', function(event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $('#footer').offset().top
    }, 500);
});

// script.js
$(document).ready(function() {
    $('.timeline-item').click(function() {
        $(this).find('.timeline-content').toggleClass('enlarged');
    });
});


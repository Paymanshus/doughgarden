$(function() {
    $(document).scroll(function() {
        var $nav = $(".site-header");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});

$.get("nav.html", function(data) {
    $("#nav-placeholder").replaceWith(data);
});

// $.get("instabutton.html", function(data) {
//     $("#instagram-button").load(data);
// });

$(function() {
    $("#instagram-button").load("instabutton.html");
});
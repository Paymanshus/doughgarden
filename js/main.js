$(function() {
    $(document).scroll(function() {
        var $nav = $(".site-header");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});

$.get("nav.html", function(data) {
    $("#nav-placeholder").replaceWith(data);
    var currentPage = window.location.pathname.split("/").pop();

    if (currentPage === 'menu.html') {
        $('.navbar').addClass('menu-navbar');
    }
});

console.log("Active: " + window.location.pathname.split("/").pop())

$(function() {
    $('a').each(function() {
        if ($(this).prop('href') == window.location.pathname.split("/").pop()) {
            console.log("Active: " + window.location.pathname.split("/").pop())
            $(this).addClass('active');
            $(this).parents('li').addClass('active')
        }
    })
})

const container = document.getElementById('menu');
for (let i = 1; i <= 8; i++) {
    const img = document.createElement('img');
    img.src = 'assets/images/menu-imgs/000' + i + '.jpg';
    img.alt = 'Menu Page'

    container.appendChild(img)
}

// $.get("instabutton.html", function(data) {
//     $("#instagram-button").load(data);
// });

$(function() {
    $("#instagram-button").load("instabutton.html");
});
var mobileNav = $('.mobileNav');
var mobileMenu = $('.mobileMenu');
var menu = $('.menu');
var body = $('body');

$(document).ready(function () {
    $('.menu').click(function () {
        $(this).toggleClass('open');
        mobileNav.toggleClass('nav-hide');
        body.toggleClass('bodynoscroll');

    });

    mobileMenu.find('a');
    mobileMenu.click(function () {
        mobileNav.removeClass('nav-hide');
        body.removeClass('bodynoscroll');
        menu.removeClass('open');
    });


    $(window).scroll(function () {
        var scroll = $(document).scrollTop();
        var offset = $('#about').offset().top;
        if (scroll > offset) {
            menu.hide();
        } else {
            menu.show();
        }
    });


    $('.hoverPort').on('click', function () {
        $(this).toggleClass('hover');
    });



    /* smooth scroll */
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });
});

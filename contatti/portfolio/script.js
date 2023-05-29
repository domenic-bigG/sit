$(function () {
    $(".header").load("../includes/header.html", function () {
        const header = document.querySelector('.header');
        const headerHamb = document.querySelector('.header-hamb');
        const headerBar = document.querySelector('.header-bar');
        const headerMobileFiller = document.querySelector('.header-mobile-filler');
        const body = document.querySelector('body');

        headerHamb.addEventListener('click', function () {
            headerHamb.classList.toggle('is-active');
            headerBar.classList.toggle('is-active');
            headerMobileFiller.classList.toggle('is-active');
            body.classList.toggle('is-active');
        });

        headerMobileFiller.addEventListener('click', function () {
            headerHamb.classList.toggle('is-active');
            headerBar.classList.toggle('is-active');
            headerMobileFiller.classList.toggle('is-active');
            body.classList.toggle('is-active');
        });

        window.onscroll = function () {
            var scrollLimit = 100;
            if (window.scrollY >= scrollLimit) {
                header.style.boxShadow = "#0000001e 0 1px 3px";
                header.style.transition = "all .5s";
            }
            else {
                header.style.boxShadow = "unset";
                header.style.transition = "0";
            }
        };
    });
    $(".footer").load("../includes/footer.html");
});



$(document).ready(function () {
    $('.content-nav-itm').click(function () {
        const value = $(this).attr('data-filter')
        if (value == 'all') {
            $('.box-itm').show('1000');
        }
        else {
            $('.box-itm').not('.' + value).hide('1000');
            $('.box-itm').filter('.' + value).show('1000');
        }
    })

    $('.content-nav-itm').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    })
})

/*
document.onreadystatechange = function () {
    var state = document.readyState
    if (state == 'interactive') {
        document.body.style['overflow'] = 'hidden';
    } else if (state == 'complete') {
        setTimeout(function () {
            document.getElementById('interactive');
            document.getElementById('load').style.visibility = "hidden";
            document.querySelector('body').style.visibility = "visible";
            document.body.style['overflow'] = 'unset';
        });
    }
}
*/


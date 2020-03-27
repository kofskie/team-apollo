$(function () {


    // Initial positionings

    var collectionIndex = 1;
    var $carousel;
    var isInit = false;

    function updateCollection() {

        $('div[class*=collection-]').css({
            'display': 'none'
        })
        $('span[class*=meta-collection]').css({
            'display': 'none'
        })

        $(`.collection-${collectionIndex}`).css({
            'display': 'block'
        })
        $(`.meta-collection-${collectionIndex}`).css({
            'display': 'block'
        })

        if (isInit) {
            $carousel.destroy()
        }

        $carousel = new Flickity(('.carousel'), {
            wrapAround: false,
            dragThreshold: 10,
            cellSelector: `.collection-${collectionIndex}`,
            pageDots: false,
            arrowShape: {
                x0: 10,
                x1: 45,
                y1: 25,
                x2: 80,
                y2: 50,
                x3: 55
            },
            on: {
                ready: function () {
                    $('.collection-index').html(`${collectionIndex} of ${$('.photography__img-data').length}`);
                },
                select: function (index) {
                    $('.carousel-index').html(`${index + 1} / ${$(`.collection-${collectionIndex}`).length}`);
                }
            }
        })
        isInit = true;
    }

    updateCollection();

    $('.collection-next').on('click', function () {
        if (collectionIndex < 2) {
            collectionIndex++;
            updateCollection();
        }
    })

    $('.collection-prev').on('click', function () {
        if (collectionIndex > 1) {
            collectionIndex--;
            updateCollection();
        }
    })


    // stars
    var starCount = 80;

    function generateStars(index) {
        var strength = Math.random();


        $(`#star-${index}`).css({
            'left': `${Math.random() * (99 - 1) + 1}%`,
            'top': `${Math.random() * (99 - 1) + 1}%`,
            'width': strength * (3 - 1) + 1,
            'height': strength * (3 - 1) + 1
        })

        $(`#star-${index}`).animate({
            opacity: strength * (0.7 - 0.1) + 0.1
        }, Math.random() * (2600 - 500) + 500)
    }


    let stars = [];

    for (let i = 0; i < starCount; i++) {
        // create star elements
        $("<div/>", {
            class: "stars",
            id: `star-${i}`
        }).appendTo(".main");

        generateStars(i);

        // put stars into array
        let star = new Object();

        // star x & y positions
        star.x = $(`#star-${i}`).offset().left;
        star.y = $(`#star-${i}`).offset().top;
        // star parallax multiplier, 'speed'
        star.weight = Math.random() * (0.06 - 0.005) + 0.005;

        stars.push(star);
    }

    $('.hero__logo--white').animate({
        opacity: 1
    }, 1000, function () {
        $('.hero__logo--red').animate({
            opacity: 1
        }, 300, function () {
            $('.hero__logo--blue').animate({
                opacity: 1
            }, 300, function () {
                $('.hero__logo--yellow').animate({
                    opacity: 1
                }, 300, function () {

                })
            })
        })
    })

    let init = false;

    let startX = 0;
    let startY = 0;

    let posX = 0;
    let posY = 0;

    $(document).on("mousemove", function (event) {

        if (init) {

            posX -= startX;
            posY -= startY;

            for (let i = 0; i < starCount; i++) {
                $(`#star-${i}`).css({
                    'left': stars[i].x - posX * (stars[i].weight),
                    'top': stars[i].y - posY * (stars[i].weight)
                })
            }


        } else {
            startX = event.pageX;
            startY = event.pageY;
        }

        posX = event.pageX;
        posY = event.pageY;

        init = true;
    })


    // initialize animation here, so noscript doesn't break images
    $('.about__image-right').css({
        'right': '-1000px'
    })
    $('.about__image-left').css({
        'opacity': '0'
    })

    function checkScroll(scrollPos) {

        // trigger slide in for about section images
        if (scrollPos >= 800) {
            $('.about__image-right').css({
                'right': '0px',
                'transition': 'right 0.6s ease-in'
            })
            $('.about__image-left').css({
                'opacity': '1',
                'transition': 'opacity 0.8s ease-in'
            })
        }
    }

    checkScroll($(document).scrollTop())

    let isClicked = false;

    $(document).on("scroll", function () {
        let scrollPos = $(document).scrollTop();
        checkScroll(scrollPos);
    })

    $(window).on("resize", function () {
        $('.featured__title').fitText(0.7)
        $('.featured__new').fitText(1.1)
    })


    $('.featured__title').fitText(0.7)
    $('.featured__new').fitText(1.1)

    $('.featured').on("mouseenter", function () {

        $('.featured__img', this).css({
            'filter': 'url(#sharpBlur)',
            'transition': '2s ease'
        })

        $('.featured__description', this).css({
            'display': 'block'
        })
        $('.featured__description', this).animate({
            'opacity': '100%'
        }, 200, function () {})

        $('.featured__title', this).animate({
            'top': '-15%',
            'text-shadow': '5px 4px black',
            'line-height': '80%'
        }, 250, function () {
            $('.featured__title').fitText(0.7)
        });

        $('.featured__new', this).animate({
            'opacity': '0%'
        }, 200, function () {
            $('.featured__new', this).css({
                'display': 'none'
            })
        })

        $('.featured__separator', this).css({
            'display': 'block'
        })
        $('.featured__separator', this).animate({
            'width': '90%'
        }, 250, function () {})

        $('.featured__cta, .featured__cta-border', this).css({
            'display': 'block'
        })
        $('.featured__cta, .featured__cta-border', this).animate({
            'opacity': '100%'
        }, 200, function () {})
    })

    $('.featured').on("mouseleave", function () {

        $('.featured__img', this).css({
            'filter': 'none'
        })

        $('.featured__description', this).animate({
            'opacity': '0%'
        }, 200, function () {
            $('.featured__description', this).css({
                'display': 'none'
            })
        })

        $('.featured__title', this).animate({
            'top': '5%',
            'line-height': '110%'
            // 'font-size': '88px'
        }, 250, function () {});

        $('.featured__new', this).css({
            'display': 'block'
        })
        $('.featured__new', this).animate({
            'opacity': '100%'
        }, 200, function () {})

        $('.featured__separator', this).animate({
            'width': '0%'
        }, 150, function () {
            $('.featured__separator', this).css({
                'display': 'none'
            })
        })

        $('.featured__cta, .featured__cta-border', this).animate({
            'opacity': '0%'
        }, 150, function () {
            $('.featured__cta .featured__cta-border', this).css({
                'display': 'none'
            })
        })
    })
})
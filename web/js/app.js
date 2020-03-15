$(function () {

    var starCount = 30;

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
        // star parallax multiplier
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

    // let initial = $('window').scrollTop();

    // let update;

    // $(document).on("scroll", function () {
    //     update = $(window).scrollTop();
    //     console.log(update - initial)
    //     for (let i = 0; i < starCount; i++) {
    //         $(`#star-${i}`).css({
    //             'top': `${stars[i].y - (update- initial * 10)}px}`
    //         })
    //     }
    //     initial = $(window).scrollTop();
    // })
})
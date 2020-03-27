$(function () {

    // Code to dynamically change videography display items and adjust parent's height


    let items = 4;
    let currentItems = items;

    $('.view-more-button').css({
        'top': `calc(${$('.featured:nth-child(4)').position().top + $('.featured__img').height()}px + 5%)`
    })

    if ($(window).width() >= 1000) {
        $('.section--videography').css({
            'height': `calc(${(currentItems / 2 + 1) * $('.featured__img').height()}px + 10%)`
        })
    } else {
        $('.section--videography').css({
            'height': `calc(${(currentItems + 1) * $('.featured__img').height()}px + 2%)`
        })
    }
    $(`.featured:nth-child(-n + ${currentItems})`).css({
        'opacity': '1'
    })

    $('.view-more-button').on("click", function () {


        if (currentItems < $('.videography-container').children().length) {
            currentItems += items;
            $(`.featured:nth-child(-n + ${currentItems})`).css({
                'display': 'block'
            })
            $(`.featured:nth-child(-n + ${currentItems})`).animate({
                'opacity': '1'
            }, 600)

            $('.view-more-button').css({
                'top': `calc(${$(`.featured:nth-child(${currentItems})`).position().top + $('.featured__img').height()}px + 3%)`
            })

            if ($(window).width() >= 1000) {
                $('.section--videography').css({
                    'height': `calc(${(currentItems / 2 + 1) * $('.featured__img').height()}px + 10%)`
                })
            } else {
                $('.section--videography').css({
                    'height': `calc(${(currentItems + 1) * $('.featured__img').height()}px + 5%)`
                })
            }

            if (currentItems >= $('.videography-container').children().length) {
                $('.view-more-button').css({
                    'visibility': 'hidden'
                })
            }
            $('.featured__title').fitText(0.7)
            $('.featured__new').fitText(1.1)
        }
    })
})
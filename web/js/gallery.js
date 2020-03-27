$(function () {
    $carousel = new Flickity(('.player-carousel'), {
        wrapAround: true,
        dragThreshold: 10,
        cellSelector: ".player",
        hash: true,
        pageDots: false,
        arrowShape: {
            x0: 10,
            x1: 45,
            y1: 25,
            x2: 80,
            y2: 50,
            x3: 55
        }
    })
})
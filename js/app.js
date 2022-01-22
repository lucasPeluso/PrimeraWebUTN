window.addEventListener('load', function(){
    new Glider(document.querySelector('.carousel-lista'), {
        slidesToShow: 1,
        arrows: {
            prev: '.btn-left',
            next: '.btn-right'
        }
    });
});
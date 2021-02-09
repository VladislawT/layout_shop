$(document).ready(function () {


    $('.menu__icon').click(function (event) {
        $('.menu__icon, .menu__body').toggleClass('active');
        $('body').toggleClass('lock');
    });



    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        let menuParents = document.querySelectorAll('.menu-page__parent>a');

        for (let index = 0; index < menuParents.length; index++) {
            const menuParent = menuParents[index];
            menuParent.addEventListener("click", function (e) {
                menuParent.parentElement.classList.toggle('_active');

                e.preventDefault();
            });
        }

    } else {
        let menuParents = document.querySelectorAll('.menu-page__parent');

        for (let index = 0; index < menuParents.length; index++) {
            const menuParent = menuParents[index];
            menuParent.addEventListener("mouseenter", function (e) {
                menuParent.classList.add('_active');
            });

            menuParent.addEventListener("mouseleave", function (e) {
                menuParent.classList.remove('_active');
            });
        }
    }



    let menuPageBurger = document.querySelector('.menu-page__burger');
    let menuPageBody = document.querySelector('.menu-page__body');

    menuPageBurger.addEventListener("click", function (e) {
        menuPageBurger.classList.toggle('_active');
        // menuPageBody.classList.toggle('_active');
        $('.menu-page__body').slideToggle();
    });

    let searchSelect = document.querySelector('.search-page__title');
    let catgoriesSearch = document.querySelector('.categories-search');

    searchSelect.addEventListener("click", function (e) {
        searchSelect.classList.toggle('_active');
        $('.categories-search').slideToggle();
    });

    let checkboxCategories = document.querySelectorAll('.categories-search__checkbox');

    for (let index = 0; index < checkboxCategories.length; index++) {
        const checkboxCategoriey = checkboxCategories[index];
        checkboxCategoriey.addEventListener("click", function (e) {
            checkboxCategoriey.classList.toggle('_active');


            let checkboxActiveCategories = document.querySelectorAll('.categories-search__checkbox._active');

            if (checkboxActiveCategories.length > 0) {
                searchSelect.classList.add('_categories');
                let searchQuantity = document.querySelector('.search-page__quantity');
                searchQuantity.innerHTML = searchQuantity.getAttribute('data-text') + ' ' + checkboxActiveCategories.length;
            } else {
                searchSelect.classList.remove('_categories');
            }
        });

    }



    if (document.querySelector('.mainslider__body')) {
        $('.mainslider__body').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: false,
            nextArrow: false,
            infinite: true,
            dots: true,
            dotsClass: "my-dots",
            // responsive: [
            //   {
            //     breakpoint: 1210,
            //     settings: {
            //       slidesToShow: 3,
            //     }
            //   },
            //   {
            //     breakpoint: 900,
            //     settings: {
            //       slidesToShow: 2,
            //       centerMode: true,
            //     }
            //   },
            //   {
            //     breakpoint: 720,
            //     settings: {
            //       slidesToShow: 1,
            //       centerMode: true,
            //     }
            //   },
            //   {
            //     breakpoint: 426,
            //     settings: {
            //       slidesToShow: 1,
            //       centerMode: false,
            //     }
            //   }
            // ]
        });
    };

    if (document.querySelector('.products-slider__item')) {

        $('.products-slider__item').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '.products-slider__arrow-prev',
            nextArrow: '.products-slider__arrow-next',
            infinite: true,
            // responsive: [
            //   {
            //     breakpoint: 1210,
            //     settings: {
            //       slidesToShow: 3,
            //     }
            //   },
            //   {
            //     breakpoint: 900,
            //     settings: {
            //       slidesToShow: 2,
            //       centerMode: true,
            //     }
            //   },
            //   {
            //     breakpoint: 720,
            //     settings: {
            //       slidesToShow: 1,
            //       centerMode: true,
            //     }
            //   },
            //   {
            //     breakpoint: 426,
            //     settings: {
            //       slidesToShow: 1,
            //       centerMode: false,
            //     }
            //   }
            // ]
        });

        $(".products-slider__info-all p").text($(".products-slider__item").slick("getSlick").slideCount);

        $(".products-slider__item").on("afterChange", function (event, slick, currentSlide, nextSlide) {
            $(".products-slider__info-corrent p").text(currentSlide + 1);
        });
    };

    if (document.querySelector('.brands-slider__body')) {
        $('.brands-slider__body').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            prevArrow: '.brands-slider__arrow-prev',
            nextArrow: '.brands-slider__arrow-next',
            infinite: true,
            responsive: [{
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
    };

    $('.section-filter__title').click(function (event) {
        $(this).toggleClass('_active');
    });

    const priseSlider = document.querySelector('.price-filter__slider');

    noUiSlider.create(priseSlider, {
        start: [0, 200000],
        connect: true,
        tooltips: [wNumb({decimals: 0}), wNumb({decimals: 0})],
        range: {
            'min': [0],
            'max': [200000]
        }
    });



    const priseStart = document.getElementById('prise-start');
    const priseEnd = document.getElementById('prise-end');
    priseStart.addEventListener('change', setPriceValues);
    priseEnd.addEventListener('change', setPriceValues);
    
    function setPriceValues(){
        let priseStartValue;
        let priseEndValue;
        if(priseStart.value != ''){
            priseStartValue = priseStart.value;
        }
        if(priseEnd.value != ''){
            priseEndValue = priseEnd.value;
        }

        priseSlider.noUiSlider.set([priseStartValue,priseEndValue]);
    }

        const filterTitle = document.querySelector('.filter__title');

        filterTitle.addEventListener("click", function(e){
            filterTitle.classList.toggle('_active');
            $('.filter__content').slideToggle();
        })

        $('.view-catalog__item_grid').click(function (event) {
            $(this).toggleClass('_active');
        });

        $('.view-catalog__item_list').click(function (event) {
            $(this).toggleClass('_active');
        });
});
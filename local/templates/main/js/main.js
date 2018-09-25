$(document).ready(function(){
    /*--Определение двайса--*/
    var state = {
        _device: "",
        _mobInit: function(){
            runMobile();
        },
        _tabletInit: function() {
            runTablet();
        },
        _descInit: function() {
            runDesctop();
        },
        _preWindowWidth: $(window).width(),
        _windowIncreases: function() {
            if(state._preWindowWidth > $(window).width()){
                state._preWindowWidth = $(window).width();
                return false;
            } else if (state._preWindowWidth < $(window).width()){
                state._preWindowWidth = $(window).width();
                return true;
            }
        }
    };

    (function( $ ) {
        $.fn.getDevice = function(braikPointMob,braikPointTablet) {
            Object.defineProperty(state, "device", {

                get: function() {
                    return this._device;
                },

                set: function(value) {
                    this._device = value;
                    if(value == "desctop"){
                        state._descInit();

                    } else if (value == "tablet"){
                        state._tabletInit();
                    } else if (value == "mobile"){
                        state._mobInit();
                    }
                }
            });

            $(this).on("resize load", function(){
                if($(this).width() < braikPointMob && state.device != "mobile"){
                    state.device = "mobile";
                } else if($(this).width() > braikPointMob && $(this).width() < braikPointTablet && state.device != "tablet") {
                    state.device = "tablet";
                }
                else if ($(this).width() > braikPointTablet && state.device != "desctop") {
                    state.device = "desctop";
                }
            });
        };
    })(jQuery);

    function runMobile(){

    }

    function runTablet(){

    }

    function runDesctop(){

    }

    $(window).getDevice(576,1200);

    $('.js-std-slider').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        infinite: false,
        dots: true
    });

    $('.js-product-slider').slick({
        dots: true,
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        variableWidth: true,
        arrows: true
    });

    $('.js-product-slider').on('init', function(){
        console.log('a2');
        // left
    });
    $('.js-product-slider').wrap('<div class="product-slider-wrap" />');

    $('.js-product-slider .slick-arrow').each(function(i, item){
        $(item).appendTo($(this).closest('.product-slider-wrap'));
    });

    $('.js-news-slider').slick({
        dots: true,
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        variableWidth: true,
        arrows: true
    });

    $('.js-news-slider .slick-arrow').each(function(i, item){
        $(item).appendTo($(this).closest('.news-slider-wrap'));
    });

    $('[data-styler]').styler();

    if($(window).width() > 576){
        $('.js-custom-scroll').mCustomScrollbar();
    }

    $('.js-has-dropdown > a').on('click', function(){
        var parent = $(this).parent();
        if (parent.hasClass('open')){
            parent.removeClass('open');
            parent.find('.dropdown-list').fadeOut(100);
        } else {
            $(".js-has-dropdown").removeClass('open');
            $(".dropdown-list").fadeOut(100);
            parent.addClass('open');
            parent.find('.dropdown-list').fadeIn(100);
        }
    });

    $(document).mouseup(function (e) {
        var container = $(".js-has-dropdown");
        if (container.has(e.target).length === 0){
            container.removeClass('open');
            $('.dropdown-list').fadeOut(100);
        }
    });

    $('.city-selector .dropdown-list').mCustomScrollbar();
    $('.right-city .jq-selectbox__dropdown ul').mCustomScrollbar();

    $('.tabs-nav > li > a').on('click', function(e){
        e.preventDefault();
        $(this).parent().addClass('active').siblings().removeClass('active');
        var activeTab = $(this).attr('href');
        $(activeTab).fadeIn(300).siblings().fadeOut(300);
    });

    $('.tabs-nav > .active > a').click();

    $('.js-toggle-hours').on('click', function(){
       $(this).closest('.one-place').toggleClass('open').find('.open-hours').slideToggle();
    });

    $('.mobile-home-slider').slick({
        slidesToShow: 1,
        centerMode: true,
        arrows: false,
        dots: true
    });

    $('.js-open-map').on('click', function(){
        $('.map-search-cont').addClass('showmap');

        $('.js-view-all').parent().hide();
    });

    $('.js-close-map').on('click', function(){
        $('.map-search-cont').removeClass('showmap');

        $('.js-view-all').parent().show();
    });

    $('.js-view-all').on('click', function(){
        $(this).hide();
        $('.js-custom-scroll').css({
            'padding': '15px 0 15px 20px'
        }).mCustomScrollbar();
    });

});
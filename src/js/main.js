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
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        variableWidth: true,
        arrows: true
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

    $('div.js-cat-checkbox, label.js-cat-checkbox').on('click', function(){
        if($(this).find('input[type=checkbox]').is( ":checked" )){
            $(this).closest('li').addClass('selected');
        } else {
            $(this).closest('li').removeClass('selected');
        }
    });

    $('.std-dropdown-list').mCustomScrollbar();

    $('.std-dropdown-link').on('click', function(){
        var parent = $(this).closest('.std-dropdown');

        if (parent.hasClass('open')){
            parent.removeClass('open');
            parent.find('.std-dropdown-list').fadeOut(150);
        } else {
            parent.addClass('open');
            parent.find('.std-dropdown-list').fadeIn(150);
        }
    });

    $(document).mouseup(function (e) {
        var container = $(".std-dropdown");
        if (container.has(e.target).length === 0){
            $('.std-dropdown.open').removeClass('open');
            $('.std-dropdown-list').fadeOut(100);
        }
    });

    $('.js-toggle-filter').on('click', function(){
        var parent = $(this).closest('.filter-block');

        if (parent.hasClass('open')){
            parent.removeClass('open');
            parent.find('.filter-block-cont').slideUp({ duration: 600, easing: "easeOutCubic" });
        } else {
            parent.addClass('open');
            parent.find('.filter-block-cont').slideDown({ duration: 600, easing: "easeOutCubic" });
        }

    });

    $('.js-toggle-category').on('click', function(){
        var parent = $(this).closest('li');

        if (parent.hasClass('open')){
            parent.removeClass('open');
            parent.find('.filter-dropdown').slideUp({ duration: 600, easing: "easeOutCubic" });

        } else {
            parent.addClass('open');
            parent.find('.filter-dropdown').slideDown({ duration: 600, easing: "easeOutCubic" });
        }
    });
    $('.filter-list li.open .filter-dropdown').show();

    $('[data-items-show]').each(function(i, item){
        var itemsShowCount = +$(this).attr('data-items-show');
        var listHeight = 0;

        for(var j = 0; j < itemsShowCount; j++){
            listHeight += $(this).find('.filter-list > li').eq(j).outerHeight(true);
        }
        $(item).find('.filter-list').css({
            'max-height': listHeight + 'px'
        });

    });
    $('.js-show-all').on('click', function(){
        var parent = $(this).closest('.filter-block');
        var toggle = $(this).attr('data-toggle-variant');

        if (parent.hasClass('show-all')){
            parent.removeClass('show-all');
        } else {
            parent.addClass('show-all');
        }
        $(this).attr('data-toggle-variant', $(this).text() );
        $(this).text(toggle);
    });

    /*-- модалка выбрать на карте --*/
    $('.js-view-on-map').on('click', function(){
        $('#show-on-map').modal({
            fadeDuration: 100
        });
    });
    /*-- конец модалка выбрать на карте --*/

    /*-- модалка Авторизация --*/
    $('.js-sign-in').on('click', function(){
        $('#sign-in').modal({
            fadeDuration: 200
        });
    });
    /*-- конец модалка Авторизация --*/

    // Подписка маска футер
    $('.js-subscribe-in').mask('(099)-999-99-99');


});
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
    $('.sel-wrap .jq-selectbox__dropdown ul').mCustomScrollbar();

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
        $(activeTab).fadeIn(300).siblings().hide();
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
            'overflow': 'auto'
        });
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

    function countItemsShow() {
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
    }

    countItemsShow();

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

    // Открыть\закрыть фильтры
    $('.js-open-filters').on('click', function(){
        $('.js-catalog-filter').modal({
            fadeDuration: 100
        });
    });
    $('.js-catalog-filter').on($.modal.OPEN, function(event, modal) {
        countItemsShow();
    });

    /*-- Слайдер Линзы каталог --*/

    $('.js-lenses-nav').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        dots: false,
        centerMode: false,
        arrows: true,
        infinite: false,
        prevArrow: "<a class='fa fa-angle-left'></a>",
        nextArrow: "<a class='fa fa-angle-right'></a>",
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }
        ]

    });

    $('.js-hover-color').hover(function(){
        var parent = $(this).closest('.img-slider-wrap');
        var imgSrc = $(this).attr('data-src');
        var oldImgSrc = parent.find('.colors-img-cont img').attr('src');
        parent.attr('data-src', oldImgSrc);
        parent.find('.colors-img-cont img').remove();
        var wrap = parent.find('.colors-img-cont').append(
            '<img src=' + imgSrc + '>'
        );
        wrap.find('img').hide().fadeIn(150);
    }, function(){
        var parent = $(this).closest('.img-slider-wrap');
        var img = parent.attr('data-src');
        $(this).closest('.img-slider-wrap').find('.colors-img-cont img').remove();
        parent.find('.colors-img-cont').append(
            '<img src=' + img + '>'
        );
    });

    /*-- конец Слайдер Линзы каталог --*/

    $('.lenses-buy label').on('click', function(){
        var parent = $(this).closest('tr');
        if($(this).find('input[type=radio]').is( ":checked" )){
            parent.siblings().removeClass('selected');
            parent.addClass('selected');
        } else {

        }
    });

    $('.js-datelist input').on('input', function(){
        var parent = $(this).closest('.std-dropdown');
        if($(this).val().length >= 1){
            parent.find('.std-dropdown-list').fadeIn(100);
        } else {
            parent.find('.std-dropdown-list').fadeOut(100);
        }
    });

    $('[data-show-rows]').each(function(i, item){
        var showRowsCount = $(this).attr('data-show-rows');
        $(item).find('tr').each(function(i, item){
            if(i >= showRowsCount){
                $(item).hide();
            }
        });
    });

    $('.js-show-table').on('click', function(){
        var parent = $('.char-table-wrap');
        var toggle = $(this).attr('data-toggle-variant');

        if(parent.hasClass('open')){
            parent.removeClass('open');
            var showRowsCount = parent.attr('data-show-rows');
            parent.find('tr').each(function(i, item){
                if(i >= showRowsCount){
                    $(item).hide();
                }
            });
        } else {
            parent.addClass('open');
            parent.find('tr').show();
        }

        $(this).attr('data-toggle-variant', $(this).text() );
        $(this).text(toggle);

    });

    $('.box-sel label').on('click', function(){
        var parent = $(this).closest('li');
        var check = $(this).find('input[type=radio]');

        if(check.is( ":checked" )){
            parent.siblings().removeClass('selected');
            parent.addClass('selected');
        }
    });

    $('.js-give-feedback').on('click', function(){
        $('#give-feedback').modal({
            fadeDuration: 200
        });
    });

    $('.js-starrr').starrr({
        rating: 0,
        change: function(e, value){
            console.log('rate value: ' + value);
        }
    });

    $('.js-char-link').on('click', function(e){
        e.preventDefault();
        $(this).closest('li').toggleClass('open');
        $(this).closest('li').find('.one-mobile-tab').slideToggle();
    });

    $('.js-glass-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        dots: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    dots: false,
                    arrows: false
                }
            }
        ]
    });

    $('.js-buy-one-click').on('click', function(){
        $('#buy-one-click').modal({
            fadeDuration: 200
        });
    });

    $('.js-select-color').hover(function(){
        var colorName = $(this).attr('data-color-name');
        var colorSrc = $(this).attr('data-hover-src');

        $('.js-color-name').text(colorName);
        $('.js-hover-img').attr('src', colorSrc);
            console.log($(this).attr('data-hover-src'));
    }, function(){
        $('.js-color-name').text('');
        $('.js-hover-img').attr('src', $('.js-hover-img').attr('data-src'));
    });

    $('.js-open-menu').on('click', function(){
        $('#mobile-menu').modal({
            fadeDuration: 150
        });
    });

    $('.js-has-dropdown > a').on('click', function(){
        $(this).toggleClass('open');
        $(this).closest('.js-has-dropdown').find('.mobile-dropdown').slideToggle();
    });

});
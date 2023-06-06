$(window).scroll(function() {
    var headerHeight = $(".header").outerHeight();
    // kiểm tra điều kiện > header thì mới addClass 
    if ($(window).scrollTop() > headerHeight) {
        $('.header').addClass('header-fixed');
    } else {
        $('.header').removeClass('header-fixed');
    }

    //scroll to div
    // if ($(this).scrollTop() >= $('.navigator').offset().top) {
    //     $('.navigator-container').addClass('fixed');
    //     $('.navigator-logo').show();
    // } else {
    //     $('.navigator-container').removeClass('fixed');
    //     $('.navigator-logo').hide();
    // }
});


/* back to top */
var btn = $('#backtotop');

$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, '1000');
});




$(document).ready(function() {

    $("#DepartureDate").flatpickr({
        dateFormat: "d/m/Y"
    });
    $("#datepicker-dept").flatpickr({
        dateFormat: "d/m/Y"
    });
    $("#DepartureDateDestination").flatpickr({
        dateFormat: "d/m/Y"
    });
    $("#DepartureDateOB").flatpickr({
        dateFormat: "d/m/Y"
    });
    $("#date-start-to-end").flatpickr({
        mode: "range",
        dateFormat: "d/m/Y"
    });

    $("#departureID").select2();
    $("#departureIDOB").select2();
    $("#GroupID").select2();
    $("#GroupIDOB").select2();
    $("#DestinationID").select2();



    $(".bar-toggle-menu").click(function() {
        $("#nav-main").toggleClass('show');
        $('body').toggleClass('ov-hidden');
    });

    // $(".close-done").click(function() {
    //     $('.paxCount-dropmain').removeClass('active');
    // });


    // // $('#check-in').datepicker();
    // // $('#check-out').datepicker();
    // $("#checkIn").flatpickr({
    //     dateFormat: "d/m/Y"
    // });
    // $("#checkOut").flatpickr({
    //     dateFormat: "d/m/Y"
    // });

    // $(".menu-toggle .hamButton").click(function() {
    //     $(this).parents('.menu-toggle').children('.block-menu-mobile').toggleClass('open');
    //     $('.hasSubmenu').removeClass('open');
    //     $('.hasSubmenu').children('.submenu').slideUp();
    //     $('body').toggleClass('ov-hidden');

    // });

    // $(".hasSubmenu a").click(function() {
    //     $(this).parents('.hasSubmenu').toggleClass('open');
    //     $(this).parents('.hasSubmenu').children('.submenu').slideToggle();
    // });

    // $(".bar_group").click(function() {
    //     if ($(window).width() < 1023) {
    //         $('.main_nav').slideToggle();
    //     }
    // });


    // $('.header_navhover').hover(function() {
    //     if ($(window).width() > 1024) {
    //         $('.navContent').stop().slideDown("600");
    //     }
    // }, function() {
    //     if ($(window).width() > 1024) {
    //         $('.navContent').stop().slideUp("600");
    //     }
    // })

    $('#tour_detail_tab .select_tab_brow_tour').change(function(e) {
        $('#tour_detail_tab .tab-content .tab-pane').removeClass('active');
        $('#tour_detail_tab .tab-content ' + $(this).val()).addClass('active');
    });






    //hover function
    // $(".menu-left .menu-left__link").mouseover(function() {
    //     $(this).addClass('open').removeClass('unhovered');
    //     $('.menu-left__link').not($(this)).addClass('unhovered');
    // });
    // $(".menu-left .menu-left__link").mouseout(function() {
    //     $(this).removeClass('open');
    // });


    if ($(window).width() > 992) {
        $(document).on("mouseover", ".megamenu .menu-tab-items li", function() {
            var index = $(this).index();
            $(this).siblings().removeClass("active");
            $(this).addClass("active");
            $(".menu-tab-panels>div").removeClass("active");
            $(".menu-tab-panels>div").each(function() {
                if ($(this).index() == index) {
                    $(this).addClass("active");
                }
            });
        });
    } else {
        $(document).on("click", ".megamenu .menu-tab-items li", function() {
            var index = $(this).index();
            $(this).siblings().removeClass("active");
            $(this).addClass("active");
            $(".menu-tab-panels>div").removeClass("active");
            $(".menu-tab-panels>div").each(function() {
                if ($(this).index() == index) {
                    $(this).addClass("active");
                }
            });
        });
    }






    /* search plus minus aduld and child */

    $(".plus-adults").on("click", function() {
        var el = $(this);
        var MAX_PERSON = 9;
        var currentAdults = Number($("#input-number-adults").val());
        if (!el.hasClass("disabled")) {
            if (currentAdults < MAX_PERSON) {
                var currentChilrend = Number($("#input-number-chilrend").val());
                $(".number-adults").html(currentAdults + 1);
                $("#input-number-adults").val(currentAdults + 1);
                if (!$(this).hasClass("plus-adults--flight")) {
                    $("input#person").val(currentAdults +
                        1 +
                        " Người lớn " +
                        (currentChilrend > 0 ? `, ${currentChilrend} Trẻ em` : ""));
                } else {
                    var currentInfant = Number($("#input-number-infant").val());
                    $("input#person").val(currentAdults +
                        1 +
                        " Người lớn " +
                        (currentChilrend > 0 ? `, ${currentChilrend} Trẻ em` : "") +
                        (currentInfant > 0 ? `, ${currentInfant} Em bé` : ""));
                }
            }
        }
    });
    $(".minus-adults").on("click", function() {
        var el = $(this);
        if (!el.hasClass("disabled")) {
            var currentAdults = Number($("#input-number-adults").val());
            var currentChilrend = Number($("#input-number-chilrend").val());
            if (currentAdults > 1) {
                $(".number-adults").html(currentAdults - 1);
                $("#input-number-adults").val(currentAdults - 1);
                if (!$(this).hasClass("minus-adults--flight")) {
                    $("input#person").val(currentAdults -
                        1 +
                        " Người lớn" +
                        (currentChilrend > 0 ? `, ${currentChilrend} Trẻ em` : ""));
                } else {
                    var currentInfant = Number($("#input-number-infant").val());
                    $("input#person").val(currentAdults -
                        1 +
                        " Người lớn" +
                        (currentChilrend > 0 ? `, ${currentChilrend} Trẻ em` : "") +
                        (currentInfant > 0 ? `, ${currentInfant} Em bé` : ""));
                }
            }
        }
    });


    $(".plus-chilrend").on("click", function() {
        var el = $(this);
        var MAX_PERSON = 9;
        var currentChilrend = Number($("#input-number-chilrend").val());
        if (!el.hasClass("disabled")) {
            if (currentChilrend < MAX_PERSON) {
                var currentAdults = Number($("#input-number-adults").val());
                var currentChilrend = Number($("#input-number-chilrend").val());
                var selectsOld = "";
                var options = '<option value="" hidden seleced></option>';
                $(".number-chilrend").html(currentChilrend + 1);
                $("#input-number-chilrend").val(currentChilrend + 1);
                if (!$(this).hasClass("plus-chilrend--flight")) {
                    $("input#person").val(`${currentAdults} Người lớn` +
                        (currentChilrend + 1 >= 1 ? `, ${currentChilrend+1} Trẻ em` : ""));

                } else {
                    var currentInfant = Number($("#input-number-infant").val());
                    $("input#person").val(currentAdults +
                        " Người lớn" +
                        (currentChilrend + 1 >= 1 ? `, ${currentChilrend+1} Trẻ em` : "") +
                        (currentInfant > 0 ? `, ${currentInfant} Em bé` : ""));
                }
            }
        }
    });

    $(".minus-chilrend").on("click", function() {
        var el = $(this);
        if (!el.hasClass("disabled")) {
            var currentAdults = $("#input-number-adults").val();
            var currentChilrend = $("#input-number-chilrend").val();
            if (currentChilrend > 0) {
                $(".number-chilrend").html(Number(currentChilrend) - 1);
                $("#input-number-chilrend").val(Number(currentChilrend) - 1);
                if (!$(this).hasClass("minus-chilrend--flight")) {
                    $("input#person").val(`${currentAdults} Người lớn` +
                        (currentChilrend - 1 > 0 ? `, ${currentChilrend-1} Trẻ em` : ""));

                } else {
                    var currentInfant = Number($("#input-number-infant").val());
                    $("input#person").val(currentAdults +
                        " Người lớn" +
                        (currentChilrend - 1 > 0 ? `, ${currentChilrend-1} Trẻ em` : "") +
                        (currentInfant > 0 ? `, ${currentInfant} Em bé` : ""));
                }
            }
        }
    });


    $(".plus-room").on("click", function() {
        var currentRoom = Number($("#input-number-room").val());
        $(".number-room").html(currentRoom + 1);
        $("#input-number-room").val(currentRoom + 1);
        $("input#room").val(currentRoom + 1 + " phòng");
    });
    $(".minus-room").on("click", function() {
        var currentRoom = Number($("#input-number-room").val());
        if (currentRoom > 1) {
            $(".number-room").html(currentRoom - 1);
            $("#input-number-room").val(currentRoom - 1);
            $("input#room").val(currentRoom - 1 + " phòng");
        }
    });

    //countdown

    jQuery(document).ready(function($) {
        var newYear = '2023' + '/' + '05' + '/' + '24' + ' ' + '15' + ':' + '55' + ':' + '12';
        $('#countdown-time').countdown(newYear, function(event) {
            $(this).html(event.strftime('Còn %D ngày %H:%M:%S'));
        });
    })

    //ranger price

    $("#slider-range").slider({
        range: true,
        min: 0,
        max: 100000,
        values: [0, 50000],
        slide: function(event, ui) {
            $("#amount").val(ui.values[0] + "đ" + " - " + ui.values[1] + "đ");
        }
    });
    $("#amount").val($("#slider-range").slider("values", 0) + "đ" + " - " + $("#slider-range").slider("values", 1) + "đ");


    //collapse
    $(".faqs article .faqs-title").on("click", function() {
        $(this).parents('article').children('.panel').toggleClass('active');
        $('article').children('.panel').not($(this).parents('article').children('.panel')).removeClass('active');
    });


});
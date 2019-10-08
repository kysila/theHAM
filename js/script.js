$('.tabs-title li').click(function () {
   $(this).addClass('active').siblings().removeClass('active');
   const tabContent = $(this).index();
   $('.tab-content').removeClass('tab-active').eq(tabContent).addClass('tab-active');
});

$('#btn').click(function () {
    $('.work-img').removeClass('hide');
    $('#btn').addClass('hide');
});

$('.all').click(function () {
    $('.tabs-images li').removeClass('img-active');
    $(this).addClass('img-active');
    $('.work-img').removeClass('hide');
    $('#btn').addClass('hide');
});

$('.graphic').click(function () {
    $('.tabs-images li').removeClass('img-active');
    $(this).addClass('img-active');
    $('.work-img').addClass('hide');
    $('.graph').removeClass('hide');
    $('#btn').addClass('hide');
});

$('.web-design').click(function () {
    $('.tabs-images li').removeClass('img-active');
    $(this).addClass('img-active');
   $('.work-img').addClass('hide');
   $('.web').removeClass('hide');
    $('#btn').addClass('hide');
});

$('.landing-page').click(function () {
    $('.tabs-images li').removeClass('img-active');
    $(this).addClass('img-active');
    $('.work-img').addClass('hide');
    $('.lp').removeClass('hide');
    $('#btn').addClass('hide');
});

$('.wordpress').click(function () {
    $('.tabs-images li').removeClass('img-active');
    $(this).addClass('img-active');
    $('.work-img').addClass('hide');
    $('.wp').removeClass('hide');
    $('#btn').addClass('hide');
});

// CAROUSEL!!!

$('.prev').click(function () {

    let icon = $('.up');

    $(icon).removeClass('up').prev().addClass('up');
    $('.show').removeClass('show').prev('.member').addClass('show');

    setTimeout(function () {
        $('.show').addClass('animate').next().removeClass('animate');
    }, 100);

    if  ($(icon).is(':first-child')) {
        $(icon).removeClass('up');
        $('.member-icon').last().addClass('up');
        $('.member').last().addClass('show');
        setTimeout(function () {
            $('.member').last().addClass('animate')
        }, 100);
    }
});

$('.next').click(function () {

    let icon = $('.up');

    $(icon).removeClass('up').next().addClass('up');
    $('.show').removeClass('show').next('.member').addClass('show');

    setTimeout(function () {
        $('.show').addClass('animate').prev().removeClass('animate');
    }, 100);

    if  ($(icon).is(':last-child')) {
        $(icon).removeClass('up');
        $('.member-icon').first().addClass('up');
        $('.member').first().addClass('show');
        setTimeout(function () {
            $('.container .member').first().addClass('animate')
        }, 100);
    }

});

$('.member-icon').click(function () {
    let i = $(this).index();
    $(this).addClass('up').siblings().removeClass('up');
    $('.member').eq(i).addClass('show').siblings().removeClass('show');
    setTimeout(function () {
        $('.show').addClass('animate').siblings().removeClass('animate');
    }, 100);
});



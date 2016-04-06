$(document).ready(function(){
    
    $(window).scroll(function () {

        var y = $(this).scrollTop();

        $('.link').each(function (event) {
            if (y >= $($(this).attr('href')).offset().top - 40) {
                $('.link').not(this).parent().removeClass('active');
                $(this).parent().addClass('active');
            }
        });
        $('.sub-link').each(function (event) {
            if (y >= $($(this).attr('href')).offset().top - 40) {
                $('.sub-link').not(this).removeClass('active');
                $(this).addClass('active');
            }
        });
        if (y != 0) {
            $('.year').addClass('scroll');
        } else {
            $('.year').removeClass('scroll');
        }
    });
});
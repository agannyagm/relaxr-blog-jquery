$('document').ready(function () {

    $('.readmore').click(function (e) {
        e.preventDefault();
        $('.readmore').addClass('hide').removeClass('show');
        $('#show-this-on-click').slideDown("slow");
        $("#show-this-on-click").next('.hide').slideDown("slow").removeClass('hide');
        $('#show-this-on-click').focus();

    });
    $('.readless').click(function (e) {
        e.preventDefault();
        $('#show-this-on-click').slideUp("slow");
        $("#show-this-on-click").prev('.hide').addClass('show').removeClass('hide');
        $('.readless').addClass('hide').removeClass('show').slideUp("slow");
        $('#show-this-on-click').focus();

    });
    $('.learnmore').click(function (e) {
        e.preventDefault();
        $('.learnmore').addClass('hide').removeClass('show');
        $('#learnmoretext').slideDown("slow");
        $('#learnmoretext').focus();
    });
});





//$('document').ready(function () {

//    $('.readmore').click(function () {
//        $('.readmore').addClass('hide');
//        $('#show-this-on-click').removeClass('hide').addClass('show').slideDown();
//        $("#show-this-on-click").next('.hide').addClass('show');
//        $("#show-this-on-click").next('.hide').removeClass('hide');
//    });
//    $('.readless').click(function () {
//        $('.readless').removeClass('show').addClass('hide');
//        $('#show-this-on-click').removeClass('show').addClass('hide');
//        $("#show-this-on-click").prev('.hide').addClass('show');
//        $("#show-this-on-click").prev('.hide').removeClass('hide');
//    });
//});


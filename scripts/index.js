$(document).ready(function () {

    //главный код
    $('.girl-block .delete-girl').click(function(){
        $(this).closest('.girl-block').remove();
    });

    $('.girl-block .image-block').click(function(){
        $(this).toggleClass('big-image');
    });

    $('[name=sex]').change(function(){
        var selectedSex = $('[name=sex]:checked').val();
        if (selectedSex == 'm'){
            $('#bold-yes').removeAttr('disabled');
        }
        if (selectedSex == 'f'){
            $('#bold-yes').attr('disabled', 'disabled');
            $('#bold-no').click();
        }
    });

    $('[name=hair]').change(function(){
        var selectedHair = $('[name=hair]:checked').val();
        if (selectedHair == 'bold'){
            $('.hair-color-block').hide(1000);
        }
        if (selectedHair == 'hair'){
            $('.hair-color-block').show(1000);
        }
    });

    
    $('.pay').click(function () {
        $('.popup').addClass('hide');
    });

    $('.header').click(function () {
        $('.popup').removeClass('hide');
    });

});
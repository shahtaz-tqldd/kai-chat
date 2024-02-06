// CHANGE BACKGROUND 
function handleBgChange(button) {
    var image = $(button).css('background-image');
    $('body').css('background-image', image);

    $('.selected-btn').removeClass('selected-btn');
    $(button).addClass('selected-btn');
}

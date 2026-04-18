$(document).ready(function() {
    // Маска для телефона
    $('#phone-sign-service, #phone-user, #phone-top-header-form').mask('+7 (000) 000-0000');

    // Отправка формы записи
    $('#form-sign-service').on('submit', function(e) {
        e.preventDefault();
        $('#box-message-sign-service').fadeIn().delay(3000).fadeOut();
        $(this).trigger('reset');
    });

    // Отправка формы обратного звонка
    $('#callback-order-modal form').on('submit', function(e) {
        e.preventDefault();
        $('#box-message-top-header-form').fadeIn().delay(3000).fadeOut();
        $(this).trigger('reset');
        $('#callback-order-modal').modal('hide');
    });

    // Отправка формы контактов
    $('.contact-form').on('submit', function(e) {
        e.preventDefault();
        $('#sending-messages').removeClass('d-none').delay(3000).queue(function() {
            $(this).addClass('d-none').dequeue();
        });
        $(this).trigger('reset');
    });

    // Плавная прокрутка
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top - 80
        }, 800);
    });
});

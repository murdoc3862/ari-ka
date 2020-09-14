// - ====================
// - aurinko: ajax
// - ---------------------
// - ajax
// - ====================
$(function () {
    $('.js-ajax form').on('submit', function () {
        var $form = $(this);
        $.ajax({
            url: $form.attr('action'),
            data: $form.serializeArray(),
            success: function () {
                $form[0].reset();
                $form.find('input').removeClass('correct');
            }
        });
        return false;
    });

});

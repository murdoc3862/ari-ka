// - ====================
// - aurinko: calc
// - ---------------------
// - calc
// - ====================
$(function () {
    var calc = function () {
        var akk = $('#accounts-count').val();
        var pm = $('[name="data-sync"]:checked').val();
        var month = akk * pm + 50;
        var year = month * 12;
        $('.js-month-calc').text((new Number(month).toLocaleString('en-US',{style: 'currency', currency: 'USD'})));
        $('.js-quantity-number').text('x'+akk);
        $('.js-quantity-sum').text('$ '+pm+' ');
        $('.js-year-calc').text((new Number(year).toLocaleString('en-US',{style: 'currency', currency: 'USD'})));
    };

    $('[name="accounts"]').on('keydown keyup', function () {
        var $this = $(this);
        var val = parseInt($this.val()).toString();
        $this.val(val.slice(0,3));
    });

    $('#accounts-count, [name="data-sync"], [name="switch"]').on('change blur keyup', calc);

    $('.js-toogle-calc').on('click', function () {
        var $this = $(this);
        $this.toggleClass('active');
        $this.parents('.b-calculator').toggleClass('active');


        if ($this.hasClass('active')) {
            $('.b-calculator__params-wrapper, .b-calculator__summary').slideUp(400,'linear', function () {
                $('.b-calculator__buttons').addClass('active');
            });
        } else {
            $('.b-calculator__params-wrapper, .b-calculator__summary').slideDown(400,'linear', function () {
                $('.b-calculator__buttons').removeClass('active');
            });
        }

    });

});

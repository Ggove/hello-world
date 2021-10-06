(function ($) {
  const $btn = $('.toggle_btn');
  const $body = $('.body');
  const $mask = $('.mask');
  const open = 'open';
  $btn.on('click', function () {
    if (!$body.hasClass(open))
      $body.addClass(open);
    else $body.removeClass(open);
  });
  $mask.on('click', function () {
    $body.removeClass(open);
  });
})(jQuery);
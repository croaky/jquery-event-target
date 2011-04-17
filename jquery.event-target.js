$(function() {
  $("a[data-show]").live('click', function() {
    var showable = $(this).attr('data-show');
    $(showable).show();
    return false;
  });

  $("a[data-hide]").live('click', function() {
    var hideable = $(this).attr('data-hide');
    $(hideable).hide();
    return false;
  });

  $("a[data-focus]").live('click', function() {
    var focusable = $(this).attr('data-focus');
    $(focusable).focus();
    return false;
  });
});

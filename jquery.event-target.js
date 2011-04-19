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

  $("a[data-blur]").live('click', function() {
    var blurable = $(this).attr('data-blur');
    $(blurable).blur();
    return false;
  });

  $("a[data-select]").live('click', function() {
    var selectable = $(this).attr('data-select');
    $(selectable).select();
    return false;
  });

  $("a[data-submit]").live('click', function() {
    var submitable = $(this).attr('data-submit');
    $(submitable).submit();
    return false;
  });

  $("a[data-toggle]").live('click', function() {
    var toggleable = $(this).attr('data-toggle');
    $(toggleable).toggle();
    return false;
  });
});

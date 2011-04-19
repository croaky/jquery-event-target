$ = jQuery

$ ->
  $.each ["show", "hide", "focus", "blur", "select", "submit", "toggle"], (index, event) ->
    $("a[data-#{event}]").live 'click', ->
      target = $(this).attr("data-#{event}")
      $(target)[event]()

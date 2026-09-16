//все, что ведет на НЕ https://dev.moysklad.ru/doc/api/gov-fns) в документации открываются в новой вкладке
$(function () {
  'use strict';
  var url = `${window.location.hostname}/doc/api/gov-fns`;
  $(`a:not([href^="http://${url}"], [href^="https://${url}"], [href^='#'], [href^='/#'])`).attr("target", "_blank");
  $('a[href=""]').removeAttr("target");
})

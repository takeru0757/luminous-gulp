var $ = require('jquery');
var attachFastClick = require('fastclick');

// https://api.jquery.com/jquery-2/
console.log('jQuery version: ' + $.fn.jquery);

// https://github.com/ftlabs/fastclick
$(function () {
  attachFastClick(document.body);
});

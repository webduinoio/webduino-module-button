+(function (window, $) {

  'use strict';

  var $wrapper;
  var blockId;

  var demoButton = function (id) {
    if (!id) {
      throw new Error('Missing parameter.');
    }
    if (typeof id !== 'string') {
      throw new Error('Invalid type of parameter.');
    }

    blockId = '#' + id;

    if ($(blockId).length < 1) {
      var $button = $('<button/>');

      $wrapper = $('<div/>').addClass('demo').attr('id', id);
      $('#demo-container').append($wrapper);
      $wrapper.append($button);
    }
  };

  demoButton.prototype.setButton = function (count) {
    var buttonToCreate = [];

    try {
      var buttonCount = parseInt(count);
    } catch (ex) {
      throw new Error('Invalid parameter.');
    }

    for (var i = 1; i < (buttonCount + 1); i++) {
      var button = $('<button/>')
        .attr('id', 'btn-' + i)
        .text('btn-' + i)
        .addClass('demo-button');
      
      buttonToCreate.push(button);
    }
    $wrapper.html('').append(buttonToCreate);
    return this;
  };

  demoButton.prototype.getButton = function (count) {
    return $wrapper.find('#btn-' + count);
  };

  window.demoButton = demoButton;

}(window, window.jQuery));
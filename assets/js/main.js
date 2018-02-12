var frontEndApp = {

  detectBrowser: function () {
    var userAgent = window.navigator.userAgent;

    if (userAgent.toLowerCase().indexOf('safari') != -1) {
      if (!(userAgent.toLowerCase().indexOf('chrome') > -1)) {
        $('body').addClass('safari')
      }
    } else if (userAgent.toLowerCase().indexOf('firefox') > -1) {
      $('body').addClass('firefox');
    } else if (userAgent.indexOf('MSIE ') > 0) {
      $('body').addClass('ie');
      $('.wow').addClass('animated');
    } else if (userAgent.indexOf('Trident/') > 0) {
      $('body').addClass('ie');
      $('.wow').addClass('animated');
    } else if (userAgent.indexOf('Edge/') > 0) {

    }

  },

  detectMob: function () {
    var userAgent = window.navigator.userAgent;

    if (userAgent.match(/Android/i)
      || userAgent.match(/webOS/i)
      || userAgent.match(/iPhone/i)
      || userAgent.match(/iPad/i)
      || userAgent.match(/iPod/i)
      || userAgent.match(/BlackBerry/i)
      || userAgent.match(/Windows Phone/i)
    ) {
      $('body').addClass('mobile');
    }
  },

  disableHoverOnTouch: function () {
    var touch = 'ontouchstart' in document.documentElement
      || navigator.maxTouchPoints > 0
      || navigator.msMaxTouchPoints > 0;

    if (touch) {
      try {
        for (var si in document.styleSheets) {
          var styleSheet = document.styleSheets[si];
          if (!styleSheet.rules) continue;

          for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
            if (!styleSheet.rules[ri].selectorText) continue;

            if (styleSheet.rules[ri].selectorText.match(':hover')) {
              styleSheet.deleteRule(ri);
            }
          }
        }
      } catch (ex) {
      }
    }
  },

  init: function () {
    var _this = this;

    this.detectBrowser();
    this.detectMob();
    this.disableHoverOnTouch();
  }

};

$(document).ready(function () {
  frontEndApp.init();
});


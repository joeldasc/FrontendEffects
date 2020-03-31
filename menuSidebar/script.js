function App() {
    var me = {
      init: function () {
        var menuOpeners = document.querySelectorAll('.menuSlider');
        if (menuOpeners && menuOpeners.length > 0) {
          for (var i = 0; i < menuOpeners.length; i += 1) {
            var menuOpenerEl = menuOpeners[i];
            menuOpenerEl.addEventListener('click', function (e) {
              e.preventDefault();
              document.documentElement.setAttribute('data-show-menu', 'true');
            });
          }
        }
        var menuClosers = document.querySelectorAll('.main-menu .menu-overlay, .main-menu .menu-close');
        if (menuClosers && menuClosers.length > 0) {
          for (var i = 0; i < menuClosers.length; i += 1) {
            var menuCloserEl = menuClosers[i];
            menuCloserEl.addEventListener('click', function (e) {
              e.preventDefault();
              document.documentElement.removeAttribute('data-show-menu');
            });
          }
        }
      }
    };
    return me;
  };
  
  var app = App();
  app.init();
function App() {
    var me = {
      backgroundImg: function () {
        var parallaxImg = document.getElementsByClassName('dataImagen');
        for (var i = 0; i < parallaxImg.length; i += 1) {
          var imagen = parallaxImg[i].dataset.imagen || '';
          parallaxImg[i].style.backgroundImage = 'url(' + imagen + ')';
        }
      },
      parallaxImage: function () {
        var parallaxImg = document.getElementsByClassName('parallax');
        for (var i = 0; i < parallaxImg.length; i += 1) {
          var posElementWrapp = parallaxImg[i].getBoundingClientRect();
          var heightScreen = window.innerHeight - 50;
          if (posElementWrapp.top < heightScreen) {
            var division = posElementWrapp.top / 5;
            division = Number(division);
            parallaxImg[i].style.backgroundPositionY = (-division) + 'px';
          }
        }
      },
      init: function () {
        me.backgroundImg();
        me.parallaxImage();
        window.onscroll = function () {
          me.parallaxImage();
        }
      }
    };
    return me;
  };
  
  var app = App();
  app.init();
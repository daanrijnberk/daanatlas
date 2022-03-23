 function openNav() {
      document.getElementById("myNav").style.width = "100%";
    }
    
    function closeNav() {
      document.getElementById("myNav").style.width = "0%";
    }
  
    /* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
  }
  


  
  var map = new ol.Map({
    target: 'map',
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ],
    view: new ol.View({
      center: ol.proj.fromLonLat([-73.4562148425872, 3.6234758940051988]),
      zoom: 6
    })
  });


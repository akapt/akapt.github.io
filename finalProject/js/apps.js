//google map code
var map;
function initMap(){
	 map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 40.7128, lng: -74.0059},
          zoom: 12
      });
/*
    marker.addListener('click', function() {
	      map.setZoom(24);
	      map.setCenter(marker.getPosition());
	    }); */
}

initMap();

//store objects


//fish movement code



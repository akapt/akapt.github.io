var map;
function initMap() {

	//google.maps.Map(element, options)
	//40.7128° N, 74.0059° W
	map = new google.maps.Map(document.getElementById('map'), {
	center: {lat: 40.7128, lng: -74.0059},
	zoom: 10
	});

	var marker = new google.maps.Marker({
	  position: {lat: 40.7128, lng: -74.0059},
	  map: map,
	  title: 'nyc'
	});

	var metMarker = new google.maps.Marker({
	  position: {lat: 40.780444, lng: -73.963201}, 
	  map: map,
	  title: 'met'
	});

	  map.addListener('center_changed', function() {
	      // 3 seconds after the center of the map has changed, pan back to the
	      // marker.
	      window.setTimeout(function() {
	        map.panTo(marker.getPosition());
	      }, 3000);
	    });

	    marker.addListener('click', function() {
	      map.setZoom(24);
	      map.setCenter(marker.getPosition());
	    });
}





//turn on map
initMap();
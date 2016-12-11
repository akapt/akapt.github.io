
//google map code
// var map;
// function initMap(){
//   map = new google.maps.Map(document.getElementById('map'), {
//           center: {lat: 40.7128, lng: -74.0059},
//           zoom: 12
//       });

//initializeMap();
/*these pecto locations in NY and NJ, unfortunately open source pecto locations api
there is a limit of of number of free requests this causes only a few of the addresses listed to appear 
so I have commented out the address that go past that limit
*/

var addresses = [
  "815 Hutchinson River Pkwy, Bronx, NY 10465",
  "860 Broadway, New York, NY 10003",
  "805 Columbus Ave, New York, NY 10025",
  "991 2nd Ave, New York, NY 10022",
  "1280 Lexington Ave, New York, NY 10028",
  "815 Hutchinson River Pkwy, Bronx, NY 10465",
  "2475 Broadway, New York, NY 10025",
  "7507 31st Ave, East Elmhurst, NY 11370",
  "159 Columbus Ave, New York, NY 10023",
  "157 Chambers Street, New York, NY 10007",  
  "500 E Sandford Blvd #570, Mt Vernon, NY 10550",
  //"25451 Horace Harding Expy, Little Neck, NY 11362",
  // "9111 Metropolitan Ave, Rego Park, NY 11374",
  // "1155-1157 3rd Ave, New York, NY 10065",
  // "13311 20th Ave, College Point, NY 11356",
  // "193 W 237th St, Bronx, NY 10463",
  // "61-23 190th St, Fresh Meadows, NY 11365",
  // "157-20 Cross Bay Blvd, Howard Beach, NY 11414",
  // "528 Gateway Dr #4, Brooklyn, NY 11239",
  // "2601 86th St, Brooklyn, NY 11223",
  // "31 2nd Ave, New York, NY 10003",
  // "860 Broadway, New York, NY 10003",
  // "81 7th Ave, Brooklyn, NY 11217",
  // "1296 Broadway, Hewlett, NY 11557",
  // "2300 Jericho Turnpike, Garden City Park, NY 11040",
  // "2343 Utica Ave, Brooklyn, NY 11234",
  // "2752 Veterans Rd W, Staten Island, NY 10309",
  // "2795 Richmond Ave, Staten Island, NY 10314",
  // "710 Franklin Ave, Franklin Square, NY 11010",
  // "1610 Avenue Y, Brooklyn, NY 11235",
  // "1750 E Gun Hill Rd, Bronx, NY 10469",
  // "1275 Boston Post Rd, Larchmont, NY 10538",
  // "10 Waterfront Pl, Port Chester, NY 10573",
  // "360 N Bedford Rd, Mt Kisco, NY 10549",
  // "189 Old Country Rd, Carle Place, NY 11514",
  // "164 Rockland Plaza, Nanuet, NY 10954",
  // "2350 Central Park Ave, Yonkers, NY 10710",
  // "806 Sunrise Hwy, Baldwin, NY 11510",
  // "2824 Long Beach Rd, Oceanside, NY 11572",
  // "324 N. Central Ave. South, Hartsdale, NY 10530",
  // "450 N Rte 17, Paramus, NJ 07652",
  // "9 Interstate Shopping Center,Franklin Turnpike, Ramsey, NJ 07446",
  // "450 N Rte 17, Paramus, NJ 07652",
  // "450 Hackensack Ave, Hackensack, NJ 07601",
  // "1 US-46, Totowa, NJ 07512",
  // "780 Rte 3 West, Clifton, NJ 07012",
  // "2698 Route 22 East,Suite A, Union, NJ 07083",
  // "1255 Raritan Rd #140, Clark, NJ 07066",
  // "495 Prospect Ave,#201essex Green Shop'g Ctr, West Orange, NJ 07052",
  // "1391 NJ-35, Middletown, NJ 07748",
  // "Centennial Square, 1333 Centennial Ave, Piscataway Township, NJ 08854",
  // "1701-59,61 Us Rt 22 West,Blue Star Shopping Center, Watchung, NJ 07069",
  // "85 Godwin Ave #23, Midland Park, NJ 07432",
  // "150 NJ-10, East Hanover, NJ 07936",
  // "339 Pompton Ave, Verona, NJ 07044",
  // "18 Teterboro Landing Dr, Teterboro, NJ 07608",
  // "509 NJ-70, Brick, NJ 08723",
  // "141 Tuckahoe Rd #130, Sewell, NJ 08080",
  // "59 Vervalen St, Closter, NJ 07624"
];

  var geocoder;
  var map;
  var address;
  function initialize() {
    geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(40.7128, -74.0059);
    var mapOptions = {
      zoom: 8,
      center: latlng
    }
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
  }
  initialize ();
  function codeAddress(address) {
    geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == 'OK') {
        map.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location
        });
      } else {
        console.log('Geocode was not successful for the following reason: ' + status);
      }
    });
  }
  
  addresses.forEach(function(address){  
    codeAddress(address);  
  });

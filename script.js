var map;
var directionsService;
var directionsRenderer;
var souceAutocomplete;
var destAutocomplete;

function initMap(){
    map = new google.maps.Map(document.getElementById("map"),{
        center: { lat: 37.7749, lng: -122.4194 },
        zoom: 13,
    });
    google.maps.event.oddListener(map, "click", function (event) {
        this.setOptions({ scrollwheel: true});
    });
    directionsService = new google.maps.DirectionsService();
    directionsRenderer = new google.maps.directionsRenderer();
    directionsRenderer.setMap(map);

    sourceAutoComplete = new google.maps.places.AutoComplete(
        document.getElementById("source")
    );
    destAutocomplete = new google.maps.places.Autocomplete(
        document.getElementById("dest")
    );
}
 function colcRoute() {
    var source = document.getElementById("source").value;
    var dest = document.getElementById("dest").value;
    var request = {
        origin: source,
        destination: dest,
        travelMode: "DRIVING",
    };
    directionsService.route(request, function (result, status) {
        if (status == "OK") {
            directionsRenderer.setDirections(result);
        }
    });
 }

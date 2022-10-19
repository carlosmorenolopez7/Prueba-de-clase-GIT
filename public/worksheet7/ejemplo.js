navigator.geolocation.getCurrentPosition(obtenerPosicion);

var latitud=52.5;
var longitud=13.4;
function obtenerPosicion(pos) {
    latitud = pos.coords.latitude;
    longitud = pos.coords.longitude;

    var platform = new H.service.Platform({
        'apikey': 'eiHXnS1PWKPV0n6SfJs3xqM5YQjVMTIB1gCw1HI0cDM'
    });

    var defaultLayers = platform.createDefaultLayers();

    var map = new H.Map(
        document.getElementById('mismapas'),
        defaultLayers.vector.normal.map,
        {
        zoom: 15,
        center: { lat: latitud, lng: longitud }
    });

    //Ejercicio distancia
    var targetElement = document.getElementById('mismapas');
    var routingParameters = {
    'routingMode': 'fast',
    'transportMode': 'car',
    'origin': latitud+ "," +longitud,
    'destination': '52.5309916298853,13.3846220493377',
    'return': 'polyline'
    };

    var onResult = function(result) {
    if (result.routes.length) {
        result.routes[0].sections.forEach((section) => {
            let linestring = H.geo.LineString.fromFlexiblePolyline(section.polyline);
            let routeLine = new H.map.Polyline(linestring, {
            style: { strokeColor: 'blue', lineWidth: 3 }
            });
            let startMarker = new H.map.Marker(section.departure.place.location);
            let endMarker = new H.map.Marker(section.arrival.place.location);
            map.addObjects([routeLine, startMarker, endMarker]);
            map.getViewModel().setLookAtData({bounds: routeLine.getBoundingBox()});
        });
    }
    };
    var router = platform.getRoutingService(null, 8);
    router.calculateRoute(routingParameters, onResult,
    function(error) {
        alert(error.message);
    });

    //Ejercicio devolver address
    var service = platform.getSearchService();
    service.reverseGeocode({
    at: latitud+ "," +longitud
    }, (result) => {
    result.items.forEach((item) => {
        console.log(item.address.label)
        });
    });
    
}
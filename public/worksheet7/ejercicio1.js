navigator.geolocation.getCurrentPosition(cb);
navigator.geolocation.watchPosition(cb);

function cb(pos) {
    document.write(pos,coords,latitude + "<br>")
}


function currentLocation(geolocation) {
    if(geolocation in navigator) {
        return alert(pos,coords,latitude + "<br>");
    }
    else {
        return alert("Tu navegador no soporta el acceso a la ubicación. Intenta con otro");
    }
}


function constantLocation(geolocation) {
    if(geolocation in navigator) {
        return alert(pos,coords,latitude + "<br>");
    }
    else {
        return alert("Tu navegador no soporta el acceso a la ubicación. Intenta con otro");
    }
}

/*
const funcionInit = () => {
	if (!"geolocation" in navigator) {
		return alert("Tu navegador no soporta el acceso a la ubicación. Intenta con otro");
	}

	const onUbicacionConcedida = ubicacion => {
		console.log("Tengo la ubicación: ", ubicacion);
	}
  
	const onErrorDeUbicacion = err => {
		console.log("Error obteniendo ubicación: ", err);
	}

	const opcionesDeSolicitud = {
		enableHighAccuracy: true, // Alta precisión
		maximumAge: 0, // No queremos caché
		timeout: 5000 // Esperar solo 5 segundos
	};
	// Solicitar
	navigator.geolocation.getCurrentPosition(onUbicacionConcedida, onErrorDeUbicacion, opcionesDeSolicitud);
}
*/


constantLocation();
currentLocation();
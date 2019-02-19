export default class MarkerManager{
    constructor(map){
        this.map = map;
        this.markers = {};  
    }

    updateMarkers(benches){
        const benchesObj = {};
        benches.forEach(bench => benchesObj[bench.id] = bench);

        benches
            .filter(bench => !this.markers[bench.id])  // get every bench not in markers
            .forEach(newBench => this.createMarkerFromBench(newBench)); // create new marker for each bench not in list
        

        Object.keys(this.markers)
            .filter(benchId => !benchesObj[benchId]) // get all existing markers not in benches object
            .forEach(benchId => this.removeMarker(this.markers[benchId])); // then delete each marker
        }   

    createMarkerFromBench(bench){
        const pos = new google.maps.LatLng(bench.lat, bench.lng);
        this.markers[bench.id] = new google.maps.Marker({
            position: pos,
            map: this.map,
            benchId: bench.id
        });
    }

    removeMarker(marker){
        this.markers[marker.benchId].setMap(null); // remove from map
        delete this.markers[marker.benchId]; // delete from markers obj
    }
}




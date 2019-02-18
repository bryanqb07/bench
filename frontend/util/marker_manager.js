export default class MarkerManager{
    constructor(map){
        this.map = map;
        this.markers = {};  
    }

    updateMarkers(benches){
        if(benches){
            Object.values(benches).forEach(bench => {
                if (!this.markers[bench.id]) {
                    this.createMarkerFromBench(bench);
                }
            });
        }
    }

    createMarkerFromBench(bench){
        const pos = new google.maps.LatLng(bench.lat, bench.lng);
        this.markers[bench.id] = new google.maps.Marker({
            position: pos,
            map: this.map
        });
    }
}




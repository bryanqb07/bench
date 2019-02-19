import React from 'react';
import ReactDOM from 'react-dom';
import MarkerManager from '../../util/marker_manager';

class BenchMap extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        const mapOptions = {
            center: { lat: 37.7758, lng: -122.435 }, // this is SF
            zoom: 13
        };
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        this.MarkerManager = new MarkerManager(this.map);
        this.MarkerManager.updateMarkers(this.props.benches);
        this.listenForMove();
    }

    listenForMove(){
        google.maps.event.addListener(this.map, 'idle', () =>{
            const {north, south, east, west} = this.map.getBounds().toJSON();
            // window.testfilter = {
            //     bounds: {
            //         southWest: { lat: 37.77, lng: -122.45 },
            //         northEast: { lat: 37.78, lng: -122.43 }
            //     }
            // };

            const bounds = {
                southWest: { lat: south, lng: west },
                northEast: { lat: north, lng: east }
            };
            this.props.updateFilter('bounds', bounds);
        });
    }

    componentDidUpdate() {
        this.MarkerManager.updateMarkers(this.props.benches);
    }

    render(){
        return(
            <div id="map-container" ref={map => this.mapNode = map}>
            </div>
        )
    }
}

export default BenchMap;
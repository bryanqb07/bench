import React from 'react';
import MarkerManager from '../../util/marker_manager';
import { withRouter } from 'react-router-dom';

class BenchMap extends React.Component{
    constructor(props){
        super(props);
        this.multipleBenches = Array.isArray(this.props.benches);
    }

    componentDidMount(){
        const mapOptions = this.multipleBenches ? {
            center: { lat: 37.7758, lng: -122.435 }, // this is SF
            zoom: 13
        } : {
            center : { lat: this.props.benches.lat, lng: this.props.benches.lng },
            zoom: 13,
            draggable: false
        };

        this.map = new google.maps.Map(this.mapNode, mapOptions);
        this.MarkerManager = new MarkerManager(this.map);
        this.MarkerManager.updateMarkers(this.props.benches, this.multipleBenches);

        if (this.multipleBenches){
            this.addListeners();
        }   
    }

    addListeners(){
        google.maps.event.addListener(this.map, 'idle', () =>{
            const {north, south, east, west} = this.map.getBounds().toJSON();
            const bounds = {
                southWest: { lat: south, lng: west },
                northEast: { lat: north, lng: east }
            };
            this.props.updateFilter('bounds', bounds);
        });

        google.maps.event.addListener(this.map, 'click', (e) => {
            this.props.history.push({
                pathname: "benches/new",
                search: `lat=${e.latLng.lat()}&lng=${e.latLng.lng()}`
            });
        });
    }

    componentDidUpdate() {
        this.MarkerManager.updateMarkers(this.props.benches, this.multipleBenches);
    }

    render(){
        return(
            <div id="map-container" ref={map => this.mapNode = map}>
            </div>
        )
    }
}

export default withRouter(BenchMap);
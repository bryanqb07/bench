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
        this.MarkerManager.updateMarkers(Object.values(this.props.benches));
        this.listenForMove();
    }

    listenForMove(){
        console.log(this.props);
        google.maps.event.addListener(this.map, 'idle', () =>{
            const bds = this.map.getBounds();
            // window.testfilter = {
            //     bounds: {
            //         southWest: { lat: 37.77, lng: -122.45 },
            //         northEast: { lat: 37.78, lng: -122.43 }
            //     }
            // };


            const bounds = {
                southWest: {
                        lat: bds.getSouthWest().lat(),
                        lng: bds.getSouthWest().lng()},
                northEast: {
                        lat: bds.getNorthEast().lat(),
                        lng: bds.getNorthEast().lng(),
                    }
            };
            
            this.props.updateBounds(bounds);

        });
    }

    componentDidUpdate(prevProps) {
        if (this.props.benches !== prevProps.benches) {
            this.MarkerManager.updateMarkers(Object.values(this.props.benches));
        }
    }

    render(){
        return(
            <div id="map-container" ref={map => this.mapNode = map}>
            </div>
        )
    }
}

export default BenchMap;
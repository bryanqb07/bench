import React from 'react';
import BenchIndexItem from './bench_index_item';

class BenchIndex extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchBenches();
    }
    render(){
        const benches = Object.values(this.props.benches);
        const benchList = benches ? 
            benches.map(bench => <BenchIndexItem bench={bench} key={bench.id}/>) 
        : "";

        return(
            <ul>Benches
                { benchList }
            </ul>
        )
    }
}

export default BenchIndex;
import React from 'react';
import BenchIndexItem from './bench_index_item';
import BenchMap from './bench_map';
import { Link } from 'react-router-dom';


class BenchShow extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchBench(this.props.bench.id);
    }

    render(){
        const bench = this.props.bench;

        return(
            <div className="content-wrapper">
                <BenchMap benches={bench} />
                <ul> <span>Bench Details</span>
                     <br/>
                    <BenchIndexItem bench={bench} />
                </ul>
                <ul><span>Reviews</span>
                    <br />
                </ul>
                <div>
                    <Link to="/">Return to Bench Index</Link>
                </div>
            </div>
        )
    }

}

export default BenchShow;

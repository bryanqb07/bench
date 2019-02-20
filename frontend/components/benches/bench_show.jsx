import React from 'react';
import BenchIndexItem from './bench_index_item';
import BenchMap from './bench_map';
import { Link } from 'react-router-dom';
import ReviewIndex from '../reviews/review_index';


class BenchShow extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchBench(this.props.bench.id);
    }

    render(){
        const bench = this.props.bench;
        const reviews = this.props.reviews;
        const authors = this.props.authors;

        return(
            <div className="content-wrapper">
                <BenchMap benches={bench} />
                <ul> <b>Bench Details</b>
                     <br/>
                    <BenchIndexItem bench={bench} />
                </ul>
                <ul><b>Reviews</b>
                    <br />
                    <ReviewIndex reviews={reviews} authors={authors}/>
                </ul>
                <div>
                    <Link to="/">Return to Bench Index</Link>
                </div>
            </div>
        )
    }

}

export default BenchShow;

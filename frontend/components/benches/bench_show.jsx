import React from 'react';
import BenchIndexItem from './bench_index_item';
import BenchMap from './bench_map';
import { Link } from 'react-router-dom';
import ReviewIndex from '../reviews/review_index';
import ReviewForm from '../reviews/review_form';


class BenchShow extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchBench(this.props.bench.id);
    }

    componentDidUpdate(prevProps){
        if(prevProps.reviews.join !== this.props.reviews.join){
            this.props.fetchBench(this.props.bench.id);
        }
    }

    render(){
        const bench = this.props.bench;
        const reviews = this.props.reviews;
        const authors = this.props.authors;
        const postReview = this.props.postReview;

        return(
            <div className="content-wrapper">
                <BenchMap benches={bench} />
                <ul> <b>Bench Details</b>
                     <br/>
                    <BenchIndexItem bench={bench} />
                </ul>
                <div className="Review Section">
                    <ul><b>Reviews</b>
                        <br />
                        <ReviewIndex reviews={reviews} authors={authors}/>
                    </ul>
                    <h3>Leave a Review!</h3>
                    <ReviewForm postReview={postReview}
                                bench={bench}/>
                </div>
                <div>
                    <Link to="/">Return to Bench Index</Link>
                </div>
            </div>
        )
    }

}

export default BenchShow;

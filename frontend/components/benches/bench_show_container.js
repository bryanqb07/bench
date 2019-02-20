import { connect } from 'react-redux';
import BenchShow from './bench_show';
import { postReview } from '../../actions/review_actions';
import { fetchBench } from '../../actions/bench_actions';
import { getBenchReviews, 
         getAuthors} from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
    const currentBench = state.entities.benches[ownProps.match.params.benchId];
    const currentReviews = getBenchReviews(state, currentBench);
    const currentAuthors = getAuthors(state, currentReviews);

    return({
        bench: currentBench,
        reviews: currentReviews,
        authors: currentAuthors,
    }); 
};

const mapDispatchToProps = dispatch => ({
    postReview: review => dispatch(postReview(review)),
    fetchBench: benchId => dispatch(fetchBench(benchId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BenchShow);
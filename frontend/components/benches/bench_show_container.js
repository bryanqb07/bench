import { connect } from 'react-redux';
import BenchShow from './bench_show';
import { postReview } from '../../actions/review_actions';
import { fetchBench } from '../../actions/bench_actions';
import { getReviewsByBenchId } from '../../reducers/selectors';

const mapStateToProps = ({entities}, ownProps) => {
    const benchId = ownProps.match.params.benchId;
    return({
    bench: entities.benches[benchId],
    reviews: getReviewsByBenchId(benchId)
    }); 
};

const mapDispatchToProps = dispatch => ({
    postReview: review => dispatch(postReview(review)),
    fetchBench: benchId => dispatch(fetchBench(benchId))
});

export default connect(mapStateToProps, mapDispatchToProps)(BenchShow);
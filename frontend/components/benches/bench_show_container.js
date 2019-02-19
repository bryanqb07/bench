import { connect } from 'react-redux';
import BenchShow from './bench_show';


const mapStateToProps = (state, ownProps) => ({
    bench: state.entities.benches[ownProps.match.params.benchId]
});

export default connect(mapStateToProps)(BenchShow);
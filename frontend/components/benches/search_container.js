import { connect } from 'react-redux';
import Search from './search';
import { updateFilter } from '../../actions/filter_actions';
import { asArray } from '../../reducers/selectors';

const mapStateToProps = ({entities}) => ({
    benches: asArray(entities)
});

const mapDispatchToProps = dispatch => ({
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

export default connect(
    mapStateToProps, mapDispatchToProps)(Search);


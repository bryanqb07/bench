import merge from 'lodash/merge';

import { RECEIVE_BENCHES, RECEIVE_BENCH } from '../actions/bench_actions';

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_BENCHES:
            return action.benches;  
        case RECEIVE_BENCH:
            return merge({}, state, { [action.bench.id]: action.bench});
        default:
            return state;
    }
};


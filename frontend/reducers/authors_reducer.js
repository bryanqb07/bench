import merge from 'lodash/merge';

import { RECEIVE_REVIEW } from '../actions/review_actions';
import { RECEIVE_BENCH } from '../actions/bench_actions';

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_BENCH:
            return merge({}, state, action.authors);
        case RECEIVE_REVIEW:
            return merge({}, state, { [action.author.id]: action.author });
        default:
            return state;
    }
};
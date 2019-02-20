import merge from 'lodash/merge';

import { RECEIVE_REVIEW } from '../actions/review_actions';
import { RECEIVE_BENCH } from '../actions/bench_actions';

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_BENCH:
            return merge({}, state, action.reviews);
        case RECEIVE_REVIEW:
            return merge({}, state, { [action.review.id]: action.review });
        default:
            return state;
    }
};
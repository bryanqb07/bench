import merge from 'lodash/merge';

import { RECEIVE_BENCHES, RECEIVE_BENCH } from '../actions/bench_actions';

import { RECEIVE_REVIEW } from '../actions/review_actions';
import review_index from '../components/reviews/review_index';

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_BENCHES:
            return action.benches;  
        case RECEIVE_BENCH:
            return merge({}, state, { [action.bench.id]: action.bench});
        case RECEIVE_REVIEW:
            const {review, average_rating} = action;
            const newState = merge({}, state);
            console.log(action);
            newState[review.bench_id].reviewIds.push(action.review.id);
            newState[review.bench_id].average_rating = average_rating;
            return newState;
        default:
            return state;
    }
};


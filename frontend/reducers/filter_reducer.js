import merge from 'lodash/merge';

import { UPDATE_BOUNDS } from '../actions/filter_actions';

export default (state = {bounds: {}}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case UPDATE_BOUNDS:
            return merge({}, state, { bounds: action.bounds });
        default:
            return state;
    }
};


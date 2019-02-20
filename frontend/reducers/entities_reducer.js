import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import benchesReducer from './benches_reducer';
import reviewsReducer from './reviews_reducer';
import authorsReducer from './authors_reducer';

export default combineReducers({
    users: usersReducer,
    benches: benchesReducer,
    reviews: reviewsReducer, 
    authors: authorsReducer
});




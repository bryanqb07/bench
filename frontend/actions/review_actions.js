export const RECEIVE_REVIEW = "RECEIVE_REVIEW";

import * as APIUtil from '../util/review_api_util';

export const receiveReview = payload => ({
    type: RECEIVE_REVIEW,
    review: payload.review,
    author: payload.author,
    average_rating: payload.average_rating
});

export const postReview = formReview => dispatch => APIUtil.postReview(formReview)
    .then(payload => dispatch(receiveReview(payload)));


    
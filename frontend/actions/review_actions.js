export const RECEIVE_REVIEW = "RECEIVE_REVIEW";

import * as APIUtil from '../util/review_api_util';

export const receiveReview = (review, author) => ({
    type: RECEIVE_REVIEW,
    review,
    author
});

export const postReview = formReview => dispatch => APIUtil.postReview(formReview)
    .then(payload => dispatch(receiveReview(payload)));


    
export const RECEIVE_BENCHES = "RECEIVE_BENCHES";
export const RECEIVE_BENCH = "RECEIVE_BENCH";

import * as APIUtil from '../util/bench_api_util';

export const receiveBenches = benches => ({
    type: RECEIVE_BENCHES,
    benches
});

export const receiveBench = ({ bench, reviews, authors}) => ({
    type: RECEIVE_BENCH,
    bench,
    reviews,
    authors,
});

export const fetchBenches = filters => dispatch => {
    APIUtil.getBenches(filters)
    .then(benches => dispatch(receiveBenches(benches)));
};

export const createBench = formBench => dispatch => {
    APIUtil.createBench(formBench)
    .then(bench => dispatch(receiveBench(bench)));
};

export const fetchBench = benchId => dispatch => {
    APIUtil.fetchBench(benchId)
    .then(bench => dispatch(receiveBench(bench)));
};
export const RECEIVE_BENCHES = "RECEIVE_BENCHES";

import { getBenches } from '../util/bench_api_util';

export const receiveBenches = benches => ({
    type: RECEIVE_BENCHES,
    benches
});

export const fetchBenches = (filters) => dispatch => getBenches(filters)
    .then(benches => dispatch(receiveBenches(benches)));
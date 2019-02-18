export const RECEIVE_BENCHES = "RECEIVE_BENCHES";

import { getBenches } from '../util/bench_api_util';

export const receiveBenches = benches => ({
    type: RECEIVE_BENCHES,
    benches
});

export const fetchBenches = () => dispatch => getBenches()
    .then(benches => dispatch(receiveBenches(benches)));
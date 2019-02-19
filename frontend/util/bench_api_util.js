export const getBenches = data => (
    $.ajax({
        method: 'GET',
        url: '/api/benches/',
        data
    })
);

export const createBench = bench => (
    $.ajax({
        method: 'POST',
        url: '/api/benches/',
        data: { bench }
    })
);



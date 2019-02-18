export const getBenches = data => $.ajax({
    method: 'GET',
    url: '/api/benches/',
    data
});




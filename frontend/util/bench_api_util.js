export const fetchBenches = () => $.ajax({
    method: 'GET',
    url: '/api/benches/',
}).then(
    benches => console.log(benches),
    error => console.log(error)
);




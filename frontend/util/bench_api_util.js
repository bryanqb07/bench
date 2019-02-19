export const getBenches = data => {
    //console.log(data);
    return $.ajax({
        method: 'GET',
        url: '/api/benches/',
        data
    });
};




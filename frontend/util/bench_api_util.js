const defaultFilter = {
    bounds: {
        northEast: {lat: 50, lng: 200},
        southWest: {lat: 0, lng: -150}
    }
};

export const getBenches = (filter = defaultFilter) => $.ajax({
    method: 'GET',
    url: '/api/benches/',
    data: { bounds: filter.bounds }
});




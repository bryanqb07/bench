export const postReview = review => (
    $.ajax({
        method: 'POST',
        url: '/api/reviews/',
        data: { review }
    })
);

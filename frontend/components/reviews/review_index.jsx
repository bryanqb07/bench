import React from 'react';

export default({reviews, authors }) => (
    <div>
        {
            reviews.map(review => <li key={review.id}>
                Author: { authors[review.author_id] }
                <br/>
                Comments: {review.comments}
                <br/>
                Rating: {review.rating}
            </li>)
        }
    </div>
);
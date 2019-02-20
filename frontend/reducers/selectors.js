export const asArray = ({ benches }) => (
    Object.keys(benches).map(key => benches[key])
);

export const getBenchReviews = ({entities}, bench) => {
    return bench.reviewIds ? bench.reviewIds.map(reviewId => entities.reviews[reviewId]) : [];
};

export const getAuthors = ({entities}, posts) => {
    let authors = {};
    if(posts){
        posts.map(post => { authors[post.author_id] = entities.authors[post.author_id].username;}); 
    }
    return authors;
};



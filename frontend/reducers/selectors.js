export const asArray = ({ benches }) => (
    Object.keys(benches).map(key => benches[key])
);

export const getReviewsByBenchId = ({entities}, benchId) => (
    entities.benches[benchId].reviewIds.map(reviewId => 
        entities.reviews[reviewId]
    )
);



// export const getAuthorsByReviewId = ({ entities} , reviewId) => {
//     entities.reviews[reviewId].author_id.map(authorId =>
//         entities.reviews[reviewId]
//     );
// };
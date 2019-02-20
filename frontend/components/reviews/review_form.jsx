import React from 'react';

class ReviewForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {rating: 3, comments: ""};
    }
}

export default ReviewForm;
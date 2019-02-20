import React from 'react';

class ReviewForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            rating: 3, 
            comments: "", 
        };
        this.RATING_RANGE = [1, 2, 3, 4, 5];
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        const review = {
            rating: parseInt(this.state.rating),
            comments: this.state.comments,
            bench_id: this.props.bench.id
        };
        this.props.postReview(review)
        .then(() => this.setState({ comments: ""}));
    }

    handleChange(type){
        return (e) => this.setState({ [type]: e.target.value });
    }

    render(){
        return(

        <form onSubmit={ this.handleSubmit } className="submit-review">
            <label> Rating
            <select value={this.state.rating} onChange={this.handleChange("rating")}>
                {
                this.RATING_RANGE.map(num => <option key={num} value={num}>{num}</option>)
                }
            </select>
            </label>
            <label> Comments
                <textarea value={this.state.comments} onChange={this.handleChange("comments")}>
                    {this.state.value}
                </textarea>
            </label>
            <button>Submit Review</button>
        </form>

        )
    }

}

export default ReviewForm;
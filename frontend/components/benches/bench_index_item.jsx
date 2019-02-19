import React from 'react';
import { withRouter } from 'react-router-dom';

class BenchIndexItem extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.props.history.push(`/bench/${this.props.bench.id}`);
    }

    render(){
        const bench = this.props.bench;
        return(
            <li onClick={this.handleClick}>
                    Id: {bench.id}
                    <br />
                    Description: {bench.description}
                    <br />
                    Seating: {bench.seating}
            </li>
        )
    }
}

export default withRouter(BenchIndexItem);

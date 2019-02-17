import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        e.preventDefault();
        this.props.logout();
    }


    render(){
        const greeting = this.props.currentUser ? (
            <div>
                <h3>Welcome {this.props.currentUser.username}</h3>
                <button onClick={this.handleClick}>Logout</button>
            </div>
        ) : (
            <div>
                <Link to="/signup">Signup</Link>
                <Link to="/login">Login</Link> 
            </div>
        )
        
        return( greeting )
    }
}

export default Greeting;
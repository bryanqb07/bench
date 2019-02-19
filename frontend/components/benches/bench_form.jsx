import React from 'react';

class BenchForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            description: "",
            seating: 0
        };
        this.SEAT_NUM_OPTIONS = [0, 1, 2, 3, 4, 5];
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(type){
        return (e) => this.setState({ [type]: e.target.value });
    }

    handleSubmit(e){
        e.preventDefault();

        const bench = {
            description: this.state.description,
            seating: this.state.seating,
            lat: this.props.lat,
            lng: this.props.lng
        };

        this.props.createBench(bench);
        this.props.history.push('/');
    }

    render(){
        return(
        <div>
            <p>Add New Bench</p>
            <form onSubmit={this.handleSubmit}>
                <label> Description
                    <input type="text" value={this.state.description} onChange={this.handleChange("description")}/>
                </label>
                <label> Latitude
                    <input type="text" disabled value={this.props.lat}/>
                </label>
                <label> Longitude
                    <input type="text" disabled value={this.props.lng}/>
                </label>
                <label> Seating
                    <select value={this.state.seating} onChange={this.handleChange("seating")}>
                        {
                        this.SEAT_NUM_OPTIONS.map(num => <option value={num} key={num}>{num}</option>)
                        }
                    </select>
                </label>
                <button>Submit</button>
            </form>
        </div>
        )
    }
}

export default BenchForm;

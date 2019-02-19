import React from 'react';

export default class BenchForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            description: "",
            lat: 0,
            lng: 0,
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
    }

    render(){
        <div>
            <p>Add New Bench</p>
            <form>
                <label> Description
                    <input type="text" value={this.state.description} onChange={this.handleChange("description")}/>
                </label>
                <label> Latitude
                    <input type="text" value={this.state.lat } onChange={this.handleChange("lat")}/>
                </label>
                <label> Longitude
                    <input type="text" value={this.state.lng} onChange={this.handleChange("lng")}/>
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
    }


}


import React from 'react';
import './App.css';

class Form extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            age: 0,
            name: '',
            number: 0,
            email: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    handleChange(e){
        this.setState({ [e.target.name] : e.target.value });
    }

    submitForm(){

    }

    render(){
        return(
            <div>
                <br/>
                <div style={{paddingLeft: '25%'}}>
                    <label>Age: </label>
                    <input name="age" type="number" value={this.state.age} onChange={this.handleChange}/>
                    <br/>
                    {this.state.age < 18 ? 
                    <div>
                        <label>Parent name: </label>
                        <input name="name" type="text" value={this.state.name} onChange={this.handleChange}/>
                        <br/>
                        <label>Parent Phone No: </label>
                        <input name="number" type="number" value={this.state.number} onChange={this.handleChange}/>
                    </div> :
                    <div>
                        <label>Name: </label>
                        <input name="name" type="text" value={this.state.name} onChange={this.handleChange}/>
                        <br/>
                        <label>Email: </label>
                        <input name="email" type="email" value={this.state.email} onChange={this.handleChange}/>
                    </div>
                    }
                    <button type="button" onClick={this.submitForm}>Submit</button>
                </div>
            </div>
        )
    }

}

export default Form
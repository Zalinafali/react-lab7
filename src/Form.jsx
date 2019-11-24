import React from 'react';
import './App.css';

class Form extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            age: 0,
            name: '',
            number: 0,
            email: '',
            isValidNumber: true,
            isValidEmail: true
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState({ [e.target.name] : e.target.value });
    }

    handleSubmit(e){
        e.preventDefault();

        var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if(this.state.age < 18){
            if(this.state.number < 0 || this.state.number.toString().length !== 9){
                this.setState({isValidNumber: false});
                console.log("Invalid number");
                return;
            }
            else{
                this.setState({isValidNumber: true});
                console.log("Valid number, submitting...")
                return;
            }
        }
        else{
            if(!this.state.email.match(mailFormat)){
                this.setState({isValidEmail: false});
                console.log("Invalid email");
                return;
            }
            else{
                this.setState({isValidEmail: true});
                console.log("Valid email, submitting...");
                return;
            }
        }
    }

    render(){
        return(
            <div>
                <br/>
                <form style={{paddingLeft: '25%'}} onSubmit={this.handleSubmit}>
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
                        <br/>
                        {this.state.isValidNumber ? "" : <label style={{color: 'red'}}>Wrong number...</label>}
                    </div> :
                    <div>
                        <label>Name: </label>
                        <input name="name" type="text" value={this.state.name} onChange={this.handleChange}/>
                        <br/>
                        <label>Email: </label>
                        <input name="email" type="email" value={this.state.email} onChange={this.handleChange}/>
                        {this.state.isValidEmail ? "" : <label style={{color: 'red'}}>Wrong Email...</label>}
                    </div>
                    }
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }

}

export default Form
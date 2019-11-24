import React from 'react';
import EmployeesList from './EmployeesList';
import Form from './Form';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
      employees: null
    };

    this.employeesGet = this.employeesGet.bind(this);
  }

  componentDidMount() {
    this.employeesGet();
  }
  
  employeesGet(){
    this.setState({isLoading: true})
    fetch('http://localhost:3004/employees')
    .then(response => response.json())
    .then(data => this.setState({employees: data}))
    .then(() => this.setState({isLoading: false}));
  }

  render(){
    return (
      <div>
        <div>
          <h1 style={{paddingLeft: "10%"}}>Employees:</h1>
          {this.state.isLoading ? <label>Loading...</label> : 
            <EmployeesList
              employees = {this.state.employees}
            />}
            <br/>
        </div>
        <div style={{padding: "10%"}}>
          <Form/>
        </div>
      </div>
    )
  }
}

export default App;

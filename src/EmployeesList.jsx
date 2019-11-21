import React from 'react'
import Employee from './Employee'

function EmployeesList(props){
    const employeesList = props.employees.map(employeeData =>
        <Employee 
            key={employeeData.id} 
            data={employeeData} 
        />)
    const divStyle = {
        paddingTop: '20px',
        paddingLeft: '20%'
    }
    return(
        <div style = {divStyle}>
            {employeesList}
        </div>
    )
}

export default EmployeesList
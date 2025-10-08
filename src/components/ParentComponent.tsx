import React from 'react'
import Title from './TitleComponent'
import Count from './CountComponent'
import Button from './ButtonComponent'

function ParentComponent() {
    const [age, setAge] = React.useState(25);
    const [salary, setSalary] = React.useState(50000);
    
    const incrementAge = React.useCallback(() => {
        setAge(age + 1);
    }, [age]);
    const incrementSalary = React.useCallback(() => {
        setSalary(salary + 1000);
    }, [salary]);

    
  return (
    <div>
        <Title />
        <Count text="age" count={age} />
        <Button handleClick={incrementAge}>Increment Age</Button>
        <Count text="salary" count={salary} />
        <Button handleClick={incrementSalary}>Increment Salary</Button>
      
    </div>
  )
}

export default ParentComponent
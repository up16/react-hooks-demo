import React from 'react'
import useInput from "./hooks/useInput"
function CustomHookFour() {
    const [firstNameBind, resetFirstName, firstName] = useInput("")
    const [lastNameBind, resetLastName, lastName] = useInput("")
    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault()
        alert(`First Name: ${firstName}, Last Name: ${lastName}`)
        resetFirstName()
        resetLastName()
    }
    
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <input 
            type="text"
            {...firstNameBind}
            placeholder="First name"
          />
        </div>
        <div>
          <input 
            type="text" 
            {...lastNameBind}
            placeholder="Last name"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default CustomHookFour

import React, { useState } from 'react'

const AddUserForm = props => {
    
    const initialState = {id: null, firstName:'', lastName:''}
    const [user, setUser] = useState(initialState)

    const getForm = e => {
        e.preventDefault();
        if(!user.firstName || !user.lastName) return
         props.addUser(user)
         setUser(initialState)
        }

   const handleInputChange = e => {
       const { name, value } = e.target
       setUser({...user, [name]:value})
   }
   
    return (
        <div className ='inputForm'>
        <form onSubmit={getForm} >
        <div>
            <label>Name: </label>
            <input type="text" name='firstName' onChange={handleInputChange} value={user.firstName}/>
            </div>
            <div>
            <label>Last Name: </label>
            <input type="text" name='lastName' onChange={handleInputChange} value={user.lastName}/>
            </div>
            <button>Add a user</button>
            </form>
            </div>
    )
}


export default AddUserForm;
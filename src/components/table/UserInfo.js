import React from 'react'

const UserTable = props => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Username</th>
        <th>Actions</th>
      </tr>
      </thead>
    <tbody>
    {props.users.length > 0 ? (
    props.users.map(user => (
      <tr key={user.id}>
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td> 
        
        <button
       onClick={()=> props.editUser(user)}
       className="button muted-button"
     >
       Edit
     </button></td>
     <td>
     <button
       onClick={()=>props.deleteUser(user.id)}
       className="button muted-button"
     >
       Delete
     </button>
     </td>
      </tr>
      
     ))
     
    ) : (
      <tr>
      <td colSpan={3}>No users</td>
    </tr>
     )}
   </tbody>
  </table>
)

export default UserTable;
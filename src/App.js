import React, {
  useState
} from 'react'
import './App.css';
import AddUser from './components/forms/addUser.js';
import UserTable from './components/table/UserInfo.js'
import EditUserForm from './components/forms/editForm.js';

function App() {
  const usersData = [{
      id: 1,
      firstName: 'Dima',
      lastName: 'Pupkin'
    },
    {
      id: 2,
      firstName: 'Alex',
      lastName: 'Crig'
    },
    {
      id: 3,
      firstName: 'Kenny',
      lastName: 'Smirnov'
    },
  ]

  const initial = {
    id: null,
    firstName: '',
    lastName: ''
  }

  const [users, setUsers] = useState(usersData)
  const [currentUser, setCurrentUser] = useState(initial)
  const [ editing, setEditing ] = useState(false)

  const addUser = (user) => {
    user.id = users.length + 1
    setUsers([...users, user])
  }
  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id))
  }

  const updateUser = (id, updatedUser) => {
    setEditing(false)
		setUsers(users.map(user => (user.id === id ? updatedUser : user)))
	}

  const editUser = user => {
    setEditing(true)
    setCurrentUser({
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName
    })

  }
  
  return ( 
    <div className = 'container' >
    <h1> Add a User </h1> 
         {editing ? (
    <EditUserForm editing={editing}
								currentUser={currentUser}
								updateUser={updateUser}
                setEditing={setEditing}/>
         ) : (
    <AddUser addUser = { addUser } /> 
         )}

    <UserTable users = {users}
    deleteUser = {deleteUser}
    editUser = {editUser} updateUser={updateUser} /> 
    </div>
  );
}

export default App;
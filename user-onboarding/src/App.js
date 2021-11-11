
import './App.css';
import React, { useState } from 'react';
import axios from 'axios';
import User from './components/User';
import UserForm from './components/UserForm';
import schema from './validation/formSchema'
import * as yup from 'yup';

const initialFormValues = {
  fname: '',
  lname: '',
  email: '',
  password: '',
  checked: false,
}
const initialFormErrors = {
  fname: '',
  lname: '',
  email: '',
  password: '',
}
const initialUser = []

export default function App() {
  const [users, setUsers] = useState(initialUser) 
  const [formValues, setFormValues] = useState(initialFormValues) 
  const [formErrors, setFormErrors] = useState(initialFormErrors) 

  const postNewUser = newUser => {
    axios.post('https://reqres.in/api/users', newUser)
      .then(res => {
        setUsers([res.data.data, ...users]);
      })
      .catch(err => console.error(err))
      .finally(() => {
        setFormValues(initialFormValues);
      })
  }

  const validate = (name, value) => {
    yup.reach(schema, name).validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
  }

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  return (
    <div className="App">
      <header><h1>Wednesday</h1></header>

      <UserForm
        values={formValues}
        change={inputChange}
        submit={postNewUser}
        errors={formErrors}
      />

      {
        users.map(user => {
          return (
            <User key={user.id} details={user} />
          )
        })
      }
    </div>
  );
}



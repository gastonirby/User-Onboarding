import React from 'react';

export default function UserForm(props) {
    const { change, submit, errors } = props;
    const { fname, lname, email, password, terms} = props.values;

    const onChange = (evt) => {
        const { name, value, checked, type } = evt.target;
        const newValue = type === 'checkbox' ? checked : value;
        change(name, newValue);
    }


    const onSubmit = (e) => {
        e.preventDefault();
        submit();
    }

return (
    <form className='form container' onSubmit={onSubmit}>
<div className='form-group submit'>
        <h2>Add a User</h2>
       
      
        <h4>General information</h4>

        <p>{errors.fname}</p>
        <p>{errors.lname}</p>
        <p>{errors.email}</p>
        <p>{errors.password}</p>
        <p>{errors.terms}</p>

        <label>First Name&nbsp;
          <input
            value={fname}
            onChange={onChange}
            name='fname'
            type='text'
          />
        </label>

        <label>Last Name&nbsp;
          <input
            value={lname}
            onChange={onChange}
            name='lname'
            type='text'
          />
        </label>

        <label>Email
          <input
            value={email}
            onChange={onChange}
            name='email'
            type='text'
          />
        </label>

        <label>Password
          <input
            value={password}
            onChange={onChange}
            name='password'
            type='password'
          />
        </label>

        <label>Terms of Service
          <input
            type='checkbox'
            name='terms'
            onChange={onChange}
            checked={terms}
          />
        </label>
        <input type='submit' value='Create User'></input>
      </div>
    </form>
)


}
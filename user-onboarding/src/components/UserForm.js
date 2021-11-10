import React from 'react';

export default function UserForm(props) {
    const {
        values,
        submit,
        change,
        disabled,
        errors,
    } = props

const onSubmit = evt => {
    evt.preventDefault()
    submit()
}

const onChange = evt => {
    const { fname, lname, value, checked, type } = evt.target
    const realValue = type === 'checkbox' ? checked : value;
    change(fname, lname, realValue)
}

return (
    <form className='form container' onSubmit={onSubmit}>
<div className='form-group submit'>
        <h2>Add a User</h2>
        <button disabled={disabled}>submit</button>

        <div className='errors'>
          <div>{errors.fname}</div>
          <div>{errors.lname}</div>
          <div>{errors.email}</div>
          <div>{errors.password}</div>
          <div>{errors.terms}</div>
        </div>
      </div>

      <div className='form-group inputs'>
        <h4>General information</h4>

        <label>First Name&nbsp;
          <input
            value={values.fname}
            onChange={onChange}
            name='fname'
            type='text'
          />
        </label>

        <label>Last Name&nbsp;
          <input
            value={values.lname}
            onChange={onChange}
            name='lname'
            type='text'
          />
        </label>

        <label>Email
          <input
            value={values.email}
            onChange={onChange}
            name='email'
            type='text'
          />
        </label>

        <label>Password
          <input
            value={values.password}
            onChange={onChange}
            name='password'
            type='password'
          />
        </label>

        <label>Terms of Service
          <input
            type='checkbox'
            name='terms'
            value='agree'
            onChange={onChange}
            checked={values.terms}
          />
        </label>
      </div>
    </form>
)


}
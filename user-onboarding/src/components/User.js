import React from 'react'

function User(props) {
  if (!props.user) {
    return <h3>Working fetching user&apos;s details...</h3>
  }

  return (
    <div className='friend container'>
      <h2>{props.user.fname}</h2>
      <h2>{props.user.lname}</h2>
      <p>Email: {props.user.email}</p>
    </div>
  )
}

export default User

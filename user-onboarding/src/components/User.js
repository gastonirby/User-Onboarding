import React from 'react'

function User({ details }) {
  if (!details) {
    return <h3>Working fetching user&apos;s details...</h3>
  }

  return (
    <div className='friend container'>
      <h2>{details.fname}</h2>
      <h2>{details.lname}</h2>
      <p>Email: {details.email}</p>
      <p>Password: {details.password}</p>
      <p>Terms of Service: {details.terms}</p>
    </div>
  )
}

export default User

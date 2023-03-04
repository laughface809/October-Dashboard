import React, { useState } from 'react'

import http from '../../helpers/axios-helper'
import { Link } from 'react-router-dom'
import { Toastr } from '../../components/toastr/Toastr'

export const Register = (props) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [instance, setInstance] = useState('')
  const [rememberMe, setRememberMe] = useState(true)

  const handleSubmit = (e) => {
    http
      .post('/register', {
        email: email,
        password: password,
        tenant_name: instance
      })
      .then(function (result) {
        if (result.data.token) {
          localStorage.setItem('token', result.data.token)
          window.location = '/'
        }
      })
  }

  return (
    <>
      <div style={{ margin: '10px' }}>

        <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '10px' }}>
          <div style={{ display: 'flex', flex: '0 0 110px', marginRight: '5px', userSelect: 'none' }}>
            <span>email</span>
          </div>
          <div style={{ display: 'flex', flex: '1' }}>
            <input name='email' type='email' value={email} onChange={(e) => { setEmail(e.target.value) }} />
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '10px' }}>
          <div style={{ display: 'flex', flex: '0 0 110px', marginRight: '5px', userSelect: 'none' }}>
            <span>password</span>
          </div>
          <div style={{ display: 'flex', flex: '1' }}>
            <input name='password' type='password' value={password} onChange={(e) => { setPassword(e.target.value) }} />
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '10px' }}>
          <div style={{ display: 'flex', flex: '0 0 110px', marginRight: '5px', userSelect: 'none' }}>
            <span>Instance</span>
          </div>
          <div style={{ display: 'flex', flex: '1' }}>
            <input name='instance' type='text' value={instance} onChange={(e) => { setInstance(e.target.value) }} />
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '10px' }}>
          <div style={{ display: 'flex', flex: '0 0 120px', marginRight: '5px', userSelect: 'none' }}>
            <button onClick={handleSubmit}>sign up</button>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '10px' }}>
          <div style={{ display: 'flex', flex: '1', marginRight: '5px', userSelect: 'none' }}>
            or&nbsp;<Link style={{ color: 'blue' }} to={`/login`}>log in</Link>
          </div>
        </div>

      </div>

      <Toastr
        timeout={5000}
      ></Toastr>
    </>
  )
}
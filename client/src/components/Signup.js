import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/auth';
import { Redirect } from 'react-router-dom';

let emailDiv = "login-input";
let passwordDiv = "login-input";

function Login({ showModal }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [noInfo, setNoInfo] = useState('');
  const [noEmail, setNoEmail] = useState('');
  const [noPassword, setNoPassword] = useState('');
  const currentUserId = useSelector(state => state.auth.id);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    emailDiv = "login-input";
    passwordDiv = "login-input";
    setNoEmail('');
    setNoPassword('');
    setNoInfo('');
    if (email && password) {
      dispatch(login(email.toLocaleLowerCase(), password));
    } else if (!email && password) {
      emailDiv = "bad-input";
      setNoEmail("Oi! We're gonna need that email of yours!")
    } else if (email && !password) {
      passwordDiv = "bad-input";
      setNoPassword("What's the password?");
    } else {
      emailDiv = "bad-input";
      passwordDiv = "bad-input";
      setNoInfo("You can't get in if you're not a member!")
    }
  }

  const handleDemo = e => {
    e.preventDefault();
    dispatch(login('demo@tacktivity.com', 'password'));
  }

  if (currentUserId) return <Redirect to='/home' />

  return (
    <>
      <div>
        <div className="login-container">
          <i className='fas fa-thumbtack fa-3x' />
          <h3>Welcome to Tacktivity</h3>
          <form onSubmit={handleSubmit}>
            <div>
              <span style={{ color: 'red' }}>{noInfo}</span>
              <input type='email' className={emailDiv} name='email' value={email} placeholder="Email" onChange={e => setEmail(e.target.value)} />
            </div>
            <span style={{ color: 'red' }}>{noEmail}</span>
            <div>
              <input type='password' className={passwordDiv} name='password' value={password} placeholder='Password' onChange={e => setPassword(e.target.value)} />
            </div>
            <span style={{ color: 'red' }}>{noPassword}</span>
            <div>
              <button type='submit' className='login-button'>Log in</button>
            </div>
          </form>
          <div className='form-break' />
          <div className='signup-redirect' onClick={e => showModal('signup')}>
            Not on Tacktivity yet? Sign up
          </div>
          <div className='form-break' />
          <div>
            <button type='submit' className='login-button demo' onClick={handleDemo}>Demo User</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login;

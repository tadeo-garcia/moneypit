import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/auth';
import { Redirect, Link } from 'react-router-dom';
import '../css/login.css'

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
  const demo = e => {
    e.preventDefault();
    dispatch(login('demo@moneypit.com', 'password'))
  };

  if (currentUserId) return <Redirect to='/home' />

  return (
    <div className='auth_container'>
      <div className="login-container">
        <div>
          <form className='form_container' onSubmit={handleSubmit}>
            <div className='login-label'>
              Log in
            </div>
            <div>
              <span style={{ color: 'red' }}>{noInfo}</span>
              <input type='email' className={emailDiv} name='email' value={email} placeholder="Email" onChange={e => setEmail(e.target.value)} />
            </div>
            <div>
              <input type='password' className={passwordDiv} name='password' value={password} placeholder='Password' onChange={e => setPassword(e.target.value)} />
            </div>
            <span style={{ color: 'red' }}>{noPassword}</span>
            <div>
              <button type='submit' className='login-button'>Log in</button>
            </div>
            <button className='demoButton' onClick={demo}>Demo Log in</button>
          </form>
        </div>
        <div className='signUp-redirect'>
          New to Kickstarter? <Link to="/signup" style={{ textDecoration: 'none', color: 'blue', fontWeight: 'bold' }} > Sign up </Link>
        </div>
      </div>
    </div>
  )
}

export default Login;

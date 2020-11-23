import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../store/auth';
import { Redirect, Link } from 'react-router-dom';
import Footer from '../components/Footer'
import '../css/signup.css'

let emailDiv = "signup-input";
let passwordDiv = "signup-input";
let usernameDiv = "signup-input";

function Signup() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [noInfo, setNoInfo] = useState('');
  const [noUsername, setNoUsername] = useState('');
  const [noEmail, setNoEmail] = useState('');
  const [noPassword, setNoPassword] = useState('');
  const currentUserId = useSelector(state => state.auth.id);
  const dispatch = useDispatch();


  const handleSubmit = e => {
    e.preventDefault();
    emailDiv = "signup-input";
    passwordDiv = "signup-input";
    setNoEmail('');
    setNoPassword('');
    setNoInfo('');
    setNoUsername('');

    if (email && password && username && confirmEmail && confirmPassword) {
      if (password === confirmPassword) {
        dispatch(signup(username, email.toLocaleLowerCase(), password));
      }
    }

    if (!email) {
      emailDiv = "bad-input";
      setNoEmail("Oi! We're gonna need that email of yours.")
    } else if (email && !confirmEmail) {
      passwordDiv = "bad-input";
      setNoEmail("Please confirm your email.");
    }
    if (!password) {
      passwordDiv = "bad-input";
      setNoPassword('You need to provide a password.')
    } else if (password && !confirmPassword) {
      passwordDiv = "bad-input";
      setNoPassword('Your passwords do not match.');
    }
    if (!username) {
      usernameDiv = 'bad-input';
      setNoUsername('Please provide a username.');
    }
    if (password !== confirmPassword) {
      passwordDiv = "bad-input";
      setNoPassword("Your passwords must match.");
    }
    if (email !== confirmEmail) {
      emailDiv = "bad-input";
      setNoEmail("The emails you provided don't match!");
    }
  }

  if (currentUserId) return <Redirect to='/' />

  return (
    <>
      <div className='signup_master'>
        <div className='signup_master-box'>
          <div className="signup-container">
            <div className='signup-redirect'>
              Have and account? <Link to='/login' style={{ textDecoration: 'none', color: 'blue', fontWeight: 'bold' }} > Log in </Link>
            </div>
            <div className="signup-container-box">
              <form className='form_container' onSubmit={handleSubmit}>
                <div className='signup-label'>
                  Sign up
                </div>
                <div>
                  <span style={{ color: 'red' }}>{noInfo}</span>
                  <span id="bad-span" style={{ color: 'red' }}>{noUsername}</span>
                  <input type='text' className={usernameDiv} name='username' value={username} placeholder="Username" onChange={e => setUsername(e.target.value)} />
                </div>
                <div>
                  <span style={{ color: 'red' }}>{noEmail}</span>
                  <input type='email' className={emailDiv} name='email' value={email} placeholder="Email" onChange={e => setEmail(e.target.value)} />
                </div>
                <div>
                  <input type='email' className={emailDiv} name='confirmEmail' value={confirmEmail} placeholder="Re-enter Email" onChange={e => setConfirmEmail(e.target.value)} />
                </div>
                <div>
                  <span style={{ color: 'red' }}>{noPassword}</span>
                  <input type='password' className={passwordDiv} name='password' value={password} placeholder='Password' onChange={e => setPassword(e.target.value)} />
                </div>
                <div>
                  <input type='password' className={passwordDiv} name='confirmPassword' value={confirmPassword} placeholder='Re-Enter Password' onChange={e => setConfirmPassword(e.target.value)} />
                </div>
                <div>
                  <button type='submit' className='signup-button'>Create account</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
export default Signup;

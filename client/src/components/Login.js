import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/auth';
import { Redirect, Link } from 'react-router-dom';
import '../css/login.css'
import Footer from '../components/Footer'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [noEmail, setNoEmail] = useState('');
  const [noPassword, setNoPassword] = useState('');
  const currentUserId = useSelector(state => state.auth.id);

  const dispatch = useDispatch();
  let emailDiv = "form-input";
  let passwordDiv = "form-input";
  const handleSubmit = e => {
    e.preventDefault();
    setNoEmail('');
    setNoPassword('');
    if (email && password) {
      dispatch(login(email.toLocaleLowerCase(), password));
    } else if (!email && password) {
      emailDiv = "bad-input";
      setNoEmail("Oi! We're gonna need that email of yours!")
    } else if (email && !password) {
      passwordDiv = "bad-input";
      setNoPassword("What's the password?");
    }
  }

  const demo = e => {
    e.preventDefault();
    dispatch(login('demo@moneypit.com', 'password'))
  };
  if (currentUserId) return <Redirect to='/' />
  return (
    <>
      <div className='loginWrapper'>
          <div className="loginContainer">
            <div id='loginLabel'>
              Log in
            </div>
            <form className='loginContainer__form' onSubmit={handleSubmit}>
              <div>
                <span style={{ color: 'red' }}>{noEmail}</span>
                <input type='email' className={emailDiv} name='email' value={email} placeholder="Email" onChange={e => setEmail(e.target.value)} />
              </div>
              <div>
                <input type='password' className={passwordDiv} name='password' value={password} placeholder='Password' onChange={e => setPassword(e.target.value)} />
              </div>
              <span style={{ color: 'red' }}>{noPassword}</span>
              <div>
                <button type='submit' className='loginContainer__loginButton'>Log in</button>
              </div>
              <button className='loginContainer__loginButton' onClick={demo}>Demo Log in</button>
            </form>
            <div id='redirect'>
              New to Kickstarter? <Link to="/signup" style={{ textDecoration: 'none', color: 'blue', fontWeight: 'bold' }} > Sign up </Link>
            </div>
          </div>
        </div>
      <Footer />
    </>
  )
}
export default Login;

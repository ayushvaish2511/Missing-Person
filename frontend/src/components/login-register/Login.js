import React, { useContext, useState } from 'react';
import { createBrowserHistory } from 'history';
import {  useNavigate } from 'react-router-dom';
   
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { AppStateContext } from '../../contexts/AppStateContext';
import { handleError, clearError } from '../HelperFunctions.js';
import Logo from '../generic/Logo';
import BackgroundImages from './BackgroundImages';
import PasswordShowHide from './PasswordShowHide';
import { ReactComponent as EmailIcon } from '../../assets/icons/email.svg';
import axios from 'axios';
import { setUserSession1 } from '../../utils/Common';

let history = createBrowserHistory();

const Login = () => {
  const navigate = useNavigate();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const { setToken } = useContext(AuthContext);
  const { loginUser } = useContext(AppStateContext);

  let DEBUG = false;

  let disabled = !password || !email || loading;

  if (DEBUG) console.log(setToken);

  

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
    axios.post("https://missing-backend-personnel.herokuapp.com/api/login",{
          username: email,
          password: password
        })
        .then(result=>{
          console.log(result)
          setUserSession1(email)
          navigate('/');
        })
        .catch(error=>{
          console.log(error)
        })
      };


  return (
    <main className='formMain'>
      <BackgroundImages />
      <section className='loginContainer'>
        <div className='logoContainer'>
          <Logo />
        </div>
        <div className='loginFormBox'>
          <h2 className='formHeadline'>Login</h2>
          <div className='signUpText'>
            <p>Don't have an account?</p>
            <Link className='formLink' to='/register'>
              Sign Up Now
            </Link>
          </div>
          <div className='message'>
            <p className='errorMessage'>{errorMsg}</p>
            <p className='successMessage'>{successMsg}</p>
          </div>
          <form >
            <div className='inputBox'>
              <label className='formLabel' htmlFor='email'>
                <EmailIcon />
              </label>
              <input
                className='formInput'
                type='name'
                name='name'
                placeholder='username'
                value={email}
                required
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <input
                className='formInput'
                type='password'
                name='password'
                placeholder='password'
                value={password}
                required
                onChange={(event) => setPassword(event.target.value)}
              />
            <div>
              <button
               onClick={handleSubmit}
                className={disabled ? 'formButtonInactive' : 'formButton'}
                disabled={disabled}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Login;

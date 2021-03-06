import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppStateContext } from '../../contexts/AppStateContext';
import { handleError, clearError } from '../HelperFunctions.js';
import BackgroundImages from './BackgroundImages';
import Logo from '../generic/Logo';
import PasswordShowHide from './PasswordShowHide';
import { ReactComponent as EmailIcon } from '../../assets/icons/email.svg';
import { ReactComponent as UsernameIcon } from '../../assets/icons/username.svg';
import { ReactComponent as PhoneIcon } from '../../assets/icons/phone.svg';
import axios from 'axios';
const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const { registerUser } = useContext(AppStateContext);
  const navigate = useNavigate();

  let DEBUG = false;

  let disabled = !password || !email || !username  || loading;

  const handleSubmit = () => {
    // e.preventDefault();
    
    // axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
    axios.post("https://missing-backend-personnel.herokuapp.com/api/signup",{
      username: username,
          email: email,
          password: password
        })
        .then(result=>{
          console.log(result)
        })
        .catch(error=>{
          console.log(error)
        })
        navigate('/login');
      };

  

  return (
    <main className='formMain'>
      <BackgroundImages />
      <section className='registerContainer'>
        <div className='logoContainer'>
          <Logo />
        </div>
        <div className='registerFormBox'>
          <h2 className='formHeadline'>Register</h2>
          <div className='loginText'>
            <p>Already have an account?</p>
            <Link className='formLink' to='/login'>
              Login Now
            </Link>
          </div>
        
          <form  >
            <div className='inputBox'>
              <label className='formLabel' htmlFor='email'>
                <EmailIcon />
              </label>
              <input
                className='formInput'
                type='email'
                name='email'
                placeholder='email'
                value={email}
                required
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className='inputBox'>
              <label className='formLabel' htmlFor='username'>
                <UsernameIcon />
              </label>
              <input
                className='formInput'
                type='text'
                name='username'
                placeholder='username'
                value={username}
                required
                onChange={(event) => setUsername(event.target.value)}
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
                Register
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Register;

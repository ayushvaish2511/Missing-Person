import React, { useContext, useState } from 'react';
import { createBrowserHistory } from 'history';
import { useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { AppStateContext } from '../../contexts/AppStateContext';
import { handleError, clearError } from '../HelperFunctions.js';
import Logo from '../generic/Logo';
import BackgroundImages from '../login-register/BackgroundImages';

import { ReactComponent as EmailIcon } from '../../assets/icons/email.svg';
import axios from 'axios';
import { setUserSession1 } from '../../utils/Common';

let history = createBrowserHistory();

const Login = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [name1, setName1] = useState('');
    const [img, setImg] = useState('');



    const [phone, setPhone] = useState('');
    const [location, setLocation] = useState('');



    let DEBUG = false;

    let disabled = !name || !email || !location;




    const handleSubmit = (e) => {
        e.preventDefault();

        // axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
        axios.post("https://missing-backend-personnel.herokuapp.com/api/tour", {

            name: name,
            phone: phone,
            email: email,
            location: location,


        })
            .then(result => {
                console.log(result)

                navigate('/');
            })
            .catch(error => {
                console.log(error)
            })
    };

    const handleSubmit1 = (e) => {
        e.preventDefault();

        // axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
        axios.post("https://file-upload-personnel.herokuapp.com/", {

            name: name,
            file: img
        })
            .then(result => {
                console.log(result)


            })
            .catch(error => {
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
                    <h2 className='formHeadline'>Report a Person</h2>


                    <form >
                        <div className='inputBox'>

                            <input
                                className='formInput'
                                type='name'
                                name='name'
                                placeholder='Name'
                                value={name}
                                required
                                onChange={(event) => setName(event.target.value)}
                            />
                        </div>
                        <input
                            className='formInput'
                            type='email'
                            name='email'
                            placeholder='Email'
                            value={email}
                            required
                            onChange={(event) => setEmail(event.target.value)}
                        />
                        <input
                            className='formInput'
                            type='phone'
                            name='phone'
                            placeholder='Phone'
                            value={phone}
                            required
                            onChange={(event) => setPhone(event.target.value)}
                        />

                        <input
                            className='formInput'
                            type='name'
                            name='location'
                            placeholder='Location'
                            value={location}
                            required
                            onChange={(event) => setLocation(event.target.value)}
                        />



                        
                        <input
                                className='formInput'
                                type='name'
                                name='name'
                                placeholder='Name of image'
                                value={name1}
                                required
                                onChange={(event) => setName1(event.target.value)}
                            />

                            <input encType="multipart/form-data" className='formInput' type="file" id="file" name="file" value={img} onChange={(event)=> setImg(event.target.value)}  required />

                            <button
                                onClick={handleSubmit1}
                                className={'formButton'}
                                disabled={disabled}
                            >
                                Upload Image
                            </button>
                        

                        <div>
                            <button
                                onClick={handleSubmit}
                                className={disabled ? 'formButtonInactive' : 'formButton'}
                                disabled={disabled}
                            >
                                Submit Details
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    );
};

export default Login;


import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {

    const navigate = useNavigate();

   
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        
        const user = {
            email,
            password
        };


        axios.post('https://6474782e7de100807b1b00e5.mockapi.io/crud', user)
            .then((response) => {
                localStorage.setItem("email", user.email);
                localStorage.setItem("password", user.password);
                // navigate('/')
                user.navigate("/")
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error); 
            });
    };
    return (
        <div className='d-flex justify-content-center'>

            <div className='row '  >
                <div className='col-mb-20'>
                    <br />
                    <div className='bg-primary p-4 text-center'>
                        <h1>Login Here!!!</h1>
                    </div>
                    <form onClick={handleSubmit}>
                        <div className='form-group' >
                            <label> Email: </label>
                            <input type='email' placeholder='Email' className='form-control' value={email} onChange={e => setEmail(e.target.value)} required />
                        </div>
                        <br />

                        <div className='form-group' >
                            <label>password: </label>
                            <input type='password' placeholder='password' className='form-control' value={password} onChange={e => setPassword(e.target.value)} required />
                        </div>
                        <br />

                        <button type="submit" value='Login' className='btn btn-primary' >Login</button>
                    </form>
                    <br />


                </div>

            </div>

        </div>
    )
}

export default Login;
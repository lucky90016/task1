import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';


function Edit() {
    const [ output ,setOutPut] =useState();
    const [id, setId] = useState(0)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [address, setAddress] = useState('')
    const [mobile, setMobile] = useState('')

      const navigate = useNavigate();  


    useEffect(() => {
        setId(localStorage.getItem('id'));
        setName(localStorage.getItem('name'));
        setEmail(localStorage.getItem('email'));
        setPassword(localStorage.getItem('password'));
        setAddress(localStorage.getItem('address'));
        setMobile(localStorage.getItem('mobile'));

    }, [])

  const handleUpdate =(e) => {
    e.preventDefault();
    axios.put(`https://6474782e7de100807b1b00e5.mockapi.io/crud/${id}`,{e_name :name ,
    e_email: email,
    e_password: password,
    e_address: address,
    e_mobile: mobile 
}).then(() =>{
    // navigate('/')
    setOutPut("Profile Edited Successfully")
   
}).catch((err)=> {
    console.log(err)
});
  }
    return (
        <>
            <div className=' container d-flex justify-content-center'>
                <div className='row '  >
                    <div className='col-md-14'>
                        <div className='mb- mt-2'>

                        </div>
                        <div className='bg-primary p-8 text-center'>
                            <h1>Edit</h1>
                        </div>
                        <form onSubmit={handleUpdate}>
                            <div className='form-group' >
                                <label>Eneter Name: </label>
                                <input type='text' value={name} onChange={(e) => setName(e.target.value
                                )} placeholder='Name' className='form-control' />
                            </div>
                            <br />

                            <div className='form-group' >
                                <label>Email: </label>
                                <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' className='form-control' />
                            </div>
                            <br />
                            <div className='form-group' >
                                <label>password: </label>
                                <input type='Number' value={password} onChange={(e) => setPassword(e.target.value )} placeholder='password' className='form-control' />
                            </div>
                            <br />

                            <div className='form-group' >
                                <label>Address: </label>
                                <input type='text' value={address} onChange={(e) => setAddress(e.target.value)} placeholder='Address' className='form-control' />
                            </div>
                            <br />
                            <div className='form-group' >
                                <label>Mobile:  </label>
                                <input type='text' value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder='Mobile' className='form-control' />
                            </div>

                            <br />
                            <input type='submit' value='update' className='btn btn-primary' />
                        </form>
                        <font style={{"color":"blue"}}>{output}</font>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Edit

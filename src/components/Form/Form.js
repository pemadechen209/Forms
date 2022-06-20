import './Form.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Form = () => {
    const [data, setData] = useState({});


    const handleSubmit = (e) => {
        e.preventDefault();

    }

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    return <div className='m-3 mt-5'>
        <h1 className='text-center'>Log In</h1>
        <form onSubmit={handleSubmit}>
            <Box className='mt-3' sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField id='input-with-sx' className='form-control' label='Enter Name' variant='standard' onChange={handleChange} name='name' />

            </Box>

            <Box className='mt-3' sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <EmailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField id='input-with-sx' type='email' className='form-control' label='Enter Email' variant='standard' onChange={handleChange} name='email' />
            </Box>

            <Box className='mt-3' sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <LockIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField id='input-with-sx' type='password' className='form-control' label='Enter Password' variant='standard' onChange={handleChange} name='password' />
            </Box>

            <div className='text-center mt-5 '>
                <Link to='/list' state={data} >
                    <Button type='submit' className='button-area' variant='contained' color='success'>Create</Button>
                </Link>
            </div>
        </form>



    </div>
}

export default Form;
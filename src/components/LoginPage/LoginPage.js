import './LoginPage.css';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const LoginPage = (props) => {
    const [data, setData] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
    }

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
        setData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));

    }

    return <div>
        <h1 className='text-center'>Sign In</h1>
        <form onSubmit={handleSubmit}>
            <Box className='mt-3' sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <EmailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField id='input-with-sx' type='email' className='form-control' label='Enter Email' variant='standard' onChange={handleChange} name='email' />
            </Box>

            <Box className='mt-4' sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <LockIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField id='input-with-sx' type='password' className='form-control' label='Enter Password' variant='standard' onChange={handleChange} name='password' />
            </Box>

            <div className='text-center mt-3 '>
                {/* <Link to='/list' state={data} > */}
                <Button type='submit' className='button-area mr-2' variant='contained' color='success' >Sign In</Button>
                <Button type='button' className='button-area ml-3' variant='contained' color='primary' onClick={() => props.handleFormSwitch('SignUp')}>Sign Up</Button>
                {/* </Link> */}
            </div>

            <hr></hr>
            <div className='icon-area'>
                <GoogleIcon className='icon-space' />
                <LinkedInIcon className='icon-space' />
                <FacebookIcon className='icon-space' />
                <TwitterIcon className='icon-space' />
            </div>
        </form>
    </div>
}

export default LoginPage;
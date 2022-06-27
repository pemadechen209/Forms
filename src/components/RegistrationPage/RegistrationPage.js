import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import BadgeIcon from '@mui/icons-material/Badge';

const RegistrationPage = (props) => {

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
        <h1 className='text-center'>Sign Up</h1>
        <form onSubmit={handleSubmit} >

            <Box className='mt-3' sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField id='input-with-sx' type='text' className='form-control' label='Enter Name' variant='standard'
                    onChange={handleChange}
                    name='name' />
            </Box>

            <Box className='mt-3' sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <BadgeIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField id='input-with-sx' type='text' className='form-control' label='Enter Employee Id' variant='standard'
                    onChange={handleChange}
                    name='employeeId' />
            </Box>


            <Box className='mt-3' sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <EmailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField id='input-with-sx' type='email' className='form-control' label='Enter Email' variant='standard'
                    onChange={handleChange}
                    name='email' />
            </Box>

            <Box className='mt-3' sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <LocalPhoneIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField id='input-with-sx' type='number' className='form-control' label='Enter Mobile Number' variant='standard'
                    onChange={handleChange}
                    name='mobileNumber' />
            </Box>

            <Box className='mt-3' sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <LockIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField id='input-with-sx' type='password' className='form-control' label='Enter Password' variant='standard' onChange={handleChange} name='password' />
            </Box>

            <div className='text-center mt-3 '>
                <Button type='submit' className='button-area mr-2' variant='contained' color='success' >Sign Up</Button>
                <Button type='button' className='button-area ml-3' variant='contained' color='primary' onClick={() => props.handleFormSwitch('SignIn')}>Sign In</Button>
            </div>

        </form>
    </div>

}

export default RegistrationPage;
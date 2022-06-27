import './Form.css';
import * as React from 'react';
import LoginPage from '../LoginPage/LoginPage';
// import { Link } from 'react-router-dom';
import { useState } from 'react';
import RegistrationPage from '../RegistrationPage/RegistrationPage';

const Form = () => {
    const [currentPage, setCurrentPage] = useState('SignIn');

    const handleFormSwitch = ( page) => {
        console.log(page);
        switch (page) {
            case 'SignUp':
                setCurrentPage('SignUp');
                break;
            case 'SignIn':
                setCurrentPage('SignIn');
                break;
            default:
                console.log('Wrong Page');
                break;

        }

    }

    return <div className='m-3 mt-5'>
        {currentPage == 'SignIn' && <LoginPage handleFormSwitch={handleFormSwitch} />}
        {currentPage == 'SignUp' && <RegistrationPage handleFormSwitch={handleFormSwitch} />}
    </div>
}

export default Form;
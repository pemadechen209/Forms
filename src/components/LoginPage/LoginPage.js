import './LoginPage.css';
import Image from '../../assests/comp.png'
import LeftSide from '../LeftSide/LeftSide';
import Form from '../Form/Form';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import ListOfUser from '../ListOfUser/ListOfUser';

const LoginPage = () => {
    return <Router>
        <div className='container main-container'>
            <div className='row'>
                <div className='col-lg-6 col-sm-12'>
                    <LeftSide Image={Image} text='Create a new User'/>
                </div>
                <div className='col-lg-6 col-sm-12'>  <Routes>
                        <Route path="/" element={<ListOfUser />} />
                        <Route path="list" element={<ListOfUser />} />
                        <Route path="create" element={<Form />} />
                    </Routes>
                </div>
            </div>
        </div>
    </Router>
}

export default LoginPage;

// TrackByfunction()
// key is used react for efficient rendering
// UseEffect run sideEffect.

// Key and children 

// List of Todos and Signup Form 

// React Routing
// #E97B92
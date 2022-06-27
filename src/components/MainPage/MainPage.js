import './MainPage.css';
import Image from '../../assests/comp.png'
import LeftSide from '../LeftSide/LeftSide';
import Form from '../Form/Form';

const MainPage = () => {
    return <div><div className='main-title'>
       <h1 className='text-center'>Workspace Booking</h1> 
    </div>
        <div className='container main-container'>
            <div className='row'>
                <div className='col-lg-6 col-sm-12'>
                    <LeftSide Image={Image} text='Visit DashBoard' />
                </div>
                <div className='col-lg-6 col-sm-12'>
                    <Form />
                </div>
            </div>
        </div>
    </div>
}

export default MainPage;

// TrackByfunction()
// key is used react for efficient rendering
// UseEffect run sideEffect.

// Key and children 

// List of Todos and Signup Form 

// React Routing
// #E97B92
import './LeftSide.css';
import { Link } from 'react-router-dom';

const LeftSide = (props) => {
    return <div>
        <img src={props.Image} alt="man-in-desk" className='image mt-3' />
        <Link to="/dashboard" className='text-center mt-3 link'>{props?.text}</Link>
    </div>
}

export default LeftSide;
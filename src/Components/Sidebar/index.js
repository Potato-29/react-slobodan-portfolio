import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import LogoS from '../../assets/images/logo-s.png';
import LogoSubtitle from '../../assets/images/logo_sub.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser} from '@fortawesome/free-solid-svg-icons'; 
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';


const Sidebar = () => {
    return (  
        <div className="navbar">
            <Link className='logo' to='/' >
                <img src={LogoS} className='logo' alt="logo" />
                <img src={LogoSubtitle} className='logo' alt="logo2" />
            </Link>
            <nav>
                <NavLink exact="true" activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e"></FontAwesomeIcon>
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e"></FontAwesomeIcon>
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"></FontAwesomeIcon>
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a><FontAwesomeIcon icon={faLinkedin} target="_blank" href="#"/></a>
                </li>
                <li>
                <a><FontAwesomeIcon icon={faGithub} target="_blank" href="#"/></a>
                </li>
                <li>
                <a><FontAwesomeIcon icon={faInstagram} target="_blank" href="#"/></a>
                </li>
            </ul>
        </div>
    );
}
 
export default Sidebar; <h1>hello2</h1>
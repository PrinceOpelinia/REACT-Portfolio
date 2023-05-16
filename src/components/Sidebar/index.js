import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope, faHome, faUser, faLink} from '@fortawesome/free-solid-svg-icons'
import {Link, NavLink} from 'react-router-dom'

const Sidebar = () => (

    <div className = 'nav-bar'>
        <Link className='logo' to ='/'>
            <img src={LogoS} alt = "logo"></img>
            <img className ="sub-logo"src={LogoSubtitle} alt = "slobodan"></img>
        </Link>
        <nav>
            <NavLink exact="true" activeclassname = "active" to = "/">
                <FontAwesomeIcon icon ={faHome} color="#4d4d4e"></FontAwesomeIcon>

            </NavLink>
            <NavLink exact="true" activeclassname = "active" className ="about-link"to = "/about">
                <FontAwesomeIcon icon ={faUser} color="#4d4d4e"></FontAwesomeIcon>

            </NavLink>
            <NavLink exact="true" activeclassname = "active" className="contact-link" to = "/contact">
                <FontAwesomeIcon icon ={faEnvelope} color="#4d4d4e"></FontAwesomeIcon>

            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" 
                rel='noreferrer' 
                href='https://ph.linkedin.com/in/prince-lonito-opelinia-75421a246?original_referer=https%3A%2F%2Fwww.google.com%2F'
                >
                    <FontAwesomeIcon icon={faLink} color ="#4d4d4e"/>
                </a>
            </li>
            <li>
                <a target="_blank" 
                rel='noreferrer' 
                href='https://github.com/PrinceOpelinia'
                >
                    <FontAwesomeIcon icon={faLink} color ="#4d4d4e"/>
                </a>
            </li>
          
        </ul>
    </div>
)

export default Sidebar

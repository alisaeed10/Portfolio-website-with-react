import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';
import './Navbar.css';

export function NavBar() {
    const handleScrollHome = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return (
        <nav>
            <a className='contact-icons' href='/' onClick={() => handleScrollHome()}><div className="nav-symbol">Ali Saeed</div></a>
            <ul className="nav-options" >
                <li className='section'><Link to="about" smooth={true} duration={500} offset={-50}>/ About</Link></li>
                <li className='section'><Link to="Experiences" smooth={true} duration={500} offset={90}>/ Experiences</Link></li>
                <li className='section'><Link to="Projects" smooth={true} duration={500} offset={-50}>/ Projects</Link></li>
            </ul>
            <div className='icons'>
                <a className='contact-icons' href='https://github.com/alisaeed10'>
                    <FontAwesomeIcon className="github-icon" icon={faGithub} size="xl" />
                </a>
                <a className='contact-icons' href='https://www.linkedin.com/in/ali-saeed-swe/'>
                    <FontAwesomeIcon icon={faLinkedin} size='xl' />
                </a>
                <a className='contact-icons' href='mailto:alisaeed.cs@outlook.com'>
                    <FontAwesomeIcon icon={faEnvelope} size="xl" />
                </a>
            </div>
        </nav>
    );
}
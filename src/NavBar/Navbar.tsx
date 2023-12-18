import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

export function NavBar() {
    const handleScrollHome = () => {
        window.scrollTo({ top: 40, behavior: 'smooth' });
    }
    return (
        <nav>
            <a href='/' onClick={() => handleScrollHome()}><div className="nav-symbol">Ali Saeed</div></a>
            <ul className="nav-options" >
                <a href='/#about'><li>/ About</li></a>
                <a href='/#Experiences'><li>/ Experiences</li></a>
                <a href='/#Projects' ><li>/ Projects</li></a>
            </ul>
            <div className='icons'>
                <a href='https://github.com/alisaeed10'>
                    <FontAwesomeIcon className="github-icon" icon={faGithub} size="xl" />
                </a>
                <a href='https://www.linkedin.com/in/ali-saeed-swe/'>
                    <FontAwesomeIcon icon={faLinkedin} size='xl' />
                </a>
                <a href='mailto:asaee2@uic.edu'>
                    <FontAwesomeIcon icon={faEnvelope} size="xl" />
                </a>
            </div>
        </nav>
    );
}
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

export function NavBar() {
    const handleScrollHome = () => {
        window.scrollTo({ top: 10, behavior: 'smooth' });
    }
    const handleScrollAbout = () => {
        window.scrollTo({ top: 1050, behavior: 'smooth' });
    }
    const handleScrollExperiences = () => {
        window.scrollTo({ top: 2120, behavior: 'smooth' });
    }
    const handleScrollProjects = () => {
        window.scrollTo({ top: 3200, behavior: 'smooth' });
    }
    return (
        <nav>
            <a href='/' onClick={() => handleScrollHome()}><div className="nav-symbol">Ali Saeed</div></a>
            <ul className="nav-options" >
                {/* <a href='/' onClick={() => handleScrollHome()}><li>/ Home</li></a> */}
                <a href='#about' onClick={() => handleScrollAbout()}><li>/ About</li></a>
                <a href='#Experiences' onClick={() => handleScrollExperiences()}><li>/ Experiences</li></a>
                <a href='#Projects' onClick={() => handleScrollProjects()}><li>/ Projects</li></a>
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
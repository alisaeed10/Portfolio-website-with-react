import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './Footer.css'

export function Footer() {
    return (
        <div className="footer">
            <div   className='contact' >
                <p className='footer-contact'>-------- Contact --------</p>
                <div className='icons2'>
                    <a className="contact-icons" href='https://github.com/alisaeed10'>
                        <FontAwesomeIcon className="github-icon" icon={faGithub} size="lg" />
                    </a>
                    <a className="contact-icons" href='https://www.linkedin.com/in/ali-saeed-swe/'>
                        <FontAwesomeIcon icon={faLinkedin} size='lg' />
                    </a>
                    <a className="contact-icons" href='mailto:asaee2@uic.edu'>
                        <FontAwesomeIcon icon={faEnvelope} size="lg" />
                    </a>
                </div>  
                <div className="footer-content">
                    <p className="footer-copyright">@ 2023 Ali Saeed. All Rights Reserved. </p>
                </div>
            </div>
        </div>
    );
}
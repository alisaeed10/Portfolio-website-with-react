import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowMinimize } from '@fortawesome/free-regular-svg-icons';
import './About.css';

export function About() {

    return (
        <div id='about' className='about'>
            <p className="about-title">Get To Know More About Me </p>
            <FontAwesomeIcon icon={faWindowMinimize} className='line' />
            <div className="about-content">
                <p className='about-bio'>As of now, I am a Senior at the <span className='info-pieces'>University of Illinois at Chicago</span>, expecting to <span className='info-pieces'>graduate in May 2024</span>. In addition to my classes, I'm also working as <span className='info-pieces'>Teaching Assistant</span> for UIC's data structure course. Which is pretty cool—I get to help students and improve my tech and problem-solving skills along the way.
                </p>
                <p className='about-bio'>
                    Outside of school, I enjoy furthuring my knowledge on the different types technologcal advancement and taking care of my physical health by consistently working out at the gym.</p>
                <p className='about-bio'>
                <span className='info-pieces'>Looking forward</span>, I'm actively seeking a <span className='info-pieces'>full-time</span> opportunity to collaborate with a passionate and encouraging team as a <span className='info-pieces'>Software Engineer</span>, contributing to innovative and creative projects. If you have any questions or would like to connect, feel free to drop me an email. I'd love to hear from you!
                </p>
            </div>
            <div className='about-photos'>
                <img src='../../UIClogo.png' alt='Ali Saeed' className='about-image' />
                <img src='../../software.png' alt='Ali Saeed' className='about-image2' />
            </div>
            <div className='tech-skills'>
                <p className='tech-skills-title'>Tech Skills:</p>
                <div className='tech-skills-content'>
                    <p className='tech-skills-content-pieces'><span className='info-pieces1'>Languages:</span> C++, Java, Python, JavaScript, HTML, CSS, SQL, TypeScript</p>
                    <p className='tech-skills-content-pieces'><span className='info-pieces2'>Frameworks:</span> React, Node.js, Express.js, Firebase, Bootstrap</p>
                    <p className='tech-skills-content-pieces'><span className='info-pieces3'>Tools:</span> Git, GitHub, VSCode, IntelliJ, Heroku, AWS</p>
                </div>
            </div>
                
        </div>);
}
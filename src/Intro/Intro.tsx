import { useEffect } from 'react';
import './Intro.css';

export function Intro() {
    const name = ['a Software Enigneer', 'an Innovator', 'a Full-Stack Developer', 'a AI/Machine Learning Enthusiast', 'a Computer Sciencist', 'a Problem Solver', ];
    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            if (i < name.length) {
                document.querySelector('.title')!.innerHTML = name[i];
                i++;
            } else {
                i = 0;
            }
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="intro">
            <img src='../../Ali.png' alt='Ali Saeed' className='intro-image' />
            <div className="intro-text">
                
                <p className='intro-text-name'>Hey, My Name is <span className='name'> Ali</span></p>
                
            </div>
            <p className='intro-text-title'>I am <span className='title'>{name[0]}</span></p>
            <div className="intro-bio">
                <p className='bio'>Currently I'm studying Computer Science at the University of Illinois at Chicago. With the skills I've attained, I aspire to become a software engineer with a great interest in full-stack development, AI/Machine Learning, Cloud Services, and more. My goal is to contribute to a meaningful impact in the advancement of technology by creating innovative solutions.</p>
            </div>
        </div>
    );
}
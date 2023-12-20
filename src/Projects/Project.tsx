import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowMinimize } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { HiArrowCircleLeft } from "react-icons/hi";
import { HiArrowCircleRight } from "react-icons/hi";
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import './Project.css';

export function Projects() {
    const [index, setIndex] = useState(0);
    const [slideIndex, setSlideIndex] = useState(true);
    const theProjects = [
        [
            "Scavenger Hunt Game",
            "September - November 2023",
            "A scavenger hunt game that allows users to create their own scavenger hunt and share it with their friends or join other users game.",
            [
                "Frontend: React, Typescript, HTML, CSS ",
                "Backend: Node.js, Express, PostgreSQL ",
                "Deloyed frontend on Netlify and backend on Heroku"
            ]

        ],
        [
            "3 Card Poker",
            "March - April 2023",
            "A game where given 3 random cards from a deck of cards, the user can bet on whether they will win or lose the game against the server",
            [
                "Frontend: JavaFX",
                "Backend: Java",
                "Tested using JUnit and built using Apache Maven"
            ]
        ],
        [
            "Animated Bar",
            "September - October 2022",
            "Animated Bars is an application that animates bars moving throughout a span of years given the data that is parsed from a file.",
            [
                "Tools: C++, Visual Studio",
            ]
        ]
    ]
    const nextSlide = () => {
        let newIndex = index + 1;
        if (newIndex === theProjects.length) {
            newIndex = theProjects.length-1;
        }
        setIndex(newIndex);
        setSlideIndex(false);
    }
    const prevSlide = () => {
        let newIndex = index - 1;
        if (newIndex < 0) {
            newIndex = 0;
        }
        setIndex(newIndex);
        setSlideIndex(true);
    }
    const transfer = () => {   
        if (index === 0) {
            window.location.href = 'https://github.com/thanhtaita/ScavengerHunt';
        }
        else if (index === 1) {
            window.location.href = 'https://github.com/alisaeed10/3-card-poker-game-java';
        }
        else {
            window.location.href = 'https://github.com/alisaeed10/Animated-Bars';
        }
    }
    const Scav = () => {
        window.location.href = "https://play-scavenger-hunt.netlify.app/";
    }

    return (

        <div id='Projects' className="Projects">
            <p  className="Project-title">Projects I Built</p>
            <FontAwesomeIcon icon={faWindowMinimize} className='line' />
            <div className='project-content' >
                <p className='project-name'>{theProjects[index][0]}
                <button className='project-button' onClick={() => transfer()} ><FontAwesomeIcon className="github-icon" icon={faGithub} size="lg" /></button> 
                {index === 0 && <button className='project-button' onClick={() => Scav()} ><FontAwesomeIcon className="github-icon" icon={faPaperclip} size="lg" /></button>}
                </p>
                <p className='project-date'>{theProjects[index][1]}</p>
                <p className='project-description'>{theProjects[index][2]}</p>
                {Array.isArray(theProjects[index][3])
                    ? theProjects[index][3].map((item: string, num: number) => (
                        <p className='project-bulletpoint' key={num}>{item}</p>
                    )) : <p>{theProjects[index][3]}</p>
                }
                {
                    index === 0 && (<img src='../../Scav.png' alt='Scavenger Hunt' className='project-image' />)
                        
                }
                {
                    index === 1 && (<img src='../../3Card2.png' alt='3 Card Poker' className='project-image' />)
                }
                {
                    index === 2 && (<img src='../../BarChart.png' alt='Animated Bar' className='project-image' />)
                }
            </div>
            <div className='next-slide-nav2'>
                <button className='next-slides2' onClick={() => prevSlide()}><HiArrowCircleLeft />
                </button>
                <button className='next-slides2' onClick={() => nextSlide()}><HiArrowCircleRight />
                </button>
            </div>
        </div>

    );
}
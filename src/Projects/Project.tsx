import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowMinimize } from '@fortawesome/free-regular-svg-icons';
import { HiArrowCircleLeft } from "react-icons/hi";
import { HiArrowCircleRight } from "react-icons/hi";
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
            "A game that given 3 random cards from a deck of cards, the user can bet on whether they will win or lose the game against the server",
            [
                "Frontend: JavaFX",
                "Backend: Java",
                "Tested using JUnit and built using Apache Maven"
            ]
        ],
        [
            "Database Search",
            "January - February 2023",
            "Searched Chicago's Metra database for information about train ridership for each Metra line and Displayed a graph of the data acquired using Python's matplot library and an image of the Chicago city grid using Python's matplotlib library",
            [
                "Tools: Python, SQLite",
                "Libraries: Matplotlib"
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
    return (
        <div className="Projects">
            <p className="Project-title">Projects I Built</p>
            <FontAwesomeIcon icon={faWindowMinimize} className='line' />
            <div className='project-content'>
                <p className='project-name'>{theProjects[index][0]}</p>
                <p className='project-date'>{theProjects[index][1]}</p>
                <p className='project-description'>{theProjects[index][2]}</p>
                {Array.isArray(theProjects[index][3])
                    ? theProjects[index][3].map((item: string, num: number) => (
                        <p className='project-bulletpoint' key={num}>{item}</p>
                    )) : <p>{theProjects[index][3]}</p>
                }
            </div>
            <div className='next-slide-nav'>
                <button className='next-slides' onClick={() => prevSlide()}><HiArrowCircleLeft />
                </button>
                <button className='next-slides' onClick={() => nextSlide()}><HiArrowCircleRight />
                </button>
            </div>
        </div>
    );
}
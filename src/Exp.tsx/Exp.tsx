import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowMinimize } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';
import { HiArrowCircleLeft } from "react-icons/hi";
import { HiArrowCircleRight } from "react-icons/hi";
import { Bs1CircleFill } from "react-icons/bs";
import { Bs2CircleFill } from "react-icons/bs";


import './Exp.css';

export function Expreineces() {
    const [index, setIndex] = useState(0);
    const [slideIndex, setSlideIndex] = useState(true);

    const nextSlide = () => {
        setIndex(1);
        setSlideIndex(false);
    }
    const prevSlide = () => {
        setIndex(0);
        setSlideIndex(true);
    }
    const theExpreinces = [
        [
        "University of Illinios at Chicago, Chicago IL",
        "Teaching Assisant for Data Structures",
        "August 2023 - Present",
        ["●  Held weekly office hours and taught concepts such as stacks, queues, and hash tables", "●  Conducted and contributed to the grading of multiple projects and technical Interview exams", "● Taught students debugging techniques to pinpoint exact technical coding problems, led to a decrease in time assisting a student and an increase in the number of students assisted per hour", "● Led multiple labs in reviewing and engaging students in discussion with the material learned that week"]
                
        ],
        [
            "Alamal Alarabi, Tinley Park IL",
            "Cashier",
            "Sep 2018 - July 2021",
            ["● Provided exceptional customer service by addressing inquiries and resolving complaints",
            "● Demonstrated knowledge of procedures and policies, effectively answered customers' questions and concerns","●  Ensured shelves were stocked with merc handise and marked prices on items","● Efficiently managed company bills using various payment methods including cash, vouchers, and checks"]
        ]

    ]
    return (
        <div id='Experiences' className="Exp">
            <p className="Exp-title">My Expreicnces</p>
            <FontAwesomeIcon icon={faWindowMinimize} className='line' />
            <div className='positioning'>
            <div className='next-slide-nav'>
                <button className='next-slides' onClick={() => prevSlide()}><HiArrowCircleLeft />
                </button>
                <button className='next-slides' onClick={() => nextSlide()}><HiArrowCircleRight />
                </button>
            </div>
            <div className='exp-content'>
                <p className='exp-employer'>{theExpreinces[index][0]}</p>
                <p className='exp-position'>{theExpreinces[index][1]}</p>
                <p className='exp-date'>{theExpreinces[index][2]}</p>
                {Array.isArray(theExpreinces[index][3])
                    // @ts-ignore
                    ? theExpreinces[index][3].map((item: string, num: number) => (
                        <p className='exp-bulletpoint' key={num}>{item}</p>
                    )) : <p>{theExpreinces[index][3]}</p>
}
            </div>
            <div className='next-slide-text'>
                <p className={slideIndex ? 'next-slide-zero' : ''}><Bs1CircleFill /></p>
                <p className={slideIndex ? '' : 'next-slide-one'}><Bs2CircleFill /></p>
            </div>
            </div>
        </div>);
}

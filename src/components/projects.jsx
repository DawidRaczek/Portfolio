import React from 'react';
import '../styles/project.css'

const projects = () => {
    return (
        <>
            <div className='project-page'>
            <div className='project project3'>
                    <div className='project-description'>
                        <h1 className='project-title'>Client Page</h1>
                        <p>Discover my recent project – a stylish website built with React and TypeScript.
                            Featuring modular components and responsive design, this project focuses on simplicity and user engagement. 
                            The clean code emphasizes maintainability and scalability, showcasing a commitment to modern web development.</p>
                    </div>
                    <a href='https://i-automat.com/' target='blank' className='project-image3'></a>
                </div>
                <div className='project project1'>
                    <a href='https://mnemonic-cards.web.app/' target='blank' className='project-image1'></a>
                    <div className='project-description'>
                        <h1 className='project-title'>Mnemonic flashcards</h1>
                        <p>A mnemonic learning app featuring flashcards.
                            On one side of the card, there's a word in one language, and upon clicking, the user can see
                            the translation of the same word in another language.
                            These app are built based on the flashcard technique, utilizing repetition to aid in
                            memorizing words, phrases, or definitions.</p>
                    </div>
                </div>
                <div className='project project2'>
                    <div className='project-description'>
                        <h1 className='project-title'>Currency calculator</h1>
                        <p>This application is a user-friendly currency converter allowing seamless currency conversion.
                            As a bonus, users can conveniently check real-time stock prices by entering the stock symbol
                            or company name, making it a versatile tool for both travelers and investors.</p>
                    </div>
                    <a href='https://exchangecalculator.web.app/index.html' target='blank' className='project-image2'></a>
                </div>
            </div>
        </>
    );
}

export default projects;

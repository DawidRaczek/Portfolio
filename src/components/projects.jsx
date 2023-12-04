import React from 'react';
import '../styles/project.css'

const projects = () => {
    return (
        <>
            <div className='project-page'>
                <div className='project project1'>
                    <div className='project-image1'></div>
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
                    <div className='project-image2'></div>
                </div>
            </div>
        </>
    );
}

export default projects;

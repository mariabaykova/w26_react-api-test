import React from 'react';
import '../styles/Hero-card.css';


function HeroCard( props ) {
    return (
        <div className='hero-card'>
            <h2 className='hero-card__title'>
                {props.title}
            </h2>
            <div className='hero-card__body'>
                <img className='hero-card__img' src={props.imgPath} alt={props.title} />
                <p className='hero-card__text'>
                    {props.heroDescription}
                </p>
            </div>
        </div>
    );
}

export default HeroCard;
import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <section id="cards-all">
    <div className='cards'>
        <h1>Check these epic destinations!</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className="cards__items">
                <CardItem 
                src="/images/img-9.jpg"
                text="Explore the hidden waterfall"
                label="Adventure"
                path="/services"
                video=""
                />

                <CardItem 
                src="/images/img-2.jpg"
                text="Travel through the Islands of Bali"
                label="Luxury"
                path="/services"
                video=""
                />
                </ul>
                <ul className="cards__items">
                <CardItem 
                video="/videos/video-2.mp4"
                text="Explore the hidden waterfall"
                label="Adventure"
                path="/services"
                />

                <CardItem 
                src="/images/img-8.jpg"
                text="Walk through neverending dessert"
                label="Adventure"
                path="/services"
                video=""
                />

                <CardItem 
                src="/images/img-6.jpg"
                text="See all monuments in the New York city"
                label="Sightseeing"
                path="/services"
                video=""
                />
                </ul>
            </div>
        </div>
    </div>
    </section>
  );
}

export default Cards;

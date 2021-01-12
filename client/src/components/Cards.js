import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Some placeholders to use if need to</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/forprojproj3.jpeg'
              text='Something that leads to movies maybe'
              label='Watch'
              path='/Groups'
            />
            <CardItem
              src='images/imgpopcorn.jpg'
              text='Something that leads to ratings'
              label='Enjoy'
              path='/Groups'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/imgticket.jpg'
              text='Something that leads to movie club'
              label='Join'
              path='/Groups'
            />
            <CardItem
              src='images/imggroup.jpg'
              text='=Something that leads to other people groups and or ratings'
              label='Create'
              path='/Groups'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

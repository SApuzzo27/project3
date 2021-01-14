import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function GroupMemberCards() {
  return (
    <div className='cards_1'>
      <h1>Some placeholders to use if need to</h1>
      <div className='cards_container_1'>
        <div className='cards_wrapper_1'>
          <ul className='cards_items_1'>
            <CardItem
              src='images/imggroup.jpg'
              text='Group Members'
              label='Watch'
              path='/Groups'
              text='member1 '
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default GroupMemberCards;
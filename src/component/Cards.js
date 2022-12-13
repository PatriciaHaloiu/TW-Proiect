import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these JOBS!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/JOBS.jpg'
              text='Employment type: Full-time
              Job category: Information Technology
              Job industry: Information Technology And Service
              Experience level: Mid-Senior Level'
              label='HUAWEI ENTERPRISE BUSINESS'
              path='/services'
            />
            <CardItem
              src='images/JOBS.jpg'
              text='Employment type: Full-time
              Job category: Information Technology
              Job industry: Information Technology And Services
              Experience level: Mid-Senior Level'
              label='BOSCH SERVICE SOLUTIONS'
              path='/services'
            />
            <CardItem
              src='images/JOBS.jpg'
              text='Employment type: Full-time
              Job category: Information Technology
              Job industry: Information Technology And Services
              Experience level: Mid-Senior Level'
              label='SB SOFTWARE SRL'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
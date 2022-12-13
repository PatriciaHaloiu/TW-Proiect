import React from 'react';
import '../../App.css';

export default function Announcement() {
  return <div style={{ backgroundImage: "url(images/fundal.jpg)", backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  width: '100vw',
  height: '100vh' }}>
    <h1 className='announcement'>Announcements</h1>;
    </div>
}
import React from 'react';
import Card from '../project-card';
import './styles.css'

function projects() {
  return (
    <div className='projects-cont'>
      <div className="title">
        <a href="https://github.com/0thigs">
          <h1 id='project-title'>Meus Projetos</h1>
        </a>
      </div>
      <div className="cards">
        <Card name="Github Profile Finder" url="https://i.imgur.com/H2bb6EO.png" href="https://github.com/0thigs/Github-Profile-Finder"/>
        <Card name="Realtime Chat App" url="https://i.imgur.com/KHZEf67.png" href="https://github.com/0thigs/ChatApp" />
      </div>
    </div>
    );
}

export default projects;
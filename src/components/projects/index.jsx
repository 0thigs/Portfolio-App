import React from 'react';
import Card from '../project-card';
import './styles.css'

function projects() {
  return (
    <div className='projects-cont'>
      <div className="title">
        <a href="https://github.com/0thigs" target={"_blank"}>
          <h1 id='project-title'>Meus Projetos</h1>
        </a>
      </div>
      <div className="cards">
        <Card name="Github Profile Finder" url="https://i.imgur.com/Y5Vfwhu.jpg" href="https://github.com/0thigs/Github-Profile-Finder"/>
        <Card name="Realtime Chat App" url="https://i.imgur.com/phn7B4J.jpg" href="https://github.com/0thigs/ChatApp" />
        <Card name="Pokedex App" url="https://i.imgur.com/yMSEQhz.jpg" href="https://github.com/0thigs/Pokedex-App" />
        <Card name="Login Page App" url="https://i.imgur.com/fpNxNfM.jpg" href="https://github.com/0thigs/LoginPage" />
        <Card name="Calculator App" url="https://i.imgur.com/Iv3dTdh.jpg" href="https://github.com/0thigs/calculator-app" />
        <Card name="Todo App" url="https://i.imgur.com/t3zwBeP.jpg" href="https://github.com/0thigs/todo-app" />
      </div>
    </div>
    );
}

export default projects;
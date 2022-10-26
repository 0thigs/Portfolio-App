import React from 'react';
import ProjectCard1 from '../project-card/card1';
import ProjectCard2 from '../project-card/card2';
import ProjectCard3 from '../project-card/card3';
import ProjectCard4 from '../project-card/card4';
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
        <ProjectCard1 />
        <ProjectCard2 />
        <ProjectCard3 />
        <ProjectCard4 />
      </div>
    </div>
    );
}

export default projects;
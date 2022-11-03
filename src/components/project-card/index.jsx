import React from 'react';
import './styles.css'

function ProjectCard(props) {

  return (
      <div className="card-project card0" style={{
        backgroundImage: `url(${props.url})`
        }}>
        <a class="link-card" href={props.href} target="_blank">
          <h1 className='card-title'>{props.name}</h1>
        </a>  
      </div>
  );
}

export default ProjectCard;
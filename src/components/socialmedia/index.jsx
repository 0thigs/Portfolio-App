import React from 'react';
import './styles.css';

function socialmedia(props) {
  return (
    <div className='media-container'>
        <a href={props.href} className='media-link' target={"_blank"}>
            <img src={props.src} alt="img" className='media-img'/>
            <p className='media-text'>{props.content}</p>
        </a>
    </div>
  );
}

export default socialmedia;
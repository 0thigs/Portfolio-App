//@tsx-check
import React from 'react';
import './styles.css'

function Card() {
  return (
        <div className="aboutMe-cont">
          <div className="card">
            <h1>Front-end developer</h1>
            <div className='AboutMe-text'>
                <p className='text'>ð Hello world, pode me chamar apenas de Thiago. Prazer! <br /></p>
                <p className='text'>ð¨âð» Sou um Desenvolvedor Web Sempre buscando mais conhecimento. <br /></p>
                <p className='text'>ð Cursando Desenvolvimento de Sistemas pela Etec Ilza Nascimento Pintus de SÃ£o JosÃ© dos Campos. <br /></p>
                <p className='text'>ð¡ Interesses em desenvolvimento Front-end com React, React Native e UX/UI Design. <br /></p>
                <p className='text'>ð Tentando ser um pouquinho melhor do que ontem todos dias. <br /></p>
            </div>
          </div>
        </div>
  );
}

export default Card;
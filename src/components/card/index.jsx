//@tsx-check
import React from 'react';
import './styles.css'

function Card() {
  return (
        <div className="aboutMe-cont">
          <div className="card">
            <h1>Front-end developer</h1>
            <div className='AboutMe-text'>
                <p className='text'>👋 Hello world, pode me chamar apenas de Thiago. Prazer! <br /></p>
                <p className='text'>👨‍💻 Sou um Desenvolvedor Web Sempre buscando mais conhecimento. <br /></p>
                <p className='text'>🎓 Cursando Desenvolvimento de Sistemas pela Etec Ilza Nascimento Pintus de São José dos Campos. <br /></p>
                <p className='text'>💡 Interesses em desenvolvimento Front-end com React, React Native e UX/UI Design. <br /></p>
                <p className='text'>🚀 Tentando ser um pouquinho melhor do que ontem todos dias. <br /></p>
            </div>
          </div>
        </div>
  );
}

export default Card;
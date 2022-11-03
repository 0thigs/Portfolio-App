import React from 'react';
import SocialMedia from '../socialmedia';
import './styles.css'

function contacts() {
  return (
    <div className='contacts-container'>
        <div className="header">
            <div className="cardzin">
                <h1 className='project-title'>Contatos</h1>
            </div>
        </div>
        <div className="contacts-content">
            <div className="social-medias">
                <SocialMedia href="https://wa.me/+5512992565469" src="https://cdn-icons-png.flaticon.com/512/733/733585.png" content="Whatsapp"/>
                <SocialMedia href="https://www.instagram.com/thigszin/" src="https://cdn-icons-png.flaticon.com/512/4138/4138124.png" content="Instagram"/>
                <SocialMedia href="https://www.linkedin.com/in/thiago-martins-de-carvalho-83259a244/" src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" content="LinkedIn"/>
                <SocialMedia href="https://github.com/0thigs" src="https://cdn-icons-png.flaticon.com/512/733/733553.png" content="Github"/>
                <SocialMedia href="mailto:machinimavlogs@gmail.com" src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png" content="Email"/>
            </div>
        </div>
    </div>    
);
}

export default contacts;
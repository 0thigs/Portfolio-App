import React from 'react';
import './styles.css'
import { ReactComponent as MySvg } from '../../assets/avatar_adobe_express.svg';


function profile() {
  return (
    <div className='profile-cont'>
        <div className='profile-img-cont'>
            <div className='circle'>
                <MySvg />
            </div>
        </div>
    </div>
    );
}

export default profile;
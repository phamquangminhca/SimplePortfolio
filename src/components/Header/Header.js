import React from 'react';
import './Header.css';
import Typical from 'react-typical';
import profileImg from '../../assets/profileImg.png';

const Header = () => {
  return (
    <div className='header-container'>
      <div className='header-content'>
        <h1>
            Hi! I'm <span className='fullname'>Anthony Pham</span>
        </h1>
        <h2>
            I am a <Typical steps={['Full Stack Developer 💻', 3000,'Frontend Developer 🎨', 3000,'Backend Developer 🔧', 3000]} loop={Infinity} wrapper='b'/>
        </h2>
        <p>Velit labore proident elit mollit. Adipisicing ipsum laborum excepteur minim est magna labore deserunt laborum enim elit. Qui id duis sunt tempor dolore. Commodo Lorem dolore laboris exercitation reprehenderit ut est laboris quis enim mollit.</p>
        <div className='header-payment-container'>
            <button>Hire Me</button>
            <i className='fa-brands fa-paypal'></i>
            <i className='fa-brands fa-cc-visa'></i>
            <i className='fa-brands fa-cc-mastercard'></i>
            <i className='fa-brands fa-cc-amex'></i>
        </div>
      </div>
      <div className='profile-img-container'>
        <img src={profileImg} alt='profile'/>
        <div className='circle-1'></div>
        <div className='circle-2'></div>
      </div>
    </div>
  )
}

export default Header

import React from 'react';
import './Footer.css';
import logo from '../../assets/logo.jpeg';

const Footer = () => {
  return (
    <footer>
      <div className='footer-logo'>
        <img src={logo} alt='footer logo' />
      </div>

      <div className='footer-copyright'>
        <p>© Anthony Pham. All Rights reserved.</p>
      </div>

      <ul className='footer-social-media'>
        <li>
            <a href='https://www.facebook.com/profile.php?id=100004374341932'>
                <i className='fa-brands fa-facebook-f'></i>
            </a>
        </li>
        <li>
            <a href='https://www.instagram.com/phamquangminhca/'>
                <i className='fa-brands fa-instagram'></i>
            </a>
        </li>
        <li>
            <a href='mailto:minhpham10b@gmail.com'>
                <i class="fas fa-envelope"></i>
            </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer

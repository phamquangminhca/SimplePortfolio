import React from 'react'
import './Services.css'

const Services = () => {
  return (
    <div className='services-container'>
      <div className='services-list-container'>
        <div className='services-desc-container'>
            <h1>My Awesome <span>Services</span></h1>
            <p>Magna qui in eu excepteur nostrud ex commodo cupidatat id adipisicing. Adipisicing cillum magna sit labore consectetur amet nulla pariatur ut eu est nostrud enim. Aliquip minim fugiat ipsum labore aliquip eiusmod excepteur sint irure quis nostrud nulla. Aliqua amet sint do cillum aliquip ad Lorem aliqua aliquip nisi mollit mollit. Nulla sint dolor ea veniam magna ipsum consectetur aliquip tempor laborum pariatur consectetur voluptate. In adipisicing eiusmod laboris fugiat fugiat.</p>
            <button>Hire me</button>
        </div>
        <div className='service-item-container'>
            <div className='services-item'>
                <i className='fa-solid fa-code'></i>
                <div className='item-desc'>
                    <h3>Web Development</h3>
                    <p>Lorem non nostrud eiusmod velit irure aute duis eiusmod do. Et fugiat qui sunt quis commodo aliquip. Nostrud in exercitation ex esse ad aliqua commodo incididunt laboris exercitation id. Dolor enim minim anim minim pariatur. Culpa.</p>
                </div>
            </div>
            <div className='services-item'>
                <i className='fa-solid fa-desktop'></i>
                <div className='item-desc'>
                    <h3>Desktop Development</h3>
                    <p>Lorem non nostrud eiusmod velit irure aute duis eiusmod do. Et fugiat qui sunt quis commodo aliquip. Nostrud in exercitation ex esse ad aliqua commodo incididunt laboris exercitation id. Dolor enim minim anim minim pariatur. Culpa.</p>
                </div>
            </div>
            <div className='services-item'>
                <i className='fa-solid fa-tablet-alt'></i>
                <div className='item-desc'>
                    <h3>U/X Design</h3>
                    <p>Lorem non nostrud eiusmod velit irure aute duis eiusmod do. Et fugiat qui sunt quis commodo aliquip. Nostrud in exercitation ex esse ad aliqua commodo incididunt laboris exercitation id. Dolor enim minim anim minim pariatur. Culpa.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Services

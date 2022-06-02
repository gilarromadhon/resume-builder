import React from 'react';
import Ilustration from '../assets/ilustration.svg';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const history = useNavigate();

  function handleClick() {
    history('/form');
  }

  return (
    <div>
      {/* <header className='spacing-sm'>
        <nav className="navbar navbar-dark bg-dark">
          <div className="container">
              <a className="navbar-brand">
                Resume
                <span style={{fontFamily: 'Poppins', fontWeight: 600, color: '#916BBF'}}>
                  Builder
                </span>
              </a>
          </div>
        </nav>
      </header> */}

      <div className="container grid grid-cols-1 md:grid-cols-2 gap-4 h-screen items-center ">
        <div className='flex md:hidden justify-center'>
          <img className='w-96 p-5 -mb-10' src={Ilustration} alt="Ilustration" />
        </div>
        <div className='text-center md:text-right'>
          <h1 className='font-bold'>Free <span className="text-primary" >Resume Builder</span> for <br />Modern Job Seekers</h1>
          <p className='text-md text-gray-400 my-4'>
              By employing the latest technologies and tools, <br />
              we are able to create a professional and unique < br />
              resume that will help you stand out from the crowd.
          </p>
          <button className='bg-primary text-white p-2 px-3 rounded-tr-xl rounded-bl-xl' onClick={handleClick} >Create My Resume</button>
        </div>
        <div className='hidden md:inline-block'>
          <img className='w-full' src={Ilustration} alt="Ilustration" />
        </div>
        <div className="w-full -mb-1 -mt-20 md:mb-0 static md:absolute flex items-center justify-center bottom-0 left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 font-normal text-sm opacity-50">
          Develop by 
          <i class="ri-github-fill ml-1 hover:cursor-pointer" onClick={() => {window.open("https://github.com/gilarromadhon/", "_blank");}}></i>
          <i class="ri-instagram-fill ml-1 hover:cursor-pointer" onClick={() => {window.open("https://instagram.com/gilarromadhon/", "_blank");}}></i>
          <i class="ri-linkedin-box-fill ml-1 hover:cursor-pointer" onClick={() => {window.open("https://linkedin.com/in/gilarromadhon/", "_blank");}}></i>
        </div>
      </div>
    </div>
  );
}

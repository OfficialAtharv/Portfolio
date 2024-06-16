import React from 'react';
import jobportal from '../assets/portfolio/jobportal.jpg';
import installNode from '../assets/portfolio/installNode.jpg';
import TODO from '../assets/portfolio/To-Do.jpg';
// import reactParallax from '../assets/portfolio/reactParallax.jpg'
import Untitled from '../assets/portfolio/Untitled.jpg';
import Responsive_login_registration from '../assets/portfolio/Responsive_login_registration.jpg';

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: jobportal,
      demo: "https://major-project-let-s-work.vercel.app/Profile",
      Name: "Job Portal Website"
    },
    {
      id: 2,
      src: Untitled,
      demo: "https://e-commerce-full-website.vercel.app/",
      Name: "E-Commerce Website"
    },
    {
      id: 3,
      src: TODO,
      demo: "https://to-16ezjckv6-atharvs-projects-902db5dc.vercel.app/",
      Name: "To-Do Application"
    },
    {
      id: 4,
      src: Responsive_login_registration,
      demo: "",
      Name: "Responsive Login And Registration Form"
    },
    {
      id: 5,
      src: installNode,
      demo: "",
      Name: "MERN Application"
    },
  ];

  const handleDemoButtonClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div name="portfolio" className='pb-10 bg-gradient-to-b from-black to-gray-800 w-full text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
          <p className='py-6'>Check Out some of my work</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-4'>
          {portfolios.map(({ id, src, demo, Name }) => (
            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
              <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />
              <span className='flex items-center justify-center mt-3'>{Name}</span>
              <div className='flex items-center justify-center'>
                <button className='w-1/2 px-6 py-2 m-4 duration-200 hover:scale-105' onClick={() => handleDemoButtonClick(demo)}>Demo</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;

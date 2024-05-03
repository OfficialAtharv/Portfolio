import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
const SocialLinks = () => {
const Links =[
  {
    id:1,
    child:(
      <>
      LinkedIn
      <FaLinkedin size={30}/>
    </>
    ),
    href:'https://www.linkedin.com/in/atharv-kulkarni-67a70b2a3/',
    style:'rounded-tr-md'
  },
  {
    id:2,
    child:(
      <>
      GitHub
      <FaGithub size={30}/>
    </>
    ),
    href:'https://github.com/OfficialAtharv',
   
  },
  {
    id:3,
    child:(
      <>
      Email
      <HiOutlineMail size={30}/>
    </>
    ),
    href:'mailto:atharvkulkarniofficial21@gmail.com',
    
  },
  {
    id:4,
    child:(
      <>
      Resume
      <BsFillPersonLinesFill size={30}/>
    </>
    ),
    href:'/Atharv Kulkarni Resume.pdf',
    style:'rounded-br-md',
    download:true,
  },
]

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
      {Links.map(({id,child,href,style,download})=> (
         // eslint-disable-next-line no-useless-concat
         <li key={id}className={"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] bg-gray-500 hover:rounded-md duration-300 hover:ml-[-10px]" + " "+ style}>
         <a href={href} className="flex justify-between items-center w-full text-white" download={download} target='_blank' rel="noreferrer">
          {child}
         </a>
       </li>
      ))}
      </ul>
    </div>
  );
};

export default SocialLinks;

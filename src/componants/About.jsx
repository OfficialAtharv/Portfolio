import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-2">
          <p className="text-4xl pt-10px font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          My name is Atharv Arun Kulkarni, a dynamic force in the realm of web
          development, driven by an insatiable curiosity and a relentless
          pursuit of excellence. Having earned my BCA degree from VPIMSR, I have
          fortified my knowledge base and sharpened my technical acumen to
          emerge as a formidable player in the digital landscape. My repertoire
          of skills spans across HTML, CSS, PHP, JavaScript, Python, React.js,
          and Android development, a testament to my versatile proficiency in
          both front-end finesse and back-end brilliance. As a pro front-end
          developer, I orchestrate captivating user interfaces that captivate
          and engage, infusing creativity and innovation into every pixel.
          Simultaneously, my prowess in backend development ensures the seamless
          integration of functionality and the optimization of performance,
          delivering robust and scalable solutions that stand the test of time.
        </p>
        <br />
{/*         <p className="text-xl">
          Driven by a relentless passion for innovation and a commitment to
          excellence, I thrive in dynamic environments where challenges fuel my
          growth and opportunities abound. With an unwavering dedication to
          pushing boundaries and exceeding expectations, I am poised to leave an
          indelible mark on the ever-evolving landscape of technology.
        </p> */}
      </div>
    </div>
  );
};

export default About;

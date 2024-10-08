import { useEffect, useState } from "react";
import SVGAnimation from '../components/BlobAndImage/SVGAnimation';
import HoverBlob from "../components/BlobAndImage/HoverBlob";
import {motion} from 'framer-motion';
import '../App.css';

const About = () => {
   // define cursor coordinates
   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

   // define if mouse is hovered on element
   const [isHovered, setIsHovered] = useState(false);

   // define location of mouse
   useEffect(() => {
       const setFromEvent = (e) => {
           setMousePosition({ x: e.clientX, y: e.clientY });
       };
       window.addEventListener("mousemove", setFromEvent);

       return () => {
           window.removeEventListener("mousemove", setFromEvent);
       };
   }, []);

   const size = isHovered ? "300" : "30";


  return (
    <section id="about" className=" relative overflow-hidden">
      <motion.div className="mask absolute flex justify-between gap-16 px-12 h-screen"
      animate={{
        WebkitMaskPosition: `${mousePosition.x - size / 2}px ${
            mousePosition.y - size / 2
        }px`,
        WebkitMaskSize: `${size}px`,
    }}
    transition={{type:"tween", ease: "backOut", duration: 0.4 }}
      >

          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          >
              {isHovered ? <HoverBlob /> : <SVGAnimation />}
          </div>

          <div className="w-2/3 flex flex-col items-center justify-center "
          
          >
            <h2 className="text-4xl font-bold mb-6 text-cyan-400"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            >About Me</h2>
            <p className="text-lg text-gray-400 text-justify"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            >
              Lorem ipsum dolor sit amet, <span className="text-4xl text-pink-600 font-bold leading-tight">CONSECTETUR</span> adipisicing elit. Quasi nulla dolore sint veniam repellat, ullam itaque. Hic quae quisquam, consequuntur, culpa incidunt nihil cum excepturi, impedit odio architecto vero eaque alias voluptate enim aspernatur neque accusantium. Provident ipsam minima harum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore veniam tempore vitae error, quasi tenetur unde ipsa eveniet quidem laborum laudantium enim blanditiis doloribus voluptas ullam reprehenderit culpa distinctio quia!
            </p>
          </div>
          
      </motion.div>

      <div className="normal flex justify-between gap-16 px-12 h-screen">
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <SVGAnimation/>
          </div>
          <div className="w-2/3 flex flex-col items-center justify-center ">
            <h2 className="text-4xl font-bold mb-6 text-cyan-400">About Me</h2>
            <p className="text-lg text-gray-400 text-justify">
              I'm a passionate front-end developer with experience in building web applications.
              I love working with React.js and creating visually appealing and interactive interfaces.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur suscipit autem reiciendis voluptatem dolor, neque, totam doloremque aliquid aut iure sunt facere quas officia assumenda cumque velit repellat! Perspiciatis commodi saepe totam pariatur excepturi quidem molestiae ducimus ipsum beatae labore enim voluptatem dolore similique recusandae voluptate, eius id deleniti obcaecati.
            </p>
          </div>
          
      </div>
     
    </section>
  );
};

export default About;

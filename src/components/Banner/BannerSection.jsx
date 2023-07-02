import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Container from '../shared/Container';
import { FaFacebookSquare, FaGithub, FaLinkedin } from "react-icons/fa";
// import img from '../../assets/rifat.png';
import resume from '../../assets/resume.pdf';
import Lottie from "lottie-react";
import lottieAnimation from '../../assets/programmar.json';

const BannerSection = () => {
  const [text] = useTypewriter({
    words: ['Rifat Hossain','Web Developer','Front-end Developer','React js Developer','Freelancer' ],
    loop: {}
 })
  return (
  <Container>
      <section className="">
    <div className="">
      <div className="lg:flex gap-6">
 
         <a href="#self" className="button">
           <div className="pointer"></div>
         </a>

        <div className="lg:w-[50%] mx-auto my-auto" >
            <h3 className='text-3xl font-bold mb-3'>Hello, I'm</h3>
            <h1 className='text-5xl font-bold text-purple-700 mb-3'>{text}
               <span className='text-indigo-700'>
                 <Cursor />
               </span>
            </h1>
            <p className="font-medium mt-3 mb-2">A <span className="text-green-700">Web Designer</span> From <span className="text-blue-700">Bangladesh</span></p>
            <p className='font-medium mb-2'>I am a skilled and passionate MERN Stack developer with one year experience.</p>
            <div className="flex gap-6">
              <a href={resume} ><button className="btn btn-info">Download Resume</button></a>
              <ul className='flex gap-2'>
                <li>
                  <a href="https://web.facebook.com/md.ripat.792/" target="_blank" rel="noopener noreferrer"><FaFacebookSquare size={40}/></a>
                </li>
                <li>
                 <a href="https://github.com/RifatHossain41" target="_blank" rel="noopener noreferrer"><FaGithub size={40}/></a>
               </li>
               <li>
                 <a href="https://www.linkedin.com/in/rifat-hossain-7b5559280/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={40}/></a>
               </li>
              </ul>
          </div>
        </div>
         {/* <div className="lg:w-[50%] flex items-center justify-center">
           <img className="rounded-lg" src={img} alt="image" width="500px" height="500px" />
        </div> */}
        <div  className="flex items-center justify-center lg:mt-0 lg:mb-10">
    

      <Lottie className="" animationData={lottieAnimation} loop={true} />
        
      </div>
      </div>
    </div>
  </section>
  </Container>
  );
};

export default BannerSection;
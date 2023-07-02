import  { useEffect, useState } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
import project1 from "../../assets/projects/summer-camp-school.png"
import project2 from "../../assets/projects/career-hub.png"
import project3 from "../../assets/projects/car-doctor.png"
import project4 from "../../assets/projects/food-recipe.png"
import Container from "../shared/Container";

const ProjectSection = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
 
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  const toggleAccordion1 = () => {
    setIsOpen1(!isOpen1);
  };

  const toggleAccordion2 = () => {
    setIsOpen2(!isOpen2);
  };

  const toggleAccordion3 = () => {
    setIsOpen3(!isOpen3);
  };

  const toggleAccordion4 = () => {
    setIsOpen4(!isOpen4); 
  };
  return (
   <Container>
     <div>
    <h2 className="text-center font-bold text-3xl  pt-4 my-6 gap-10">
      Projects
    </h2>

    <div className="mx-auto grid sm:grid-cols-1 lg:grid-cols-2">
      {/* summer camp */}
      <div data-aos="fade-up"
   data-aos-duration="1000" className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-950  hover:-translate-y-2 hover:bg-violet-300 hover:transition-colors hover:delay-300 hover:duration-500 mr-6">
        <div className="mx-auto">

          <div>
          <div className="relative max-w-full h-72 overflow-hidden">
                                  <div className="h-max w-full transition-transform duration-[5000ms] ease-linear transform translate-y-0 hover:-translate-y-[calc(100%-18rem)]">
                                      <img src={project1} alt="image" className="w-full object-cover object-top " />
                                  </div>
                              </div>
          </div>
          <h3 className="title-text text-center mt-3 text-2xl dark:text-white">Summer Camp</h3>
          <hr className="my-6 border-violet-500 sm:mx-auto dark:border-gray-700 lg:my-8" />
        </div>
        <div className="p-5">
          <div id="accordion-collapse" data-accordion="collapse">
            <button 
              type="button"
              className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-900 bg-gray-100 border border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={toggleAccordion1}
              aria-expanded={isOpen1}
              aria-controls="accordion-collapse-body-1"
              id="accordion-collapse-heading-1"
            >
              <span>Project Details</span>
            </button>
            {isOpen1 && (
              <div
                id="accordion-collapse-body-1"
                aria-labelledby="accordion-collapse-heading-1"
                className=" p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900"
              >
                <div className="">
                  <h3 className="text-xl text-violet-600 dark:text-violet-600 font-semibold ">
                    Description:{" "}
                  </h3>
                  <p className="dark:text-white">
                    This is a summer camp based Learning Platform for students
                    where they can choose courses and enroll those courses
                    with various varieties.{" "}
                  </p>
                  <h3 className="text-xl font-semibold text-violet-600 dark:text-violet-600">
                    Features:{" "}
                  </h3>

                  <ul className="dark:text-white">
                    <li className="flex">
                      <BsCheckCircleFill className="mt-1 mr-2 text-green-500"></BsCheckCircleFill>{" "}
                      Provide Admin Panel and Instructor Panel for
                      instructors.
                    </li>
                    <li className="flex">
                      <BsCheckCircleFill className="mt-1 mr-2 text-green-500"></BsCheckCircleFill>
                      Stripe payment system has been integrated
                    </li>
                    <li className="flex">
                      <BsCheckCircleFill className="mt-1 mr-2 text-green-500 text-xl"></BsCheckCircleFill>
                      Axios is used in sending asynchronous HTTP requests and
                      handling responses
                    </li>
                  </ul>
                </div>
                {/* technology */}
                <div>
                  <p className="dark:text-white"> <span className="text-xl font-semibold text-violet-600 dark:text-violet-600">Technologies:{" "}</span> React,Tailwind, daisyUi, React Hook Form, Axios, Transtack query,  Stripe,  React awesome Slider, Firebase, MongoDb, express js, React Icon,  SweetAlert2</p>
                  
                  
                </div>
                <div className="mt-4 flex sm:flex-col lg:flex-row justify-around">
                  <button className="btn btn-outline btn-primary">
                  <a
                    href="https://summercamp-a8f5b.web.app/"
                    target="_blank"
                  >
                    Live Site
                  </a>
                  </button>
                  <button className="btn btn-outline btn-primary">
                  <a
                    href="https://github.com/RifatHossain41/Summer-Camp-School"
                    target="_blank"
                  >
                    Client Site
                  </a>
                  </button>
                  <button className="btn btn-outline btn-primary">
                  <a
                    href="https://github.com/RifatHossain41/Summer-Camp-School-Server"
                    target="_blank"
                  >
                    Server Site
                  </a>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* profession hub */}
      <div data-aos="fade-up"
   data-aos-duration="2000" className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:hover:bg-gray-950  dark:border-gray-700  hover:-translate-y-2 hover:bg-violet-300 hover:transition-colors hover:delay-300 hover:duration-500">
        <div className="mx-auto">
        <div>
          <div className="relative max-w-full h-72 overflow-hidden">
                                  <div className="h-max w-full transition-transform duration-[5000ms] ease-linear transform translate-y-0 hover:-translate-y-[calc(100%-18rem)]">
                                      <img src={project2} alt="image" className="w-full object-cover object-top " />
                                  </div>
                              </div>
          </div>
          <h3 className="title-text text-center mt-3 text-2xl dark:text-white">Profession Hub</h3>
          <hr className="my-6 border-violet-500 sm:mx-auto dark:border-gray-700 lg:my-8" />
        </div>
        <div className="p-5">
          <div id="accordion-collapse" data-accordion="collapse">
            <button
              type="button"
              className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-900 bg-gray-100 border border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={toggleAccordion2}
              aria-expanded={isOpen2}
              aria-controls="accordion-collapse-body-2"
              id="accordion-collapse-heading-2"
            >
              <span>Project Details</span>
            </button>
            {isOpen2 && (
              <div
                id="accordion-collapse-body-2"
                aria-labelledby="accordion-collapse-heading-2"
                className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900"
              >
                
               <div className="">
                  <h3 className="text-xl text-violet-600 dark:text-violet-600 font-semibold ">
                    Description:{" "}
                  </h3>
                  <p className="dark:text-white">
                    This is an career hub website specially based on applied job the user.{" "}
                  </p>
                  <h3 className="text-xl font-semibold text-violet-600 dark:text-violet-600">
                    Features:{" "}
                  </h3>
              {/* feature list */}
                   <ul className="dark:text-white">
                    <li className="flex">
                      <BsCheckCircleFill className="mt-2 mr-2 text-green-500"></BsCheckCircleFill>{" "}
                      User can read and showing all applied job.
                    </li>
                    <li className="flex">
                      <BsCheckCircleFill className="mt-1 mr-2 text-green-500 w-5"></BsCheckCircleFill>
                     Mobile responsive of the website
                    </li>
                    <li className="flex">
                      <BsCheckCircleFill className="mt-1 mr-2 text-green-500 "></BsCheckCircleFill>
                      Profession oppoconites
                    </li>
                  </ul>
                </div>  
                {/* technology */}
                <div>
                  <p className="dark:text-white"> <span className="text-xl font-semibold text-violet-600 dark:text-violet-600">Technologies:{" "}</span>Tailwind, daisyUI, fontawesome, rechart, React Icons,</p>
                  
                  
                </div>
                {/* links */}
                <div className="mt-4 flex sm:flex-col lg:flex-row justify-around">
                 <button className="btn btn-outline btn-primary">
                 <a
                    href="https://inquisitive-churros-fc1abb.netlify.app/"
                    target="_blank"
                  >
                    Live Site
                  </a>
                 </button>
                  <button className="btn btn-outline btn-primary">
                  <a
                    href="https://github.com/RifatHossain41/Career-Hub"
                    target="_blank"
                  >
                    Github
                  </a>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* car-doctor */}
      <div 
      data-aos="fade-up"
   data-aos-duration="1000" 
   className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-950  hover:-translate-y-2 hover:bg-violet-300 hover:transition-colors hover:delay-300 hover:duration-500 mr-6 mt-6">
        <div className="mx-auto">
        <div>
          <div className="relative max-w-full h-72 overflow-hidden">
                                  <div className="h-max w-full transition-transform duration-[5000ms] ease-linear transform translate-y-0 hover:-translate-y-[calc(100%-18rem)]">
                                      <img src={project3} alt="image" className="w-full object-cover object-top " />
                                  </div>
                              </div>
          </div>
          <h3 className="title-text text-center mt-3 text-2xl dark:text-white">Car Doctor</h3>
          <hr className="my-6 border-violet-500 sm:mx-auto dark:border-gray-700 lg:my-8" />
        </div>
        <div className="p-5">
          <div id="accordion-collapse" data-accordion="collapse">
            <button
              type="button"
              className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-900 bg-gray-100 border border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={toggleAccordion3}
              aria-expanded={isOpen3}
              aria-controls="accordion-collapse-body-3"
              id="accordion-collapse-heading-3"
            >
              <span>Project Details</span>
            </button>
            {isOpen3 && (
              <div
                id="accordion-collapse-body-3"
                aria-labelledby="accordion-collapse-heading-3"
                className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900"
              >
                <div className="">
                  <h3 className="text-xl text-violet-600 dark:text-violet-600 font-semibold ">
                    Description:{" "}
                  </h3>
                  <p className="dark:text-white">
                    This is a full stack project with car servicing center.{" "}
                  </p>
                  <h3 className="text-xl font-semibold text-violet-600 dark:text-violet-600">
                    Features:{" "}
                  </h3>

                  <ul className="dark:text-white">
                    <li className="flex">
                      <BsCheckCircleFill className="mt-2 mr-2 text-green-500"></BsCheckCircleFill>{" "}
                      Anyone car driver the opocunites in the service.
                    </li>
                    <li className="flex">
                      <BsCheckCircleFill className="mt-1 mr-2 text-green-500 w-5"></BsCheckCircleFill>
                      Implemented feedback form with Email JS to get feedback from users.
                    </li>
                    <li className="flex">
                      <BsCheckCircleFill className="mt-1 mr-2 text-green-500 "></BsCheckCircleFill>
                      Implement deleted and confirm button
                    </li>
                  </ul>
                </div>
                {/* technology */}
                <div>
                  <p className="dark:text-white"> <span className="text-xl font-semibold text-violet-600 dark:text-violet-600">Technologies:{" "}</span>Tailwind, daisyUI, React,match-sorter, Firebase, MongoDb, React Icons, SweetAlert2, express js, localforage</p>
                  
                </div>
                {/* links */}
                <div className="mt-4 flex sm:flex-col lg:flex-row justify-around">
                  <button className="btn btn-outline btn-primary">
                  <a
                    href="https://car-doctor-client-ceaa3.web.app/"
                    target="_blank"
                  >
                    Live Site
                  </a>
                  </button>
                  <button className="btn btn-outline btn-primary">
                  <a
                    href="https://github.com/RifatHossain41/car-doctor-client"
                    target="_blank"
                  >
                    Client Site
                  </a>
                  </button>
                  <button className="btn btn-outline btn-primary">
                  <a
                    href="https://github.com/RifatHossain41/car-doctor-server"
                    target="_blank"
                  >
                    Server Site
                  </a>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* food recipe */}
      <div 
      data-aos="fade-up"
   data-aos-duration="2000"  
   className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-950   hover:-translate-y-2 hover:bg-violet-300 hover:transition-colors hover:delay-300 hover:duration-500 mr-6 mt-6 px-4">
        <div className="mx-auto">
        <div>
          <div className="relative max-w-full h-72 overflow-hidden">
                                  <div className="h-max w-full transition-transform duration-[5000ms] ease-linear transform translate-y-0 hover:-translate-y-[calc(100%-18rem)]">
                                      <img src={project4} alt="Shoes" className="w-full object-cover object-top " />
                                  </div>
                              </div>
          </div>
          <h3 className="title-text text-center mt-3 text-2xl dark:text-white">Food Recipe</h3>
          <hr className="my-6 border-violet-500 sm:mx-auto dark:border-gray-700 lg:my-8" />
        </div>
        <div className="p-5">
          <div id="accordion-collapse" data-accordion="collapse">
            <button
              type="button"
              className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-900 bg-gray-100 border border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={toggleAccordion4}
              aria-expanded={isOpen4}
              aria-controls="accordion-collapse-body-4"
              id="accordion-collapse-heading-4"
            >
              <span>Project Details</span>

            </button>
            {isOpen4 && (
              <div
                id="accordion-collapse-body-4"
                aria-labelledby="accordion-collapse-heading-3"
                className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900"
              >
               <div className="">
                    <h3 className="text-xl text-violet-600 dark:text-violet-600 font-semibold ">
                      Description:{" "}
                    </h3>
                    <p className="dark:text-white">
                      This is a full stack project where chefs can show their skills and user can see those.{" "}
                    </p>
                    <h3 className="text-xl font-semibold text-violet-600 dark:text-violet-600">
                      Features:{" "}
                    </h3>

                    <ul className="dark:text-white">
                      <li className="flex">
                        <BsCheckCircleFill className="mt-2 mr-2 text-green-500"></BsCheckCircleFill>{" "}
                        Express server has implemented for getting the data into client side.
                      </li>
                      <li className="flex">
                        <BsCheckCircleFill className="mt-1 mr-2 text-green-500 w-5"></BsCheckCircleFill>
                        Implemented feedback form with Email JS to get feedback from users.
                      </li>
                      <li className="flex">
                        <BsCheckCircleFill className="mt-1 mr-2 text-green-500 "></BsCheckCircleFill>
                        Applied React to pdf package for converting into a pdf document.
                      </li>
                    </ul>
                  </div>
                  {/* technology */}
                  <div>
                    <p className="dark:text-white"> <span className="text-xl font-semibold text-violet-600 dark:text-violet-600">Technologies:{" "}</span>Tailwind, daisyUI, React,sweetAlert2, Firebase, MongoDb, React Icons, react-lazy-load,react-to-pdf, react-toastify, react-tooltip, emailjs,express js,</p>
                    
                  </div>
                {/* links */}
                <div className="mt-4 flex sm:flex-col lg:flex-row justify-around">
                 <button className="btn btn-outline btn-primary">
                 <a
                    href="https://food-recipe-auth.web.app/"
                    target="_blank"
                  >
                    Live Site
                  </a>
                 </button>
                
                  <button className="btn btn-outline btn-primary">
                  <a
                    href="https://github.com/RifatHossain41/Testy-Recipe"
                    target="_blank"
                  >
                    Client Site
                  </a>
                  </button>
                  <button className="btn btn-outline btn-primary">
                  <a
                    href="https://github.com/RifatHossain41/Testy-Recipe-Server"
                    target="_blank"
                  >
                    Server Site
                  </a>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
     
    </div>
    
  </div>
   </Container>
  );
};

export default ProjectSection;
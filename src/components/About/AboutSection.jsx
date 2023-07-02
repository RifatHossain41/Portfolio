import Container from "../shared/Container";
import img from '../../assets/rifat.png'
import { RiHandbagFill } from "react-icons/ri";
import { BsFillBookmarkCheckFill } from "react-icons/bs";
import { PiClockCountdownFill } from "react-icons/pi";

const AboutSection = () => {
  return (
    <div>
      <Container>
        <div className="text-center py-5">
          <h2 className="text-3xl font-bold">About Me</h2>
          <h5>My Introduction</h5>
        </div>
        <div className="flex flex-col-reverse gap-4 py-4 md:flex-row items-center justify-center">
          <div className="md:w-1/2">
           <img className="rounded-lg w-full h-auto" src={img} alt="image"  />
          </div>
          <div className="md:w-1/2">
            <div className="lg:flex gap-2 mb-3">
            <div className="card w-60 bg-base-100 shadow-xl">
              <div className="card-body text-center">
                <span className="mx-auto"><RiHandbagFill size={30}/></span>
                <h2 className="text-2xl font-bold">Experience</h2>
                <p>Looking for</p>
              </div>
            </div>
            <div className="card w-60 bg-base-100 shadow-xl">
              <div className="card-body text-center">
              <span className="mx-auto"><BsFillBookmarkCheckFill size={30}/></span>
              <h2 className="text-2xl font-bold">Completed</h2>
              <p>5+ Full Stack</p>
              </div>
            </div>
            <div className="card w-60 bg-base-100 shadow-xl">
              <div className="card-body text-center">
              <span className="mx-auto"><PiClockCountdownFill size={30}/></span>
              <h2 className="text-2xl font-bold">Support</h2>
              <p>Online 24/7</p>
              </div>
            </div>
            </div>
            <h6 className="font-medium">As a MERN stack developer, I have gained hands-on experience working with MongoDB, Express.js, React, and Node.js. My proficiency in these technologies allows me to develop dynamic and responsive web applications. I have successfully completed projects that involved building and implementing various features such as user authentication, data management, and API integrations. And with a solid foundation in HTML, CSS, and JavaScript, I have honed my skills in developing responsive and user friendly websites. Proficiency in popular frameworks such as Bootstrap and Tailwind CSS enables me to create modern and visually engaging web interfaces.</h6>
            <button className="btn btn-info mt-3">Talk to me</button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutSection;
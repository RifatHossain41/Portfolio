import { useEffect, useState } from "react";
import AboutSection from "../About/AboutSection";
import BannerSection from "../Banner/BannerSection";
import ProjectSection from "../Projects/ProjectSection";
import SkillSection from "../Skill/SkillSection";
import loader from "../../assets/loader.gif";
import Service from "../Service/Service";
import Contact from "../Contact/Contact";
import { Flowbite } from "flowbite-react";
import Footer from "../Footer/Footer";


const Home = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() =>{
    setLoading(true);

    setTimeout(() =>{
      setLoading(false);
    }, 1000)
  },[])
  return (
    <div>
     {loading ?
         <img src={loader} alt="" />
        :
      <>
      <Flowbite>
        <div className="h-[calc(100%-112px)]">
        <BannerSection></BannerSection>
       <AboutSection></AboutSection>
       <SkillSection></SkillSection>
       <ProjectSection></ProjectSection> 
       <Service></Service>    
       <Contact></Contact>
       <Footer></Footer>
        </div>
      </Flowbite>
      </>
     }
    </div>
  );
};

export default Home;
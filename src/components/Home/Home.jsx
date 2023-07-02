import { useEffect, useState } from "react";
import AboutSection from "../About/AboutSection";
import BannerSection from "../Banner/BannerSection";
import ProjectSection from "../Projects/ProjectSection";
import SkillSection from "../Skill/SkillSection";
import loader from "../../assets/loader.gif";

const Home = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() =>{
    setLoading(true);

    setTimeout(() =>{
      setLoading(false);
    }, 2000)
  },[])
  return (
    <div>
     {loading ?
         <img src={loader} alt="" />
        :
      <>
      <BannerSection></BannerSection>
       <AboutSection></AboutSection>
       <SkillSection></SkillSection>
       <ProjectSection></ProjectSection>     
      </>
     }
    </div>
  );
};

export default Home;
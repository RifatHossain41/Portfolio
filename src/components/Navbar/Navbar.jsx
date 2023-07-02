// import './Navbar.css';

import Container from "../shared/Container";


const Navbar = () => {
  

   const navOptions = (
    <>
    <li><a>Home</a></li>
   <li><a>About</a></li>
   <li><a>Skills</a></li>
   <li><a>Projects</a></li>
   <li><a>Services</a></li>
   <li><a>Contact</a></li>
   </>
   )
  return (
  <Container>
    <div className="navbar">
  <div className="navbar-start ">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      {navOptions}
      </ul>
    </div>
    <h2 className="text-3xl text-bold">Rifat Hossain</h2>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navOptions}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn btn-info">Hire Me</a>
  </div>
  </div>
  </Container>


  );
};

export default Navbar;




{/* <header className={`${headColor ? "header stick" : "header"}`}>
<nav>
    <h2 className="title text-3xl text-bold">
       Rifat Hossain
    </h2>

    <div className={`${toggle ? "menu active" : "menu" }`}>
      <ul>
        <li>
            <a href="#home" onClick={() => setActive("home")} className={`${active === "home"? "action" : ""}`}>Home</a>
        </li>
        <li>
            <a href="#about" onClick={() => setActive("about")} className={`${active === "about"? "action" : ""}`}>About</a>
        </li>
        <li>
          <a href="#portfolio" onClick={() => setActive("portfolio")} className={`${active === "portfolio"? "action" : ""}`}>portfolio</a>
        </li>
        <li>
            <a href="#service" onClick={() => setActive("service")} className={`${active === "service"? "action" : ""}`}>service</a>
        </li>
        <li>
          <a href="#resume" onClick={() => setActive("resume")} className={`${active === "resume"? "action" : ""}`}>My Resume</a>
       </li>
        <li>
            <a href="#contact" onClick={() => setActive("contact")} className={`${active === "contact"? "action" : ""}`}>contact</a>
        </li> 
        <li>
            <div className="button">
              <a href={resume} className="send-email" download>
                <span className="Resume">Download Resume</span>
            </a>
          </div>
        </li>
      </ul>
    </div>
     {
        toggle ? <RxCross2 className='icon' onClick={() => setToggle(!toggle)} /> : 
        <HiMenuAlt3 className='icon' onClick={() => setToggle(!toggle)} />
     }
</nav>
</header> */}
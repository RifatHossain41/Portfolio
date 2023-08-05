

const Navbar = () => {
  
   const navOptions = (
    <>
  <li><a href="#home">Home</a></li>
   <li><a href="#about">About</a></li>
   <li><a href="#skill">Skills</a></li>
   <li><a href="#project">My Projects</a></li>
   <li><a href="#service">Services</a></li>
   <li><a href="#contact">Contact</a></li>
   </>
   )
  return (

 <div className="navbar z-10 fixed lg:py-6 bg-gray-400 mx-auto">
  <div className="navbar-start ">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow hover:bg-indigo-400 bg-teal-300 rounded-box w-52">
      {navOptions}
      </ul>
    </div>
    <h2 className="text-5xl text-purple-700 font-bold lg:ml-10">Rifat Hossain</h2>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navOptions}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn btn-info lg:mr-10" href="#contact">Hire Me</a>
  </div> 
   </div> 

  );
}; 

export default Navbar;

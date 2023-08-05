import Container from "../shared/Container";
import img from "../../assets/rifat.png"

const Footer = () => {
  return (
    <div>
      <Container>
        <div>
          <img className="mx-auto rounded-full" src={img} alt="" width="50px" height="50px" />
        </div>
      <hr className="my-6 border-gray-500 sm:mx-auto dark:border-gray-700 lg:my-5" />
        <span className="block pb-5 text-sm text-gray-900 sm:text-center dark:text-gray-400">&copy; 2023 <span className='text-purple-800'>Rifat Hossain</span>. All Rights Reserved.</span>
      </Container>
    </div>
  );
};

export default Footer;
import service1 from "../../assets/servicesImage/icons8-web-development-96.png"
import service2 from "../../assets/servicesImage/icons8-web-design-96.png"
import service3 from "../../assets/servicesImage/icons8-database-administrator-96.png"
import Container from "../shared/Container";

const Service = () => {
  return (
   <section id="service">
    <Container>
      <div >
        <h2 className="text-center font-bold text-3xl mt-6 pt-4 gap-10 mb-4">
          Services
        </h2>
      </div>

      <div className="grid sm:grid-cols-1 lg:grid-cols-3 mx-auto ">

        {/* web dev */}
        <div className="max-w-sm p-6 bg-gray-300 border rounded shadow dark:bg-gray-800 dark:border-gray-700 hover:transition-colors hover:delay-200 hover:duration-1000 hover:bg-violet-400 dark:hover:bg-gray-950">
            <img className="mx-auto" src={service1} alt="Web Development" />
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:title-text">
            Custom Website Development
          </h5>

          <p className="mb-3 font-normal text-gray-900 dark:text-white ">
            I specialize in creating custom websites using the MERN stack,
            tailored to your unique requirements. From front-end design to
            back-end development, I deliver high-quality, responsive websites
            that provide an exceptional user experience.
          </p>
        </div>

        {/* web design */}
        <div className="max-w-sm p-6 bg-gray-300 border rounded shadow dark:bg-gray-800 dark:border-gray-700  hover:transition-colors hover:delay-200 hover:duration-1000 hover:bg-violet-400 dark:hover:bg-gray-950">
            <img className="mx-auto" src={service2} alt="Web Design" />
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:title-text">
          Responsive Web Design
          </h5>

          <p className="mb-3 font-normal text-gray-900 dark:text-white ">
          With the increasing use of mobile devices, it's crucial to have a website that looks great and functions flawlessly on any screen size. I ensure that your website is fully responsive, providing optimal user experience across desktops, tablets, and smartphones.
          </p>
        </div>
        {/* database */}
        <div className="max-w-sm p-6 bg-gray-300 border rounded shadow dark:bg-gray-800 dark:border-gray-700 hover:transition-colors hover:delay-200 hover:duration-1000 hover:bg-violet-400 dark:hover:bg-gray-950">
            <img className="mx-auto" src={service3} alt="Database" />
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:title-text">
          Database Integration
          </h5>

          <p className="mb-3 font-normal text-gray-900 dark:text-white ">
          I have experience working with databases like MongoDB allowing me to design and implement efficient data storage and retrieval solutions. Whether you need a database-driven web application or seamless integration with existing databases, I've got you covered.
          </p>
        </div>
      </div>
   </Container>
   </section>
  );
};

export default Service;
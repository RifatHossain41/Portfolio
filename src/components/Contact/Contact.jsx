import { useRef } from "react";
import Container from "../shared/Container";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wauhvvu', 'template_hbkgxbj', form.current, 'QPT2h_fcoDazBhKWG')
      .then((result) => {
          console.log(result.text);
          toast.success('Email has been sent!', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
            
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section className="" id="contact">
    <Container>
     <div id="contact" className='sm:w-full bg-violet-300 mx-auto rounded shadow-2xl  py-8 dark:bg-gray-950'>
            <h2 className='text-center font-bold text-3xl mt-6 pt-4 '>Contact Me</h2>
<div className="w-full max-w-sm p-4 bg-gray-200 border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto mt-4">
    <form ref={form} onSubmit={sendEmail} className="space-y-6" action="#">
    <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
            <input type="name" name="from_name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Your Name" required />
        </div>
        <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
            <input type="email" name="from_email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Your Email" required />
        </div>
        
        <div className="flex items-start">
            <div className="flex items-start">
                <div className="flex flex-col h-20">
                <label htmlFor="message" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Message: </label>
                    
                    <textarea className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white' rows="4" cols="50" name="message"></textarea>
                    
                </div>               
            </div>    
        </div>
        <div className=" font-medium text-gray-500 dark:text-gray-300">
            <input className='btn btn-primary w-full' type="submit" value="Send"/>
        </div>
    </form>
   </div>
 </div>
 <ToastContainer />
    </Container>
     </section>
  );
};

export default Contact;


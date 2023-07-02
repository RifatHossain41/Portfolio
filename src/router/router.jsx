import { createBrowserRouter } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
import Main from "../components/Main/Main";
import Home from "../components/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      }
    ]
  },
]);
import React from 'react';
import './App.css';
import { Navbar } from './Components/Home_page/Navbar';
import { Home } from './Components/Home_page/Home';
import { About_page } from './Components/About_page/About_page';
import { Services } from './Components/Services_page/Services';
import { Slider } from './Components/Slider/Slider';
import { Portfolio } from './Components/Portfolio_page/Portfolio';
import { Team } from './Components/Team_page/Team';
import { Pricing } from './Components/Pricing_page/Pricing';
import AppFAQ from './Components/FAQ_page/Faq';
import { Newsletter } from './Components/Newsletter/Newsletter';
import { Footer } from './Components/Footer/Footer';
import { ContactUs } from './Components/ContactUs_page/ContactUs';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<><Home /></>
    },
    {
      path:'/About',
      element:<><Navbar /><About_page /></>
    },
    {
      path:'/Services',
      element:<><Navbar /><Services /></>
    },
    {
      path:'/Portfolio',
      element:<><Navbar /><Portfolio /></>
    },
    {
      path:'/Team',
      element:<><Navbar /><Team /></>
    },
    {
      path:'/Pricing',
      element:<><Navbar /><Pricing /></>
    },
    {
      path:'/ContactUs',
      element:<><Navbar /><ContactUs /></>
    },
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
export default App;
